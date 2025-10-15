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
import { useEffect, useState } from "react";
import apiFunctions from "@/api/apiFunctions";
import Pagination from "@/components/Pagination/Pagination.jsx";
import { Skeleton } from "@/components/ui/skeleton";

// const plans = [
//   { name: "Free", price: "$0", subscribers: 2134, revenue: 0 },
//   { name: "Pro", price: "$29", subscribers: 2456, revenue: 71224 },
//   { name: "Enterprise", price: "$99", subscribers: 644, revenue: 63756 },
// ];

// This will be calculated dynamically from the API data

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
  const [paymentHistory, setPaymentHistory] = useState([])
  const [coupons, setCoupons] = useState([])
  const [couponPagination, setCouponPagination] = useState({ totalPages: 0, totalRecords: 0 })
  const [loadingPlans, setLoadingPlans] = useState(true)
  const [loadingPayments, setLoadingPayments] = useState(true)
  const [loadingCoupons, setLoadingCoupons] = useState(true)

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
      setLoadingPlans(true)
      const response = await apiFunctions.getUserPlansData();
      console.log(response.data.data);
      if (response.data.status === 200) {
        // Convert paisa to rupees (divide by 100)
        const convertedPlans = response.data.data.map((plan) => ({
          ...plan,
          revenue: Math.round(plan.revenue / 100),
          price: `₹${Math.round(parseInt(plan.price.replace("$", "")) / 100)}`,
        }));
        setPlans(convertedPlans);
      }
    } finally {
      setLoadingPlans(false)
    }
  };

  const getPaymentHistoryDataApi = async (page = 1, limit = 10) => {
    try {
      setLoadingPayments(true)
      const response = await apiFunctions.getPaymentHistory(page, limit)
      if (response.data.status === 200) {

        setPaymentHistory(response.data.data.paymentHistory)
        setTotalPages(response.data.data.pagination.totalPages);
        setTotalRecords(response.data.data.pagination.totalRecords);
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoadingPayments(false)
    }
  }

  const getCouponsApi = async (page = 1, limit = 10) => {
    try {
      setLoadingCoupons(true)
      const response = await apiFunctions.getCoupons(page, limit)
      if (response.data.status === 200) {
        setCoupons(response.data.data.coupons || [])
        setCouponPagination({
          totalPages: response.data.data.pagination.totalPages,
          totalRecords: response.data.data.pagination.totalRecords,
        })
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoadingCoupons(false)
    }
  }

  useEffect(() => {
    getUserPlansDataApi();
    getPaymentHistoryDataApi(currentPage, itemsPerPage);
    getCouponsApi(1, 10);
  }, []);

  useEffect(() => {
    getPaymentHistoryDataApi(currentPage, itemsPerPage);
  }, [currentPage]);

  // Filter plans with revenue > 0 for the pie chart
  const revenueByPlan = plans
    .filter((plan) => plan.revenue > 0)
    .map((plan) => ({
      name: plan.name,
      value: plan.revenue,
    }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subscriptions</h1>
          <p className="text-muted-foreground">
            Manage plans, pricing, and subscriber data
          </p>
        </div>
        {/* <Button>Add New Plan</Button> */}
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
          : plans.map((plan) => (
              <Card key={plan.name} className="overflow-hidden bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{plan.name}</span>
                    <Badge variant={plan.name === "Free" ? "secondary" : "default"}>
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
              <div className="flex items-center justify-center w-full" style={{ height: 300 }}>
                <Skeleton className="h-48 w-48 rounded-full" />
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={revenueByPlan}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) =>
                      `${name}: ₹${value.toLocaleString()}`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {revenueByPlan.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coupon Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-h-64 overflow-y-auto space-y-2 pr-2">
              {loadingCoupons ? (
                Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg border border-border p-3">
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                    <Skeleton className="h-6 w-16" />
                  </div>
                ))
              ) : coupons.length === 0 ? (
                <div className="text-sm text-muted-foreground">No coupons found.</div>
              ) : (
                coupons.map((c) => (
                  <div key={c.id || c.code} className="flex items-center justify-between rounded-lg border border-border p-3">
                    <div>
                      <p className="font-medium">{c.code}</p>
                      <p className="text-sm text-muted-foreground">
                        {c.discount_type === 'percentage' ? `${c.discount_amount}% off` : `$${c.discount_amount} off`}
                      </p>
                    </div>
                    <Badge variant={c.is_active ? 'default' : 'secondary'}>{c.is_active ? 'Active' : 'Inactive'}</Badge>
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
                      <TableCell className="font-medium"><Skeleton className="h-4 w-40" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-28" /></TableCell>
                      <TableCell className="font-mono"><Skeleton className="h-4 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-24" /></TableCell>
                    </TableRow>
                  ))
                : paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.user}</TableCell>
                      <TableCell>
                        <Badge className={`TabelCell ${getPlanColorClass(payment.plan)}`}>
                          {payment.plan}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono">{payment.amount}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>
                        <Badge className={`TabelCell ${getStatusColorClass(payment.status)}`}>
                          {payment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
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
      />
    </div>
  );
}
