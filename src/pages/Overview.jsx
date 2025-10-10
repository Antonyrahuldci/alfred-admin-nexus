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
  ResponsiveContainer
} from "recharts";

const userGrowthData = [
  { month: "Jan", users: 1200 },
  { month: "Feb", users: 1800 },
  { month: "Mar", users: 2400 },
  { month: "Apr", users: 3200 },
  { month: "May", users: 4100 },
  { month: "Jun", users: 5200 }
];

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 24000 },
  { month: "Apr", revenue: 32000 },
  { month: "May", revenue: 41000 },
  { month: "Jun", revenue: 52000 }
];

const featureUsageData = [
  { name: "Writing", value: 45 },
  { name: "Image Gen", value: 30 },
  { name: "SERP", value: 25 }
];

const COLORS = ["hsl(217 91% 60%)", "hsl(142 76% 36%)", "hsl(38 92% 50%)"];

const recentActivity = [
  { id: 1, user: "john.doe@email.com", action: "Signed up for Pro plan", time: "2 minutes ago", type: "signup" },
  { id: 2, user: "jane.smith@email.com", action: "Generated 5,000 words", time: "15 minutes ago", type: "usage" },
  { id: 3, user: "mike.wilson@email.com", action: "Created 12 AI images", time: "1 hour ago", type: "usage" },
  { id: 4, user: "sarah.jones@email.com", action: "Upgraded to Enterprise", time: "2 hours ago", type: "upgrade" },
  { id: 5, user: "alex.brown@email.com", action: "Completed SERP analysis", time: "3 hours ago", type: "usage" }
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Overview</h1>
        <p className="text-muted-foreground">Welcome to your Simbli Admin dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Users" value="5,234" icon={Users} trend={{ value: 12.5, isPositive: true }} />
        <StatCard title="Active Users (Today)" value="892" icon={UserCheck} trend={{ value: 8.2, isPositive: true }} />
        <StatCard title="Total Revenue" value="$624,000" icon={DollarSign} trend={{ value: 23.1, isPositive: true }} />
        <StatCard title="OpenAI Balance" value="$12,450" icon={Wallet} trend={{ value: -15.3, isPositive: false }} />
      </div>

      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="MRR" value="$52,000" icon={DollarSign} trend={{ value: 18.5, isPositive: true }} />
        <StatCard title="ARR" value="$624,000" icon={TrendingUp} trend={{ value: 22.3, isPositive: true }} />
        <StatCard title="Conversion Rate" value="12.4%" icon={Percent} trend={{ value: 3.2, isPositive: true }} />
        <StatCard title="Churn Rate" value="2.8%" icon={TrendingDown} trend={{ value: -0.5, isPositive: true }} />
      </div> */}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">CAC</p>
              <p className="text-2xl font-bold">$145</p>
            </div>
          </CardContent>
        </Card> */}
        {/* <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">LTV</p>
              <p className="text-2xl font-bold">$2,340</p>
            </div>
          </CardContent>
        </Card> */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">AI Words Generated</p>
              <p className="text-2xl font-bold">12.5M</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Images Created</p>
              <p className="text-2xl font-bold">234K</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              User Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.5rem" }} />
                <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.5rem" }} />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Feature Usage Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={featureUsageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {featureUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.5rem" }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 rounded-lg border border-border p-3">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      variant={
                        activity.type === "signup" ? "default" :
                        activity.type === "upgrade" ? "default" :
                        "secondary"
                      }
                    >
                      {activity.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}