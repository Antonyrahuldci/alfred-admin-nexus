import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Send, Eye, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const campaignHistory = [
{
  id: 1,
  name: "New Feature Announcement",
  sent: "2024-01-15",
  recipients: 5234,
  opened: 3245,
  clicked: 1892,
  status: "completed"
},
{
  id: 2,
  name: "Monthly Usage Report",
  sent: "2024-01-08",
  recipients: 4892,
  opened: 3567,
  clicked: 2134,
  status: "completed"
},
{
  id: 3,
  name: "Upgrade Promotion",
  sent: "2024-01-03",
  recipients: 2341,
  opened: 1876,
  clicked: 945,
  status: "completed"
}];


const emailTemplates = [
{ id: 1, name: "Welcome Email", category: "Onboarding" },
{ id: 2, name: "Monthly Report", category: "Engagement" },
{ id: 3, name: "Renewal Reminder", category: "Retention" },
{ id: 4, name: "Feature Update", category: "Product" },
{ id: 5, name: "Feedback Request", category: "Engagement" }];


const scheduledEmails = [
{ id: 1, name: "Weekly Digest", schedule: "Every Monday 9:00 AM", recipients: "All Active Users" },
{ id: 2, name: "Renewal Reminder", schedule: "7 days before expiry", recipients: "Expiring Subscriptions" },
{ id: 3, name: "Low Credit Alert", schedule: "When credits < 1000", recipients: "Pro & Enterprise" }];


export default function Communications() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [segment, setSegment] = useState("all");

  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Communications" }),
        _jsx("p", { className: "text-muted-foreground", children: "Send emails and manage campaigns" })] }
      ),

      _jsxs(Tabs, { defaultValue: "compose", className: "space-y-4", children: [
        _jsxs(TabsList, { children: [
          _jsx(TabsTrigger, { value: "compose", children: "Compose Email" }),
          _jsx(TabsTrigger, { value: "history", children: "Campaign History" }),
          _jsx(TabsTrigger, { value: "templates", children: "Templates" }),
          _jsx(TabsTrigger, { value: "scheduled", children: "Scheduled" })] }
        ),

        _jsx(TabsContent, { value: "compose", children:
          _jsxs(Card, { children: [
            _jsx(CardHeader, { children:
              _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                _jsx(Mail, { className: "h-5 w-5 text-primary" }), "Compose New Email"] }

              ) }
            ),
            _jsxs(CardContent, { className: "space-y-4", children: [
              _jsxs("div", { className: "space-y-2", children: [
                _jsx("label", { className: "text-sm font-medium", children: "Recipient Segment" }),
                _jsxs(Select, { value: segment, onValueChange: setSegment, children: [
                  _jsx(SelectTrigger, { children:
                    _jsx(SelectValue, {}) }
                  ),
                  _jsxs(SelectContent, { children: [
                    _jsx(SelectItem, { value: "all", children: "All Users (5,234)" }),
                    _jsx(SelectItem, { value: "active", children: "Active Users (4,892)" }),
                    _jsx(SelectItem, { value: "high-usage", children: "High Usage (1,245)" }),
                    _jsx(SelectItem, { value: "low-usage", children: "Low Usage (892)" }),
                    _jsx(SelectItem, { value: "free", children: "Free Plan (2,341)" }),
                    _jsx(SelectItem, { value: "pro", children: "Pro Plan (2,145)" }),
                    _jsx(SelectItem, { value: "enterprise", children: "Enterprise Plan (748)" })] }
                  )] }
                )] }
              ),

              _jsxs("div", { className: "space-y-2", children: [
                _jsx("label", { className: "text-sm font-medium", children: "Subject Line" }),
                _jsx(Input, {
                  placeholder: "Enter email subject...",
                  value: subject,
                  onChange: (e) => setSubject(e.target.value) }
                )] }
              ),

              _jsxs("div", { className: "space-y-2", children: [
                _jsx("label", { className: "text-sm font-medium", children: "Message" }),
                _jsx(Textarea, {
                  placeholder: "Enter your message...",
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  rows: 10 }
                )] }
              ),

              _jsxs("div", { className: "flex gap-3", children: [
                _jsxs(Button, { className: "flex items-center gap-2", children: [
                  _jsx(Send, { className: "h-4 w-4" }), "Send Now"] }

                ),
                _jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [
                  _jsx(Clock, { className: "h-4 w-4" }), "Schedule"] }

                ),
                _jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [
                  _jsx(Eye, { className: "h-4 w-4" }), "Preview"] }

                )] }
              )] }
            )] }
          ) }
        ),

        _jsx(TabsContent, { value: "history", children:
          _jsxs(Card, { children: [
            _jsx(CardHeader, { children:
              _jsx(CardTitle, { children: "Campaign History" }) }
            ),
            _jsx(CardContent, { children:
              _jsx("div", { className: "space-y-4", children:
                campaignHistory.map((campaign) =>
                _jsxs("div", { className: "p-4 rounded-lg border border-border", children: [
                  _jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                    _jsxs("div", { children: [
                      _jsx("h3", { className: "font-semibold", children: campaign.name }),
                      _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Sent on ", campaign.sent] })] }
                    ),
                    _jsx(Badge, { variant: campaign.status === "completed" ? "default" : "secondary", children:
                      campaign.status }
                    )] }
                  ),
                  _jsxs("div", { className: "grid grid-cols-4 gap-4 text-center", children: [
                    _jsxs("div", { children: [
                      _jsx("p", { className: "text-2xl font-bold", children: campaign.recipients.toLocaleString() }),
                      _jsx("p", { className: "text-sm text-muted-foreground", children: "Recipients" })] }
                    ),
                    _jsxs("div", { children: [
                      _jsx("p", { className: "text-2xl font-bold", children: campaign.opened.toLocaleString() }),
                      _jsx("p", { className: "text-sm text-muted-foreground", children: "Opened" })] }
                    ),
                    _jsxs("div", { children: [
                      _jsxs("p", { className: "text-2xl font-bold", children: [(campaign.opened / campaign.recipients * 100).toFixed(1), "%"] }),
                      _jsx("p", { className: "text-sm text-muted-foreground", children: "Open Rate" })] }
                    ),
                    _jsxs("div", { children: [
                      _jsxs("p", { className: "text-2xl font-bold", children: [(campaign.clicked / campaign.recipients * 100).toFixed(1), "%"] }),
                      _jsx("p", { className: "text-sm text-muted-foreground", children: "Click Rate" })] }
                    )] }
                  )] }, campaign.id
                )
                ) }
              ) }
            )] }
          ) }
        ),

        _jsx(TabsContent, { value: "templates", children:
          _jsxs(Card, { children: [
            _jsx(CardHeader, { children:
              _jsxs("div", { className: "flex items-center justify-between", children: [
                _jsx(CardTitle, { children: "Email Templates" }),
                _jsx(Button, { size: "sm", children: "Create Template" })] }
              ) }
            ),
            _jsx(CardContent, { children:
              _jsx("div", { className: "space-y-3", children:
                emailTemplates.map((template) =>
                _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border", children: [
                  _jsxs("div", { children: [
                    _jsx("p", { className: "font-medium", children: template.name }),
                    _jsx("p", { className: "text-sm text-muted-foreground", children: template.category })] }
                  ),
                  _jsxs("div", { className: "flex gap-2", children: [
                    _jsx(Button, { size: "sm", variant: "outline", children: "Edit" }),
                    _jsx(Button, { size: "sm", variant: "outline", children: "Use" }),
                    _jsx(Button, { size: "sm", variant: "outline", children: "Clone" })] }
                  )] }, template.id
                )
                ) }
              ) }
            )] }
          ) }
        ),

        _jsx(TabsContent, { value: "scheduled", children:
          _jsxs(Card, { children: [
            _jsx(CardHeader, { children:
              _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                _jsx(Clock, { className: "h-5 w-5 text-primary" }), "Scheduled Auto-Emails"] }

              ) }
            ),
            _jsx(CardContent, { children:
              _jsx("div", { className: "space-y-3", children:
                scheduledEmails.map((email) =>
                _jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg border border-border", children: [
                  _jsxs("div", { children: [
                    _jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      _jsx("p", { className: "font-medium", children: email.name }),
                      _jsx(CheckCircle, { className: "h-4 w-4 text-green-600" })] }
                    ),
                    _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Schedule: ", email.schedule] }),
                    _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Recipients: ", email.recipients] })] }
                  ),
                  _jsxs("div", { className: "flex gap-2", children: [
                    _jsx(Button, { size: "sm", variant: "outline", children: "Edit" }),
                    _jsx(Button, { size: "sm", variant: "outline", children: "Pause" })] }
                  )] }, email.id
                )
                ) }
              ) }
            )] }
          ) }
        )] }
      )] }
    ));

}