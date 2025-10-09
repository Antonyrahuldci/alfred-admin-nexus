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
  TableRow,
} from "@/components/ui/table";
import { CreditCard, Mail, BarChart, Cpu, Key } from "lucide-react";

const integrations = [
  {
    id: 1,
    name: "Stripe",
    category: "Payment",
    icon: CreditCard,
    status: "Active",
    description: "Payment processing and subscriptions",
  },
  {
    id: 2,
    name: "SendGrid",
    category: "Email",
    icon: Mail,
    status: "Active",
    description: "Transactional email service",
  },
  {
    id: 3,
    name: "Google Analytics",
    category: "Analytics",
    icon: BarChart,
    status: "Active",
    description: "User behavior tracking",
  },
  {
    id: 4,
    name: "OpenAI",
    category: "AI Models",
    icon: Cpu,
    status: "Active",
    description: "GPT and DALL-E APIs",
  },
];

const apiKeys = [
  { id: 1, name: "Production API Key", usage: "12,453 calls", lastUsed: "2 hours ago" },
  { id: 2, name: "Development API Key", usage: "3,241 calls", lastUsed: "1 day ago" },
  { id: 3, name: "Mobile App API Key", usage: "8,932 calls", lastUsed: "5 minutes ago" },
];

export default function Integrations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
        <p className="text-muted-foreground">Manage connected services and API access</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {integrations.map((integration) => (
          <Card key={integration.id}>
            <CardContent className="flex items-start justify-between p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <integration.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{integration.name}</h3>
                    <Badge
                      variant={integration.status === "Active" ? "default" : "secondary"}
                    >
                      {integration.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                  <Badge variant="secondary" className="mt-2">
                    {integration.category}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Switch id={`integration-${integration.id}`} defaultChecked />
                <Label htmlFor={`integration-${integration.id}`} className="sr-only">
                  Toggle {integration.name}
                </Label>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            API Key Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex gap-2">
            <Input placeholder="New API Key Name" />
            <Button>Generate Key</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key Name</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead className="w-24"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell className="font-medium">{key.name}</TableCell>
                  <TableCell className="font-mono text-sm">{key.usage}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {key.lastUsed}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Revoke
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              { service: "OpenAI API", calls: "2,453", time: "Last hour" },
              { service: "Stripe Webhooks", calls: "34", time: "Last hour" },
              { service: "SendGrid API", calls: "156", time: "Last hour" },
            ].map((log, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-border p-3"
              >
                <div>
                  <p className="font-medium">{log.service}</p>
                  <p className="text-sm text-muted-foreground">
                    {log.calls} calls in {log.time}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
