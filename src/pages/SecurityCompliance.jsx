import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, UserCheck, Download, AlertTriangle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const accessLogs = [
{
  id: 1,
  user: "john.doe@email.com",
  action: "Login",
  ip: "192.168.1.45",
  location: "New York, US",
  timestamp: "2024-01-15 14:23:12",
  status: "success"
},
{
  id: 2,
  user: "sarah.wilson@email.com",
  action: "Failed Login",
  ip: "85.234.12.89",
  location: "London, UK",
  timestamp: "2024-01-15 14:15:33",
  status: "failed"
},
{
  id: 3,
  user: "mike.johnson@email.com",
  action: "Logout",
  ip: "192.168.1.67",
  location: "Toronto, CA",
  timestamp: "2024-01-15 13:45:09",
  status: "success"
},
{
  id: 4,
  user: "emma.brown@email.com",
  action: "Login",
  ip: "203.45.123.78",
  location: "Sydney, AU",
  timestamp: "2024-01-15 12:32:41",
  status: "success"
}];


const roleChanges = [
{
  id: 1,
  user: "alex.davis@email.com",
  changedBy: "admin@simbli.com",
  from: "User",
  to: "Admin",
  timestamp: "2024-01-14 16:45:00"
},
{
  id: 2,
  user: "julia.martinez@email.com",
  changedBy: "admin@simbli.com",
  from: "User",
  to: "Moderator",
  timestamp: "2024-01-12 11:30:00"
}];


const dataExports = [
{
  id: 1,
  user: "chris.lee@email.com",
  type: "Full Account Data",
  requestDate: "2024-01-15",
  completedDate: "2024-01-15",
  status: "completed"
},
{
  id: 2,
  user: "taylor.smith@email.com",
  type: "Usage History",
  requestDate: "2024-01-14",
  completedDate: "2024-01-14",
  status: "completed"
},
{
  id: 3,
  user: "morgan.jones@email.com",
  type: "Full Account Data",
  requestDate: "2024-01-15",
  completedDate: null,
  status: "processing"
}];


const privacyRequests = [
{
  id: 1,
  user: "user1234@email.com",
  type: "Data Deletion",
  requestDate: "2024-01-14",
  completedDate: "2024-01-15",
  status: "completed"
},
{
  id: 2,
  user: "user5678@email.com",
  type: "Data Export",
  requestDate: "2024-01-15",
  completedDate: null,
  status: "pending"
}];


const complianceChecks = [
{ category: "GDPR Compliance", status: "compliant", lastCheck: "2024-01-15" },
{ category: "SOC 2 Type II", status: "compliant", lastCheck: "2024-01-10" },
{ category: "Data Encryption", status: "compliant", lastCheck: "2024-01-15" },
{ category: "Access Controls", status: "compliant", lastCheck: "2024-01-14" },
{ category: "Backup & Recovery", status: "compliant", lastCheck: "2024-01-12" }];


export default function SecurityCompliance() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Security & Compliance" }),
        _jsx("p", { className: "text-muted-foreground", children: "Monitor access logs and compliance status" })] }
      ),

      _jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Failed Login Attempts" }),
                _jsx("p", { className: "text-3xl font-bold", children: "12" }),
                _jsx("p", { className: "text-xs text-muted-foreground", children: "Last 24 hours" })] }
              ),
              _jsx(AlertTriangle, { className: "h-8 w-8 text-destructive" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Active Sessions" }),
                _jsx("p", { className: "text-3xl font-bold", children: "892" })] }
              ),
              _jsx(UserCheck, { className: "h-8 w-8 text-primary" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Data Export Requests" }),
                _jsx("p", { className: "text-3xl font-bold", children: "3" }),
                _jsx("p", { className: "text-xs text-muted-foreground", children: "Pending: 1" })] }
              ),
              _jsx(Download, { className: "h-8 w-8 text-primary" })] }
            ) }
          ) }
        ),
        _jsx(Card, { children:
          _jsx(CardContent, { className: "p-6", children:
            _jsxs("div", { className: "flex items-start justify-between", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Compliance Status" }),
                _jsx("p", { className: "text-3xl font-bold text-green-600", children: "100%" })] }
              ),
              _jsx(Shield, { className: "h-8 w-8 text-green-600" })] }
            ) }
          ) }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs("div", { className: "flex items-center justify-between", children: [
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(UserCheck, { className: "h-5 w-5 text-primary" }), "User Access Logs"] }

            ),
            _jsxs("div", { className: "flex gap-2", children: [
              _jsx(Input, { placeholder: "Search logs...", className: "w-64" }),
              _jsx(Button, { variant: "outline", children: "Export" })] }
            )] }
          ) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-3", children:
            accessLogs.map((log) =>
            _jsx("div", { className: "p-4 rounded-lg border border-border", children:
              _jsx("div", { className: "flex items-start justify-between", children:
                _jsxs("div", { className: "flex-1", children: [
                  _jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    _jsx("p", { className: "font-medium", children: log.user }),
                    _jsx(Badge, { variant: log.status === "success" ? "default" : "destructive", children:
                      log.action }
                    )] }
                  ),
                  _jsxs("div", { className: "grid grid-cols-3 gap-4 text-sm text-muted-foreground", children: [
                    _jsxs("div", { children: [
                      _jsx("span", { className: "font-medium", children: "IP:" }), " ", log.ip] }
                    ),
                    _jsxs("div", { children: [
                      _jsx("span", { className: "font-medium", children: "Location:" }), " ", log.location] }
                    ),
                    _jsxs("div", { children: [
                      _jsx("span", { className: "font-medium", children: "Time:" }), " ", log.timestamp] }
                    )] }
                  )] }
                ) }
              ) }, log.id
            )
            ) }
          ) }
        )] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Role Change History" }) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-3", children:
              roleChanges.map((change) =>
              _jsxs("div", { className: "p-4 rounded-lg border border-border", children: [
                _jsx("p", { className: "font-medium mb-2", children: change.user }),
                _jsxs("div", { className: "flex items-center gap-2 text-sm mb-2", children: [
                  _jsx(Badge, { variant: "outline", children: change.from }),
                  _jsx("span", { children: "\u2192" }),
                  _jsx(Badge, { children: change.to })] }
                ),
                _jsxs("div", { className: "text-sm text-muted-foreground", children: [
                  _jsxs("p", { children: ["Changed by: ", change.changedBy] }),
                  _jsx("p", { children: change.timestamp })] }
                )] }, change.id
              )
              ) }
            ) }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(Download, { className: "h-5 w-5 text-primary" }), "Data Export Logs"] }

            ) }
          ),
          _jsx(CardContent, { children:
            _jsx("div", { className: "space-y-3", children:
              dataExports.map((export_) =>
              _jsxs("div", { className: "p-4 rounded-lg border border-border", children: [
                _jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  _jsxs("div", { children: [
                    _jsx("p", { className: "font-medium", children: export_.user }),
                    _jsx("p", { className: "text-sm text-muted-foreground", children: export_.type })] }
                  ),
                  _jsx(Badge, { variant: export_.status === "completed" ? "default" : "secondary", children:
                    export_.status }
                  )] }
                ),
                _jsxs("div", { className: "text-sm text-muted-foreground", children: [
                  _jsxs("p", { children: ["Requested: ", export_.requestDate] }),
                  export_.completedDate && _jsxs("p", { children: ["Completed: ", export_.completedDate] })] }
                )] }, export_.id
              )
              ) }
            ) }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Privacy Requests" }) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-3", children:
            privacyRequests.map((request) =>
            _jsx("div", { className: "p-4 rounded-lg border border-border", children:
              _jsxs("div", { className: "flex items-start justify-between", children: [
                _jsxs("div", { children: [
                  _jsx("p", { className: "font-medium mb-1", children: request.user }),
                  _jsx("p", { className: "text-sm text-muted-foreground mb-2", children: request.type }),
                  _jsxs("div", { className: "text-sm text-muted-foreground", children: [
                    _jsxs("p", { children: ["Requested: ", request.requestDate] }),
                    request.completedDate && _jsxs("p", { children: ["Completed: ", request.completedDate] })] }
                  )] }
                ),
                _jsx(Badge, { variant: request.status === "completed" ? "default" : "secondary", children:
                  request.status }
                )] }
              ) }, request.id
            )
            ) }
          ) }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Shield, { className: "h-5 w-5 text-primary" }), "Compliance Tracker"] }

          ) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-3", children:
            complianceChecks.map((check, idx) =>
            _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border", children: [
              _jsxs("div", { className: "flex items-center gap-3", children: [
                _jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }),
                _jsxs("div", { children: [
                  _jsx("p", { className: "font-medium", children: check.category }),
                  _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Last checked: ", check.lastCheck] })] }
                )] }
              ),
              _jsx(Badge, { variant: "default", className: "bg-green-600", children:
                check.status }
              )] }, idx
            )
            ) }
          ) }
        )] }
      )] }
    ));

}