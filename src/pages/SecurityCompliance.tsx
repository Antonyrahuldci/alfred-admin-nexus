import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, UserCheck, Download, AlertTriangle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const accessLogs = [
  {
    id: 1,
    user: "john.doe@email.com",
    action: "Login",
    ip: "192.168.1.45",
    location: "New York, US",
    timestamp: "2024-01-15 14:23:12",
    status: "success",
  },
  {
    id: 2,
    user: "sarah.wilson@email.com",
    action: "Failed Login",
    ip: "85.234.12.89",
    location: "London, UK",
    timestamp: "2024-01-15 14:15:33",
    status: "failed",
  },
  {
    id: 3,
    user: "mike.johnson@email.com",
    action: "Logout",
    ip: "192.168.1.67",
    location: "Toronto, CA",
    timestamp: "2024-01-15 13:45:09",
    status: "success",
  },
  {
    id: 4,
    user: "emma.brown@email.com",
    action: "Login",
    ip: "203.45.123.78",
    location: "Sydney, AU",
    timestamp: "2024-01-15 12:32:41",
    status: "success",
  },
];

const roleChanges = [
  {
    id: 1,
    user: "alex.davis@email.com",
    changedBy: "admin@simbli.com",
    from: "User",
    to: "Admin",
    timestamp: "2024-01-14 16:45:00",
  },
  {
    id: 2,
    user: "julia.martinez@email.com",
    changedBy: "admin@simbli.com",
    from: "User",
    to: "Moderator",
    timestamp: "2024-01-12 11:30:00",
  },
];

const dataExports = [
  {
    id: 1,
    user: "chris.lee@email.com",
    type: "Full Account Data",
    requestDate: "2024-01-15",
    completedDate: "2024-01-15",
    status: "completed",
  },
  {
    id: 2,
    user: "taylor.smith@email.com",
    type: "Usage History",
    requestDate: "2024-01-14",
    completedDate: "2024-01-14",
    status: "completed",
  },
  {
    id: 3,
    user: "morgan.jones@email.com",
    type: "Full Account Data",
    requestDate: "2024-01-15",
    completedDate: null,
    status: "processing",
  },
];

const privacyRequests = [
  {
    id: 1,
    user: "user1234@email.com",
    type: "Data Deletion",
    requestDate: "2024-01-14",
    completedDate: "2024-01-15",
    status: "completed",
  },
  {
    id: 2,
    user: "user5678@email.com",
    type: "Data Export",
    requestDate: "2024-01-15",
    completedDate: null,
    status: "pending",
  },
];

const complianceChecks = [
  { category: "GDPR Compliance", status: "compliant", lastCheck: "2024-01-15" },
  { category: "SOC 2 Type II", status: "compliant", lastCheck: "2024-01-10" },
  { category: "Data Encryption", status: "compliant", lastCheck: "2024-01-15" },
  { category: "Access Controls", status: "compliant", lastCheck: "2024-01-14" },
  { category: "Backup & Recovery", status: "compliant", lastCheck: "2024-01-12" },
];

export default function SecurityCompliance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Security & Compliance</h1>
        <p className="text-muted-foreground">Monitor access logs and compliance status</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Failed Login Attempts</p>
                <p className="text-3xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Last 24 hours</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Active Sessions</p>
                <p className="text-3xl font-bold">892</p>
              </div>
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Data Export Requests</p>
                <p className="text-3xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Pending: 1</p>
              </div>
              <Download className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Compliance Status</p>
                <p className="text-3xl font-bold text-green-600">100%</p>
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              User Access Logs
            </CardTitle>
            <div className="flex gap-2">
              <Input placeholder="Search logs..." className="w-64" />
              <Button variant="outline">Export</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {accessLogs.map((log) => (
              <div key={log.id} className="p-4 rounded-lg border border-border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium">{log.user}</p>
                      <Badge variant={log.status === "success" ? "default" : "destructive"}>
                        {log.action}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">IP:</span> {log.ip}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {log.location}
                      </div>
                      <div>
                        <span className="font-medium">Time:</span> {log.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Role Change History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {roleChanges.map((change) => (
                <div key={change.id} className="p-4 rounded-lg border border-border">
                  <p className="font-medium mb-2">{change.user}</p>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <Badge variant="outline">{change.from}</Badge>
                    <span>→</span>
                    <Badge>{change.to}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Changed by: {change.changedBy}</p>
                    <p>{change.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              Data Export Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dataExports.map((export_) => (
                <div key={export_.id} className="p-4 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium">{export_.user}</p>
                      <p className="text-sm text-muted-foreground">{export_.type}</p>
                    </div>
                    <Badge variant={export_.status === "completed" ? "default" : "secondary"}>
                      {export_.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Requested: {export_.requestDate}</p>
                    {export_.completedDate && <p>Completed: {export_.completedDate}</p>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {privacyRequests.map((request) => (
              <div key={request.id} className="p-4 rounded-lg border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium mb-1">{request.user}</p>
                    <p className="text-sm text-muted-foreground mb-2">{request.type}</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Requested: {request.requestDate}</p>
                      {request.completedDate && <p>Completed: {request.completedDate}</p>}
                    </div>
                  </div>
                  <Badge variant={request.status === "completed" ? "default" : "secondary"}>
                    {request.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Compliance Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {complianceChecks.map((check, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">{check.category}</p>
                    <p className="text-sm text-muted-foreground">Last checked: {check.lastCheck}</p>
                  </div>
                </div>
                <Badge variant="default" className="bg-green-600">
                  {check.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
