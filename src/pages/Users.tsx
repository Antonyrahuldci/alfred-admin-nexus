import { useState } from "react";
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
import { Search, Filter, ArrowUpDown, MoreVertical, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    plan: "Pro",
    joinDate: "2024-01-15",
    lastActive: "2 hours ago",
    wordCount: 125000,
    images: 450,
    serpUsage: 89,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    plan: "Enterprise",
    joinDate: "2023-11-20",
    lastActive: "5 minutes ago",
    wordCount: 450000,
    images: 1200,
    serpUsage: 234,
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike.wilson@email.com",
    plan: "Free",
    joinDate: "2024-05-10",
    lastActive: "1 day ago",
    wordCount: 15000,
    images: 25,
    serpUsage: 12,
  },
  {
    id: 4,
    name: "Sarah Jones",
    email: "sarah.jones@email.com",
    plan: "Pro",
    joinDate: "2024-02-28",
    lastActive: "3 hours ago",
    wordCount: 275000,
    images: 680,
    serpUsage: 145,
  },
];

const userActivityData = [
  { day: "Mon", words: 5000, images: 15 },
  { day: "Tue", words: 7200, images: 22 },
  { day: "Wed", words: 6800, images: 19 },
  { day: "Thu", words: 9100, images: 28 },
  { day: "Fri", words: 8500, images: 25 },
  { day: "Sat", words: 4200, images: 12 },
  { day: "Sun", words: 3800, images: 10 },
];

export default function Users() {
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">Manage and monitor all platform users</p>
        </div>
        <Button>Add User</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filters & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search users..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Plan Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Activity Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="words-desc">Words (High to Low)</SelectItem>
                <SelectItem value="words-asc">Words (Low to High)</SelectItem>
                <SelectItem value="images-desc">Images (High to Low)</SelectItem>
                <SelectItem value="images-asc">Images (Low to High)</SelectItem>
                <SelectItem value="serp-desc">SERP (High to Low)</SelectItem>
                <SelectItem value="serp-asc">SERP (Low to High)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {selectedUsers.length > 0 && (
        <Card className="border-primary">
          <CardContent className="flex items-center justify-between p-4">
            <span className="text-sm font-medium">
              {selectedUsers.length} user(s) selected
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Activate
              </Button>
              <Button variant="outline" size="sm">
                Suspend
              </Button>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedUsers.length === mockUsers.length}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedUsers(mockUsers.map((u) => u.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Words</TableHead>
                <TableHead className="text-right">Images</TableHead>
                <TableHead className="text-right">SERP</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onCheckedChange={() => toggleUserSelection(user.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.plan === "Enterprise"
                          ? "default"
                          : user.plan === "Pro"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {user.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                  <TableCell className="text-right font-mono">
                    {user.wordCount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-mono">{user.images}</TableCell>
                  <TableCell className="text-right font-mono">{user.serpUsage}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedUser(user)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>User Details: {user.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-muted-foreground">Email</p>
                              <p className="text-sm">{user.email}</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-muted-foreground">Plan</p>
                              <Badge>{user.plan}</Badge>
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-muted-foreground">
                                Join Date
                              </p>
                              <p className="text-sm">{user.joinDate}</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-muted-foreground">
                                Last Active
                              </p>
                              <p className="text-sm">{user.lastActive}</p>
                            </div>
                          </div>

                          <div>
                            <h3 className="mb-4 text-lg font-semibold">Usage Trends</h3>
                            <ResponsiveContainer width="100%" height={200}>
                              <LineChart data={userActivityData}>
                                <CartesianGrid
                                  strokeDasharray="3 3"
                                  stroke="hsl(var(--border))"
                                />
                                <XAxis
                                  dataKey="day"
                                  stroke="hsl(var(--muted-foreground))"
                                />
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
                                  dataKey="words"
                                  stroke="hsl(var(--primary))"
                                  strokeWidth={2}
                                />
                                <Line
                                  type="monotone"
                                  dataKey="images"
                                  stroke="hsl(var(--success))"
                                  strokeWidth={2}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>

                          <div>
                            <h3 className="mb-3 text-lg font-semibold">Recent Actions</h3>
                            <div className="space-y-2">
                              {[
                                "Generated 5,000 words of content",
                                "Created 15 AI images",
                                "Completed 8 SERP analyses",
                                "Exported 3 documents",
                              ].map((action, i) => (
                                <div
                                  key={i}
                                  className="flex items-center justify-between rounded-lg border border-border p-3"
                                >
                                  <span className="text-sm">{action}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {i + 1} day{i > 0 ? "s" : ""} ago
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline">Suspend User</Button>
                            <Button variant="outline">Reset Password</Button>
                            <Button>Upgrade Plan</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
