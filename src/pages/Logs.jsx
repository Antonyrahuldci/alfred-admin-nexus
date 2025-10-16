import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Eye, AlertTriangle, Info, Bug, XCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Pagination from "@/components/Pagination/Pagination.jsx";
import apiFunctions from "../api/apiFunctions";

const getLogLevelColorClass = (level) => {
  switch (level) {
    case "ERROR":
      return "bg-red-100 text-red-800 hover:bg-red-200 border-red-200";
    case "WARN":
    case "WARNING":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200";
    case "INFO":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200";
    case "DEBUG":
      return "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200";
    default:
      return "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border-neutral-200";
  }
};

const getLogLevelIcon = (level) => {
  switch (level) {
    case "ERROR":
      return <XCircle className="h-4 w-4 text-red-600" />;
    case "WARN":
    case "WARNING":
      return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
    case "INFO":
      return <Info className="h-4 w-4 text-blue-600" />;
    case "DEBUG":
      return <Bug className="h-4 w-4 text-gray-600" />;
    default:
      return <Info className="h-4 w-4 text-gray-600" />;
  }
};

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedLog, setSelectedLog] = useState(null);

  // Mock data for demonstration
  const mockLogs = [
    {
      id: "error-2025-10.log-347",
      timestamp: "2025-10-15 11:56:05",
      level: "ERROR",
      message: "Internal Server Error: [\"[object Object]\"]",
      file: "error-2025-10.log",
      lineNumber: 348
    },
    {
      id: "error-2025-10.log-348",
      timestamp: "2025-10-15 11:55:32",
      level: "WARN",
      message: "Database connection timeout",
      file: "app-2025-10.log",
      lineNumber: 1250
    },
    {
      id: "error-2025-10.log-349",
      timestamp: "2025-10-15 11:54:18",
      level: "INFO",
      message: "User login successful",
      file: "auth-2025-10.log",
      lineNumber: 892
    },
    {
      id: "error-2025-10.log-350",
      timestamp: "2025-10-15 11:53:45",
      level: "ERROR",
      message: "Payment processing failed",
      file: "payment-2025-10.log",
      lineNumber: 456
    },
    {
      id: "error-2025-10.log-351",
      timestamp: "2025-10-15 11:52:12",
      level: "DEBUG",
      message: "API request processed",
      file: "api-2025-10.log",
      lineNumber: 2341
    },
    {
      id: "error-2025-10.log-352",
      timestamp: "2025-10-15 11:51:28",
      level: "WARN",
      message: "Memory usage high: 85%",
      file: "system-2025-10.log",
      lineNumber: 156
    },
    {
      id: "error-2025-10.log-353",
      timestamp: "2025-10-15 11:50:55",
      level: "ERROR",
      message: "Failed to send email notification",
      file: "notification-2025-10.log",
      lineNumber: 789
    },
    {
      id: "error-2025-10.log-354",
      timestamp: "2025-10-15 11:49:33",
      level: "INFO",
      message: "Backup completed successfully",
      file: "backup-2025-10.log",
      lineNumber: 445
    }
  ];

  const fetchLogs = async (page = 1, limit = 10) => {
    try {
      setLoading(true);
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, use mock data. Replace with actual API call later:
      // const response = await apiFunctions.getLogs(page, limit);
      
      setLogs(mockLogs);
      setTotalPages(1);
      setTotalRecords(mockLogs.length);
    } catch (err) {
      console.log("Error fetching logs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs(currentPage, itemsPerPage);
  }, [currentPage]);

  const filteredAndSortedLogs = logs
    .filter((log) => {
      const matchesSearch =
        log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.file.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.id.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLevel =
        levelFilter === "all" || log.level.toLowerCase() === levelFilter.toLowerCase();

      return matchesSearch && matchesLevel;
    })
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Logs</h1>
          <p className="text-muted-foreground">
            Monitor and analyze system logs and errors
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search logs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Log Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="debug">Debug</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={() => fetchLogs(currentPage, itemsPerPage)}>
              Refresh Logs
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <Table>
              <TableHeader className="Tabel_Head">
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Line</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 8 }).map((_, idx) => (
                  <TableRow key={idx}>
                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-64" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-8 rounded-full" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table>
              <TableHeader className="Tabel_Head">
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Line</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAndSortedLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-sm">
                      {log.timestamp}
                    </TableCell>
                    <TableCell>
                      <Badge className={`TabelCell ${getLogLevelColorClass(log.level)}`}>
                        <div className="flex items-center gap-1">
                          {getLogLevelIcon(log.level)}
                          {log.level}
                        </div>
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate">
                      {log.message}
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {log.file}
                    </TableCell>
                    <TableCell className="text-center">
                      {log.lineNumber}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedLog(log)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Log Details</DialogTitle>
                          </DialogHeader>
                          {selectedLog && (
                            <div className="space-y-4 mt-4">
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Log ID
                                  </p>
                                  <p className="text-sm font-mono">{selectedLog.id}</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Timestamp
                                  </p>
                                  <p className="text-sm">{selectedLog.timestamp}</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Level
                                  </p>
                                  <Badge className={`TabelCell ${getLogLevelColorClass(selectedLog.level)}`}>
                                    <div className="flex items-center gap-1">
                                      {getLogLevelIcon(selectedLog.level)}
                                      {selectedLog.level}
                                    </div>
                                  </Badge>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    File
                                  </p>
                                  <p className="text-sm font-mono">{selectedLog.file}</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-sm font-medium text-muted-foreground">
                                    Line Number
                                  </p>
                                  <p className="text-sm">{selectedLog.lineNumber}</p>
                                </div>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                  Message
                                </p>
                                <div className="rounded-lg border border-border p-3 bg-muted/50">
                                  <p className="text-sm font-mono whitespace-pre-wrap">
                                    {selectedLog.message}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

