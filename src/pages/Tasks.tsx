import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { FileText, Image, Search, Clock, CheckCircle, XCircle } from "lucide-react";

const tasks = [
  {
    id: 1,
    user: "john.doe@email.com",
    type: "Text Generation",
    description: "Blog article: AI trends 2024",
    status: "Completed",
    duration: "2.3s",
    timestamp: "2024-10-08 14:32",
  },
  {
    id: 2,
    user: "jane.smith@email.com",
    type: "Image Generation",
    description: "Product mockup: Coffee mug design",
    status: "Running",
    duration: "5.1s",
    timestamp: "2024-10-08 14:30",
  },
  {
    id: 3,
    user: "mike.wilson@email.com",
    type: "SERP Lookup",
    description: "Keyword analysis: 'best laptops'",
    status: "Completed",
    duration: "1.8s",
    timestamp: "2024-10-08 14:28",
  },
  {
    id: 4,
    user: "sarah.jones@email.com",
    type: "Text Generation",
    description: "Email campaign copy",
    status: "Failed",
    duration: "0.5s",
    timestamp: "2024-10-08 14:25",
  },
  {
    id: 5,
    user: "alex.brown@email.com",
    type: "Image Generation",
    description: "Social media graphics: 4 variations",
    status: "Completed",
    duration: "8.7s",
    timestamp: "2024-10-08 14:20",
  },
];

const getTaskIcon = (type: string) => {
  switch (type) {
    case "Text Generation":
      return <FileText className="h-4 w-4" />;
    case "Image Generation":
      return <Image className="h-4 w-4" />;
    case "SERP Lookup":
      return <Search className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return (
        <Badge className="flex items-center gap-1" variant="default">
          <CheckCircle className="h-3 w-3" />
          Completed
        </Badge>
      );
    case "Running":
      return (
        <Badge className="flex items-center gap-1 bg-warning text-warning-foreground">
          <Clock className="h-3 w-3" />
          Running
        </Badge>
      );
    case "Failed":
      return (
        <Badge className="flex items-center gap-1" variant="destructive">
          <XCircle className="h-3 w-3" />
          Failed
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function Tasks() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tasks & Workflows</h1>
          <p className="text-muted-foreground">Monitor all user-initiated AI operations</p>
        </div>
        <Button>View Logs</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Task Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="text">Text Generation</SelectItem>
                <SelectItem value="image">Image Generation</SelectItem>
                <SelectItem value="serp">SERP Lookup</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="running">Running</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead className="w-24"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{getTaskIcon(task.type)}</TableCell>
                  <TableCell className="font-medium">{task.user}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{task.type}</Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">{task.description}</TableCell>
                  <TableCell>{getStatusBadge(task.status)}</TableCell>
                  <TableCell className="font-mono text-sm">{task.duration}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {task.timestamp}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
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
