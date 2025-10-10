import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from
"@/components/ui/table";
import { DollarSign, Users, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const plans = [
{ name: "Free", price: "$0", subscribers: 2134, revenue: 0 },
{ name: "Pro", price: "$29", subscribers: 2456, revenue: 71224 },
{ name: "Enterprise", price: "$99", subscribers: 644, revenue: 63756 }];


const revenueByPlan = [
{ name: "Pro", value: 71224 },
{ name: "Enterprise", value: 63756 }];


const COLORS = ["hsl(217 91% 60%)", "hsl(142 76% 36%)"];

const paymentHistory = [
{ id: 1, user: "john.doe@email.com", plan: "Pro", amount: "$29", date: "2024-10-01", status: "Completed" },
{ id: 2, user: "jane.smith@email.com", plan: "Enterprise", amount: "$99", date: "2024-10-01", status: "Completed" },
{ id: 3, user: "mike.wilson@email.com", plan: "Pro", amount: "$29", date: "2024-10-02", status: "Completed" },
{ id: 4, user: "sarah.jones@email.com", plan: "Enterprise", amount: "$99", date: "2024-10-02", status: "Failed" },
{ id: 5, user: "alex.brown@email.com", plan: "Pro", amount: "$29", date: "2024-10-03", status: "Completed" }];


export default function Subscriptions() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { className: "flex items-center justify-between", children: [
        _jsxs("div", { children: [
          _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Subscriptions" }),
          _jsx("p", { className: "text-muted-foreground", children: "Manage plans, pricing, and subscriber data" })] }
        ),
        _jsx(Button, { children: "Add New Plan" })] }
      ),

      _jsx("div", { className: "grid gap-4 md:grid-cols-3", children:
        plans.map((plan) =>
        _jsxs(Card, { className: "overflow-hidden bg-gradient-card", children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center justify-between", children: [
              _jsx("span", { children: plan.name }),
              _jsxs(Badge, { variant: plan.name === "Free" ? "secondary" : "default", children: [
                plan.price, "/mo"] }
              )] }
            ) }
          ),
          _jsxs(CardContent, { className: "space-y-4", children: [
            _jsxs("div", { className: "flex items-center gap-2", children: [
              _jsx(Users, { className: "h-4 w-4 text-muted-foreground" }),
              _jsx("span", { className: "text-2xl font-bold", children: plan.subscribers.toLocaleString() }),
              _jsx("span", { className: "text-sm text-muted-foreground", children: "subscribers" })] }
            ),
            plan.revenue > 0 &&
            _jsxs("div", { className: "flex items-center gap-2", children: [
              _jsx(DollarSign, { className: "h-4 w-4 text-muted-foreground" }),
              _jsxs("span", { className: "text-2xl font-bold", children: ["$", plan.revenue.toLocaleString()] }),
              _jsx("span", { className: "text-sm text-muted-foreground", children: "MRR" })] }
            ),

            _jsx(Button, { variant: "outline", className: "w-full", children: "Edit Plan" }

            )] }
          )] }, plan.name
        )
        ) }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(TrendingUp, { className: "h-5 w-5 text-primary" }), "Revenue by Plan"] }

            ) }
          ),
          _jsx(CardContent, { className: "flex justify-center", children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(PieChart, { children: [
                _jsx(Pie, {
                  data: revenueByPlan,
                  cx: "50%",
                  cy: "50%",
                  labelLine: false,
                  label: ({ name, value }) => `${name}: $${value.toLocaleString()}`,
                  outerRadius: 100,
                  fill: "#8884d8",
                  dataKey: "value", children:

                  revenueByPlan.map((entry, index) =>
                  _jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`)
                  ) }
                ),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                )] }
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Coupon Management" }) }
          ),
          _jsxs(CardContent, { className: "space-y-4", children: [
            _jsxs("div", { className: "space-y-2", children: [
              _jsxs("div", { className: "flex items-center justify-between rounded-lg border border-border p-3", children: [
                _jsxs("div", { children: [
                  _jsx("p", { className: "font-medium", children: "SUMMER20" }),
                  _jsx("p", { className: "text-sm text-muted-foreground", children: "20% off for 3 months" })] }
                ),
                _jsx(Badge, { children: "Active" })] }
              ),
              _jsxs("div", { className: "flex items-center justify-between rounded-lg border border-border p-3", children: [
                _jsxs("div", { children: [
                  _jsx("p", { className: "font-medium", children: "EARLYBIRD" }),
                  _jsx("p", { className: "text-sm text-muted-foreground", children: "50% off first month" })] }
                ),
                _jsx(Badge, { variant: "secondary", children: "Expired" })] }
              )] }
            ),
            _jsx(Button, { variant: "outline", className: "w-full", children: "Create New Coupon" }

            )] }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Payment History" }) }
        ),
        _jsx(CardContent, { className: "p-0", children:
          _jsxs(Table, { children: [
            _jsx(TableHeader, { children:
              _jsxs(TableRow, { children: [
                _jsx(TableHead, { children: "User" }),
                _jsx(TableHead, { children: "Plan" }),
                _jsx(TableHead, { children: "Amount" }),
                _jsx(TableHead, { children: "Date" }),
                _jsx(TableHead, { children: "Status" })] }
              ) }
            ),
            _jsx(TableBody, { children:
              paymentHistory.map((payment) =>
              _jsxs(TableRow, { children: [
                _jsx(TableCell, { className: "font-medium", children: payment.user }),
                _jsx(TableCell, { children:
                  _jsx(Badge, { variant: "secondary", children: payment.plan }) }
                ),
                _jsx(TableCell, { className: "font-mono", children: payment.amount }),
                _jsx(TableCell, { children: payment.date }),
                _jsx(TableCell, { children:
                  _jsx(Badge, { variant: payment.status === "Completed" ? "default" : "destructive", children:
                    payment.status }
                  ) }
                )] }, payment.id
              )
              ) }
            )] }
          ) }
        )] }
      )] }
    ));

}