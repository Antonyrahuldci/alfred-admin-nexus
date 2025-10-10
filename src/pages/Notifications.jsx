import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
import { Badge } from "@/components/ui/badge";
import { Send, Mail } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const messageHistory = [
{
  id: 1,
  title: "New Feature: Image Enhancement",
  segment: "All Users",
  sent: "2024-10-05",
  delivered: 5234,
  opened: 3421
},
{
  id: 2,
  title: "Pro Plan 20% Off",
  segment: "Free Users",
  sent: "2024-10-03",
  delivered: 2134,
  opened: 1245
},
{
  id: 3,
  title: "Usage Limit Warning",
  segment: "High Usage",
  sent: "2024-10-01",
  delivered: 456,
  opened: 398
}];


export default function Notifications() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Notifications" }),
        _jsx("p", { className: "text-muted-foreground", children: "Create and manage user communications" })] }
      ),

      _jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [
        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              _jsx(Send, { className: "h-5 w-5 text-primary" }), "Create Message"] }

            ) }
          ),
          _jsxs(CardContent, { className: "space-y-4", children: [
            _jsxs("div", { className: "space-y-2", children: [
              _jsx(Label, { htmlFor: "title", children: "Message Title" }),
              _jsx(Input, { id: "title", placeholder: "Enter message title..." })] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx(Label, { htmlFor: "segment", children: "Target Segment" }),
              _jsxs(Select, { children: [
                _jsx(SelectTrigger, { id: "segment", children:
                  _jsx(SelectValue, { placeholder: "Select segment" }) }
                ),
                _jsxs(SelectContent, { children: [
                  _jsx(SelectItem, { value: "all", children: "All Users" }),
                  _jsx(SelectItem, { value: "free", children: "Free Users" }),
                  _jsx(SelectItem, { value: "pro", children: "Pro Users" }),
                  _jsx(SelectItem, { value: "enterprise", children: "Enterprise Users" }),
                  _jsx(SelectItem, { value: "high-usage", children: "High Usage" }),
                  _jsx(SelectItem, { value: "low-usage", children: "Low Usage" }),
                  _jsx(SelectItem, { value: "inactive", children: "Inactive Users" })] }
                )] }
              )] }
            ),
            _jsxs("div", { className: "space-y-2", children: [
              _jsx(Label, { htmlFor: "message", children: "Message Content" }),
              _jsx(Textarea, {
                id: "message",
                placeholder: "Write your message here...",
                rows: 6 }
              )] }
            ),
            _jsxs("div", { className: "flex gap-2", children: [
              _jsxs(Button, { className: "flex-1", children: [
                _jsx(Send, { className: "mr-2 h-4 w-4" }), "Send Now"] }

              ),
              _jsx(Button, { variant: "outline", children: "Schedule" })] }
            )] }
          )] }
        ),

        _jsxs(Card, { children: [
          _jsx(CardHeader, { children:
            _jsx(CardTitle, { children: "Message Templates" }) }
          ),
          _jsx(CardContent, { className: "space-y-3", children:
            [
            { title: "Welcome Email", desc: "Sent to new signups" },
            { title: "Upgrade Prompt", desc: "Encourage plan upgrade" },
            { title: "Usage Limit", desc: "Notify about limits" },
            { title: "Feature Announcement", desc: "Share new features" }].
            map((template, i) =>
            _jsxs("div", {

              className: "flex items-center justify-between rounded-lg border border-border p-4", children: [

              _jsxs("div", { children: [
                _jsx("p", { className: "font-medium", children: template.title }),
                _jsx("p", { className: "text-sm text-muted-foreground", children: template.desc })] }
              ),
              _jsx(Button, { variant: "ghost", size: "sm", children: "Use" }

              )] }, i
            )
            ) }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Mail, { className: "h-5 w-5 text-primary" }), "Message History & Analytics"] }

          ) }
        ),
        _jsx(CardContent, { className: "p-0", children:
          _jsxs(Table, { children: [
            _jsx(TableHeader, { children:
              _jsxs(TableRow, { children: [
                _jsx(TableHead, { children: "Title" }),
                _jsx(TableHead, { children: "Segment" }),
                _jsx(TableHead, { children: "Sent Date" }),
                _jsx(TableHead, { className: "text-right", children: "Delivered" }),
                _jsx(TableHead, { className: "text-right", children: "Opened" }),
                _jsx(TableHead, { className: "text-right", children: "Open Rate" })] }
              ) }
            ),
            _jsx(TableBody, { children:
              messageHistory.map((message) =>
              _jsxs(TableRow, { children: [
                _jsx(TableCell, { className: "font-medium", children: message.title }),
                _jsx(TableCell, { children:
                  _jsx(Badge, { variant: "secondary", children: message.segment }) }
                ),
                _jsx(TableCell, { children: message.sent }),
                _jsx(TableCell, { className: "text-right font-mono", children:
                  message.delivered.toLocaleString() }
                ),
                _jsx(TableCell, { className: "text-right font-mono", children:
                  message.opened.toLocaleString() }
                ),
                _jsxs(TableCell, { className: "text-right font-medium", children: [
                  (message.opened / message.delivered * 100).toFixed(1), "%"] }
                )] }, message.id
              )
              ) }
            )] }
          ) }
        )] }
      )] }
    ));

}