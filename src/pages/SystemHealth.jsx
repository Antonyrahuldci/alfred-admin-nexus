import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const uptimeData = [
{ date: "Jan 1", uptime: 99.98 },
{ date: "Jan 8", uptime: 99.95 },
{ date: "Jan 15", uptime: 100 },
{ date: "Jan 22", uptime: 99.92 },
{ date: "Jan 29", uptime: 99.99 },
{ date: "Feb 5", uptime: 100 }];


const latencyData = [
{ region: "US East", latency: 45 },
{ region: "US West", latency: 52 },
{ region: "EU West", latency: 38 },
{ region: "Asia Pacific", latency: 78 },
{ region: "South America", latency: 92 }];


const errorLogs = [
{
  id: 1,
  timestamp: "2024-01-15 14:23:12",
  type: "API Error",
  message: "Stripe payment webhook timeout",
  severity: "high",
  status: "resolved"
},
{
  id: 2,
  timestamp: "2024-01-15 11:45:33",
  type: "Database",
  message: "Connection pool exhausted",
  severity: "medium",
  status: "investigating"
},
{
  id: 3,
  timestamp: "2024-01-14 22:15:09",
  type: "API Error",
  message: "OpenAI rate limit exceeded",
  severity: "high",
  status: "resolved"
},
{
  id: 4,
  timestamp: "2024-01-14 18:32:41",
  type: "System",
  message: "High memory usage detected",
  severity: "low",
  status: "monitoring"
}];


const incidents = [
{
  id: 1,
  title: "Payment Processing Delays",
  date: "2024-01-15",
  duration: "23 minutes",
  impact: "15 users affected",
  status: "resolved"
},
{
  id: 2,
  title: "API Slowdown",
  date: "2024-01-12",
  duration: "1.2 hours",
  impact: "234 users affected",
  status: "resolved"
},
{
  id: 3,
  title: "Email Service Outage",
  date: "2024-01-08",
  duration: "45 minutes",
  impact: "All users affected",
  status: "resolved"
}];


const systemAlerts = [
{ type: "Billing", message: "3 failed payment attempts in last hour", time: "5 minutes ago", severity: "high" },
{ type: "API", message: "OpenAI API response time increased by 40%", time: "23 minutes ago", severity: "medium" },
{ type: "Database", message: "Connection pool at 85% capacity", time: "1 hour ago", severity: "low" }];


export default function SystemHealth() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "System Health & Operations" }),
        _jsx("p", { className: "text-muted-foreground", children: "Monitor system performance and incidents" })] }
      ),

      _jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Current Uptime" }),
                _jsx("p", { className: "text-3xl font-bold text-green-600", children: "99.97%" })] }
              ),
              _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Avg Response Time" }),
                _jsx("p", { className: "text-3xl font-bold", children: "52ms" })] }
              ),
              _jsx(Activity, { className: "h-8 w-8 text-primary" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Active Incidents" }),
                _jsx("p", { className: "text-3xl font-bold", children: "0" })] }
              ),
              _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Error Rate" }),
                _jsx("p", { className: "text-3xl font-bold", children: "0.03%" })] }
              ),
              _jsx(AlertCircle, { className: "h-8 w-8 text-primary" })] }
            ) }
          ) }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Uptime History (Last 30 Days)" }) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(LineChart, { data: uptimeData, children: [
                _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
                _jsx(XAxis, { dataKey: "date", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(YAxis, { domain: [99, 100], stroke: "hsl(var(--muted-foreground))" }),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                ),
                _jsx(Line, { type: "monotone", dataKey: "uptime", stroke: "hsl(142 76% 36%)", strokeWidth: 2 })] }
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Latency by Region" }) }
          ),
          _jsx(CardContent, { children:
            _jsx(ResponsiveContainer, { width: "100%", height: 300, children:
              _jsxs(BarChart, { data: latencyData, children: [
                _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "hsl(var(--border))" }),
                _jsx(XAxis, { dataKey: "region", stroke: "hsl(var(--muted-foreground))" }),
                _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))" }),
                _jsx(Tooltip, {
                  contentStyle: {
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  } }
                ),
                _jsx(Bar, { dataKey: "latency", fill: "hsl(var(--primary))", radius: [4, 4, 0, 0] })] }
              ) }
            ) }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(AlertCircle, { className: "h-5 w-5 text-primary" }), "System Alerts"] }

          ) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-3", children:
            systemAlerts.map((alert, idx) =>
            _jsx("div", {

              className: `p-4 rounded-lg border-2 ${
              alert.severity === "high" ?
              "border-red-200 bg-red-50" :
              alert.severity === "medium" ?
              "border-yellow-200 bg-yellow-50" :
              "border-blue-200 bg-blue-50"}`, children:


              _jsx("div", { className: "flex items-start justify-between", children:
                _jsxs("div", { children: [
                  _jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    _jsx(Badge, { variant: alert.severity === "high" ? "destructive" : "default", children: alert.type }),
                    _jsx("span", { className: "text-sm text-muted-foreground", children: alert.time })] }
                  ),
                  _jsx("p", { className: "font-medium", children: alert.message })] }
                ) }
              ) }, idx
            )
            ) }
          ) }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Error Logs" }) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-3", children:
            errorLogs.map((log) =>
            _jsxs("div", { className: "p-4 rounded-lg border border-border", children: [
              _jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                _jsxs("div", { className: "flex items-center gap-2", children: [
                  _jsx(Badge, { variant: log.severity === "high" ? "destructive" : "default", children: log.type }),
                  _jsx(Badge, { variant: log.status === "resolved" ? "default" : "secondary", children: log.status })] }
                ),
                _jsxs("span", { className: "text-sm text-muted-foreground flex items-center gap-1", children: [
                  _jsx(Clock, { className: "h-4 w-4" }),
                  log.timestamp] }
                )] }
              ),
              _jsx("p", { className: "text-sm", children: log.message })] }, log.id
            )
            ) }
          ) }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Incident Reports" }) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-3", children:
            incidents.map((incident) =>
            _jsxs("div", { className: "p-4 rounded-lg border border-border", children: [
              _jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                _jsxs("div", { children: [
                  _jsx("h3", { className: "font-semibold", children: incident.title }),
                  _jsx("p", { className: "text-sm text-muted-foreground", children: incident.date })] }
                ),
                _jsx(Badge, { variant: incident.status === "resolved" ? "default" : "destructive", children:
                  incident.status }
                )] }
              ),
              _jsxs("div", { className: "grid grid-cols-2 gap-4 mt-3", children: [
                _jsxs("div", { children: [
                  _jsx("p", { className: "text-sm text-muted-foreground", children: "Duration" }),
                  _jsx("p", { className: "font-medium", children: incident.duration })] }
                ),
                _jsxs("div", { children: [
                  _jsx("p", { className: "text-sm text-muted-foreground", children: "Impact" }),
                  _jsx("p", { className: "font-medium", children: incident.impact })] }
                )] }
              )] }, incident.id
            )
            ) }
          ) }
        )] }
      )] }
    ));

}