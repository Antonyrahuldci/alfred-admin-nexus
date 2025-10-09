import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const uptimeData = [
  { date: "Jan 1", uptime: 99.98 },
  { date: "Jan 8", uptime: 99.95 },
  { date: "Jan 15", uptime: 100 },
  { date: "Jan 22", uptime: 99.92 },
  { date: "Jan 29", uptime: 99.99 },
  { date: "Feb 5", uptime: 100 },
];

const latencyData = [
  { region: "US East", latency: 45 },
  { region: "US West", latency: 52 },
  { region: "EU West", latency: 38 },
  { region: "Asia Pacific", latency: 78 },
  { region: "South America", latency: 92 },
];

const errorLogs = [
  {
    id: 1,
    timestamp: "2024-01-15 14:23:12",
    type: "API Error",
    message: "Stripe payment webhook timeout",
    severity: "high",
    status: "resolved",
  },
  {
    id: 2,
    timestamp: "2024-01-15 11:45:33",
    type: "Database",
    message: "Connection pool exhausted",
    severity: "medium",
    status: "investigating",
  },
  {
    id: 3,
    timestamp: "2024-01-14 22:15:09",
    type: "API Error",
    message: "OpenAI rate limit exceeded",
    severity: "high",
    status: "resolved",
  },
  {
    id: 4,
    timestamp: "2024-01-14 18:32:41",
    type: "System",
    message: "High memory usage detected",
    severity: "low",
    status: "monitoring",
  },
];

const incidents = [
  {
    id: 1,
    title: "Payment Processing Delays",
    date: "2024-01-15",
    duration: "23 minutes",
    impact: "15 users affected",
    status: "resolved",
  },
  {
    id: 2,
    title: "API Slowdown",
    date: "2024-01-12",
    duration: "1.2 hours",
    impact: "234 users affected",
    status: "resolved",
  },
  {
    id: 3,
    title: "Email Service Outage",
    date: "2024-01-08",
    duration: "45 minutes",
    impact: "All users affected",
    status: "resolved",
  },
];

const systemAlerts = [
  { type: "Billing", message: "3 failed payment attempts in last hour", time: "5 minutes ago", severity: "high" },
  { type: "API", message: "OpenAI API response time increased by 40%", time: "23 minutes ago", severity: "medium" },
  { type: "Database", message: "Connection pool at 85% capacity", time: "1 hour ago", severity: "low" },
];

export default function SystemHealth() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">System Health & Operations</h1>
        <p className="text-muted-foreground">Monitor system performance and incidents</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Current Uptime</p>
                <p className="text-3xl font-bold text-green-600">99.97%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                <p className="text-3xl font-bold">52ms</p>
              </div>
              <Activity className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Active Incidents</p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Error Rate</p>
                <p className="text-3xl font-bold">0.03%</p>
              </div>
              <AlertCircle className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Uptime History (Last 30 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={uptimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[99, 100]} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line type="monotone" dataKey="uptime" stroke="hsl(142 76% 36%)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latency by Region</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Bar dataKey="latency" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            System Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {systemAlerts.map((alert, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border-2 ${
                  alert.severity === "high"
                    ? "border-red-200 bg-red-50"
                    : alert.severity === "medium"
                    ? "border-yellow-200 bg-yellow-50"
                    : "border-blue-200 bg-blue-50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={alert.severity === "high" ? "destructive" : "default"}>{alert.type}</Badge>
                      <span className="text-sm text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="font-medium">{alert.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Error Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {errorLogs.map((log) => (
              <div key={log.id} className="p-4 rounded-lg border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={log.severity === "high" ? "destructive" : "default"}>{log.type}</Badge>
                    <Badge variant={log.status === "resolved" ? "default" : "secondary"}>{log.status}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {log.timestamp}
                  </span>
                </div>
                <p className="text-sm">{log.message}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Incident Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {incidents.map((incident) => (
              <div key={incident.id} className="p-4 rounded-lg border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{incident.title}</h3>
                    <p className="text-sm text-muted-foreground">{incident.date}</p>
                  </div>
                  <Badge variant={incident.status === "resolved" ? "default" : "destructive"}>
                    {incident.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{incident.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Impact</p>
                    <p className="font-medium">{incident.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
