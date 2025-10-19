import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Search, Eye } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import Pagination from "@/components/Pagination/Pagination.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import apiFunctions from "../api/apiFunctions";
import { Skeleton } from "@/components/ui/skeleton";

// const mockUsers = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@email.com",
//     plan: "Pro",
//     joinDate: "2024-01-15",
//     lastActive: "2 hours ago",
//     wordCount: 125000,
//     images: 450,
//     serpUsage: 89,
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane.smith@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-11-20",
//     lastActive: "5 minutes ago",
//     wordCount: 450000,
//     images: 1200,
//     serpUsage: 234,
//   },
//   {
//     id: 3,
//     name: "Mike Wilson",
//     email: "mike.wilson@email.com",
//     plan: "Free",
//     joinDate: "2024-05-10",
//     lastActive: "1 day ago",
//     wordCount: 15000,
//     images: 25,
//     serpUsage: 12,
//   },
//   {
//     id: 4,
//     name: "Sarah Jones",
//     email: "sarah.jones@email.com",
//     plan: "Pro",
//     joinDate: "2024-02-28",
//     lastActive: "3 hours ago",
//     wordCount: 275000,
//     images: 680,
//     serpUsage: 145,
//   },
//   {
//     id: 5,
//     name: "David Brown",
//     email: "david.brown@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-12-05",
//     lastActive: "1 hour ago",
//     wordCount: 380000,
//     images: 950,
//     serpUsage: 198,
//   },
//   {
//     id: 6,
//     name: "Emily Davis",
//     email: "emily.davis@email.com",
//     plan: "Pro",
//     joinDate: "2024-03-18",
//     lastActive: "30 minutes ago",
//     wordCount: 195000,
//     images: 520,
//     serpUsage: 112,
//   },
//   {
//     id: 7,
//     name: "Chris Martin",
//     email: "chris.martin@email.com",
//     plan: "Free",
//     joinDate: "2024-06-22",
//     lastActive: "5 days ago",
//     wordCount: 8500,
//     images: 15,
//     serpUsage: 7,
//   },
//   {
//     id: 8,
//     name: "Amanda White",
//     email: "amanda.white@email.com",
//     plan: "Pro",
//     joinDate: "2024-01-30",
//     lastActive: "4 hours ago",
//     wordCount: 215000,
//     images: 585,
//     serpUsage: 128,
//   },
//   {
//     id: 9,
//     name: "Robert Taylor",
//     email: "robert.taylor@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-10-15",
//     lastActive: "15 minutes ago",
//     wordCount: 520000,
//     images: 1450,
//     serpUsage: 276,
//   },
//   {
//     id: 10,
//     name: "Lisa Anderson",
//     email: "lisa.anderson@email.com",
//     plan: "Free",
//     joinDate: "2024-07-08",
//     lastActive: "3 days ago",
//     wordCount: 12000,
//     images: 18,
//     serpUsage: 9,
//   },
//   {
//     id: 11,
//     name: "James Thomas",
//     email: "james.thomas@email.com",
//     plan: "Pro",
//     joinDate: "2024-02-14",
//     lastActive: "1 hour ago",
//     wordCount: 245000,
//     images: 620,
//     serpUsage: 138,
//   },
//   {
//     id: 12,
//     name: "Jessica Moore",
//     email: "jessica.moore@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-09-28",
//     lastActive: "20 minutes ago",
//     wordCount: 475000,
//     images: 1380,
//     serpUsage: 265,
//   },
//   {
//     id: 13,
//     name: "Daniel Jackson",
//     email: "daniel.jackson@email.com",
//     plan: "Free",
//     joinDate: "2024-08-01",
//     lastActive: "2 days ago",
//     wordCount: 9500,
//     images: 12,
//     serpUsage: 5,
//   },
//   {
//     id: 14,
//     name: "Michelle Lee",
//     email: "michelle.lee@email.com",
//     plan: "Pro",
//     joinDate: "2024-04-05",
//     lastActive: "6 hours ago",
//     wordCount: 185000,
//     images: 495,
//     serpUsage: 105,
//   },
//   {
//     id: 15,
//     name: "Kevin Harris",
//     email: "kevin.harris@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-11-10",
//     lastActive: "10 minutes ago",
//     wordCount: 425000,
//     images: 1150,
//     serpUsage: 228,
//   },
//   {
//     id: 16,
//     name: "Rachel Clark",
//     email: "rachel.clark@email.com",
//     plan: "Free",
//     joinDate: "2024-06-15",
//     lastActive: "4 days ago",
//     wordCount: 11000,
//     images: 20,
//     serpUsage: 8,
//   },
//   {
//     id: 17,
//     name: "Brian Lewis",
//     email: "brian.lewis@email.com",
//     plan: "Pro",
//     joinDate: "2024-03-22",
//     lastActive: "2 hours ago",
//     wordCount: 205000,
//     images: 545,
//     serpUsage: 118,
//   },
//   {
//     id: 18,
//     name: "Nicole Walker",
//     email: "nicole.walker@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-08-19",
//     lastActive: "25 minutes ago",
//     wordCount: 495000,
//     images: 1425,
//     serpUsage: 282,
//   },
//   {
//     id: 19,
//     name: "Steven Hall",
//     email: "steven.hall@email.com",
//     plan: "Free",
//     joinDate: "2024-07-20",
//     lastActive: "6 days ago",
//     wordCount: 7200,
//     images: 10,
//     serpUsage: 4,
//   },
//   {
//     id: 20,
//     name: "Karen Allen",
//     email: "karen.allen@email.com",
//     plan: "Pro",
//     joinDate: "2024-01-25",
//     lastActive: "5 hours ago",
//     wordCount: 235000,
//     images: 605,
//     serpUsage: 132,
//   },
//   {
//     id: 21,
//     name: "Gary Young",
//     email: "gary.young@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-12-18",
//     lastActive: "35 minutes ago",
//     wordCount: 410000,
//     images: 1090,
//     serpUsage: 215,
//   },
//   {
//     id: 22,
//     name: "Patricia King",
//     email: "patricia.king@email.com",
//     plan: "Free",
//     joinDate: "2024-08-10",
//     lastActive: "8 days ago",
//     wordCount: 6800,
//     images: 8,
//     serpUsage: 3,
//   },
//   {
//     id: 23,
//     name: "Timothy Wright",
//     email: "timothy.wright@email.com",
//     plan: "Pro",
//     joinDate: "2024-04-12",
//     lastActive: "1 hour ago",
//     wordCount: 225000,
//     images: 595,
//     serpUsage: 125,
//   },
//   {
//     id: 24,
//     name: "Sharon Lopez",
//     email: "sharon.lopez@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-10-30",
//     lastActive: "45 minutes ago",
//     wordCount: 465000,
//     images: 1320,
//     serpUsage: 252,
//   },
//   {
//     id: 25,
//     name: "Edward Hill",
//     email: "edward.hill@email.com",
//     plan: "Free",
//     joinDate: "2024-07-28",
//     lastActive: "7 days ago",
//     wordCount: 8900,
//     images: 14,
//     serpUsage: 6,
//   },
//   {
//     id: 26,
//     name: "Donna Scott",
//     email: "donna.scott@email.com",
//     plan: "Pro",
//     joinDate: "2024-02-08",
//     lastActive: "3 hours ago",
//     wordCount: 255000,
//     images: 655,
//     serpUsage: 142,
//   },
//   {
//     id: 27,
//     name: "Ronald Green",
//     email: "ronald.green@email.com",
//     plan: "Enterprise",
//     joinDate: "2023-09-15",
//     lastActive: "12 minutes ago",
//     wordCount: 505000,
//     images: 1480,
//     serpUsage: 289,
//   },
//   {
//     id: 28,
//     name: "Cynthia Adams",
//     email: "cynthia.adams@email.com",
//     plan: "Free",
//     joinDate: "2024-08-22",
//     lastActive: "9 days ago",
//     wordCount: 5500,
//     images: 6,
//     serpUsage: 2,
//   },
// ];

const userActivityData = [
  { day: "Mon", words: 5000, images: 15 },
  { day: "Tue", words: 7200, images: 22 },
  { day: "Wed", words: 6800, images: 19 },
  { day: "Thu", words: 9100, images: 28 },
  { day: "Fri", words: 8500, images: 25 },
  { day: "Sat", words: 4200, images: 12 },
  { day: "Sun", words: 3800, images: 10 },
];

export default function Users() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [activityFilter, setActivityFilter] = useState("all");
  const [activityStatusFilter, setActivityStatusFilter] = useState("all");
  const [dateRangeFilter, setDateRangeFilter] = useState("all");
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");
  const [sortBy, setSortBy] = useState("words-desc");
  // Optional range (future UI hook). Keep nulls so backend interprets correctly.
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [mockUsers, setMockUser] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userDetailsLoading, setUserDetailsLoading] = useState(false);
  const [userDetailsData, setUserDetailsData] = useState(null);
  const [availablePlans, setAvailablePlans] = useState([]);
  const [plansLoading, setPlansLoading] = useState(false);

  // Function to calculate date range based on selection
  const calculateDateRange = (range, customStart = null, customEnd = null) => {
    const today = new Date();
    let start = null;
    let end = null;

    if (customStart && customEnd) {
      // Use custom dates
      start = new Date(customStart);
      end = new Date(customEnd);
    } else {
      // Use predefined ranges
      switch (range) {
        case "7":
          start = new Date(today);
          start.setDate(today.getDate() - 7);
          end = today;
          break;
        case "30":
          start = new Date(today);
          start.setDate(today.getDate() - 30);
          end = today;
          break;
        case "90":
          start = new Date(today);
          start.setDate(today.getDate() - 90);
          end = today;
          break;
        default:
          start = null;
          end = null;
      }
    }

    return {
      startDate: start ? start.toISOString().split("T")[0] : null,
      endDate: end ? end.toISOString().split("T")[0] : null,
    };
  };

  const mockUserApi = async (
    page = 1,
    limit = 10,
    search = "",
    planId = null,
    sortOpt = "words-desc",
    planStatus = "all",
    activityStatus = "all",
    dateRange = "all"
  ) => {
    try {
      setLoading(true);
      const planStatusFilter = planStatus === "all" ? null : planStatus;
      const activityStatusParam =
        activityStatus === "all" ? null : activityStatus;

      // Calculate date range
      const { startDate: calculatedStartDate, endDate: calculatedEndDate } =
        calculateDateRange(
          dateRange,
          customStartDate || null,
          customEndDate || null
        );

      console.log(
        "API Call - planStatusFilter:",
        planStatusFilter,
        "activityStatus:",
        activityStatusParam,
        "dateRange:",
        dateRange,
        "startDate:",
        calculatedStartDate,
        "endDate:",
        calculatedEndDate
      );

      const response = await apiFunctions.getMockUser(
        page,
        limit,
        search,
        planId,
        sortOpt,
        activityStatusParam,
        calculatedStartDate,
        calculatedEndDate,
        planStatusFilter
      );
      if (response.data.status === 200) {
        console.log(
          "API Response - users count:",
          response.data.data.users?.length
        );
        setMockUser(response.data.data.users);
        setTotalPages(response.data.data.pagination.totalPages);
        setTotalRecords(response.data.data.pagination.totalRecords);
      }
    } catch (err) {
      console.log("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      setUserDetailsLoading(true);
      
      // Fetch both APIs in parallel
      const [userDetailsResponse, usageTrendsResponse] = await Promise.all([
        apiFunctions.getUserUsageData(userId),
        apiFunctions.getUsageTrends(userId)
      ]);
      
      console.log("User Details API Response:", userDetailsResponse);
      console.log("Usage Trends API Response:", usageTrendsResponse);
      
      if (userDetailsResponse.data.status === 200) {
        // Use the existing user details data
        const userData = userDetailsResponse.data.data;
        console.log("userData",userData)
        // Transform usage trends data for chart
        let usageTrends = [];
        console.log("usageTrendsResponse.data",usageTrendsResponse?.data)
        if (usageTrendsResponse?.data) {
          console.log("HIII")
          const trendsData = usageTrendsResponse.data;
          console.log("trendsData",trendsData)
          // Check if the API returns data in the expected format
          if (Array.isArray(trendsData)) {
            // Use the data exactly as it comes from the API, but sort by date to ensure correct order
            usageTrends = trendsData
              .map(item => ({
                day: item?.day || item?.date, // Use the day field directly from API
                contentWordsUsed: item?.contentWordsUsed || item?.words || 0,
                imagesUsed: item?.imagesUsed || item?.images || 0,
                serpSearchesUsed: item?.serpSearchesUsed || item?.searches || 0,
                cost: item?.cost || 0,
                tokens: item?.tokens || 0,
                date: item?.date || item?.day
              }))
              .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date to ensure correct order
          } 
          // else if (trendsData.daily_breakdown) {
          //   // Use the daily_breakdown data exactly as it comes from the API
          //   const dailyBreakdown = trendsData.daily_breakdown;
          //   const dates = Object.keys(dailyBreakdown).sort();
            
          //   // Convert to array format using the data as-is from API, already sorted by date
          //   usageTrends = dates.map(dateKey => ({
          //     day: dateKey, // Use the date key directly from API
          //     contentWordsUsed: dailyBreakdown[dateKey]?.words || 0,
          //     imagesUsed: dailyBreakdown[dateKey]?.images || 0,
          //     serpSearchesUsed: dailyBreakdown[dateKey]?.searches || 0,
          //     cost: dailyBreakdown[dateKey]?.cost || 0,
          //     tokens: dailyBreakdown[dateKey]?.tokens || 0,
          //     date: dateKey
          //   }));
          // }
        }

        console.log("Transformed usage trends:", usageTrends);

        // Combine user details with usage trends
        const combinedData = {
          ...userData,
          usageTrends: usageTrends || []
        };

        console.log("Final combined data:", combinedData);
        setUserDetailsData(combinedData);
      } else {
        console.log("User details API call failed:", userDetailsResponse.data.message);
        setUserDetailsData(null);
      }
    } catch (err) {
      console.log("Error fetching user details:", err);
      setUserDetailsData(null);
    } finally {
      setUserDetailsLoading(false);
    }
  };

  const fetchAllPlans = async () => {
    try {
      setPlansLoading(true);
      const response = await apiFunctions.getAllPlans();
      if (response.data.status === 200) {
        setAvailablePlans(response.data.data.plans);
      }
    } catch (err) {
      console.log("Error fetching plans:", err);
      // Fallback to default plans if API fails
      setAvailablePlans([ ]);
    } finally {
      setPlansLoading(false);
    }
  };

  useEffect(() => {
    mockUserApi(
      currentPage,
      itemsPerPage,
      searchQuery,
      selectedPlanId,
      sortBy,
      activityFilter,
      activityStatusFilter,
      dateRangeFilter
    );
  }, [
    currentPage,
    searchQuery,
    selectedPlanId,
    sortBy,
    activityFilter,
    activityStatusFilter,
    dateRangeFilter,
    customStartDate,
    customEndDate,
  ]);

  // Initial load
  useEffect(() => {
    mockUserApi(
      1,
      itemsPerPage,
      searchQuery,
      selectedPlanId,
      sortBy,
      activityFilter,
      activityStatusFilter,
      dateRangeFilter
    );
    fetchAllPlans();
  }, []);

  // Reset user details when modal is closed
  useEffect(() => {
    if (!selectedUser) {
      setUserDetailsData(null);
    }
  }, [selectedUser]);

  const toggleUserSelection = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  console.log("planFilter", planFilter);
  console.log("mockUsers", mockUsers); // Data is now filtered by API
  const filteredAndSortedUsers = mockUsers; // No client-side filtering needed since API handles it

  // Reset to first page when filters change
  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [searchQuery, planFilter, activityFilter, sortBy]);

  // Add User dialog state and helpers
  const [open, setOpen] = useState(false);
  const generatePassword = (length = 10) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState(generatePassword());
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // useEffect(() => {
  //   if (open) {
  //     setUsername("");
  //     setEmail("");
  //     setPassword(generatePassword());
  //   }
  // }, [open]);

  // const handleAdd = () => {
  //   if (!username || !email || !password) return setOpen(false);
  //   // Submit logic goes here
  //   setOpen(false);
  // };
  const getPlanColorClass = (plan) => {
    switch (plan) {
      case "Pro Plan - Monthly":
      case "Pro Plan - Yearly":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200";
      case "Standard Plan - Monthly":
      case "Standard Plan - Yearly":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200";
      case "Basic Plan - Monthly":
      case "Basic Plan - Yearly":
        return "bg-green-100 text-green-800 hover:bg-green-200 border-green-200";
      case "Trial":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200";
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200 border-slate-200";
    }
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case "Free Trial Cancelled":
        return "bg-rose-100 text-rose-800 hover:bg-rose-200 border-rose-200";
      case "Trial":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200";
      case "Active":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-200 border-red-200";
      default:
        return "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border-neutral-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">
            Manage and monitor all platform users
          </p>
        </div>
        {/* <Button onClick={() => setOpen(true)}>Add User</Button> */}
      </div>

      {/* Add User Modal */}
      {/* <div className="m-3 ">
        <Dialog open={open} onOpenChange={setOpen} className="Model_Content m-3">
          <DialogContent className=" Model_popups_adduser" >
            <DialogHeader>
              <DialogTitle className="Add_user">Add User</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 mt-2 px-1">
              <div className="space-y-1">
                <label className="text-sm font-medium">Username</label>
                <div className="input-wrapper d-flex align-items-center mt-4">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Email</label>
                <div className="input-wrapper d-flex align-items-center mt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">
                  Password <span className="text-red-500"> (Temporary password)</span>
                </label>
                <div className="input-wrapper d-flex align-items-center mt-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Auto generated"
                  />
                  <i
                    onClick={togglePassword}
                    className={
                      showPassword
                        ? "fa fa-eye-slash Eye_Color"
                        : "fa fa-eye Eye_Color"
                    }
                    style={{ marginLeft: "8px", cursor: "pointer" }}
                  ></i>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <DialogClose asChild>
                <button variant="outline" className="Cancel_btn">
                  Cancel
                </button>
              </DialogClose>
              <button onClick={handleAdd} className="Add_Btn">
                Add User
              </button>
            </div> 
          </DialogContent>
        </Dialog>
      </div> */}

      <Card>
        <CardHeader>
          <CardTitle>Filters & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Search Users
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Plan Type
              </label>
              <Select
                value={planFilter}
                onValueChange={(val) => {
                  setPlanFilter(val);
                  if (val === "all") {
                    setSelectedPlanId(null);
                    return;
                  }
                  const match = availablePlans.find(
                    (p) => p.name.toLowerCase() === val.toLowerCase()
                  );
                  setSelectedPlanId(match ? match.id : null);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Plan Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Plans</SelectItem>
                  {plansLoading ? (
                    <SelectItem value="loading" disabled>
                      Loading plans...
                    </SelectItem>
                  ) : (
                    availablePlans.map((plan) => (
                      <SelectItem key={plan.id} value={plan.name.toLowerCase()}>
                        {plan.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Plan Status
              </label>
              <Select
                value={activityFilter}
                onValueChange={(v) => {
                  console.log("Plan Status changed to:", v);
                  setActivityFilter(v);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Plan Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Trial">Trial</SelectItem>
                  <SelectItem value="Free Trial Cancelled">
                    Free Trial Cancelled
                  </SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                  <SelectItem value="N/A">N/A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Activity Status
              </label>
              <Select
                value={activityStatusFilter}
                onValueChange={(v) => {
                  console.log("Activity Status changed to:", v);
                  setActivityStatusFilter(v);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Activity Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Activity</SelectItem>
                  <SelectItem value="active">Active Users</SelectItem>
                  <SelectItem value="inactive">Inactive Users</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Date Range
              </label>
              <Select
                value={dateRangeFilter}
                onValueChange={(v) => {
                  console.log("Date Range changed to:", v);
                  setDateRangeFilter(v);
                  // Clear custom dates when switching to predefined ranges
                  if (v !== "custom") {
                    setCustomStartDate("");
                    setCustomEndDate("");
                  }
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="7">Last 7 Days</SelectItem>
                  <SelectItem value="30">Last 30 Days</SelectItem>
                  <SelectItem value="90">Last 90 Days</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Sort By
              </label>
              <Select
                value={sortBy}
                onValueChange={(v) => {
                  setSortBy(v);
                  setCurrentPage(1);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="words-desc">
                    Words (High to Low)
                  </SelectItem>
                  <SelectItem value="words-asc">Words (Low to High)</SelectItem>
                  <SelectItem value="images-desc">
                    Images (High to Low)
                  </SelectItem>
                  <SelectItem value="images-asc">
                    Images (Low to High)
                  </SelectItem>
                  <SelectItem value="serp-desc">SERP (High to Low)</SelectItem>
                  <SelectItem value="serp-asc">SERP (Low to High)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Custom Date Range Inputs */}
          {dateRangeFilter === "custom" && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Start Date
                </label>
                <Input
                  type="date"
                  value={customStartDate}
                  max={customEndDate ? new Date(new Date(customEndDate).getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0] : undefined}
                  onChange={(e) => {
                    setCustomStartDate(e.target.value);
                    // Reset end date if it's before or same as the new start date
                    if (customEndDate && e.target.value && new Date(e.target.value) >= new Date(customEndDate)) {
                      setCustomEndDate("");
                    }
                    setCurrentPage(1);
                  }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  End Date
                </label>
                <Input
                  type="date"
                  value={customEndDate}
                  min={customStartDate ? new Date(new Date(customStartDate).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] : undefined}
                  onChange={(e) => {
                    setCustomEndDate(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* {selectedUsers.length > 0 && (
        <Card className="border-primary">
          <CardContent className="flex items-center justify-between p-4">
            <span className="text-sm font-medium">
              {selectedUsers.length} user(s) selected
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Activate
              </Button>
              <Button variant="outline" size="sm">
                Suspend
              </Button>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      )} */}

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <Table>
              <TableHeader className="Tabel_Head">
                <TableRow>
                  <TableHead>S.No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Plan Status</TableHead>
                  <TableHead>Autopay Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Words</TableHead>
                  <TableHead className="text-right">Images</TableHead>
                  <TableHead className="text-right">SERP</TableHead>
                  <TableHead>View More</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      <Skeleton className="h-4 w-10" />
                    </TableCell>
                    <TableCell className="font-medium">
                      <Skeleton className="h-4 w-40" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-64" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-28" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-24" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-28" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-24" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="h-4 w-16 ml-auto" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="h-4 w-12 ml-auto" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="h-4 w-12 ml-auto" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table>
              <TableHeader className="Tabel_Head">
                <TableRow>
                  {/* <TableHead className="w-12">
                  <Checkbox
                    checked={
                      selectedUsers.length === filteredAndSortedUsers.length &&
                      filteredAndSortedUsers.length > 0
                    }
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedUsers(
                          filteredAndSortedUsers.map((u) => u.id)
                        );
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                  />
                </TableHead> */}
                  <TableHead>S.No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Plan Status</TableHead>
                  <TableHead>Autopay Status</TableHead>

                  <TableHead>Join Date</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Words</TableHead>
                  <TableHead className="text-right">Images</TableHead>
                  <TableHead className="text-right">SERP</TableHead>
                  <TableHead>View More</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedUsers.map((user, index) => (
                  <TableRow key={user.id}>
                    {/* <TableCell>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={() => toggleUserSelection(user.id)}
                    />
                  </TableCell> */}
                    <TableCell className="font-medium">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        className={`TabelCell ${getPlanColorClass(user.plan)}`}
                      >
                        {user.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`TabelCell ${getStatusColorClass(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`TabelCell ${getStatusColorClass(
                          user.autoPay_canceled === true
                            ? "disabled"
                            : user.autoPay_canceled === false
                            ? "enabled"
                            : "na"
                        )}`}
                      >
                        {user.autoPay_canceled === true
                          ? "Disabled"
                          : user.autoPay_canceled === false
                          ? "Enabled"
                          : "N/A"}
                      </Badge>
                    </TableCell>
                    <TableCell className="TabelCell">{user.joinDate}</TableCell>
                    <TableCell className="text-muted-foreground TabelCell">
                      {user.lastActive}
                    </TableCell>
                    <TableCell className="text-right ">
                      {user.wordCount.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right ">{user.images}</TableCell>
                    <TableCell className="text-right ">
                      {user.serpUsage}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setSelectedUser(user);
                              fetchUserDetails(user.id);
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl Model_popups">
                          <DialogHeader>
                            <DialogTitle>User Details: {user.name}</DialogTitle>
                          </DialogHeader>

                          {userDetailsLoading ? (
                            <div className="flex justify-center items-center p-8">
                              <div className="text-muted-foreground">
                                Loading user details...
                              </div>
                            </div>
                          ) : userDetailsData ? (
                            <div className="space-y-6 mt-4">
                              {/* User Details Section */}
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Email
                                  </p>
                                  <p className="text-sm">
                                    {userDetailsData.userDetails.email}
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Plan
                                  </p>
                                  <Badge
                                    variant={
                                      userDetailsData.subscriptionInfo
                                        .status === "Active"
                                        ? "default"
                                        : "secondary"
                                    }
                                  >
                                    {userDetailsData.userDetails.plan}
                                  </Badge>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Join Date
                                  </p>
                                  <p className="text-sm">
                                    {userDetailsData.userDetails.joinDate}
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Last Active
                                  </p>
                                  <p className="text-sm">
                                    {userDetailsData.userDetails.lastActive}
                                  </p>
                                </div>
                              </div>

                              {/* Usage Stats Section */}
                              <div>
                                <h3 className="mb-4 text-lg font-semibold">
                                  Usage Statistics
                                </h3>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                  <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">
                                      Content Words Used
                                    </p>
                                    <p className="text-lg font-semibold">
                                      {userDetailsData.usageStats.contentWordsUsed.toLocaleString()}
                                    </p>
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">
                                      Images Used
                                    </p>
                                    <p className="text-lg font-semibold">
                                      {userDetailsData.usageStats.imagesUsed}
                                    </p>
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">
                                      SERP Searches
                                    </p>
                                    <p className="text-lg font-semibold">
                                      {
                                        userDetailsData.usageStats
                                          .serpSearchesUsed
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Usage Trends Chart */}
                              <div>
                                <h3 className="mb-4 text-lg font-semibold">
                                  Usage Trends (Last 7 Days)
                                </h3>
                                {userDetailsData.usageTrends && userDetailsData.usageTrends.length > 0 ? (
                                  <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={userDetailsData.usageTrends}>
                                      <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="hsl(var(--border))"
                                      />
                                      <XAxis
                                        dataKey="day"
                                        stroke="hsl(var(--muted-foreground))"
                                      />
                                      <YAxis 
                                        stroke="hsl(var(--muted-foreground))"
                                        domain={[0, 'dataMax']}
                                      />
                                      <Tooltip
                                        contentStyle={{
                                          backgroundColor: "hsl(var(--card))",
                                          border: "1px solid hsl(var(--border))",
                                          borderRadius: "0.5rem",
                                        }}
                                        formatter={(value, name) => [value.toLocaleString(), name]}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="contentWordsUsed"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth={2}
                                        name="Content Words"
                                        dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                                        connectNulls={false}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="imagesUsed"
                                        stroke="hsl(var(--success))"
                                        strokeWidth={2}
                                        name="Images"
                                        dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
                                        connectNulls={false}
                                      />
                                      <Line
                                        type="monotone"
                                        dataKey="serpSearchesUsed"
                                        stroke="hsl(var(--warning))"
                                        strokeWidth={2}
                                        name="SERP Searches"
                                        dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
                                        connectNulls={false}
                                      />
                                    </LineChart>
                                  </ResponsiveContainer>
                                ) : (
                                  <div className="flex justify-center items-center h-48 text-muted-foreground">
                                    No usage data available for the selected period
                                  </div>
                                )}
                              </div>

                              {/* Recent Activities */}
                              <div>
                                <h3 className="mb-3 text-lg font-semibold">
                                  Recent Actions
                                </h3>
                                <div className="space-y-2">
                                  {userDetailsData.recentActivities &&
                                  userDetailsData.recentActivities.length >
                                    0 ? (
                                    userDetailsData.recentActivities.map(
                                      (activity, i) => (
                                        <div
                                          key={i}
                                          className="flex items-center justify-between rounded-lg border border-border p-3"
                                        >
                                          <span className="text-sm">
                                            {activity.description}
                                          </span>
                                          <span className="text-xs text-muted-foreground">
                                            {activity.timeAgo}
                                          </span>
                                        </div>
                                      )
                                    )
                                  ) : (
                                    <div className="text-center text-muted-foreground p-4">
                                      No recent activities found
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center items-center p-8">
                              <div className="text-muted-foreground">
                                Failed to load user details
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
