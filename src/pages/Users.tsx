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
  { id: 1, name: "John Doe", email: "john.doe@email.com", plan: "Pro", joinDate: "2024-01-15", lastActive: "2 hours ago", wordCount: 125000, images: 450, serpUsage: 89 },
  { id: 2, name: "Jane Smith", email: "jane.smith@email.com", plan: "Enterprise", joinDate: "2023-11-20", lastActive: "5 minutes ago", wordCount: 450000, images: 1200, serpUsage: 234 },
  { id: 3, name: "Mike Wilson", email: "mike.wilson@email.com", plan: "Free", joinDate: "2024-05-10", lastActive: "1 day ago", wordCount: 15000, images: 25, serpUsage: 12 },
  { id: 4, name: "Sarah Jones", email: "sarah.jones@email.com", plan: "Pro", joinDate: "2024-02-28", lastActive: "3 hours ago", wordCount: 275000, images: 680, serpUsage: 145 },
  { id: 5, name: "David Brown", email: "david.brown@email.com", plan: "Enterprise", joinDate: "2023-12-05", lastActive: "1 hour ago", wordCount: 380000, images: 950, serpUsage: 198 },
  { id: 6, name: "Emily Davis", email: "emily.davis@email.com", plan: "Pro", joinDate: "2024-03-18", lastActive: "30 minutes ago", wordCount: 195000, images: 520, serpUsage: 112 },
  { id: 7, name: "Chris Martin", email: "chris.martin@email.com", plan: "Free", joinDate: "2024-06-22", lastActive: "5 days ago", wordCount: 8500, images: 15, serpUsage: 7 },
  { id: 8, name: "Amanda White", email: "amanda.white@email.com", plan: "Pro", joinDate: "2024-01-30", lastActive: "4 hours ago", wordCount: 215000, images: 585, serpUsage: 128 },
  { id: 9, name: "Robert Taylor", email: "robert.taylor@email.com", plan: "Enterprise", joinDate: "2023-10-15", lastActive: "15 minutes ago", wordCount: 520000, images: 1450, serpUsage: 276 },
  { id: 10, name: "Lisa Anderson", email: "lisa.anderson@email.com", plan: "Free", joinDate: "2024-07-08", lastActive: "3 days ago", wordCount: 12000, images: 18, serpUsage: 9 },
  { id: 11, name: "James Thomas", email: "james.thomas@email.com", plan: "Pro", joinDate: "2024-02-14", lastActive: "1 hour ago", wordCount: 245000, images: 620, serpUsage: 138 },
  { id: 12, name: "Jessica Moore", email: "jessica.moore@email.com", plan: "Enterprise", joinDate: "2023-09-28", lastActive: "20 minutes ago", wordCount: 475000, images: 1380, serpUsage: 265 },
  { id: 13, name: "Daniel Jackson", email: "daniel.jackson@email.com", plan: "Free", joinDate: "2024-08-01", lastActive: "2 days ago", wordCount: 9500, images: 12, serpUsage: 5 },
  { id: 14, name: "Michelle Lee", email: "michelle.lee@email.com", plan: "Pro", joinDate: "2024-04-05", lastActive: "6 hours ago", wordCount: 185000, images: 495, serpUsage: 105 },
  { id: 15, name: "Kevin Harris", email: "kevin.harris@email.com", plan: "Enterprise", joinDate: "2023-11-10", lastActive: "10 minutes ago", wordCount: 425000, images: 1150, serpUsage: 228 },
  { id: 16, name: "Rachel Clark", email: "rachel.clark@email.com", plan: "Free", joinDate: "2024-06-15", lastActive: "4 days ago", wordCount: 11000, images: 20, serpUsage: 8 },
  { id: 17, name: "Brian Lewis", email: "brian.lewis@email.com", plan: "Pro", joinDate: "2024-03-22", lastActive: "2 hours ago", wordCount: 205000, images: 545, serpUsage: 118 },
  { id: 18, name: "Nicole Walker", email: "nicole.walker@email.com", plan: "Enterprise", joinDate: "2023-08-19", lastActive: "25 minutes ago", wordCount: 495000, images: 1425, serpUsage: 282 },
  { id: 19, name: "Steven Hall", email: "steven.hall@email.com", plan: "Free", joinDate: "2024-07-20", lastActive: "6 days ago", wordCount: 7200, images: 10, serpUsage: 4 },
  { id: 20, name: "Karen Allen", email: "karen.allen@email.com", plan: "Pro", joinDate: "2024-01-25", lastActive: "5 hours ago", wordCount: 235000, images: 605, serpUsage: 132 },
  { id: 21, name: "Gary Young", email: "gary.young@email.com", plan: "Enterprise", joinDate: "2023-12-18", lastActive: "35 minutes ago", wordCount: 410000, images: 1090, serpUsage: 215 },
  { id: 22, name: "Patricia King", email: "patricia.king@email.com", plan: "Free", joinDate: "2024-08-10", lastActive: "8 days ago", wordCount: 6800, images: 8, serpUsage: 3 },
  { id: 23, name: "Timothy Wright", email: "timothy.wright@email.com", plan: "Pro", joinDate: "2024-04-12", lastActive: "1 hour ago", wordCount: 225000, images: 595, serpUsage: 125 },
  { id: 24, name: "Sharon Lopez", email: "sharon.lopez@email.com", plan: "Enterprise", joinDate: "2023-10-30", lastActive: "45 minutes ago", wordCount: 465000, images: 1320, serpUsage: 252 },
  { id: 25, name: "Edward Hill", email: "edward.hill@email.com", plan: "Free", joinDate: "2024-07-28", lastActive: "7 days ago", wordCount: 8900, images: 14, serpUsage: 6 },
  { id: 26, name: "Donna Scott", email: "donna.scott@email.com", plan: "Pro", joinDate: "2024-02-08", lastActive: "3 hours ago", wordCount: 255000, images: 655, serpUsage: 142 },
  { id: 27, name: "Ronald Green", email: "ronald.green@email.com", plan: "Enterprise", joinDate: "2023-09-15", lastActive: "12 minutes ago", wordCount: 505000, images: 1480, serpUsage: 289 },
  { id: 28, name: "Cynthia Adams", email: "cynthia.adams@email.com", plan: "Free", joinDate: "2024-08-22", lastActive: "9 days ago", wordCount: 5500, images: 6, serpUsage: 2 },
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
  const [searchQuery, setSearchQuery] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [activityFilter, setActivityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("words-desc");

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  const isUserActive = (lastActive: string) => {
    const activePatterns = ["minute", "hour", "minutes ago", "hours ago"];
    return activePatterns.some(pattern => lastActive.toLowerCase().includes(pattern));
  };

  const filteredAndSortedUsers = mockUsers
    .filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPlan = planFilter === "all" || user.plan.toLowerCase() === planFilter;
      const matchesActivity = activityFilter === "all" || 
                             (activityFilter === "active" && isUserActive(user.lastActive)) ||
                             (activityFilter === "inactive" && !isUserActive(user.lastActive));
      return matchesSearch && matchesPlan && matchesActivity;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "words-desc": return b.wordCount - a.wordCount;
        case "words-asc": return a.wordCount - b.wordCount;
        case "images-desc": return b.images - a.images;
        case "images-asc": return a.images - b.images;
        case "serp-desc": return b.serpUsage - a.serpUsage;
        case "serp-asc": return a.serpUsage - b.serpUsage;
        default: return 0;
      }
    });

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
              <Input 
                placeholder="Search users..." 
                className="pl-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={planFilter} onValueChange={setPlanFilter}>
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
            <Select value={activityFilter} onValueChange={setActivityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Activity Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
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
                    checked={selectedUsers.length === filteredAndSortedUsers.length && filteredAndSortedUsers.length > 0}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedUsers(filteredAndSortedUsers.map((u) => u.id));
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
              {filteredAndSortedUsers.map((user) => (
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
