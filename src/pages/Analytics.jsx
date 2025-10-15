import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, Activity, TrendingUp, Target } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend } from
"recharts";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const dailyActiveUsers = [
{ date: "Oct 1", dau: 3200, mau: 4800 },
{ date: "Oct 2", dau: 3400, mau: 4850 },
{ date: "Oct 3", dau: 3100, mau: 4900 },
{ date: "Oct 4", dau: 3600, mau: 4950 },
{ date: "Oct 5", dau: 3800, mau: 5000 },
{ date: "Oct 6", dau: 3500, mau: 5050 },
{ date: "Oct 7", dau: 3700, mau: 5100 }];


const featureUsage = [
{ feature: "Writing", users: 4200 },
{ feature: "Image Gen", users: 3100 },
{ feature: "SERP", users: 2400 }];


const conversionFunnel = [
{ stage: "Visitors", count: 10000 },
{ stage: "Signups", count: 5200 },
{ stage: "Active", count: 4800 },
{ stage: "Paid", count: 3100 }];


export default function Analytics() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate/align with real async loads if added later
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Analytics" }),
        _jsx("p", { className: "text-muted-foreground", children: "Deep dive into user behavior and platform metrics" })] }
      ),

      _jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        loading ? _jsx(Card, { children: _jsx(CardContent, { className: "p-6 space-y-3", children: _jsxs("div", { children: [_jsx(Skeleton, { className: "h-4 w-24" }), _jsx(Skeleton, { className: "h-8 w-32" })] }) }) }) : _jsx(StatCard, { title: "Daily Active Users", value: "3,742", icon: Users, trend: { value: 5.2, isPositive: true } }),
        loading ? _jsx(Card, { children: _jsx(CardContent, { className: "p-6 space-y-3", children: _jsxs("div", { children: [_jsx(Skeleton, { className: "h-4 w-28" }), _jsx(Skeleton, { className: "h-8 w-32" })] }) }) }) : _jsx(StatCard, { title: "Monthly Active Users", value: "5,124", icon: Activity, trend: { value: 8.7, isPositive: true } }),
        loading ? _jsx(Card, { children: _jsx(CardContent, { className: "p-6 space-y-3", children: _jsxs("div", { children: [_jsx(Skeleton, { className: "h-4 w-24" }), _jsx(Skeleton, { className: "h-8 w-24" })] }) }) }) : _jsx(StatCard, { title: "Retention Rate", value: "87.3%", icon: TrendingUp, trend: { value: 2.1, isPositive: true } }),
        loading ? _jsx(Card, { children: _jsx(CardContent, { className: "p-6 space-y-3", children: _jsxs("div", { children: [_jsx(Skeleton, { className: "h-4 w-28" }), _jsx(Skeleton, { className: "h-8 w-28" })] }) }) }) : _jsx(StatCard, { title: "Avg Words/User", value: "2,458", icon: Target, trend: { value: 12.4, isPositive: true } })] }),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "DAU vs MAU Trends" }) }
          ),
          _jsx(CardContent, { children:
            loading ? _jsx(Skeleton, { className: "h-[300px] w-full" }) : _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(AreaChart, { data: dailyActiveUsers, children: [
                _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
                _jsx(XAxis, { dataKey: "date", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))" }),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                ),
                _jsx(Legend, {}),
                _jsx(Area, {
                  type: "monotone",
                  dataKey: "dau",
                  stackId: "1",
                  stroke: "hsl(var(--primary))",
                  fill: "hsl(var(--primary))",
                  fillOpacity: 0.6,
                  name: "Daily Active Users" }
                ),
                _jsx(Area, {
                  type: "monotone",
                  dataKey: "mau",
                  stackId: "2",
                  stroke: "hsl(var(--success))",
                  fill: "hsl(var(--success))",
                  fillOpacity: 0.4,
                  name: "Monthly Active Users" }
                )] }
              ) }
            }) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Feature Usage Split" }) }
          ),
          _jsx(CardContent, { children:
            loading ? _jsx(Skeleton, { className: "h-[300px] w-full" }) : _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(BarChart, { data: featureUsage, layout: "vertical", children: [
                _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
                _jsx(XAxis, { type: "number", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(YAxis, { dataKey: "feature", type: "category", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                ),
                _jsx(Bar, { dataKey: "users", fill: "hsl(var(--primary))", radius: [0, 4, 4, 0] })] }
              ) }
            }) }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Conversion Funnel" }) }
        ),
          _jsx(CardContent, { children:
            loading ? _jsx(Skeleton, { className: "h-[300px] w-full" }) : _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(BarChart, { data: conversionFunnel, children: [
              _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
              _jsx(XAxis, { dataKey: "stage", stroke: "hsl(var(--muted-foreground))" }),
              _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))" }),
              _jsx(Tooltip, {
                contentStyle: {
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                } }
              ),
              _jsx(Bar, { dataKey: "count", fill: "hsl(var(--primary))", radius: [4, 4, 0, 0] })] }
            ) }
          }) }
        )] }
      )] }
    ));

}