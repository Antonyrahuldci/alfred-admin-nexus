import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MdCurrencyRupee } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, Users, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import CouponModal from "./CouponModal";
import { useCallback, useEffect, useState } from "react";
import apiFunctions from "@/api/apiFunctions";
import Pagination from "@/components/Pagination/Pagination.jsx";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";

// const plans = [
//   { name: "Free", price: "$0", subscribers: 2134, revenue: 0 },
//   { name: "Pro", price: "$29", subscribers: 2456, revenue: 71224 },
//   { name: "Enterprise", price: "$99", subscribers: 644, revenue: 63756 },
// ];

// This will be calculated dynamically from the API data

// Define specific colors for each plan
const PLAN_COLORS = {
  "Basic Plan - Monthly": "hsl(142 76% 36%)", // Green
  "Standard Plan - Monthly": "hsl(217 91% 60%)", // Blue
  "Pro Plan - Monthly": "hsl(280 65% 60%)", // Purple
  "Basic Plan - Yearly": "hsl(38 92% 50%)", // Orange
  "Standard Plan - Yearly": "hsl(200 70% 50%)", // Cyan
  "Pro Plan - Yearly": "hsl(340 75% 55%)", // Pink
};

const COLORS = ["hsl(217 91% 60%)", "hsl(142 76% 36%)"];

// const paymentHistory = [
//   {
//     id: 1,
//     user: "john.doe@email.com",
//     plan: "Pro",
//     amount: "$29",
//     date: "2024-10-01",
//     status: "Completed",
//   },
//   {
//     id: 2,
//     user: "jane.smith@email.com",
//     plan: "Enterprise",
//     amount: "$99",
//     date: "2024-10-01",
//     status: "Completed",
//   },
//   {
//     id: 3,
//     user: "mike.wilson@email.com",
//     plan: "Pro",
//     amount: "$29",
//     date: "2024-10-02",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     user: "sarah.jones@email.com",
//     plan: "Enterprise",
//     amount: "$99",
//     date: "2024-10-02",
//     status: "Failed",
//   },
//   {
//     id: 5,
//     user: "alex.brown@email.com",
//     plan: "Pro",
//     amount: "$29",
//     date: "2024-10-03",
//     status: "Completed",
//   },
// ];

export default function Subscriptions() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [plans, setPlans] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [couponPagination, setCouponPagination] = useState({
    totalPages: 0,
    totalRecords: 0,
  });
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [loadingPayments, setLoadingPayments] = useState(true);
  const [loadingCoupons, setLoadingCoupons] = useState(true);
  const [exchangeRate, setExchangeRate] = useState(null);

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
      case "Completed":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200";
      case "Failed":
        return "bg-red-100 text-red-800 hover:bg-red-200 border-red-200";
      default:
        return "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border-neutral-200";
    }
  };

  const getUserPlansDataApi = async () => {
    try {
      setLoadingPlans(true);
      const response = await apiFunctions.getUserPlansData();
      console.log(response.data.data);
      if (response.data.status === 200) {
        // Only convert if exchange rate is available
        if (exchangeRate) {
          const convertedPlans = response.data.data.map((plan) => ({
            ...plan,
            revenue: Math.round((plan.revenue / 100) * exchangeRate), // Convert USD to INR
            price: `₹${Math.round(
              (parseInt(plan.price.replace("$", "")) / 100) * exchangeRate
            )}`, // Convert USD to INR
          }));
          setPlans(convertedPlans);
        } else {
          // If no exchange rate, show original USD values
          setPlans(response.data.data);
        }
      }
    } finally {
      setLoadingPlans(false);
    }
  };

  const getPaymentHistoryDataApi = useCallback(async (page = 1, limit = 10) => {
    try {
      setLoadingPayments(true);
      const response = await apiFunctions.getPaymentHistory(page, limit);
      if (response.data.status === 200) {
        setPaymentHistory(response.data.data.paymentHistory);
        setTotalPages(response.data.data.pagination.totalPages);
        setTotalRecords(response.data.data.pagination.totalRecords);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingPayments(false);
    }
  }, []);

  const getCouponsApi = useCallback(async (page = 1, limit = 10) => {
    try {
      setLoadingCoupons(true);
      const response = await apiFunctions.getCoupons(page, limit);
      if (response.data.status === 200) {
        setCoupons(response.data.data.coupons || []);
        setCouponPagination({
          totalPages: response.data.data.pagination.totalPages,
          totalRecords: response.data.data.pagination.totalRecords,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingCoupons(false);
    }
  }, []);

  const fetchExchangeRate = useCallback(async () => {
    try {
      // Using exchangerate-api.com (free tier)
      const response = await axios.get(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const inrRate = response.data.rates.INR;
      setExchangeRate(inrRate);
      console.log("Current USD to INR rate:", inrRate);
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
      // Don't set any fallback rate, let the component handle it
    }
  }, []);

  const handleCouponCreated = useCallback(() => {

    getCouponsApi(1, 10);
  }, [getCouponsApi]);

  useEffect(() => {
    fetchExchangeRate(); // Fetch current exchange rate
    getPaymentHistoryDataApi(currentPage, itemsPerPage);
    getCouponsApi(1, 10);
  }, [fetchExchangeRate, getPaymentHistoryDataApi, getCouponsApi]);

  // Fetch plans data when exchange rate is available
  useEffect(() => {
    if (exchangeRate !== null) {
      getUserPlansDataApi();
    }
  }, [exchangeRate]);

  useEffect(() => {
    getPaymentHistoryDataApi(currentPage, itemsPerPage);
  }, [currentPage]);

  // Sort plans: Monthly plans first (Basic, Standard, Pro), then Yearly plans (Basic, Standard, Pro)
  const sortedPlans = [...plans].sort((a, b) => {
    const aIsMonthly = a.name.includes('Monthly');
    const bIsMonthly = b.name.includes('Monthly');

    // If one is monthly and other is yearly, monthly comes first
    if (aIsMonthly && !bIsMonthly) return -1;
    if (!aIsMonthly && bIsMonthly) return 1;

    // If both are same type (both monthly or both yearly), sort by plan tier
    const planOrder = ['Basic', 'Standard', 'Pro'];
    const aPlanTier = planOrder.findIndex(tier => a.name.includes(tier));
    const bPlanTier = planOrder.findIndex(tier => b.name.includes(tier));

    return aPlanTier - bPlanTier;
  });

  // Filter plans with revenue > 0 for the pie chart
  const revenueByPlan = sortedPlans
    .filter((plan) => plan.revenue > 0)
    .map((plan) => ({
      name: plan.name,
      value: plan.revenue,
    }));

  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subscriptions</h1>
          <p className="text-muted-foreground">
            Manage plans, pricing, and subscriber data
          </p>
        </div>
        {exchangeRate && (
          <Card className="overflow-hidden bg-gradient-card w-72">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Exchange Rate
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      $1
                    </span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-lg font-bold text-primary">
                      ₹{exchangeRate.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="rounded-lg bg-primary/10 p-2">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                      title="Live Rate"
                    ></div>
                    <span className="text-xs text-muted-foreground">Live</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {loadingPlans
          ? Array.from({ length: 3 }).map((_, idx) => (
            <Card key={idx} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-6 w-16" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-4 w-10" />
                </div>
              </CardContent>
            </Card>
          ))
          : sortedPlans.map((plan) => (
            <Card
              key={plan.name}
              className="overflow-hidden bg-gradient-card"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="break-words">
                    {plan.name.split(" - ").map((part, index) => (
                      <span key={index}>
                        {index > 0 && <br />}
                        {part}
                      </span>
                    ))}
                  </span>
                  <Badge
                    variant={plan.name === "Free" ? "secondary" : "default"}
                  >
                    {plan.price}/mo
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-2xl font-bold">
                    {plan.subscribers.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    subscribers
                  </span>
                </div>
                {plan.revenue > 0 && (
                  <div className="flex items-center gap-2">
                    <MdCurrencyRupee className="h-4 w-4 text-muted-foreground" />
                    <span className="text-2xl font-bold">
                      {plan.revenue.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">MRR</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Revenue by Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            {loadingPlans ? (
              <div
                className="flex items-center justify-center w-full"
                style={{ height: 300 }}
              >
                <Skeleton className="h-48 w-48 rounded-full" />
              </div>
            ) : (
              <div className="space-y-4">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={revenueByPlan}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {revenueByPlan.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            PLAN_COLORS[entry.name] ||
                            COLORS[index % COLORS.length]
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.5rem",
                      }}
                      formatter={(value, name) => [
                        `₹${value.toLocaleString()}`,
                        name,
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-3">
                  {revenueByPlan.map((plan, index) => (
                    <div
                      key={plan.name}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            PLAN_COLORS[plan.name] ||
                            COLORS[index % COLORS.length],
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">
                          {plan.name}
                        </p>
                        <p className="font-semibold text-xs text-muted-foreground">
                          ₹{plan.value.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coupon Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 h-[420px] flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-2 pr-2">
              {loadingCoupons ? (
                Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                    <Skeleton className="h-6 w-16" />
                  </div>
                ))
              ) : coupons.length === 0 ? (
                <div className="text-sm text-muted-foreground">
                  No coupons found.
                </div>
              ) : (
                coupons.map((c) => (
                  <div
                    key={c.id || c.code}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div>
                      <p className="font-medium">{c.code}</p>
                      <p className="text-sm text-muted-foreground">
                        {c.discount_type === "percentage"
                          ? `${c.discount_amount}% off`
                          : `$${c.discount_amount} off`}
                      </p>
                    </div>
                    <Badge variant={c.is_active ? "default" : "secondary"}>
                      {c.is_active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                ))
              )}
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsCouponModalOpen(true)}
            >
              Create New Coupon
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loadingPayments
                ? Array.from({ length: 6 }).map((_, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      <Skeleton className="h-4 w-40" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-28" />
                    </TableCell>
                    <TableCell className="">
                      <Skeleton className="h-4 w-20" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-28" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-24" />
                    </TableCell>
                  </TableRow>
                ))
                : paymentHistory.map((payment, index) => {
                  const serialNumber = Math.max(1, (currentPage - 1) * itemsPerPage + index + 1);
                  return (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{serialNumber}</TableCell>
                    <TableCell className="font-medium">
                      {payment.user}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`TabelCell ${getPlanColorClass(
                          payment.plan
                        )}`}
                      >
                        {payment.plan}
                      </Badge>
                    </TableCell>
                    <TableCell className="">
                       ₹ {(Number(payment.price_usd / 100) * exchangeRate).toFixed(2)}
                    </TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>
                      <Badge
                        className={`TabelCell ${getStatusColorClass(
                          payment.status
                        )}`}
                      >
                        {payment.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
        handleCouponCreated={handleCouponCreated}
      />
    </div>
  );
}
