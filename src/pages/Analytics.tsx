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
  Legend,
} from "recharts";

const dailyActiveUsers = [
  { date: "Oct 1", dau: 3200, mau: 4800 },
  { date: "Oct 2", dau: 3400, mau: 4850 },
  { date: "Oct 3", dau: 3100, mau: 4900 },
  { date: "Oct 4", dau: 3600, mau: 4950 },
  { date: "Oct 5", dau: 3800, mau: 5000 },
  { date: "Oct 6", dau: 3500, mau: 5050 },
  { date: "Oct 7", dau: 3700, mau: 5100 },
];

const featureUsage = [
  { feature: "Writing", users: 4200 },
  { feature: "Image Gen", users: 3100 },
  { feature: "SERP", users: 2400 },
];

const conversionFunnel = [
  { stage: "Visitors", count: 10000 },
  { stage: "Signups", count: 5200 },
  { stage: "Active", count: 4800 },
  { stage: "Paid", count: 3100 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Deep dive into user behavior and platform metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Daily Active Users"
          value="3,742"
          icon={Users}
          trend={{ value: 5.2, isPositive: true }}
        />
        <StatCard
          title="Monthly Active Users"
          value="5,124"
          icon={Activity}
          trend={{ value: 8.7, isPositive: true }}
        />
        <StatCard
          title="Retention Rate"
          value="87.3%"
          icon={TrendingUp}
          trend={{ value: 2.1, isPositive: true }}
        />
        <StatCard
          title="Avg Words/User"
          value="2,458"
          icon={Target}
          trend={{ value: 12.4, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>DAU vs MAU Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={dailyActiveUsers}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="dau"
                  stackId="1"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.6}
                  name="Daily Active Users"
                />
                <Area
                  type="monotone"
                  dataKey="mau"
                  stackId="2"
                  stroke="hsl(var(--success))"
                  fill="hsl(var(--success))"
                  fillOpacity={0.4}
                  name="Monthly Active Users"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Usage Split</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={featureUsage} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="feature" type="category" stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Bar dataKey="users" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Conversion Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionFunnel}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="stage" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
