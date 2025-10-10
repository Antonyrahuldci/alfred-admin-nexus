import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Sparkles, TrendingDown, DollarSign, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const churnPredictionData = [
{ email: "user123@email.com", score: 85, lastActive: "3 days ago", plan: "Pro", risk: "high" },
{ email: "user456@email.com", score: 72, lastActive: "5 days ago", plan: "Enterprise", risk: "high" },
{ email: "user789@email.com", score: 65, lastActive: "2 days ago", plan: "Pro", risk: "medium" },
{ email: "user234@email.com", score: 58, lastActive: "7 days ago", plan: "Free", risk: "medium" },
{ email: "user567@email.com", score: 52, lastActive: "4 days ago", plan: "Pro", risk: "medium" }];


const revenueForecast = [
{ month: "Feb", actual: 52000, forecast: 54500 },
{ month: "Mar", actual: null, forecast: 58200 },
{ month: "Apr", actual: null, forecast: 62800 },
{ month: "May", actual: null, forecast: 67900 },
{ month: "Jun", actual: null, forecast: 73500 },
{ month: "Jul", actual: null, forecast: 79800 }];


const featureUsageForecast = [
{ feature: "AI Writer", current: 45, forecast30d: 52, forecast60d: 58 },
{ feature: "Image Gen", current: 30, forecast30d: 34, forecast60d: 39 },
{ feature: "SERP Tool", current: 25, forecast30d: 27, forecast60d: 29 }];


const engagementScores = [
{ segment: "Power Users", score: 92, count: 456, trend: "up" },
{ segment: "Regular Users", score: 68, count: 2341, trend: "stable" },
{ segment: "Occasional Users", score: 42, count: 1845, trend: "down" },
{ segment: "Inactive Users", score: 15, count: 592, trend: "down" }];


const mlInsights = [
{
  title: "High-Value User Patterns",
  insight: "Users who engage with 3+ features in first week have 85% higher LTV",
  action: "Implement multi-feature onboarding flow"
},
{
  title: "Optimal Upgrade Timing",
  insight: "Users are 3x more likely to upgrade between days 14-21 after signup",
  action: "Schedule upgrade prompts for day 14-21 window"
},
{
  title: "Feature Correlation",
  insight: "Image Gen users are 4.2x more likely to use AI Writer within 7 days",
  action: "Cross-promote AI Writer to Image Gen users"
}];


const growthPrediction = [
{ month: "Feb", users: 5234, predicted: 5580 },
{ month: "Mar", users: null, predicted: 5950 },
{ month: "Apr", users: null, predicted: 6345 },
{ month: "May", users: null, predicted: 6770 },
{ month: "Jun", users: null, predicted: 7225 }];


export default function PredictiveInsights() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "AI & Predictive Insights" }),
        _jsx("p", { className: "text-muted-foreground", children: "ML-powered predictions and recommendations" })] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(TrendingDown, { className: "h-5 w-5 text-destructive" }), "Churn Prediction (At-Risk Users)"] }

            ) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-3", children:
              churnPredictionData.map((user, idx) =>
              _jsxs("div", { className: "p-4 rounded-lg border-2 border-destructive/20 bg-destructive/5", children: [
                _jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  _jsxs("div", { children: [
                    _jsx("p", { className: "font-medium", children: user.email }),
                    _jsxs("p", { className: "text-sm text-muted-foreground", children: [user.plan, " Plan"] })] }
                  ),
                  _jsxs(Badge, { variant: user.risk === "high" ? "destructive" : "default", children: [
                    user.score, "% risk"] }
                  )] }
                ),
                _jsxs("div", { className: "flex items-center justify-between mt-3", children: [
                  _jsxs("span", { className: "text-sm text-muted-foreground", children: ["Last active: ", user.lastActive] }),
                  _jsx(Button, { size: "sm", variant: "outline", children: "Engage" })] }
                )] }, idx
              )
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(DollarSign, { className: "h-5 w-5 text-primary" }), "Revenue Forecast (6 Months)"] }

            ) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 340, children:
              _jsxs(LineChart, { data: revenueForecast, children: [
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
                _jsx(Legend, {}),
                _jsx(Line, { type: "monotone", dataKey: "actual", stroke: "hsl(var(--primary))", strokeWidth: 2, name: "Actual Revenue" }),
                _jsx(Line, {
                  type: "monotone",
                  dataKey: "forecast",
                  stroke: "hsl(142 76% 36%)",
                  strokeWidth: 2,
                  strokeDasharray: "5 5",
                  name: "Forecasted Revenue" }
                )] }
              ) }
            ) }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "User Growth Prediction" }) }
        ),
        _jsx(CardContent, { children:
          _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
            _jsxs(BarChart, { data: growthPrediction, children: [
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
              _jsx(Legend, {}),
              _jsx(Bar, { dataKey: "users", fill: "hsl(var(--primary))", name: "Current Users" }),
              _jsx(Bar, { dataKey: "predicted", fill: "hsl(142 76% 36%)", name: "Predicted Users" })] }
            ) }
          ) }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Feature Usage Forecast" }) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-4", children:
              featureUsageForecast.map((item, idx) =>
              _jsxs("div", { className: "space-y-2", children: [
                _jsxs("div", { className: "flex items-center justify-between", children: [
                  _jsx("span", { className: "font-medium", children: item.feature }),
                  _jsxs("div", { className: "text-sm text-muted-foreground", children: ["Current: ",
                    item.current, "% \u2192 60d: ", item.forecast60d, "%"] }
                  )] }
                ),
                _jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                  _jsxs("div", { className: "text-center p-2 rounded bg-muted", children: [
                    _jsxs("p", { className: "text-sm font-medium", children: [item.current, "%"] }),
                    _jsx("p", { className: "text-xs text-muted-foreground", children: "Current" })] }
                  ),
                  _jsxs("div", { className: "text-center p-2 rounded bg-blue-100", children: [
                    _jsxs("p", { className: "text-sm font-medium", children: [item.forecast30d, "%"] }),
                    _jsx("p", { className: "text-xs text-muted-foreground", children: "30 days" })] }
                  ),
                  _jsxs("div", { className: "text-center p-2 rounded bg-green-100", children: [
                    _jsxs("p", { className: "text-sm font-medium", children: [item.forecast60d, "%"] }),
                    _jsx("p", { className: "text-xs text-muted-foreground", children: "60 days" })] }
                  )] }
                )] }, idx
              )
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(Target, { className: "h-5 w-5 text-primary" }), "Engagement Score by Segment"] }

            ) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-3", children:
              engagementScores.map((segment, idx) =>
              _jsxs("div", { className: "p-4 rounded-lg border border-border", children: [
                _jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  _jsxs("div", { children: [
                    _jsx("p", { className: "font-medium", children: segment.segment }),
                    _jsxs("p", { className: "text-sm text-muted-foreground", children: [segment.count, " users"] })] }
                  ),
                  _jsxs("div", { className: "text-right", children: [
                    _jsx("p", { className: "text-2xl font-bold", children: segment.score }),
                    _jsx(Badge, {
                      variant: segment.trend === "up" ? "default" : segment.trend === "down" ? "destructive" : "secondary", children:

                      segment.trend }
                    )] }
                  )] }
                ),
                _jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children:
                  _jsx("div", {
                    className: "h-full bg-primary transition-all",
                    style: { width: `${segment.score}%` } }
                  ) }
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
            _jsx(Sparkles, { className: "h-5 w-5 text-primary" }), "ML-Powered Insights & Recommendations"] }

          ) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-4", children:
            mlInsights.map((item, idx) =>
            _jsxs("div", { className: "p-4 rounded-lg border-2 border-primary/20 bg-primary/5", children: [
              _jsx("h3", { className: "font-semibold mb-2", children: item.title }),
              _jsx("p", { className: "text-sm text-muted-foreground mb-3", children: item.insight }),
              _jsxs("div", { className: "flex items-center justify-between", children: [
                _jsx(Badge, { children: "Recommended Action" }),
                _jsx(Button, { size: "sm", variant: "outline", children: "Apply" })] }
              ),
              _jsx("p", { className: "text-sm mt-2 font-medium", children: item.action })] }, idx
            )
            ) }
          ) }
        )] }
      )] }
    ));

}