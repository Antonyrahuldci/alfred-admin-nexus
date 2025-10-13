import {
  Users,
  UserCheck,
  TrendingUp,
  Percent,
  TrendingDown,
  Wallet,
  DollarSign
} from "lucide-react";
import { MdCurrencyRupee } from "react-icons/md";
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
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import apiFunctions from "../api/apiFunctions";

// const userGrowthData = [
//   { month: "Jan", users: 1200 },
//   { month: "Feb", users: 1800 },
//   { month: "Mar", users: 2400 },
//   { month: "Apr", users: 3200 },
//   { month: "May", users: 4100 },
//   { month: "Jun", users: 5200 }
// ];

// const revenueData = [
//   { month: "Jan", revenue: 12000 },
//   { month: "Feb", revenue: 18000 },
//   { month: "Mar", revenue: 24000 },
//   { month: "Apr", revenue: 32000 },
//   { month: "May", revenue: 41000 },
//   { month: "Jun", revenue: 52000 }
// ];

// Feature usage distribution will be fetched from backend

const COLORS = ["hsl(217 91% 60%)", "hsl(142 76% 36%)", "hsl(38 92% 50%)"];

// const recentActivity = [
//   { id: 1, user: "john.doe@email.com", action: "Signed up for Pro plan", time: "2 minutes ago", type: "signup" },
//   { id: 2, user: "jane.smith@email.com", action: "Generated 5,000 words", time: "15 minutes ago", type: "usage" },
//   { id: 3, user: "mike.wilson@email.com", action: "Created 12 AI images", time: "1 hour ago", type: "usage" },
//   { id: 4, user: "sarah.jones@email.com", action: "Upgraded to Enterprise", time: "2 hours ago", type: "upgrade" },
//   { id: 5, user: "alex.brown@email.com", action: "Completed SERP analysis", time: "3 hours ago", type: "usage" }
// ];

export default function Overview() {
  const [userDataMonth, setUserDataMonth] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [featureUsageData, setFeatureUsageData] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({
    totalUsers: { value: 0, change: 0, changeType: "no_change" },
    activeUsersToday: { value: 0, change: 0, changeType: "no_change" },
    totalRevenue: { value: 0, change: 0, changeType: "no_change" },
  });
  const getUserGrowthMonth = async () => {
    try {
      const response = await apiFunctions.getUsersGrowthMonthly();
      console.log(response.data);
      if (response.data.status === 200) {
        setUserDataMonth(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getFeatureUsageDistributionAPI = async () => {
    try {
      const response = await apiFunctions.getFeatureUsageDistribution();
      // Handle both raw array and wrapped { data } formats
      const raw = Array.isArray(response.data)
        ? response.data
        : response.data?.data;
      if (Array.isArray(raw)) {
        const normalized = raw.map((item) => ({
          name: item.name,
          value:
            typeof item.value === "string"
              ? parseFloat(item.value)
              : Number(item.value),
        }));
        setFeatureUsageData(normalized);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getRevue = async () => {
    try {
      const response = await apiFunctions.getMonthlyRevenue();
      console.log(response.data);
      if (response.data.status === 200) {
        setRevenueData(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getRecentActivityAPI = async () => {
    try {
      const response = await apiFunctions.getRecentActivity();
      console.log("Recent Activity API Response:", response.data);
      if (response.data.status === 200) {
        // Extract activities from the new API response structure
        const activities = response.data.data.activities || response.data.data;
        setRecentActivity(activities);
      }
    } catch (err) {
      console.log("Recent Activity API Error:", err);
    }
  };

  const getDashboardAPI = async () => {
    try {
      const response = await apiFunctions.getDashboard();
      const data = response?.data?.data;
      if (response?.data?.status === 200 && data) {
        setDashboardStats({
          totalUsers: data.totalUsers || {
            value: 0,
            change: 0,
            changeType: "no_change",
          },
          activeUsersToday: data.activeUsersToday || {
            value: 0,
            change: 0,
            changeType: "no_change",
          },
          totalRevenue: data.totalRevenue || {
            value: 0,
            change: 0,
            changeType: "no_change",
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserGrowthMonth();
    getRevue();
    getRecentActivityAPI();
    getFeatureUsageDistributionAPI();
    getDashboardAPI();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Overview</h1>
        <p className="text-muted-foreground">
          Welcome to your Simbli Admin dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={
            dashboardStats.totalUsers.value?.toLocaleString?.() ||
            dashboardStats.totalUsers.value
          }
          icon={Users}
          trend={{
            value: Math.abs(dashboardStats.totalUsers.change || 0),
            isPositive: (dashboardStats.totalUsers.change || 0) >= 0,
          }}
        />
        <StatCard
          title="Active Users (Today)"
          value={
            dashboardStats.activeUsersToday.value?.toLocaleString?.() ||
            dashboardStats.activeUsersToday.value
          }
          icon={UserCheck}
          trend={{
            value: Math.abs(dashboardStats.activeUsersToday.change || 0),
            isPositive: (dashboardStats.activeUsersToday.change || 0) >= 0,
          }}
        />
        <StatCard
          title="Total Revenue"
          value={`₹${(
            (dashboardStats.totalRevenue.value || 0) / 100
          ).toLocaleString()}`}
          icon={MdCurrencyRupee}
          trend={{
            value: Math.abs(dashboardStats.totalRevenue.change || 0),
            isPositive: (dashboardStats.totalRevenue.change || 0) >= 0,
          }}
        />
        <StatCard
          title="OpenAI Balance"
          value="₹12,450"
          icon={Wallet}
          trend={{ value: -15.3, isPositive: false }}
        />
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
              <p className="text-sm font-medium text-muted-foreground">
                AI Words Generated
              </p>
              <p className="text-2xl font-bold">12.5M</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                Images Created
              </p>
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
              {/* <LineChart data={userGrowthData}> */}
              <LineChart data={userDataMonth}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MdCurrencyRupee className="h-5 w-5 text-primary" />
              Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              {/* <BarChart data={revenueData}> */}
              <BarChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  tickFormatter={(value) => {
                    const inrValue = value / 100;
                    if (inrValue >= 1000) {
                      return `₹${(inrValue / 1000).toFixed(1)}k`;
                    }
                    return `₹${inrValue}`;
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                  formatter={(value) => [
                    `₹${(value / 100).toLocaleString()}`,
                    "Revenue",
                  ]}
                />
                <Bar
                  dataKey="revenue"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
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
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {featureUsageData.map((entry, index) => (
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
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 Recent_Activity">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.action}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={
                          activity.type === "signup"
                            ? "default"
                            : activity.type === "plan_change"
                            ? "default"
                            : activity.type === "cancellation"
                            ? "destructive"
                            : activity.type === "autopay_change"
                            ? "secondary"
                            : "outline"
                        }
                        className={
                          activity.type === "signup"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : activity.type === "plan_change"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                            : activity.type === "cancellation"
                            ? "bg-red-100 text-red-800 hover:bg-red-200"
                            : activity.type === "autopay_change"
                            ? "bg-orange-100 text-orange-800 hover:bg-orange-200"
                            : ""
                        }
                      >
                        {activity.type === "plan_change"
                          ? "Plan Change"
                          : activity.type === "autopay_change"
                          ? "Autopay"
                          : activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No recent activity found</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
