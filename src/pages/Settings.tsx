import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Database, Users } from "lucide-react";

const adminUsers = [
  { id: 1, name: "Admin User", email: "admin@simbli.com", role: "Super Admin", lastLogin: "2 hours ago" },
  { id: 2, name: "Manager", email: "manager@simbli.com", role: "Manager", lastLogin: "1 day ago" },
  { id: 3, name: "Support", email: "support@simbli.com", role: "Support", lastLogin: "3 hours ago" },
];

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Configure system preferences and access control</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Admin Access Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Email address" />
              <Select>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
              <Button>Add</Button>
            </div>
            <div className="space-y-2">
              {adminUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{user.role}</Badge>
                    <Button variant="ghost" size="sm">
                      Remove
                    </Button>
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
              Security Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="2fa">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Require 2FA for all admin accounts
                </p>
              </div>
              <Switch id="2fa" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="session-logs">Session Logs</Label>
                <p className="text-sm text-muted-foreground">Track all admin sessions</p>
              </div>
              <Switch id="session-logs" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="ip-whitelist">IP Whitelist</Label>
                <p className="text-sm text-muted-foreground">
                  Restrict admin access by IP
                </p>
              </div>
              <Switch id="ip-whitelist" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
              <Input id="session-timeout" type="number" defaultValue="30" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            System Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="utc">
              <SelectTrigger id="timezone">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="est">EST</SelectItem>
                <SelectItem value="pst">PST</SelectItem>
                <SelectItem value="cet">CET</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="backup">Backup Schedule</Label>
            <Select defaultValue="daily">
              <SelectTrigger id="backup">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="retention">Data Retention (days)</Label>
            <Input id="retention" type="number" defaultValue="90" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rate-limit">API Rate Limit (req/min)</Label>
            <Input id="rate-limit" type="number" defaultValue="1000" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Database & Maintenance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1 rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">Database Size</p>
              <p className="text-2xl font-bold">4.2 GB</p>
            </div>
            <div className="space-y-1 rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">Total Records</p>
              <p className="text-2xl font-bold">1.2M</p>
            </div>
            <div className="space-y-1 rounded-lg border border-border p-4">
              <p className="text-sm text-muted-foreground">Last Backup</p>
              <p className="text-2xl font-bold">2h ago</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Run Backup Now</Button>
            <Button variant="outline">Optimize Database</Button>
            <Button variant="outline">View Logs</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
