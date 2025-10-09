import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { UserCog, Shield, Bell, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const adminUsers = [
  { email: "admin@simbli.com", role: "Super Admin", status: "active", lastLogin: "2024-01-15 14:23" },
  { email: "support@simbli.com", role: "Support Admin", status: "active", lastLogin: "2024-01-15 12:45" },
  { email: "tech@simbli.com", role: "Technical Admin", status: "active", lastLogin: "2024-01-14 18:30" },
];

const rolePermissions = [
  { role: "Super Admin", users: 1, manageUsers: true, viewAnalytics: true, managePayments: true, systemSettings: true },
  { role: "Support Admin", users: 1, manageUsers: true, viewAnalytics: true, managePayments: false, systemSettings: false },
  { role: "Technical Admin", users: 1, manageUsers: false, viewAnalytics: true, managePayments: false, systemSettings: true },
  { role: "Moderator", users: 0, manageUsers: false, viewAnalytics: false, managePayments: false, systemSettings: false },
];

export default function AdminControls() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Controls</h1>
        <p className="text-muted-foreground">Manage admin access and system settings</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <UserCog className="h-5 w-5 text-primary" />
              Manual Credit Adjustment
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">User Email</label>
              <Input placeholder="user@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Credit Amount</label>
              <Input type="number" placeholder="1000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Adjustment Type</label>
              <Select defaultValue="add">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="add">Add Credits</SelectItem>
                  <SelectItem value="subtract">Subtract Credits</SelectItem>
                  <SelectItem value="set">Set Total Credits</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Reason for Adjustment</label>
            <Input placeholder="e.g., Customer support compensation" />
          </div>
          <Button>Apply Credit Adjustment</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Admin Users & Roles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 mb-4">
            {adminUsers.map((admin, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-border">
                <div>
                  <p className="font-medium">{admin.email}</p>
                  <p className="text-sm text-muted-foreground">Last login: {admin.lastLogin}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge>{admin.role}</Badge>
                  <Badge variant={admin.status === "active" ? "default" : "secondary"}>
                    {admin.status}
                  </Badge>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline">Add New Admin</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Role-Based Access Permissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Role</th>
                  <th className="text-center p-3 font-medium">Users</th>
                  <th className="text-center p-3 font-medium">Manage Users</th>
                  <th className="text-center p-3 font-medium">View Analytics</th>
                  <th className="text-center p-3 font-medium">Manage Payments</th>
                  <th className="text-center p-3 font-medium">System Settings</th>
                  <th className="text-center p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rolePermissions.map((role, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-3 font-medium">{role.role}</td>
                    <td className="p-3 text-center">{role.users}</td>
                    <td className="p-3 text-center">
                      <Switch checked={role.manageUsers} disabled />
                    </td>
                    <td className="p-3 text-center">
                      <Switch checked={role.viewAnalytics} disabled />
                    </td>
                    <td className="p-3 text-center">
                      <Switch checked={role.managePayments} disabled />
                    </td>
                    <td className="p-3 text-center">
                      <Switch checked={role.systemSettings} disabled />
                    </td>
                    <td className="p-3 text-center">
                      <Button size="sm" variant="outline">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Notification Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium">Low Credit Alerts</p>
              <p className="text-sm text-muted-foreground">Notify users when credits fall below threshold</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium">Renewal Reminders</p>
              <p className="text-sm text-muted-foreground">Send email reminders 7 days before renewal</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium">Feature Announcements</p>
              <p className="text-sm text-muted-foreground">Notify users about new features and updates</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium">Usage Milestone Alerts</p>
              <p className="text-sm text-muted-foreground">Celebrate user milestones (e.g., 10,000 words generated)</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            System Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Default Credit Allocation (Free Plan)</label>
              <Input type="number" defaultValue="1000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Default Credit Allocation (Pro Plan)</label>
              <Input type="number" defaultValue="10000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Default Credit Allocation (Enterprise Plan)</label>
              <Input type="number" defaultValue="50000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Credit Depletion Warning Threshold (%)</label>
              <Input type="number" defaultValue="20" />
            </div>
          </div>
          <Button>Save Configuration</Button>
        </CardContent>
      </Card>
    </div>
  );
}
