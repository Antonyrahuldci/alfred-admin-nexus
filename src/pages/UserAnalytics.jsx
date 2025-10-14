import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Users, Globe, TrendingUp, Activity } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import apiFunctions from "../api/apiFunctions";

// const newUsersData = [
//   { date: "Jan 1", users: 45 },
//   { date: "Jan 8", users: 62 },
//   { date: "Jan 15", users: 78 },
//   { date: "Jan 22", users: 95 },
//   { date: "Jan 29", users: 112 },
//   { date: "Feb 5", users: 134 }
// ];

// const topCountriesData = [
//   { country: "United States", users: 1845, percent: 35 },
//   { country: "United Kingdom", users: 892, percent: 17 },
//   { country: "Canada", users: 634, percent: 12 },
//   { country: "Germany", users: 523, percent: 10 },
//   { country: "Australia", users: 456, percent: 9 },
//   { country: "Others", users: 884, percent: 17 },
// ];

const COLORS = [
  "hsl(217 91% 60%)",
  "hsl(142 76% 36%)",
  "hsl(38 92% 50%)",
  "hsl(280 65% 60%)",
  "hsl(340 75% 55%)",
  "hsl(200 70% 50%)",
];

const cohortData = [
  { cohort: "Week 1", retained: 100, week2: 85, week3: 72, week4: 65 },
  { cohort: "Week 2", retained: 100, week2: 88, week3: 75, week4: 68 },
  { cohort: "Week 3", retained: 100, week2: 82, week3: 70, week4: 62 },
  { cohort: "Week 4", retained: 100, week2: 90, week3: 78, week4: 71 },
];

const featureAdoptionData = [
  { feature: "AI Writer", day1: 85, day3: 72, day7: 68 },
  { feature: "Image Gen", day1: 62, day3: 55, day7: 48 },
  { feature: "SERP Tool", day1: 45, day3: 38, day7: 35 },
];

const sessionData = [
  { range: "0-5 min", users: 234 },
  { range: "5-15 min", users: 892 },
  { range: "15-30 min", users: 1245 },
  { range: "30-60 min", users: 734 },
  { range: "60+ min", users: 423 },
];

const funnelData = [
  { stage: "Sign-up", users: 5234, percent: 100 },
  { stage: "First Action", users: 4456, percent: 85 },
  { stage: "3+ Actions", users: 3201, percent: 61 },
  { stage: "Subscription", users: 1847, percent: 35 },
];

// const topActiveUsers = [
//   { name: "john.doe@email.com", credits: 45234, plan: "Enterprise" },
//   { name: "sarah.wilson@email.com", credits: 38912, plan: "Pro" },
//   { name: "mike.johnson@email.com", credits: 32456, plan: "Enterprise" },
//   { name: "emma.brown@email.com", credits: 28734, plan: "Pro" },
//   { name: "alex.davis@email.com", credits: 24123, plan: "Pro" },
// ];

export default function UserAnalytics() {
  const [growthData, setGrowthData] = useState([]);
  const [timeRange, setTimeRange] = useState("30days");
  const [topActiveUsers, setTopActiveUsers] = useState([]);

  const userGrowthAPI = async (selectedTimeRange = timeRange) => {
    try {
      // Map frontend time range values to backend expected values
      const timeRangeMap = {
        "7days": "7",
        "30days": "30",
        "90days": "90"
      };

      const backendTimeRange = timeRangeMap[selectedTimeRange] || "30";
      const response = await apiFunctions.getUsersGrowth(backendTimeRange);
      console.log(response);
      if (response.data.status === 200) {
        setGrowthData(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userGrowthAPI();
    getAllUserByCountryApi()
    fetchTopActiveUsers()
  }, [timeRange]);
  console.log("growthData", growthData);

  const fetchTopActiveUsers = async (limit = 5,selectedTimeRange=timeRange) => {
    try {
      const timeRangeMap = {
        "7days": "7",
        "30days": "30",
        "90days": "90"
      };
       const backendTimeRange = timeRangeMap[selectedTimeRange] || "30";
      const response = await apiFunctions.getTopActiveUsers(limit,backendTimeRange);
      // Response is an array per provided endpoint
      const users = Array.isArray(response?.data)
        ? response.data
        : Array.isArray(response?.data?.data)
          ? response.data.data
          : [];

      const mapped = users.map((u) => ({
        name: u.email,
        plan: u.plan_type,
        credits: Number(u.total_tokens || 0),
      }));
      setTopActiveUsers(mapped);
    } catch (err) {
      console.log(err);
      setTopActiveUsers([]);
    }
  };
  // useEffect(() => {


  //   fetchTopActiveUsers();

  // }, []);

  const [topCountriesData, setTopCountryData] = useState([])



  const getAllUserByCountryApi = async (selectedTimeRange = timeRange) => {
    try {
      // Map frontend time range values to backend expected values
      const timeRangeMap = {
        "7days": "7",
        "30days": "30",
        "90days": "90"
      };

      const backendTimeRange = timeRangeMap[selectedTimeRange] || "30";
      const response = await apiFunctions.getUserByCountry(backendTimeRange);
      console.log(response);
      if (response.data.status === "success") {
        setTopCountryData(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Analytics</h1>
          <p className="text-muted-foreground">
            Detailed user behavior and engagement metrics
          </p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="90days">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              New Users Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              {/* <LineChart data={newUsersData}> */}
              <LineChart data={growthData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
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
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Users by Country
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topCountriesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ country, percent }) => `${country} ${percent}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="users"
                >
                  {topCountriesData.map((entry, index) => (
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
      </div>

      {/* <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Cohort Retention (%)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Cohort</th>
                  <th className="text-center p-3 font-medium">Week 1</th>
                  <th className="text-center p-3 font-medium">Week 2</th>
                  <th className="text-center p-3 font-medium">Week 3</th>
                  <th className="text-center p-3 font-medium">Week 4</th>
                </tr>
              </thead>
              <tbody>
                {cohortData.map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-3 font-medium">{row.cohort}</td>
                    <td className="p-3 text-center">
                      <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800">{row.retained}%</span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-800">{row.week2}%</span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-800">{row.week3}%</span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-block px-2 py-1 rounded bg-orange-100 text-orange-800">{row.week4}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card> */}

      {/* <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Feature Adoption (First 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={featureAdoptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="feature" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.5rem" }} />
                <Legend />
                <Bar dataKey="day1" fill="hsl(217 91% 60%)" name="Day 1" />
                <Bar dataKey="day3" fill="hsl(142 76% 36%)" name="Day 3" />
                <Bar dataKey="day7" fill="hsl(38 92% 50%)" name="Day 7" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Session Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sessionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="range" type="category" stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0.5rem" }} />
                <Bar dataKey="users" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div> */}

      <div className="grid gap-4 lg:grid-cols-2">
        {/* <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelData.map((stage, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{stage.stage}</span>
                    <span className="text-sm text-muted-foreground">{stage.users} users ({stage.percent}%)</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: `${stage.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}

        <Card>
          <CardHeader>
            <CardTitle>Top Active Users (by Credit Usage)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topActiveUsers.map((user, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg border border-border"
                >
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.plan}</p>
                  </div>
                  <span className="font-bold text-primary">
                    {Number(user.credits || 0).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
