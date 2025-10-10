import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from
"@/components/ui/table";
import { CreditCard, Mail, BarChart, Cpu, Key } from "lucide-react";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const integrations = [
{
  id: 1,
  name: "Stripe",
  category: "Payment",
  icon: CreditCard,
  status: "Active",
  description: "Payment processing and subscriptions"
},
{
  id: 2,
  name: "SendGrid",
  category: "Email",
  icon: Mail,
  status: "Active",
  description: "Transactional email service"
},
{
  id: 3,
  name: "Google Analytics",
  category: "Analytics",
  icon: BarChart,
  status: "Active",
  description: "User behavior tracking"
},
{
  id: 4,
  name: "OpenAI",
  category: "AI Models",
  icon: Cpu,
  status: "Active",
  description: "GPT and DALL-E APIs"
}];


const apiKeys = [
{ id: 1, name: "Production API Key", usage: "12,453 calls", lastUsed: "2 hours ago" },
{ id: 2, name: "Development API Key", usage: "3,241 calls", lastUsed: "1 day ago" },
{ id: 3, name: "Mobile App API Key", usage: "8,932 calls", lastUsed: "5 minutes ago" }];


export default function Integrations() {
  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { children: [
        _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Integrations" }),
        _jsx("p", { className: "text-muted-foreground", children: "Manage connected services and API access" })] }
      ),

      _jsx("div", { className: "grid gap-4 md:grid-cols-2", children:
        integrations.map((integration) =>
        _jsx(Card, { children:
          _jsxs(CardContent, { className: "flex items-start justify-between p-6", children: [
            _jsxs("div", { className: "flex items-start gap-4", children: [
              _jsx("div", { className: "rounded-lg bg-primary/10 p-3", children:
                _jsx(integration.icon, { className: "h-6 w-6 text-primary" }) }
              ),
              _jsxs("div", { className: "space-y-1", children: [
                _jsxs("div", { className: "flex items-center gap-2", children: [
                  _jsx("h3", { className: "font-semibold", children: integration.name }),
                  _jsx(Badge, {
                    variant: integration.status === "Active" ? "default" : "secondary", children:

                    integration.status }
                  )] }
                ),
                _jsx("p", { className: "text-sm text-muted-foreground", children: integration.description }),
                _jsx(Badge, { variant: "secondary", className: "mt-2", children:
                  integration.category }
                )] }
              )] }
            ),
            _jsxs("div", { className: "flex items-center gap-2", children: [
              _jsx(Switch, { id: `integration-${integration.id}`, defaultChecked: true }),
              _jsxs(Label, { htmlFor: `integration-${integration.id}`, className: "sr-only", children: ["Toggle ",
                integration.name] }
              )] }
            )] }
          ) }, integration.id
        )
        ) }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            _jsx(Key, { className: "h-5 w-5 text-primary" }), "API Key Management"] }

          ) }
        ),
        _jsxs(CardContent, { children: [
          _jsxs("div", { className: "mb-4 flex gap-2", children: [
            _jsx(Input, { placeholder: "New API Key Name" }),
            _jsx(Button, { children: "Generate Key" })] }
          ),
          _jsxs(Table, { children: [
            _jsx(TableHeader, { children:
              _jsxs(TableRow, { children: [
                _jsx(TableHead, { children: "Key Name" }),
                _jsx(TableHead, { children: "Usage" }),
                _jsx(TableHead, { children: "Last Used" }),
                _jsx(TableHead, { className: "w-24" })] }
              ) }
            ),
            _jsx(TableBody, { children:
              apiKeys.map((key) =>
              _jsxs(TableRow, { children: [
                _jsx(TableCell, { className: "font-medium", children: key.name }),
                _jsx(TableCell, { className: "font-mono text-sm", children: key.usage }),
                _jsx(TableCell, { className: "text-sm text-muted-foreground", children:
                  key.lastUsed }
                ),
                _jsx(TableCell, { children:
                  _jsx(Button, { variant: "ghost", size: "sm", children: "Revoke" }

                  ) }
                )] }, key.id
              )
              ) }
            )] }
          )] }
        )] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Usage Logs" }) }
        ),
        _jsx(CardContent, { children:
          _jsx("div", { className: "space-y-2", children:
            [
            { service: "OpenAI API", calls: "2,453", time: "Last hour" },
            { service: "Stripe Webhooks", calls: "34", time: "Last hour" },
            { service: "SendGrid API", calls: "156", time: "Last hour" }].
            map((log, i) =>
            _jsxs("div", {

              className: "flex items-center justify-between rounded-lg border border-border p-3", children: [

              _jsxs("div", { children: [
                _jsx("p", { className: "font-medium", children: log.service }),
                _jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  log.calls, " calls in ", log.time] }
                )] }
              ),
              _jsx(Button, { variant: "ghost", size: "sm", children: "View Details" }

              )] }, i
            )
            ) }
          ) }
        )] }
      )] }
    ));

}