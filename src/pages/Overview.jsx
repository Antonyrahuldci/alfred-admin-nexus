import { Users, UserCheck, DollarSign, TrendingUp, Percent, TrendingDown, Wallet } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,

  ResponsiveContainer } from
"recharts";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const userGrowthData = [
{ month: "Jan", users: 1200 },
{ month: "Feb", users: 1800 },
{ month: "Mar", users: 2400 },
{ month: "Apr", users: 3200 },
{ month: "May", users: 4100 },
{ month: "Jun", users: 5200 }];


const revenueData = [
{ month: "Jan", revenue: 12000 },
{ month: "Feb", revenue: 18000 },
{ month: "Mar", revenue: 24000 },
{ month: "Apr", revenue: 32000 },
{ month: "May", revenue: 41000 },
{ month: "Jun", revenue: 52000 }];


const featureUsageData = [
{ name: "Writing", value: 45 },
{ name: "Image Gen", value: 30 },
{ name: "SERP", value: 25 }];


const COLORS = ["hsl(217 91% 60%)", "hsl(142 76% 36%)", "hsl(38 92% 50%)"];

const recentActivity = [
{ id: 1, user: "john.doe@email.com", action: "Signed up for Pro plan", time: "2 minutes ago", type: "signup" },
{ id: 2, user: "jane.smith@email.com", action: "Generated 5,000 words", time: "15 minutes ago", type: "usage" },
{ id: 3, user: "mike.wilson@email.com", action: "Created 12 AI images", time: "1 hour ago", type: "usage" },
{ id: 4, user: "sarah.jones@email.com", action: "Upgraded to Enterprise", time: "2 hours ago", type: "upgrade" },
{ id: 5, user: "alex.brown@email.com", action: "Completed SERP analysis", time: "3 hours ago", type: "usage" }];


export default function Overview() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Overview" }),
        _jsx("p", { className: "text-muted-foreground", children: "Welcome to your Simbli Admin dashboard" })] }
      ),

      _jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        _jsx(StatCard, {
          title: "Total Users",
          value: "5,234",
          icon: Users,
          trend: { value: 12.5, isPositive: true } }
        ),
        _jsx(StatCard, {
          title: "Active Users (Today)",
          value: "892",
          icon: UserCheck,
          trend: { value: 8.2, isPositive: true } }
        ),
        _jsx(StatCard, {
          title: "Total Revenue",
          value: "$624,000",
          icon: DollarSign,
          trend: { value: 23.1, isPositive: true } }
        ),
        _jsx(StatCard, {
          title: "OpenAI Balance",
          value: "$12,450",
          icon: Wallet,
          trend: { value: -15.3, isPositive: false } }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        _jsx(StatCard, {
          title: "MRR",
          value: "$52,000",
          icon: DollarSign,
          trend: { value: 18.5, isPositive: true } }
        ),
        _jsx(StatCard, {
          title: "ARR",
          value: "$624,000",
          icon: TrendingUp,
          trend: { value: 22.3, isPositive: true } }
        ),
        _jsx(StatCard, {
          title: "Conversion Rate",
          value: "12.4%",
          icon: Percent,
          trend: { value: 3.2, isPositive: true } }
        ),
        _jsx(StatCard, {
          title: "Churn Rate",
          value: "2.8%",
          icon: TrendingDown,
          trend: { value: -0.5, isPositive: true } }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "CAC" }),
              _jsx("p", { className: "text-2xl font-bold", children: "$145" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "LTV" }),
              _jsx("p", { className: "text-2xl font-bold", children: "$2,340" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "AI Words Generated" }),
              _jsx("p", { className: "text-2xl font-bold", children: "12.5M" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Images Created" }),
              _jsx("p", { className: "text-2xl font-bold", children: "234K" })] }
            ) }
          ) }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(TrendingUp, { className: "h-5 w-5 text-primary" }), "User Growth"] }

            ) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(LineChart, { data: userGrowthData, children: [
                _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
                _jsx(XAxis, { dataKey: "month", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))" }),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                ),
                _jsx(Line, {
                  type: "monotone",
                  dataKey: "users",
                  stroke: "hsl(var(--primary))",
                  strokeWidth: 2,
                  dot: { fill: "hsl(var(--primary))" } }
                )] }
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(DollarSign, { className: "h-5 w-5 text-primary" }), "Revenue Trend"] }

            ) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(BarChart, { data: revenueData, children: [
                _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
                _jsx(XAxis, { dataKey: "month", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))" }),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                ),
                _jsx(Bar, { dataKey: "revenue", fill: "hsl(var(--primary))", radius: [4, 4, 0, 0] })] }
              ) }
            ) }
          )] }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Feature Usage Distribution" }) }
          ),
          _jsx(CardContent, { className: "flex justify-center", children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(PieChart, { children: [
                _jsx(Pie, {
                  data: featureUsageData,
                  cx: "50%",
                  cy: "50%",
                  labelLine: false,
                  label: ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`,
                  outerRadius: 100,
                  fill: "#8884d8",
                  dataKey: "value", children:

                  featureUsageData.map((entry, index) =>
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

        _jsxs(Card, { className: "lg:col-span-2", children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Recent Activity" }) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-4", children:
              recentActivity.map((activity) =>
              _jsxs("div", { className: "flex items-start gap-3 rounded-lg border border-border p-3", children: [
                _jsxs("div", { className: "flex-1 space-y-1", children: [
                  _jsx("p", { className: "text-sm font-medium", children: activity.user }),
                  _jsx("p", { className: "text-sm text-muted-foreground", children: activity.action })] }
                ),
                _jsxs("div", { className: "flex flex-col items-end gap-2", children: [
                  _jsx(Badge, {
                    variant:
                    activity.type === "signup" ?
                    "default" :
                    activity.type === "upgrade" ?
                    "default" :
                    "secondary", children:


                    activity.type }
                  ),
                  _jsx("span", { className: "text-xs text-muted-foreground", children: activity.time })] }
                )] }, activity.id
              )
              ) }
            ) }
          )] }
        )] }
      )] }
    ));

}