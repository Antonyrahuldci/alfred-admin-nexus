import React, { useState, useRef, useEffect } from "react";
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
import { RefreshCw, Check, ChevronDown } from "lucide-react";
import {
  Chip,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";

// Alert wrapper
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Static email array for testing
const STATIC_EMAILS = [
  { email: "john.doe@example.com", name: "John Doe" },
  { email: "johnmichael@example.com", name: "John Michael" },
  { email: "jane.smith@example.com", name: "Jane Smith" },
  { email: "mike.wilson@example.com", name: "Mike Wilson" },
  { email: "sarah.johnson@example.com", name: "Sarah Johnson" },
  { email: "david.brown@example.com", name: "David Brown" },
  { email: "lisa.garcia@example.com", name: "Lisa Garcia" },
  { email: "tom.anderson@example.com", name: "Tom Anderson" },
  { email: "emma.davis@example.com", name: "Emma Davis" },
];

const CouponModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    description: "",
    discountType: "fixed",
    currency: "USD",
    discountValue: "",
    couponCode: "",
    amount: "",
  });

  const [emailInput, setEmailInput] = useState("");
  const [emails, setEmails] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredEmails, setFilteredEmails] = useState(STATIC_EMAILS);
  const dropdownRef = useRef(null);

  const showSnackbar = (message, severity = "info") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const generateCouponCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    // Generate 4 characters for each segment
    for (let segment = 0; segment < 3; segment++) {
      for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      if (segment < 2) {
        result += "-";
      }
    }

    setFormData((prev) => ({ ...prev, couponCode: result }));
  };

  const handleAddEmail = (newEmail) => {
    if (!newEmail) return;

    const trimmedEmail = newEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      showSnackbar("Please enter a valid email address.", "warning");
      return;
    }

    if (emails.includes(trimmedEmail)) {
      showSnackbar("This email is already added.", "info");
      return;
    }

    setEmails([...emails, trimmedEmail]);
    setEmailInput("");
    showSnackbar("Email added successfully!", "success");
  };

  const handleDeleteEmail = (emailToDelete) => {
    setEmails(emails.filter((email) => email !== emailToDelete));
  };

  // Filter emails based on input
  useEffect(() => {
    if (emailInput.trim() === "") {
      setFilteredEmails(STATIC_EMAILS);
    } else {
      const filtered = STATIC_EMAILS.filter((user) =>
        user.email.toLowerCase().includes(emailInput.toLowerCase())
      );
      setFilteredEmails(filtered);
    }
  }, [emailInput]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmailInputChange = (value) => {
    setEmailInput(value);
    setShowDropdown(true);
  };

  const handleEmailSelect = (email) => {
    handleAddEmail(email);
    setShowDropdown(false);
  };

  const handleAmountChange = (value) => {
    // Only allow numbers and decimal point
    const numericValue = value.replace(/[^0-9.]/g, '');
    
    // Prevent multiple decimal points
    const parts = numericValue.split('.');
    if (parts.length > 2) {
      return;
    }
    
    setFormData((prev) => ({ ...prev, amount: numericValue }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClearAll = () => {
    setFormData({
      description: "",
      discountType: "fixed",
      currency: "USD",
      discountValue: "",
      couponCode: "",
      amount: "",
    });
    setEmails([]);
    setEmailInput("");
  };

  const handleSendCoupon = () => {
    if (emails.length === 0) {
      showSnackbar("Please select at least one recipient.", "warning");
      return;
    }

    // Handle sending coupon logic here
    console.log("Sending coupon:", { ...formData, recipients: emails });
    showSnackbar(`Coupon sent to ${emails.length} recipient(s)!`, "success");
    onClose();
  };

  const getCurrencySymbol = () => {
    return formData.currency === "USD" ? "$" : "₹";
  };

  const getDiscountLabel = () => {
    return formData.discountType === "fixed"
      ? `Discount Value (${getCurrencySymbol()})`
      : "Discount Value (%)";
  };

  const getDiscountPlaceholder = () => {
    return formData.discountType === "fixed"
      ? "Enter amount (e.g., 10)"
      : "Enter percentage (e.g., 20)";
  };

  const getDiscountHelperText = () => {
    return formData.discountType === "fixed"
      ? `Enter the ${
          formData.currency === "USD" ? "dollar" : "rupee"
        } amount (e.g., 10 for ${getCurrencySymbol()}10 off)`
      : "Enter the percentage (e.g., 20 for 20% off)";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-semibold text-center">
            Send Coupon Code
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 px-2 mt-3">
          {/* Coupon Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Coupon Description</Label>
            <Input
              id="description"
              placeholder="Enter coupon description (e.g., Summer Sale Discount)"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="border border-gray-300 focus:border-green-500 focus:bg-green-50 focus:ring-0 focus:outline-none"
            />
            <p className="text-sm text-muted-foreground">
              Provide a brief description for this coupon
            </p>
          </div>

          {/* Discount Type */}
          <div className="space-y-3">
            <Label>Discount Type</Label>
            <RadioGroup
              value={formData.discountType}
              onValueChange={(value) =>
                handleInputChange("discountType", value)
              }
              className="grid grid-cols-2 gap-3"
            >
              <div
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  formData.discountType === "fixed"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="fixed" id="fixed" />
                <div className="flex flex-col">
                  <Label htmlFor="fixed" className="font-medium cursor-pointer">
                    Fixed Amount
                  </Label>
                  <span className="text-sm text-muted-foreground">
                    e.g., $10 off
                  </span>
                </div>
              </div>
              <div
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  formData.discountType === "percentage"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="percentage" id="percentage" />
                <div className="flex flex-col">
                  <Label
                    htmlFor="percentage"
                    className="font-medium cursor-pointer"
                  >
                    Percentage
                  </Label>
                  <span className="text-sm text-muted-foreground">
                    e.g., 20% off
                  </span>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Currency */}
          <div className="space-y-3">
            <Label>Currency</Label>
            <RadioGroup
              value={formData.currency}
              onValueChange={(value) => handleInputChange("currency", value)}
              className="grid grid-cols-2 gap-3"
            >
              <div
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  formData.currency === "USD"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="USD" id="usd" />
                <div className="flex flex-col">
                  <Label htmlFor="usd" className="font-medium cursor-pointer">
                    USD
                  </Label>
                  <span className="text-sm text-muted-foreground">
                    US Dollar
                  </span>
                </div>
              </div>
              <div
                className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  formData.currency === "INR"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <RadioGroupItem value="INR" id="inr" />
                <div className="flex flex-col">
                  <Label htmlFor="inr" className="font-medium cursor-pointer">
                    INR
                  </Label>
                  <span className="text-sm text-muted-foreground">
                    Indian Rupee
                  </span>
                </div>
              </div>
            </RadioGroup>
          </div>

           {/* Discount Value */}
           <div className="space-y-2">
             <Label htmlFor="discountValue">{getDiscountLabel()}</Label>
             <div className="relative">
               <Input
                 id="discountValue"
                 placeholder={getDiscountPlaceholder()}
                 value={formData.discountValue}
                 onChange={(e) =>
                   handleInputChange("discountValue", e.target.value)
                 }
                 className="pr-12 border border-gray-300 focus:border-green-500 focus:bg-green-50 focus:ring-0 focus:outline-none"
               />
               <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium">
                 {formData.discountType === "percentage"
                   ? "%"
                   : getCurrencySymbol()}
               </span>
             </div>
             <p className="text-sm text-muted-foreground">
               {getDiscountHelperText()}
             </p>
           </div>

           {/* Amount */}
           <div className="space-y-2">
             <Label htmlFor="amount">Amount ({getCurrencySymbol()})</Label>
             <div className="relative">
               <Input
                 id="amount"
                 type="text"
                 placeholder="Enter amount (e.g., 100)"
                 value={formData.amount}
                 onChange={(e) => handleAmountChange(e.target.value)}
                 className="pr-12 border border-gray-300 focus:border-green-500 focus:bg-green-50 focus:ring-0 focus:outline-none"
               />
               <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium">
                 {getCurrencySymbol()}
               </span>
             </div>
             <p className="text-sm text-muted-foreground">
               Enter the total amount for this coupon (e.g., 100 for {getCurrencySymbol()}100)
             </p>
           </div>

          {/* Coupon Code */}
          <div className="space-y-2">
            <Label htmlFor="couponCode">Coupon Code</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  id="couponCode"
                  value={formData.couponCode}
                  placeholder="Click refresh to generate"
                  readOnly
                  className={`pr-20 text-center font-medium focus:ring-0 focus:outline-none border border-gray-300 focus:border-green-500 focus:bg-green-50 focus:shadow-none ${
                    formData.couponCode
                      ? "border-green-500 focus:border-green-500"
                      : "hover:border-gray-400"
                  }`}
                  style={{ textAlign: "center", letterSpacing: "0.2em" }}
                />
                {formData.couponCode && (
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-xs">
                    <Check className="h-3 w-3" />
                    <span>Generated</span>
                  </div>
                )}
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={generateCouponCode}
                className="shrink-0 w-10 h-10 border-green-500 hover:bg-green-50"
              >
                <RefreshCw className="h-4 w-4 text-green-500" />
              </Button>
            </div>
          </div>

          {/* Select Recipients */}
          <div className="space-y-2">
            <Label htmlFor="recipients">
              Select Recipients
              <span
                style={{ color: "red", fontWeight: 600 }}
                className="mb-0 ms-2"
              >
                (Type email and press Enter)
              </span>
            </Label>
            
            {/* Added emails as chips - moved to top */}
            {emails.length > 0 && (
              <div className="mb-2 p-2 bg-gray-50 rounded-lg border">
                <div className="flex flex-wrap gap-2">
                  {emails.map((email, idx) => (
                    <Chip
                      key={idx}
                      label={email}
                      onDelete={() => handleDeleteEmail(email)}
                      style={{
                        backgroundColor: "#22c55e",
                        color: "#fff",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="relative" ref={dropdownRef}>
              <div className="relative">
                <Input
                  placeholder="Type email and press Enter"
                  value={emailInput}
                  onChange={(e) => handleEmailInputChange(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddEmail(emailInput);
                      setEmailInput("");
                    }
                  }}
                  className="border border-gray-300 focus:border-green-500 focus:bg-green-50 focus:ring-0 focus:outline-none pr-10"
                />
                <ChevronDown 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
              </div>
              
              {showDropdown && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {filteredEmails.length > 0 ? (
                    filteredEmails.map((user, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 cursor-pointer hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                        onClick={() => handleEmailSelect(user.email)}
                      >
                        <div className="text-sm text-gray-900">{user.email}</div>
                        <div className="text-xs text-gray-500">{user.name}</div>
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-sm text-gray-500">
                      No emails found
                    </div>
                  )}
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              {emails.length > 0
                ? `${emails.length} recipient(s) selected`
                : "No recipients selected"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleClearAll}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white border-gray-600"
            >
              Clear All
            </Button>
            <Button
              type="button"
              onClick={handleSendCoupon}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
            >
              SEND COUPON ({emails.length})
            </Button>
          </div>
        </div>
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
