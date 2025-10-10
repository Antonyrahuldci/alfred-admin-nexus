import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, Globe, TrendingUp, Activity } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const newUsersData = [
{ date: "Jan 1", users: 45 },
{ date: "Jan 8", users: 62 },
{ date: "Jan 15", users: 78 },
{ date: "Jan 22", users: 95 },
{ date: "Jan 29", users: 112 },
{ date: "Feb 5", users: 134 }];


const topCountriesData = [
{ country: "United States", users: 1845, percent: 35 },
{ country: "United Kingdom", users: 892, percent: 17 },
{ country: "Canada", users: 634, percent: 12 },
{ country: "Germany", users: 523, percent: 10 },
{ country: "Australia", users: 456, percent: 9 },
{ country: "Others", users: 884, percent: 17 }];


const COLORS = ["hsl(217 91% 60%)", "hsl(142 76% 36%)", "hsl(38 92% 50%)", "hsl(280 65% 60%)", "hsl(340 75% 55%)", "hsl(200 70% 50%)"];

const cohortData = [
{ cohort: "Week 1", retained: 100, week2: 85, week3: 72, week4: 65 },
{ cohort: "Week 2", retained: 100, week2: 88, week3: 75, week4: 68 },
{ cohort: "Week 3", retained: 100, week2: 82, week3: 70, week4: 62 },
{ cohort: "Week 4", retained: 100, week2: 90, week3: 78, week4: 71 }];


const featureAdoptionData = [
{ feature: "AI Writer", day1: 85, day3: 72, day7: 68 },
{ feature: "Image Gen", day1: 62, day3: 55, day7: 48 },
{ feature: "SERP Tool", day1: 45, day3: 38, day7: 35 }];


const sessionData = [
{ range: "0-5 min", users: 234 },
{ range: "5-15 min", users: 892 },
{ range: "15-30 min", users: 1245 },
{ range: "30-60 min", users: 734 },
{ range: "60+ min", users: 423 }];


const funnelData = [
{ stage: "Sign-up", users: 5234, percent: 100 },
{ stage: "First Action", users: 4456, percent: 85 },
{ stage: "3+ Actions", users: 3201, percent: 61 },
{ stage: "Subscription", users: 1847, percent: 35 }];


const topActiveUsers = [
{ name: "john.doe@email.com", credits: 45234, plan: "Enterprise" },
{ name: "sarah.wilson@email.com", credits: 38912, plan: "Pro" },
{ name: "mike.johnson@email.com", credits: 32456, plan: "Enterprise" },
{ name: "emma.brown@email.com", credits: 28734, plan: "Pro" },
{ name: "alex.davis@email.com", credits: 24123, plan: "Pro" }];


export default function UserAnalytics() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { className: "flex items-center justify-between", children: [
        _jsxs("div", { children: [
          _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "User Analytics" }),
          _jsx("p", { className: "text-muted-foreground", children: "Detailed user behavior and engagement metrics" })] }
        ),
        _jsxs(Select, { defaultValue: "30days", children: [
          _jsx(SelectTrigger, { className: "w-[180px]", children:
            _jsx(SelectValue, {}) }
          ),
          _jsxs(SelectContent, { children: [
            _jsx(SelectItem, { value: "7days", children: "Last 7 Days" }),
            _jsx(SelectItem, { value: "30days", children: "Last 30 Days" }),
            _jsx(SelectItem, { value: "90days", children: "Last 90 Days" })] }
          )] }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(Users, { className: "h-5 w-5 text-primary" }), "New Users Growth"] }

            ) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(LineChart, { data: newUsersData, children: [
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
                _jsx(Line, { type: "monotone", dataKey: "users", stroke: "hsl(var(--primary))", strokeWidth: 2 })] }
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(Globe, { className: "h-5 w-5 text-primary" }), "Users by Country"] }

            ) }
          ),
          _jsx(CardContent, { className: "flex justify-center", children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(PieChart, { children: [
                _jsx(Pie, {
                  data: topCountriesData,
                  cx: "50%",
                  cy: "50%",
                  labelLine: false,
                  label: ({ country, percent }) => `${country} ${percent}%`,
                  outerRadius: 100,
                  fill: "#8884d8",
                  dataKey: "users", children:

                  topCountriesData.map((entry, index) =>
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
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(TrendingUp, { className: "h-5 w-5 text-primary" }), "Cohort Retention (%)"] }

          ) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "overflow-x-auto", children:
            _jsxs("table", { className: "w-full", children: [
              _jsx("thead", { children:
                _jsxs("tr", { className: "border-b", children: [
                  _jsx("th", { className: "text-left p-3 font-medium", children: "Cohort" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Week 1" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Week 2" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Week 3" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Week 4" })] }
                ) }
              ),
              _jsx("tbody", { children:
                cohortData.map((row, idx) =>
                _jsxs("tr", { className: "border-b", children: [
                  _jsx("td", { className: "p-3 font-medium", children: row.cohort }),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsxs("span", { className: "inline-block px-2 py-1 rounded bg-green-100 text-green-800", children: [row.retained, "%"] }) }
                  ),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsxs("span", { className: "inline-block px-2 py-1 rounded bg-blue-100 text-blue-800", children: [row.week2, "%"] }) }
                  ),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsxs("span", { className: "inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-800", children: [row.week3, "%"] }) }
                  ),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsxs("span", { className: "inline-block px-2 py-1 rounded bg-orange-100 text-orange-800", children: [row.week4, "%"] }) }
                  )] }, idx
                )
                ) }
              )] }
            ) }
          ) }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Feature Adoption (First 7 Days)" }) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(BarChart, { data: featureAdoptionData, children: [
                _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
                _jsx(XAxis, { dataKey: "feature", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))" }),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                ),
                _jsx(Legend, {}),
                _jsx(Bar, { dataKey: "day1", fill: "hsl(217 91% 60%)", name: "Day 1" }),
                _jsx(Bar, { dataKey: "day3", fill: "hsl(142 76% 36%)", name: "Day 3" }),
                _jsx(Bar, { dataKey: "day7", fill: "hsl(38 92% 50%)", name: "Day 7" })] }
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(Activity, { className: "h-5 w-5 text-primary" }), "Session Duration"] }

            ) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(BarChart, { data: sessionData, layout: "vertical", children: [
                _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
                _jsx(XAxis, { type: "number", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(YAxis, { dataKey: "range", type: "category", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                ),
                _jsx(Bar, { dataKey: "users", fill: "hsl(var(--primary))", radius: [0, 4, 4, 0] })] }
              ) }
            ) }
          )] }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Conversion Funnel" }) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-4", children:
              funnelData.map((stage, idx) =>
              _jsxs("div", { className: "space-y-2", children: [
                _jsxs("div", { className: "flex items-center justify-between", children: [
                  _jsx("span", { className: "font-medium", children: stage.stage }),
                  _jsxs("span", { className: "text-sm text-muted-foreground", children: [stage.users, " users (", stage.percent, "%)"] })] }
                ),
                _jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children:
                  _jsx("div", {
                    className: "h-full bg-primary transition-all",
                    style: { width: `${stage.percent}%` } }
                  ) }
                )] }, idx
              )
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Top Active Users (by Credit Usage)" }) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-3", children:
              topActiveUsers.map((user, idx) =>
              _jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border border-border", children: [
                _jsxs("div", { children: [
                  _jsx("p", { className: "font-medium", children: user.name }),
                  _jsx("p", { className: "text-sm text-muted-foreground", children: user.plan })] }
                ),
                _jsx("span", { className: "font-bold text-primary", children: user.credits.toLocaleString() })] }, idx
              )
              ) }
            ) }
          )] }
        )] }
      )] }
    ));

}