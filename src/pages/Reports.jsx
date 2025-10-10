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
  SelectValue } from
"@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from
"@/components/ui/table";
import { FileText, Download, Search } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const availableReports = [
{ name: "User Activity Report", description: "Detailed user engagement metrics", type: "CSV" },
{ name: "Revenue Summary", description: "Monthly revenue breakdown", type: "PDF" },
{ name: "Feature Usage", description: "Platform feature adoption", type: "XLSX" },
{ name: "Performance Metrics", description: "System performance data", type: "CSV" }];


const auditLogs = [
{
  id: 1,
  admin: "admin@simbli.com",
  action: "Updated user role",
  target: "john.doe@email.com",
  timestamp: "2024-10-08 14:32",
  status: "Success"
},
{
  id: 2,
  admin: "manager@simbli.com",
  action: "Created new plan",
  target: "Enterprise Plus",
  timestamp: "2024-10-08 13:15",
  status: "Success"
},
{
  id: 3,
  admin: "admin@simbli.com",
  action: "Suspended user",
  target: "spam@email.com",
  timestamp: "2024-10-08 12:45",
  status: "Success"
},
{
  id: 4,
  admin: "support@simbli.com",
  action: "Reset password",
  target: "jane.smith@email.com",
  timestamp: "2024-10-08 11:30",
  status: "Success"
}];


export default function Reports() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Reports & Audit Logs" }),
        _jsx("p", { className: "text-muted-foreground", children: "Export data and track all administrative actions" }

        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Download, { className: "h-5 w-5 text-primary" }), "Export Reports"] }

          ) }
        ),
        _jsxs(CardContent, { className: "space-y-4", children: [
          _jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            _jsxs("div", { className: "space-y-2", children: [
              _jsx(Label, { htmlFor: "date-from", children: "From Date" }),
              _jsx(Input, { id: "date-from", type: "date" })] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx(Label, { htmlFor: "date-to", children: "To Date" }),
              _jsx(Input, { id: "date-to", type: "date" })] }
            )] }
          ),

          _jsx("div", { className: "grid gap-3 md:grid-cols-2", children:
            availableReports.map((report, i) =>
            _jsxs("div", {

              className: "flex items-center justify-between rounded-lg border border-border p-4", children: [

              _jsxs("div", { className: "flex items-start gap-3", children: [
                _jsx(FileText, { className: "h-5 w-5 text-primary" }),
                _jsxs("div", { children: [
                  _jsx("p", { className: "font-medium", children: report.name }),
                  _jsx("p", { className: "text-sm text-muted-foreground", children: report.description })] }
                )] }
              ),
              _jsxs(Button, { variant: "outline", size: "sm", children: [
                _jsx(Download, { className: "mr-2 h-4 w-4" }),
                report.type] }
              )] }, i
            )
            ) }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs("div", { className: "flex items-center justify-between", children: [
            _jsx(CardTitle, { children: "Audit Logs" }),
            _jsxs("div", { className: "flex gap-2", children: [
              _jsxs("div", { className: "relative", children: [
                _jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
                _jsx(Input, { placeholder: "Search logs...", className: "w-64 pl-10" })] }
              ),
              _jsxs(Select, { children: [
                _jsx(SelectTrigger, { className: "w-36", children:
                  _jsx(SelectValue, { placeholder: "Filter" }) }
                ),
                _jsxs(SelectContent, { children: [
                  _jsx(SelectItem, { value: "all", children: "All Actions" }),
                  _jsx(SelectItem, { value: "user", children: "User Actions" }),
                  _jsx(SelectItem, { value: "plan", children: "Plan Changes" }),
                  _jsx(SelectItem, { value: "system", children: "System" })] }
                )] }
              )] }
            )] }
          ) }
        ),
        _jsx(CardContent, { className: "p-0", children:
          _jsxs(Table, { children: [
            _jsx(TableHeader, { children:
              _jsxs(TableRow, { children: [
                _jsx(TableHead, { children: "Admin" }),
                _jsx(TableHead, { children: "Action" }),
                _jsx(TableHead, { children: "Target" }),
                _jsx(TableHead, { children: "Timestamp" }),
                _jsx(TableHead, { children: "Status" })] }
              ) }
            ),
            _jsx(TableBody, { children:
              auditLogs.map((log) =>
              _jsxs(TableRow, { children: [
                _jsx(TableCell, { className: "font-medium", children: log.admin }),
                _jsx(TableCell, { children: log.action }),
                _jsx(TableCell, { className: "font-mono text-sm", children: log.target }),
                _jsx(TableCell, { className: "text-sm text-muted-foreground", children:
                  log.timestamp }
                ),
                _jsx(TableCell, { children:
                  _jsx(Badge, {
                    variant: log.status === "Success" ? "default" : "destructive", children:

                    log.status }
                  ) }
                )] }, log.id
              )
              ) }
            )] }
          ) }
        )] }
      )] }
    ));

}