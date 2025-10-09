import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Download, Search, Calendar } from "lucide-react";

const availableReports = [
  { name: "User Activity Report", description: "Detailed user engagement metrics", type: "CSV" },
  { name: "Revenue Summary", description: "Monthly revenue breakdown", type: "PDF" },
  { name: "Feature Usage", description: "Platform feature adoption", type: "XLSX" },
  { name: "Performance Metrics", description: "System performance data", type: "CSV" },
];

const auditLogs = [
  {
    id: 1,
    admin: "admin@simbli.com",
    action: "Updated user role",
    target: "john.doe@email.com",
    timestamp: "2024-10-08 14:32",
    status: "Success",
  },
  {
    id: 2,
    admin: "manager@simbli.com",
    action: "Created new plan",
    target: "Enterprise Plus",
    timestamp: "2024-10-08 13:15",
    status: "Success",
  },
  {
    id: 3,
    admin: "admin@simbli.com",
    action: "Suspended user",
    target: "spam@email.com",
    timestamp: "2024-10-08 12:45",
    status: "Success",
  },
  {
    id: 4,
    admin: "support@simbli.com",
    action: "Reset password",
    target: "jane.smith@email.com",
    timestamp: "2024-10-08 11:30",
    status: "Success",
  },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Reports & Audit Logs</h1>
        <p className="text-muted-foreground">
          Export data and track all administrative actions
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-primary" />
            Export Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date-from">From Date</Label>
              <Input id="date-from" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-to">To Date</Label>
              <Input id="date-to" type="date" />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {availableReports.map((report, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  {report.type}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Audit Logs</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search logs..." className="w-64 pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="user">User Actions</SelectItem>
                  <SelectItem value="plan">Plan Changes</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Admin</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.admin}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell className="font-mono text-sm">{log.target}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {log.timestamp}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={log.status === "Success" ? "default" : "destructive"}
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
