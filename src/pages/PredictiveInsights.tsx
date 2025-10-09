import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Sparkles, TrendingDown, DollarSign, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const churnPredictionData = [
  { email: "user123@email.com", score: 85, lastActive: "3 days ago", plan: "Pro", risk: "high" },
  { email: "user456@email.com", score: 72, lastActive: "5 days ago", plan: "Enterprise", risk: "high" },
  { email: "user789@email.com", score: 65, lastActive: "2 days ago", plan: "Pro", risk: "medium" },
  { email: "user234@email.com", score: 58, lastActive: "7 days ago", plan: "Free", risk: "medium" },
  { email: "user567@email.com", score: 52, lastActive: "4 days ago", plan: "Pro", risk: "medium" },
];

const revenueForecast = [
  { month: "Feb", actual: 52000, forecast: 54500 },
  { month: "Mar", actual: null, forecast: 58200 },
  { month: "Apr", actual: null, forecast: 62800 },
  { month: "May", actual: null, forecast: 67900 },
  { month: "Jun", actual: null, forecast: 73500 },
  { month: "Jul", actual: null, forecast: 79800 },
];

const featureUsageForecast = [
  { feature: "AI Writer", current: 45, forecast30d: 52, forecast60d: 58 },
  { feature: "Image Gen", current: 30, forecast30d: 34, forecast60d: 39 },
  { feature: "SERP Tool", current: 25, forecast30d: 27, forecast60d: 29 },
];

const engagementScores = [
  { segment: "Power Users", score: 92, count: 456, trend: "up" },
  { segment: "Regular Users", score: 68, count: 2341, trend: "stable" },
  { segment: "Occasional Users", score: 42, count: 1845, trend: "down" },
  { segment: "Inactive Users", score: 15, count: 592, trend: "down" },
];

const mlInsights = [
  {
    title: "High-Value User Patterns",
    insight: "Users who engage with 3+ features in first week have 85% higher LTV",
    action: "Implement multi-feature onboarding flow",
  },
  {
    title: "Optimal Upgrade Timing",
    insight: "Users are 3x more likely to upgrade between days 14-21 after signup",
    action: "Schedule upgrade prompts for day 14-21 window",
  },
  {
    title: "Feature Correlation",
    insight: "Image Gen users are 4.2x more likely to use AI Writer within 7 days",
    action: "Cross-promote AI Writer to Image Gen users",
  },
];

const growthPrediction = [
  { month: "Feb", users: 5234, predicted: 5580 },
  { month: "Mar", users: null, predicted: 5950 },
  { month: "Apr", users: null, predicted: 6345 },
  { month: "May", users: null, predicted: 6770 },
  { month: "Jun", users: null, predicted: 7225 },
];

export default function PredictiveInsights() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">AI & Predictive Insights</h1>
        <p className="text-muted-foreground">ML-powered predictions and recommendations</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-destructive" />
              Churn Prediction (At-Risk Users)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {churnPredictionData.map((user, idx) => (
                <div key={idx} className="p-4 rounded-lg border-2 border-destructive/20 bg-destructive/5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium">{user.email}</p>
                      <p className="text-sm text-muted-foreground">{user.plan} Plan</p>
                    </div>
                    <Badge variant={user.risk === "high" ? "destructive" : "default"}>
                      {user.score}% risk
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-muted-foreground">Last active: {user.lastActive}</span>
                    <Button size="sm" variant="outline">Engage</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Revenue Forecast (6 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={340}>
              <LineChart data={revenueForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="hsl(var(--primary))" strokeWidth={2} name="Actual Revenue" />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  stroke="hsl(142 76% 36%)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Forecasted Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Growth Prediction</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthPrediction}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Bar dataKey="users" fill="hsl(var(--primary))" name="Current Users" />
              <Bar dataKey="predicted" fill="hsl(142 76% 36%)" name="Predicted Users" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Feature Usage Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {featureUsageForecast.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.feature}</span>
                    <div className="text-sm text-muted-foreground">
                      Current: {item.current}% → 60d: {item.forecast60d}%
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 rounded bg-muted">
                      <p className="text-sm font-medium">{item.current}%</p>
                      <p className="text-xs text-muted-foreground">Current</p>
                    </div>
                    <div className="text-center p-2 rounded bg-blue-100">
                      <p className="text-sm font-medium">{item.forecast30d}%</p>
                      <p className="text-xs text-muted-foreground">30 days</p>
                    </div>
                    <div className="text-center p-2 rounded bg-green-100">
                      <p className="text-sm font-medium">{item.forecast60d}%</p>
                      <p className="text-xs text-muted-foreground">60 days</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Engagement Score by Segment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {engagementScores.map((segment, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium">{segment.segment}</p>
                      <p className="text-sm text-muted-foreground">{segment.count} users</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{segment.score}</p>
                      <Badge
                        variant={segment.trend === "up" ? "default" : segment.trend === "down" ? "destructive" : "secondary"}
                      >
                        {segment.trend}
                      </Badge>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${segment.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            ML-Powered Insights & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mlInsights.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.insight}</p>
                <div className="flex items-center justify-between">
                  <Badge>Recommended Action</Badge>
                  <Button size="sm" variant="outline">Apply</Button>
                </div>
                <p className="text-sm mt-2 font-medium">{item.action}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
