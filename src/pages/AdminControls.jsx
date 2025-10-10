import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { UserCog, Shield, Bell, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const adminUsers = [
{ email: "admin@simbli.com", role: "Super Admin", status: "active", lastLogin: "2024-01-15 14:23" },
{ email: "support@simbli.com", role: "Support Admin", status: "active", lastLogin: "2024-01-15 12:45" },
{ email: "tech@simbli.com", role: "Technical Admin", status: "active", lastLogin: "2024-01-14 18:30" }];


const rolePermissions = [
{ role: "Super Admin", users: 1, manageUsers: true, viewAnalytics: true, managePayments: true, systemSettings: true },
{ role: "Support Admin", users: 1, manageUsers: true, viewAnalytics: true, managePayments: false, systemSettings: false },
{ role: "Technical Admin", users: 1, manageUsers: false, viewAnalytics: true, managePayments: false, systemSettings: true },
{ role: "Moderator", users: 0, manageUsers: false, viewAnalytics: false, managePayments: false, systemSettings: false }];


export default function AdminControls() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Admin Controls" }),
        _jsx("p", { className: "text-muted-foreground", children: "Manage admin access and system settings" })] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx("div", { className: "flex items-center justify-between", children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(UserCog, { className: "h-5 w-5 text-primary" }), "Manual Credit Adjustment"] }

            ) }
          ) }
        ),
        _jsxs(CardContent, { className: "space-y-4", children: [
          _jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("label", { className: "text-sm font-medium", children: "User Email" }),
              _jsx(Input, { placeholder: "user@email.com" })] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("label", { className: "text-sm font-medium", children: "Credit Amount" }),
              _jsx(Input, { type: "number", placeholder: "1000" })] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("label", { className: "text-sm font-medium", children: "Adjustment Type" }),
              _jsxs(Select, { defaultValue: "add", children: [
                _jsx(SelectTrigger, { children:
                  _jsx(SelectValue, {}) }
                ),
                _jsxs(SelectContent, { children: [
                  _jsx(SelectItem, { value: "add", children: "Add Credits" }),
                  _jsx(SelectItem, { value: "subtract", children: "Subtract Credits" }),
                  _jsx(SelectItem, { value: "set", children: "Set Total Credits" })] }
                )] }
              )] }
            )] }
          ),
          _jsxs("div", { className: "space-y-2", children: [
            _jsx("label", { className: "text-sm font-medium", children: "Reason for Adjustment" }),
            _jsx(Input, { placeholder: "e.g., Customer support compensation" })] }
          ),
          _jsx(Button, { children: "Apply Credit Adjustment" })] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Shield, { className: "h-5 w-5 text-primary" }), "Admin Users & Roles"] }

          ) }
        ),
        _jsxs(CardContent, { children: [
          _jsx("div", { className: "space-y-3 mb-4", children:
            adminUsers.map((admin, idx) =>
            _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border", children: [
              _jsxs("div", { children: [
                _jsx("p", { className: "font-medium", children: admin.email }),
                _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Last login: ", admin.lastLogin] })] }
              ),
              _jsxs("div", { className: "flex items-center gap-3", children: [
                _jsx(Badge, { children: admin.role }),
                _jsx(Badge, { variant: admin.status === "active" ? "default" : "secondary", children:
                  admin.status }
                ),
                _jsx(Button, { size: "sm", variant: "outline", children: "Edit" })] }
              )] }, idx
            )
            ) }
          ),
          _jsx(Button, { variant: "outline", children: "Add New Admin" })] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Role-Based Access Permissions" }) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "overflow-x-auto", children:
            _jsxs("table", { className: "w-full", children: [
              _jsx("thead", { children:
                _jsxs("tr", { className: "border-b", children: [
                  _jsx("th", { className: "text-left p-3 font-medium", children: "Role" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Users" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Manage Users" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "View Analytics" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Manage Payments" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "System Settings" }),
                  _jsx("th", { className: "text-center p-3 font-medium", children: "Actions" })] }
                ) }
              ),
              _jsx("tbody", { children:
                rolePermissions.map((role, idx) =>
                _jsxs("tr", { className: "border-b", children: [
                  _jsx("td", { className: "p-3 font-medium", children: role.role }),
                  _jsx("td", { className: "p-3 text-center", children: role.users }),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsx(Switch, { checked: role.manageUsers, disabled: true }) }
                  ),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsx(Switch, { checked: role.viewAnalytics, disabled: true }) }
                  ),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsx(Switch, { checked: role.managePayments, disabled: true }) }
                  ),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsx(Switch, { checked: role.systemSettings, disabled: true }) }
                  ),
                  _jsx("td", { className: "p-3 text-center", children:
                    _jsx(Button, { size: "sm", variant: "outline", children: "Edit" }) }
                  )] }, idx
                )
                ) }
              )] }
            ) }
          ) }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Bell, { className: "h-5 w-5 text-primary" }), "Notification Settings"] }

          ) }
        ),
        _jsxs(CardContent, { className: "space-y-4", children: [
          _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border", children: [
            _jsxs("div", { children: [
              _jsx("p", { className: "font-medium", children: "Low Credit Alerts" }),
              _jsx("p", { className: "text-sm text-muted-foreground", children: "Notify users when credits fall below threshold" })] }
            ),
            _jsx(Switch, { defaultChecked: true })] }
          ),
          _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border", children: [
            _jsxs("div", { children: [
              _jsx("p", { className: "font-medium", children: "Renewal Reminders" }),
              _jsx("p", { className: "text-sm text-muted-foreground", children: "Send email reminders 7 days before renewal" })] }
            ),
            _jsx(Switch, { defaultChecked: true })] }
          ),
          _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border", children: [
            _jsxs("div", { children: [
              _jsx("p", { className: "font-medium", children: "Feature Announcements" }),
              _jsx("p", { className: "text-sm text-muted-foreground", children: "Notify users about new features and updates" })] }
            ),
            _jsx(Switch, { defaultChecked: true })] }
          ),
          _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border", children: [
            _jsxs("div", { children: [
              _jsx("p", { className: "font-medium", children: "Usage Milestone Alerts" }),
              _jsx("p", { className: "text-sm text-muted-foreground", children: "Celebrate user milestones (e.g., 10,000 words generated)" })] }
            ),
            _jsx(Switch, { defaultChecked: true })] }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Settings, { className: "h-5 w-5 text-primary" }), "System Configuration"] }

          ) }
        ),
        _jsxs(CardContent, { className: "space-y-4", children: [
          _jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("label", { className: "text-sm font-medium", children: "Default Credit Allocation (Free Plan)" }),
              _jsx(Input, { type: "number", defaultValue: "1000" })] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("label", { className: "text-sm font-medium", children: "Default Credit Allocation (Pro Plan)" }),
              _jsx(Input, { type: "number", defaultValue: "10000" })] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("label", { className: "text-sm font-medium", children: "Default Credit Allocation (Enterprise Plan)" }),
              _jsx(Input, { type: "number", defaultValue: "50000" })] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx("label", { className: "text-sm font-medium", children: "Credit Depletion Warning Threshold (%)" }),
              _jsx(Input, { type: "number", defaultValue: "20" })] }
            )] }
          ),
          _jsx(Button, { children: "Save Configuration" })] }
        )] }
      )] }
    ));

}