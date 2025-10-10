import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Coins, TrendingUp, AlertTriangle, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const creditsByUser = [
{ email: "john.doe@email.com", used: 8500, remaining: 1500, plan: "Pro" },
{ email: "sarah.wilson@email.com", used: 15200, remaining: 4800, plan: "Enterprise" },
{ email: "mike.johnson@email.com", used: 6700, remaining: 3300, plan: "Pro" },
{ email: "emma.brown@email.com", used: 19500, remaining: 500, plan: "Enterprise" },
{ email: "alex.davis@email.com", used: 4200, remaining: 5800, plan: "Pro" }];


const aiModelUsage = [
{ model: "GPT-4", requests: 12450, tokens: 2340000 },
{ model: "GPT-3.5", requests: 34200, tokens: 4560000 },
{ model: "DALL-E 3", requests: 5600, tokens: 0 },
{ model: "DALL-E 2", requests: 8900, tokens: 0 },
{ model: "Claude 3", requests: 6700, tokens: 1890000 }];


const modelDistribution = [
{ name: "GPT-4", value: 35, color: "hsl(217 91% 60%)" },
{ name: "GPT-3.5", value: 25, color: "hsl(142 76% 36%)" },
{ name: "DALL-E", value: 20, color: "hsl(38 92% 50%)" },
{ name: "Claude", value: 15, color: "hsl(280 65% 60%)" },
{ name: "Other", value: 5, color: "hsl(200 70% 50%)" }];


const featureUsageHeatmap = [
{ feature: "AI Writer", mon: 450, tue: 520, wed: 480, thu: 510, fri: 590, sat: 320, sun: 280 },
{ feature: "Image Gen", mon: 280, tue: 310, wed: 295, thu: 340, fri: 380, sat: 420, sun: 390 },
{ feature: "SERP Tool", mon: 190, tue: 210, wed: 185, thu: 220, fri: 240, sat: 150, sun: 140 },
{ feature: "Translation", mon: 120, tue: 135, wed: 145, thu: 150, fri: 170, sat: 95, sun: 85 }];


const tokenEfficiency = [
{ output: "Blog Post", avgTokens: 1200, avgCost: 0.024 },
{ output: "Social Post", avgTokens: 280, avgCost: 0.0056 },
{ output: "Email", avgTokens: 450, avgCost: 0.009 },
{ output: "Product Desc", avgTokens: 320, avgCost: 0.0064 }];


const depletionAlerts = [
{ user: "emma.brown@email.com", remaining: 500, plan: "Enterprise", daysLeft: 3 },
{ user: "chris.lee@email.com", remaining: 1200, plan: "Pro", daysLeft: 7 },
{ user: "julia.martinez@email.com", remaining: 800, plan: "Pro", daysLeft: 5 }];


const avgCreditsData = [
{ month: "Jan", credits: 3200 },
{ month: "Feb", credits: 3450 },
{ month: "Mar", credits: 3820 },
{ month: "Apr", credits: 4100 },
{ month: "May", credits: 4380 },
{ month: "Jun", credits: 4650 }];


export default function CreditUsage() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Credit & Usage Metrics" }),
        _jsx("p", { className: "text-muted-foreground", children: "Monitor AI usage, credits, and efficiency" })] }
      ),

      _jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Total Credits Used" }),
                _jsx("p", { className: "text-3xl font-bold", children: "245.8K" })] }
              ),
              _jsx(Coins, { className: "h-8 w-8 text-primary" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Avg Credits/User" }),
                _jsx("p", { className: "text-3xl font-bold", children: "4,650" })] }
              ),
              _jsx(TrendingUp, { className: "h-8 w-8 text-primary" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Total Requests" }),
                _jsx("p", { className: "text-3xl font-bold", children: "67.8K" })] }
              ),
              _jsx(Zap, { className: "h-8 w-8 text-primary" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Depletion Alerts" }),
                _jsx("p", { className: "text-3xl font-bold", children: "3" })] }
              ),
              _jsx(AlertTriangle, { className: "h-8 w-8 text-destructive" })] }
            ) }
          ) }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "AI Model Usage Breakdown" }) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-4", children:
              aiModelUsage.map((model, idx) =>
              _jsxs("div", { className: "space-y-2", children: [
                _jsxs("div", { className: "flex items-center justify-between", children: [
                  _jsx("span", { className: "font-medium", children: model.model }),
                  _jsxs("div", { className: "text-right", children: [
                    _jsxs("p", { className: "font-bold", children: [model.requests.toLocaleString(), " requests"] }),
                    model.tokens > 0 &&
                    _jsxs("p", { className: "text-sm text-muted-foreground", children: [(model.tokens / 1000000).toFixed(1), "M tokens"] })] }

                  )] }
                ),
                _jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children:
                  _jsx("div", {
                    className: "h-full bg-primary transition-all",
                    style: { width: `${model.requests / 68850 * 100}%` } }
                  ) }
                )] }, idx
              )
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Model Distribution" }) }
          ),
          _jsx(CardContent, { className: "flex justify-center", children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(PieChart, { children: [
                _jsx(Pie, {
                  data: modelDistribution,
                  cx: "50%",
                  cy: "50%",
                  labelLine: false,
                  label: ({ name, value }) => `${name} ${value}%`,
                  outerRadius: 100,
                  fill: "#8884d8",
                  dataKey: "value", children:

                  modelDistribution.map((entry, index) =>
                  _jsx(Cell, { fill: entry.color }, `cell-${index}`)
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
          _jsx(CardTitle, { children: "Credits by User (Top 5)" }) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-3", children:
            creditsByUser.map((user, idx) =>
            _jsxs("div", { className: "flex items-center gap-4 p-4 rounded-lg border border-border", children: [
              _jsxs("div", { className: "flex-1", children: [
                _jsx("p", { className: "font-medium", children: user.email }),
                _jsxs("p", { className: "text-sm text-muted-foreground", children: [user.plan, " Plan"] })] }
              ),
              _jsxs("div", { className: "text-right", children: [
                _jsxs("p", { className: "font-bold text-primary", children: [user.used.toLocaleString(), " used"] }),
                _jsxs("p", { className: "text-sm text-muted-foreground", children: [user.remaining.toLocaleString(), " remaining"] })] }
              ),
              _jsx("div", { className: "w-24 h-2 bg-muted rounded-full overflow-hidden", children:
                _jsx("div", {
                  className: "h-full bg-primary transition-all",
                  style: { width: `${user.used / (user.used + user.remaining) * 100}%` } }
                ) }
              )] }, idx
            )
            ) }
          ) }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Average Credits per Active User" }) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(LineChart, { data: avgCreditsData, children: [
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
                _jsx(Line, { type: "monotone", dataKey: "credits", stroke: "hsl(var(--primary))", strokeWidth: 2 })] }
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Token Efficiency per Output" }) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-3", children:
              tokenEfficiency.map((item, idx) =>
              _jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border border-border", children: [
                _jsx("span", { className: "font-medium", children: item.output }),
                _jsxs("div", { className: "text-right", children: [
                  _jsxs("p", { className: "font-bold", children: [item.avgTokens, " tokens"] }),
                  _jsxs("p", { className: "text-sm text-muted-foreground", children: ["$", item.avgCost] })] }
                )] }, idx
              )
              ) }
            ) }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(AlertTriangle, { className: "h-5 w-5 text-destructive" }), "Credit Depletion Alerts"] }

          ) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-3", children:
            depletionAlerts.map((alert, idx) =>
            _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border-2 border-destructive/20 bg-destructive/5", children: [
              _jsxs("div", { children: [
                _jsx("p", { className: "font-medium", children: alert.user }),
                _jsxs("p", { className: "text-sm text-muted-foreground", children: [alert.plan, " Plan"] })] }
              ),
              _jsxs("div", { className: "text-right", children: [
                _jsxs(Badge, { variant: "destructive", children: [alert.remaining, " credits left"] }),
                _jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: ["~", alert.daysLeft, " days remaining"] })] }
              ),
              _jsx(Button, { size: "sm", variant: "outline", children: "Top Up" })] }, idx
            )
            ) }
          ) }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Feature Usage Heatmap (This Week)" }) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "overflow-x-auto", children:
            _jsxs("table", { className: "w-full", children: [
              _jsx("thead", { children:
                _jsxs("tr", { className: "border-b", children: [
                  _jsx("th", { className: "text-left p-3 font-medium", children: "Feature" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Mon" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Tue" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Wed" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Thu" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Fri" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Sat" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Sun" })] }
                ) }
              ),
              _jsx("tbody", { children:
                featureUsageHeatmap.map((row, idx) =>
                _jsxs("tr", { className: "border-b", children: [
                  _jsx("td", { className: "p-3 font-medium", children: row.feature }),
                  ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => {
                    const value = row[day];
                    const intensity = Math.min(100, value / 600 * 100);
                    return (
                      _jsx("td", { className: "p-3 text-center", children:
                        _jsx("span", {
                          className: "inline-block px-3 py-1 rounded",
                          style: {
                            backgroundColor: `hsl(217 91% ${100 - intensity / 2}%)`,
                            color: intensity > 50 ? 'white' : 'hsl(var(--foreground))'
                          }, children:

                          value }
                        ) }, day
                      ));

                  })] }, idx
                )
                ) }
              )] }
            ) }
          ) }
        )] }
      )] }
    ));

}