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
  SelectValue } from
"@/components/ui/select";








import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Database, Users } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const adminUsers = [
{ id: 1, name: "Admin User", email: "admin@simbli.com", role: "Super Admin", lastLogin: "2 hours ago" },
{ id: 2, name: "Manager", email: "manager@simbli.com", role: "Manager", lastLogin: "1 day ago" },
{ id: 3, name: "Support", email: "support@simbli.com", role: "Support", lastLogin: "3 hours ago" }];


export default function Settings() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Settings" }),
        _jsx("p", { className: "text-muted-foreground", children: "Configure system preferences and access control" })] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(Users, { className: "h-5 w-5 text-primary" }), "Admin Access Management"] }

            ) }
          ),
          _jsxs(CardContent, { className: "space-y-4", children: [
            _jsxs("div", { className: "flex gap-2", children: [
              _jsx(Input, { placeholder: "Email address" }),
              _jsxs(Select, { children: [
                _jsx(SelectTrigger, { className: "w-36", children:
                  _jsx(SelectValue, { placeholder: "Role" }) }
                ),
                _jsxs(SelectContent, { children: [
                  _jsx(SelectItem, { value: "admin", children: "Admin" }),
                  _jsx(SelectItem, { value: "manager", children: "Manager" }),
                  _jsx(SelectItem, { value: "support", children: "Support" })] }
                )] }
              ),
              _jsx(Button, { children: "Add" })] }
            ),
            _jsx("div", { className: "space-y-2", children:
              adminUsers.map((user) =>
              _jsxs("div", {

                className: "flex items-center justify-between rounded-lg border border-border p-3", children: [

                _jsxs("div", { children: [
                  _jsx("p", { className: "font-medium", children: user.name }),
                  _jsx("p", { className: "text-sm text-muted-foreground", children: user.email })] }
                ),
                _jsxs("div", { className: "flex items-center gap-2", children: [
                  _jsx(Badge, { variant: "secondary", children: user.role }),
                  _jsx(Button, { variant: "ghost", size: "sm", children: "Remove" }

                  )] }
                )] }, user.id
              )
              ) }
            )] }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(Shield, { className: "h-5 w-5 text-primary" }), "Security Options"] }

            ) }
          ),
          _jsxs(CardContent, { className: "space-y-4", children: [
            _jsxs("div", { className: "flex items-center justify-between", children: [
              _jsxs("div", { className: "space-y-0.5", children: [
                _jsx(Label, { htmlFor: "2fa", children: "Two-Factor Authentication" }),
                _jsx("p", { className: "text-sm text-muted-foreground", children: "Require 2FA for all admin accounts" }

                )] }
              ),
              _jsx(Switch, { id: "2fa" })] }
            ),
            _jsxs("div", { className: "flex items-center justify-between", children: [
              _jsxs("div", { className: "space-y-0.5", children: [
                _jsx(Label, { htmlFor: "session-logs", children: "Session Logs" }),
                _jsx("p", { className: "text-sm text-muted-foreground", children: "Track all admin sessions" })] }
              ),
              _jsx(Switch, { id: "session-logs", defaultChecked: true })] }
            ),
            _jsxs("div", { className: "flex items-center justify-between", children: [
              _jsxs("div", { className: "space-y-0.5", children: [
                _jsx(Label, { htmlFor: "ip-whitelist", children: "IP Whitelist" }),
                _jsx("p", { className: "text-sm text-muted-foreground", children: "Restrict admin access by IP" }

                )] }
              ),
              _jsx(Switch, { id: "ip-whitelist" })] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx(Label, { htmlFor: "session-timeout", children: "Session Timeout (minutes)" }),
              _jsx(Input, { id: "session-timeout", type: "number", defaultValue: "30" })] }
            )] }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Clock, { className: "h-5 w-5 text-primary" }), "System Settings"] }

          ) }
        ),
        _jsxs(CardContent, { className: "grid gap-4 md:grid-cols-2", children: [
          _jsxs("div", { className: "space-y-2", children: [
            _jsx(Label, { htmlFor: "timezone", children: "Timezone" }),
            _jsxs(Select, { defaultValue: "utc", children: [
              _jsx(SelectTrigger, { id: "timezone", children:
                _jsx(SelectValue, {}) }
              ),
              _jsxs(SelectContent, { children: [
                _jsx(SelectItem, { value: "utc", children: "UTC" }),
                _jsx(SelectItem, { value: "est", children: "EST" }),
                _jsx(SelectItem, { value: "pst", children: "PST" }),
                _jsx(SelectItem, { value: "cet", children: "CET" })] }
              )] }
            )] }
          ),
          _jsxs("div", { className: "space-y-2", children: [
            _jsx(Label, { htmlFor: "backup", children: "Backup Schedule" }),
            _jsxs(Select, { defaultValue: "daily", children: [
              _jsx(SelectTrigger, { id: "backup", children:
                _jsx(SelectValue, {}) }
              ),
              _jsxs(SelectContent, { children: [
                _jsx(SelectItem, { value: "hourly", children: "Hourly" }),
                _jsx(SelectItem, { value: "daily", children: "Daily" }),
                _jsx(SelectItem, { value: "weekly", children: "Weekly" })] }
              )] }
            )] }
          ),
          _jsxs("div", { className: "space-y-2", children: [
            _jsx(Label, { htmlFor: "retention", children: "Data Retention (days)" }),
            _jsx(Input, { id: "retention", type: "number", defaultValue: "90" })] }
          ),
          _jsxs("div", { className: "space-y-2", children: [
            _jsx(Label, { htmlFor: "rate-limit", children: "API Rate Limit (req/min)" }),
            _jsx(Input, { id: "rate-limit", type: "number", defaultValue: "1000" })] }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Database, { className: "h-5 w-5 text-primary" }), "Database & Maintenance"] }

          ) }
        ),
        _jsxs(CardContent, { className: "space-y-4", children: [
          _jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
            _jsxs("div", { className: "space-y-1 rounded-lg border border-border p-4", children: [
              _jsx("p", { className: "text-sm text-muted-foreground", children: "Database Size" }),
              _jsx("p", { className: "text-2xl font-bold", children: "4.2 GB" })] }
            ),
            _jsxs("div", { className: "space-y-1 rounded-lg border border-border p-4", children: [
              _jsx("p", { className: "text-sm text-muted-foreground", children: "Total Records" }),
              _jsx("p", { className: "text-2xl font-bold", children: "1.2M" })] }
            ),
            _jsxs("div", { className: "space-y-1 rounded-lg border border-border p-4", children: [
              _jsx("p", { className: "text-sm text-muted-foreground", children: "Last Backup" }),
              _jsx("p", { className: "text-2xl font-bold", children: "2h ago" })] }
            )] }
          ),
          _jsxs("div", { className: "flex gap-2", children: [
            _jsx(Button, { variant: "outline", children: "Run Backup Now" }),
            _jsx(Button, { variant: "outline", children: "Optimize Database" }),
            _jsx(Button, { variant: "outline", children: "View Logs" })] }
          )] }
        )] }
      )] }
    ));

}