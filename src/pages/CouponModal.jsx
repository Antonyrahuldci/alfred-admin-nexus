import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RefreshCw, Check, X } from "lucide-react";
import {
  Autocomplete,
  TextField,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import apiFunctions from "@/api/apiFunctions";

// Alert wrapper
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const CouponModal = ({ isOpen, onClose, handleCouponCreated }) => {
  const [users, setUsers] = useState([]);
  const [emails, setEmails] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discountType, setDiscountType] = useState("fixed"); // fixed or percentage
  const [discountValue, setDiscountValue] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("USD"); // USD or INR
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const [showDropdown, setShowDropdown] = useState(false);
  


  const showSnackbar = useCallback((message, severity = "info") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  }, []);

  const handleSnackbarClose = () => setSnackbarOpen(false);

  // Fetch all users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Get all users without pagination by setting a high limit
        const res = await apiFunctions.getAllUsers(1, 10000);
        if (res?.status === 200 && res?.data?.data) {
          setUsers(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        showSnackbar("Failed to fetch users", "error");
      }
    };
    fetchUsers();
  }, [showSnackbar]);

  const generateCouponCode = () => {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // avoid similar chars
    let raw = "";
    for (let i = 0; i < 12; i++)
      raw += alphabet[Math.floor(Math.random() * alphabet.length)];
    const code = `${raw.slice(0, 4)}-${raw.slice(4, 8)}-${raw.slice(8, 12)}`;
    setCouponCode(code);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emails.length === 0) {
      showSnackbar("Please select an email address", "warning");
      return;
    }
    if (!couponCode) {
      showSnackbar("Please generate a coupon code first", "warning");
      return;
    }
    if (!discountValue || isNaN(discountValue) || discountValue <= 0) {
      showSnackbar("Please enter a valid discount value", "warning");
      return;
    }
    if (!description.trim()) {
      showSnackbar("Please enter a description for the coupon", "warning");
      return;
    }
    if (
      discountType === "percentage" &&
      (discountValue > 100 || discountValue < 1)
    ) {
      showSnackbar("Percentage discount must be between 1 and 100", "warning");
      return;
    }
    try {
      setLoading(true);

      // Send coupon to single email
      const res = await apiFunctions.sendCoupon({
        email: emails[0],
        couponCode,
        discountType,
        discountValue: parseFloat(discountValue),
        description: description.trim(),
        currency,
      });

      if (res?.status === 200) {
         if (handleCouponCreated) handleCouponCreated();
        showSnackbar("Coupon sent successfully!", "success");
        onClose();
      } else {
        showSnackbar("Failed to send coupon", "error");
      }
    } catch (err) {
      console.error("Error sending coupon:", err);
      showSnackbar("Error sending coupon", "error");
    } finally {
      setLoading(false);
    }
  };

  const getCurrencySymbol = () => {
    return currency === "USD" ? "$" : "₹";
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl w-full dialog-coupon [&>button]:hidden ">
        <DialogHeader className="text-center ">
          
          <DialogTitle className="text-xl font-semibold text-center">
            Send Coupon Code
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 px-2 mt-3">
          {loading && (
            <div className="absolute inset-0 bg-gray-300 bg-opacity-40 flex items-center justify-center z-50">
              <div className="w-8 h-8 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Description Input - Moved to Top */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-600 font-medium">
                Coupon Description
              </Label>
              <Input
                id="description"
                type="text"
                placeholder="Enter coupon description (e.g., Summer Sale Discount)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`border-2 ${
                  description.trim() ? "border-green-500 bg-green-50" : "border-gray-300"
                } focus:border-green-500 focus:bg-green-50 focus:ring-0 focus:outline-none`}
                style={{
                  fontSize: "16px",
                  height: "50px",
                  backgroundColor: "#f8f9fa",
                  borderColor: description.trim() ? "#22c55e" : "#e5e7eb",
                  color: "#1f2937",
                  borderRadius: "8px",
                  boxShadow: description.trim()
                    ? "0 0 0 3px rgba(34, 197, 94, 0.1)"
                    : "none",
                  transition: "all 0.2s ease",
                }}
              />
              <div className="text-sm text-gray-500">
                Provide a brief description for this coupon
              </div>
            </div>

            {/* Discount Configuration Section */}
            <div className="space-y-3">
              {/* Discount Type Selection */}
              <div>
                <Label className="text-gray-600 font-medium mb-2 block">
                  Discount Type
                </Label>
                <RadioGroup
                  value={discountType}
                  onValueChange={setDiscountType}
                  className="grid grid-cols-2 gap-3"
                >
                  <div
                    className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      discountType === "fixed"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <RadioGroupItem value="fixed" id="fixed" />
                    <div className="flex flex-col">
                      <Label htmlFor="fixed" className="font-semibold text-gray-900 cursor-pointer">
                        Fixed Amount
                      </Label>
                      <span className="text-sm text-gray-600">
                        e.g., $10 off
                      </span>
                    </div>
                  </div>
                  <div
                    className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      discountType === "percentage"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <RadioGroupItem value="percentage" id="percentage" />
                    <div className="flex flex-col">
                      <Label htmlFor="percentage" className="font-semibold text-gray-900 cursor-pointer">
                        Percentage
                      </Label>
                      <span className="text-sm text-gray-600">
                        e.g., 20% off
                      </span>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Currency Selection - USD Only */}
              <div>
                <Label className="text-gray-600 font-medium mb-2 block">
                  Currency
                </Label>
                <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-green-500 bg-green-50">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">USD</span>
                    <span className="text-sm text-gray-600">US Dollar</span>
                  </div>
                </div>
              </div>

              {/* Discount Value Input */}
              <div>
                <Label className="text-gray-600 font-medium mb-2 block">
                  Discount Value {discountType === "fixed" ? "($)" : "(%)"}
                </Label>
                <div className="relative">
                  <Input
                    type="text"
                    className="text-center font-weight-bold border-2"
                    placeholder={
                      discountType === "fixed"
                        ? "Enter amount (e.g., 10)"
                        : "Enter percentage (e.g., 20)"
                    }
                    value={discountValue}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only numbers and decimal point
                      if (value === '' || /^\d*\.?\d*$/.test(value)) {
                        setDiscountValue(value);
                      }
                    }}
                    style={{
                      fontSize: "18px",
                      height: "50px",
                      backgroundColor: "#f8f9fa",
                      borderColor: discountValue ? "#22c55e" : "#e5e7eb",
                      color: "#1f2937",
                      borderRadius: "8px",
                      boxShadow: discountValue
                        ? "0 0 0 3px rgba(34, 197, 94, 0.1)"
                        : "none",
                      transition: "all 0.2s ease",
                      paddingRight: "40px",
                    }}
                  />
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-3">
                    <span 
                      className="text-gray-600 font-bold"
                      style={{
                        fontSize: "16px",
                        backgroundColor: "#e5e7eb",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        border: "1px solid #d1d5db"
                      }}
                    >
                      {discountType === "fixed" ? "$" : "%"}
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {discountType === "percentage"
                    ? "Enter a value between 1 and 100"
                    : "Enter the dollar amount (e.g., 10 for $10 off)"}
                </div>
              </div>
            </div>

            {/* Coupon Code Section - Enhanced Design */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-semibold mb-3 block">
                Coupon Code
              </Label>
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    className="text-center font-mono font-weight-bold border-2"
                    placeholder="Click refresh to generate"
                    value={couponCode}
                    readOnly
                    style={{
                      fontSize: "20px",
                      letterSpacing: "3px",
                      height: "50px",
                      backgroundColor: "#f8f9fa",
                      borderColor: couponCode ? "#22c55e" : "#e5e7eb",
                      color: "#1f2937",
                      borderRadius: "8px",
                      boxShadow: couponCode
                        ? "0 0 0 3px rgba(34, 197, 94, 0.1)"
                        : "none",
                      transition: "all 0.2s ease",
                    }}
                  />
                  {couponCode && (
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-3">
                      <div 
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-white font-semibold text-sm"
                        style={{
                          backgroundColor: "#22c55e",
                          border: "1px solid #16a34a",
                          borderRadius: "20px",
                          padding: "6px 12px",
                          fontSize: "12px",
                          fontWeight: "600"
                        }}
                      >
                        <Check className="h-3 w-3" />
                        <span>Generated</span>
                      </div>
                    </div>
                  )}
                </div>
                <Button
                  type="button"
                  onClick={generateCouponCode}
                  disabled={loading}
                  className="flex items-center justify-center border-2"
                  style={{
                    minWidth: "50px",
                    height: "50px",
                    borderRadius: "8px",
                    borderColor: "#22c55e",
                    // color: "#22c55e",
                    transition: "all 0.2s ease",
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#22c55e";
                    e.target.style.color = "white";
                  }}
                   onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#22c55e";
                  }}
                >
                  <RefreshCw className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Email Selection Section - Single Email */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-semibold mb-3 block">
                Select Recipient
              </Label>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select or type email address"
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  onBlur={() => {
                    // Delay hiding to allow clicks on dropdown items
                    setTimeout(() => setShowDropdown(false), 200);
                  }}
                  disabled={loading}
                  className="w-full p-3 pr-10 border-2 rounded-lg text-gray-900 bg-gray-50 focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-200"
                  style={{
                    fontSize: "16px",
                    height: "50px",
                    backgroundColor: "#f8f9fa",
                    borderColor: emails.length > 0 ? "#22c55e" : "#e5e7eb",
                    borderRadius: "8px",
                    boxShadow: emails.length > 0
                      ? "0 0 0 3px rgba(34, 197, 94, 0.1)"
                      : "none",
                    transition: "all 0.2s ease",
                  }}
                />
                
                {/* Clear Button (X icon) */}
                {emailInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setEmailInput("");
                      setEmails([]);
                      setShowDropdown(false);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                    style={{
                      color: "#6b7280",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                
                {/* Dropdown List - Opens Above Input */}
                {showDropdown && (
                  <div 
                    className="absolute z-50 w-full mb-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto"
                    style={{
                      bottom: '100%',
                      left: 0,
                      right: 0,
                      maxHeight: '200px',
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {users
                      .filter(user => 
                        user.email.toLowerCase().includes(emailInput.toLowerCase())
                      )
                      .map((user, index) => (
                        <div
                          key={user.email}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 border-b border-gray-100 last:border-b-0 text-sm text-gray-900"
                          onMouseDown={(e) => {
                            e.preventDefault(); // Prevent input blur
                            setEmails([user.email]);
                            setEmailInput(user.email);
                            setShowDropdown(false);
                          }}
                          style={{
                            padding: '8px 16px',
                            cursor: 'pointer',
                            borderBottom: index < users.length - 1 ? '1px solid #f3f4f6' : 'none'
                          }}
                        >
                          {user.email}
                        </div>
                      ))}
                    {users.filter(user => 
                      user.email.toLowerCase().includes(emailInput.toLowerCase())
                    ).length === 0 && (
                      <div className="px-4 py-2 text-sm text-gray-500">
                        No emails found
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="text-sm text-gray-500">
                {emails.length > 0 ? `Selected: ${emails[0]}` : "No email selected"}
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <Button
                  type="button"
                  disabled={loading}
                  onClick={() => {
                    setEmails([]);
                    setEmailInput("");
                    setCouponCode("");
                    setDiscountValue("");
                    setDescription("");
                    setCurrency("USD");
                  }}
                  className="w-full py-3 px-4 rounded-lg text-sm font-semibold text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Clear All
                </Button>
              </div>
              <div className="flex-1">
                <Button
                  type="submit"
                  disabled={
                    loading ||
                    !couponCode ||
                    emails.length === 0 ||
                    !discountValue ||
                    !description.trim()
                  }
                  className="w-full py-3 px-4 rounded-lg text-sm font-bold text-white bg-[#22c55e] hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#22c55e] disabled:opacity-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div
                        className="spinner-border spinner-border-sm mr-2"
                        role="status"
                        aria-hidden="true"
                      ></div>
                      Sending...
                    </span>
                  ) : (
                    `SEND COUPON (${emails.length})`
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <Button
            type="button"
            onClick={onClose}
            className="absolute Close_Button h-8 w-8 p-0 rounded-full "
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
      </DialogContent>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            ...(snackbarSeverity === "success" && {
              backgroundColor: "#22c55e",
              color: "#fff",
            }),
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default CouponModal;
