import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { FileText, Image, Search, Clock, CheckCircle, XCircle } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const tasks = [
{
  id: 1,
  user: "john.doe@email.com",
  type: "Text Generation",
  description: "Blog article: AI trends 2024",
  status: "Completed",
  duration: "2.3s",
  timestamp: "2024-10-08 14:32"
},
{
  id: 2,
  user: "jane.smith@email.com",
  type: "Image Generation",
  description: "Product mockup: Coffee mug design",
  status: "Running",
  duration: "5.1s",
  timestamp: "2024-10-08 14:30"
},
{
  id: 3,
  user: "mike.wilson@email.com",
  type: "SERP Lookup",
  description: "Keyword analysis: 'best laptops'",
  status: "Completed",
  duration: "1.8s",
  timestamp: "2024-10-08 14:28"
},
{
  id: 4,
  user: "sarah.jones@email.com",
  type: "Text Generation",
  description: "Email campaign copy",
  status: "Failed",
  duration: "0.5s",
  timestamp: "2024-10-08 14:25"
},
{
  id: 5,
  user: "alex.brown@email.com",
  type: "Image Generation",
  description: "Social media graphics: 4 variations",
  status: "Completed",
  duration: "8.7s",
  timestamp: "2024-10-08 14:20"
}];


const getTaskIcon = (type) => {
  switch (type) {
    case "Text Generation":
      return _jsx(FileText, { className: "h-4 w-4" });
    case "Image Generation":
      return _jsx(Image, { className: "h-4 w-4" });
    case "SERP Lookup":
      return _jsx(Search, { className: "h-4 w-4" });
    default:
      return _jsx(FileText, { className: "h-4 w-4" });
  }
};

const getStatusBadge = (status) => {
  switch (status) {
    case "Completed":
      return (
        _jsxs(Badge, { className: "flex items-center gap-1", variant: "default", children: [
          _jsx(CheckCircle, { className: "h-3 w-3" }), "Completed"] }

        ));

    case "Running":
      return (
        _jsxs(Badge, { className: "flex items-center gap-1 bg-warning text-warning-foreground", children: [
          _jsx(Clock, { className: "h-3 w-3" }), "Running"] }

        ));

    case "Failed":
      return (
        _jsxs(Badge, { className: "flex items-center gap-1", variant: "destructive", children: [
          _jsx(XCircle, { className: "h-3 w-3" }), "Failed"] }

        ));

    default:
      return _jsx(Badge, { variant: "secondary", children: status });
  }
};

export default function Tasks() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { className: "flex items-center justify-between", children: [
        _jsxs("div", { children: [
          _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Tasks & Workflows" }),
          _jsx("p", { className: "text-muted-foreground", children: "Monitor all user-initiated AI operations" })] }
        ),
        _jsx(Button, { children: "View Logs" })] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Filter Tasks" }) }
        ),
        _jsx(CardContent, { children:
          _jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
            _jsxs(Select, { children: [
              _jsx(SelectTrigger, { children:
                _jsx(SelectValue, { placeholder: "Task Type" }) }
              ),
              _jsxs(SelectContent, { children: [
                _jsx(SelectItem, { value: "all", children: "All Types" }),
                _jsx(SelectItem, { value: "text", children: "Text Generation" }),
                _jsx(SelectItem, { value: "image", children: "Image Generation" }),
                _jsx(SelectItem, { value: "serp", children: "SERP Lookup" })] }
              )] }
            ),
            _jsxs(Select, { children: [
              _jsx(SelectTrigger, { children:
                _jsx(SelectValue, { placeholder: "Status" }) }
              ),
              _jsxs(SelectContent, { children: [
                _jsx(SelectItem, { value: "all", children: "All Statuses" }),
                _jsx(SelectItem, { value: "running", children: "Running" }),
                _jsx(SelectItem, { value: "completed", children: "Completed" }),
                _jsx(SelectItem, { value: "failed", children: "Failed" })] }
              )] }
            ),
            _jsxs(Select, { children: [
              _jsx(SelectTrigger, { children:
                _jsx(SelectValue, { placeholder: "Time Range" }) }
              ),
              _jsxs(SelectContent, { children: [
                _jsx(SelectItem, { value: "today", children: "Today" }),
                _jsx(SelectItem, { value: "week", children: "This Week" }),
                _jsx(SelectItem, { value: "month", children: "This Month" })] }
              )] }
            )] }
          ) }
        )] }
      ),

      _jsx(Card, { children:
        _jsx(CardContent, { className: "p-0", children:
          _jsxs(Table, { children: [
            _jsx(TableHeader, { children:
              _jsxs(TableRow, { children: [
                _jsx(TableHead, { className: "w-12" }),
                _jsx(TableHead, { children: "User" }),
                _jsx(TableHead, { children: "Type" }),
                _jsx(TableHead, { children: "Description" }),
                _jsx(TableHead, { children: "Status" }),
                _jsx(TableHead, { children: "Duration" }),
                _jsx(TableHead, { children: "Timestamp" }),
                _jsx(TableHead, { className: "w-24" })] }
              ) }
            ),
            _jsx(TableBody, { children:
              tasks.map((task) =>
              _jsxs(TableRow, { children: [
                _jsx(TableCell, { children: getTaskIcon(task.type) }),
                _jsx(TableCell, { className: "font-medium", children: task.user }),
                _jsx(TableCell, { children:
                  _jsx(Badge, { variant: "secondary", children: task.type }) }
                ),
                _jsx(TableCell, { className: "max-w-xs truncate", children: task.description }),
                _jsx(TableCell, { children: getStatusBadge(task.status) }),
                _jsx(TableCell, { className: "font-mono text-sm", children: task.duration }),
                _jsx(TableCell, { className: "text-sm text-muted-foreground", children:
                  task.timestamp }
                ),
                _jsx(TableCell, { children:
                  _jsx(Button, { variant: "ghost", size: "sm", children: "View Details" }

                  ) }
                )] }, task.id
              )
              ) }
            )] }
          ) }
        ) }
      )] }
    ));

}