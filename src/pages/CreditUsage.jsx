import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Coins, TrendingUp, AlertTriangle, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import apiFunctions from "@/api/apiFunctions";

const creditsByUser = [
  { email: "john.doe@email.com", used: 8500, remaining: 1500, plan: "Pro" },
  {
    email: "sarah.wilson@email.com",
    used: 15200,
    remaining: 4800,
    plan: "Enterprise",
  },
  { email: "mike.johnson@email.com", used: 6700, remaining: 3300, plan: "Pro" },
  {
    email: "emma.brown@email.com",
    used: 19500,
    remaining: 500,
    plan: "Enterprise",
  },
  { email: "alex.davis@email.com", used: 4200, remaining: 5800, plan: "Pro" },
];

const aiModelUsage = [
  { model: "GPT-4", requests: 12450, tokens: 2340000 },
  { model: "GPT-3.5", requests: 34200, tokens: 4560000 },
  { model: "DALL-E 3", requests: 5600, tokens: 0 },
  { model: "DALL-E 2", requests: 8900, tokens: 0 },
  { model: "Claude 3", requests: 6700, tokens: 1890000 },
];

const modelDistribution = [
  { name: "GPT-4", value: 35, color: "hsl(217 91% 60%)" },
  { name: "GPT-3.5", value: 25, color: "hsl(142 76% 36%)" },
  { name: "DALL-E", value: 20, color: "hsl(38 92% 50%)" },
  // { name: "Claude", value: 15, color: "hsl(280 65% 60%)" },
  // { name: "Other", value: 5, color: "hsl(200 70% 50%)" }
];

const featureUsageHeatmap = [
  {
    feature: "AI Writer",
    mon: 450,
    tue: 520,
    wed: 480,
    thu: 510,
    fri: 590,
    sat: 320,
    sun: 280,
  },
  {
    feature: "Image Gen",
    mon: 280,
    tue: 310,
    wed: 295,
    thu: 340,
    fri: 380,
    sat: 420,
    sun: 390,
  },
  {
    feature: "SERP Tool",
    mon: 190,
    tue: 210,
    wed: 185,
    thu: 220,
    fri: 240,
    sat: 150,
    sun: 140,
  },
  {
    feature: "Translation",
    mon: 120,
    tue: 135,
    wed: 145,
    thu: 150,
    fri: 170,
    sat: 95,
    sun: 85,
  },
];

const tokenEfficiency = [
  { output: "Blog Post", avgTokens: 1200, avgCost: 0.024 },
  { output: "Social Post", avgTokens: 280, avgCost: 0.0056 },
  { output: "Email", avgTokens: 450, avgCost: 0.009 },
  { output: "Product Desc", avgTokens: 320, avgCost: 0.0064 },
];

const depletionAlerts = [
  {
    user: "emma.brown@email.com",
    remaining: 500,
    plan: "Enterprise",
    daysLeft: 3,
  },
  { user: "chris.lee@email.com", remaining: 1200, plan: "Pro", daysLeft: 7 },
  {
    user: "julia.martinez@email.com",
    remaining: 800,
    plan: "Pro",
    daysLeft: 5,
  },
];

const avgCreditsData = [
  { month: "Jan", credits: 3200 },
  { month: "Feb", credits: 3450 },
  { month: "Mar", credits: 3820 },
  { month: "Apr", credits: 4100 },
  { month: "May", credits: 4380 },
  { month: "Jun", credits: 4650 },
  { month: "Jul", credits: 1450 },
  { month: "Aug", credits: 3200 },
  { month: "Sep", credits: 4650 },
  { month: "Oct", credits: 4650 },
  { month: "Nov", credits: 3200 },
  { month: "Dec", credits: 8450 },
];

export default function CreditUsage() {
  const [heatmapData, setHeatmapData] = useState([]);
  const [creditsByUserData, setCreditsByUserData] = useState([]);
  const [avgCredits, setAvgCredits] = useState([]);
  const [aiModelUsageData, setAiModelUsageData] = useState([]);
  const [modelDistributionData, setModelDistributionData] =
    useState([]);
  const [totals, setTotals] = useState({
    total_credits_consumed: null,
    average_credits_per_user: null,
    total_users: null,
    timestamp: null,
  });
  const fetchHeatmap = async () => {
    const res = await apiFunctions.getFeatureUsageHeatmap(7);
    if (res?.success && Array.isArray(res?.data)) {
      setHeatmapData(res.data);
    }
  };
  const fetchCreditsByUser = async () => {
    const res = await apiFunctions.getCreditsByUser(5);
    if (res?.success && Array.isArray(res?.data)) {
      setCreditsByUserData(res.data);
    }
  };
  const fetchAverageCredits = async () => {
    const res = await apiFunctions.getAverageCreditsPerActiveUser();
    if (res?.success && Array.isArray(res?.data)) {
      setAvgCredits(res.data);
    }
  };
  const fetchAiModelUsage = async () => {
    const res = await apiFunctions.getAiModelUsageBreakdown();
    if (res?.success && Array.isArray(res?.data)) {
      const normalized = res.data.map((item) => ({
        ...item,
        tokens:
          typeof item.tokens === "string" ? Number(item.tokens) : item.tokens,
      }));
      setAiModelUsageData(normalized);
    }
  };
  const fetchModelDistribution = async () => {
    const res = await apiFunctions.getFeatureUsageDistribution();
    if (res?.success && Array.isArray(res?.data)) {
      const COLORS = [
        "hsl(217 91% 60%)",
        "hsl(142 76% 36%)",
        "hsl(38 92% 50%)",
        "hsl(280 65% 60%)",
        "hsl(200 70% 50%)",
      ];
      const normalized = res.data.map((item, index) => ({
        name: item.name,
        value: typeof item.value === "string" ? Number(item.value) : item.value,
        color: COLORS[index % COLORS.length],
      }));
      setModelDistributionData(normalized);
    }
  };
  const fetchTotals = async () => {
    const res = await apiFunctions.getTotalCreditsConsumed();
    if (res?.success && res?.data) {
      // Normalize potential string numbers
      const data = res.data;
      setTotals({
        total_credits_consumed:
          typeof data.total_credits_consumed === "string"
            ? Number(data.total_credits_consumed)
            : data.total_credits_consumed,
        average_credits_per_user:
          typeof data.average_credits_per_user === "string"
            ? Number(data.average_credits_per_user)
            : data.average_credits_per_user,
        total_users:
          typeof data.total_users === "string"
            ? Number(data.total_users)
            : data.total_users,
        timestamp: data.timestamp || null,
      });
    }
  };
  useEffect(() => {
    fetchHeatmap();
    fetchCreditsByUser();
    fetchAverageCredits();
    fetchAiModelUsage();
    fetchModelDistribution();
    fetchTotals();
  }, []);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Credit & Usage Metrics
        </h1>
        <p className="text-muted-foreground">
          Monitor AI usage, credits, and efficiency
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Total Credits Used
                </p>
                <p className="text-3xl font-bold">
                  {totals.total_credits_consumed !== null
                    ? totals.total_credits_consumed.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })
                    : "—"}
                </p>
              </div>
              <Coins className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Avg Credits/User
                </p>
                <p className="text-3xl font-bold">
                  {totals.average_credits_per_user !== null
                    ? totals.average_credits_per_user.toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )
                    : "—"}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        {/* <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                <p className="text-3xl font-bold">67.8K</p>
              </div>
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card> */}
        {/* <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Depletion Alerts</p>
                <p className="text-3xl font-bold">3</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card> */}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>AI Model Usage Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiModelUsageData.map((model, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{model.model}</span>
                    <div className="text-right">
                      <p className="font-bold">
                        {model.requests.toLocaleString()} requests
                      </p>
                      {model.tokens > 0 && (
                        <p className="text-sm text-muted-foreground">
                          {(model.tokens / 1000000).toFixed(1)}M tokens
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${(model.requests / 68850) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Model Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={modelDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {modelDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
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

      <Card>
        <CardHeader>
          <CardTitle>Credits by User (Top 5)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            
            {creditsByUserData?.map((user, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg border border-border"
              >
                <div className="flex-1">
                  <p className="font-medium">{user?.email}</p>
                  <p className="text-sm text-muted-foreground">
                    {user?.plan} Plan
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{user?.used.toLocaleString()} used</p>
                  <p className="text-sm text-muted-foreground">{user?.remaining.toLocaleString()} remaining</p>
                </div>
                <div className="w-full sm:w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{
                      width: `${
                        (user?.used / (user?.used + user?.remaining)) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Average Credits per Active User</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={avgCredits}>
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
                  dataKey="credits"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader>
            <CardTitle>Token Efficiency per Output</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tokenEfficiency.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <span className="font-medium">{item.output}</span>
                  <div className="text-right">
                    <p className="font-bold">{item.avgTokens} tokens</p>
                    <p className="text-sm text-muted-foreground">${item.avgCost}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}
      </div>

      {/* <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Credit Depletion Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {depletionAlerts.map((alert, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg border-2 border-destructive/20 bg-destructive/5">
                <div>
                  <p className="font-medium">{alert.user}</p>
                  <p className="text-sm text-muted-foreground">{alert.plan} Plan</p>
                </div>
                <div className="text-right">
                  <Badge variant="destructive">{alert.remaining} credits left</Badge>
                  <p className="text-sm text-muted-foreground mt-1">~{alert.daysLeft} days remaining</p>
                </div>
                <Button size="sm" variant="outline">Top Up</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle>Feature Usage Heatmap (This Week)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Feature</th>
                  <th className="text-center p-3 font-medium">Mon</th>
                  <th className="text-center p-3 font-medium">Tue</th>
                  <th className="text-center p-3 font-medium">Wed</th>
                  <th className="text-center p-3 font-medium">Thu</th>
                  <th className="text-center p-3 font-medium">Fri</th>
                  <th className="text-center p-3 font-medium">Sat</th>
                  <th className="text-center p-3 font-medium">Sun</th>
                </tr>
              </thead>
              <tbody>
                {heatmapData.map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-3 font-medium">{row.feature}</td>
                    {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map(
                      (day) => {
                        const value = row[day];
                        const intensity = Math.min(100, (value / 600) * 100);
                        return (
                          <td key={day} className="p-3 text-center">
                            <span
                              className="inline-block px-3 py-1 rounded"
                              style={{
                                backgroundColor: `hsl(217 91% ${
                                  100 - intensity / 2
                                }%)`,
                                color:
                                  intensity > 50
                                    ? "white"
                                    : "hsl(var(--foreground))",
                              }}
                            >
                              {value}
                            </span>
                          </td>
                        );
                      }
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
