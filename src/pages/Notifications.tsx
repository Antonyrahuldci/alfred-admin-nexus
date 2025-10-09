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
import { Send, Mail } from "lucide-react";

const messageHistory = [
  {
    id: 1,
    title: "New Feature: Image Enhancement",
    segment: "All Users",
    sent: "2024-10-05",
    delivered: 5234,
    opened: 3421,
  },
  {
    id: 2,
    title: "Pro Plan 20% Off",
    segment: "Free Users",
    sent: "2024-10-03",
    delivered: 2134,
    opened: 1245,
  },
  {
    id: 3,
    title: "Usage Limit Warning",
    segment: "High Usage",
    sent: "2024-10-01",
    delivered: 456,
    opened: 398,
  },
];

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
        <p className="text-muted-foreground">Create and manage user communications</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Create Message
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Message Title</Label>
              <Input id="title" placeholder="Enter message title..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="segment">Target Segment</Label>
              <Select>
                <SelectTrigger id="segment">
                  <SelectValue placeholder="Select segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="free">Free Users</SelectItem>
                  <SelectItem value="pro">Pro Users</SelectItem>
                  <SelectItem value="enterprise">Enterprise Users</SelectItem>
                  <SelectItem value="high-usage">High Usage</SelectItem>
                  <SelectItem value="low-usage">Low Usage</SelectItem>
                  <SelectItem value="inactive">Inactive Users</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message Content</Label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                rows={6}
              />
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">
                <Send className="mr-2 h-4 w-4" />
                Send Now
              </Button>
              <Button variant="outline">Schedule</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Message Templates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: "Welcome Email", desc: "Sent to new signups" },
              { title: "Upgrade Prompt", desc: "Encourage plan upgrade" },
              { title: "Usage Limit", desc: "Notify about limits" },
              { title: "Feature Announcement", desc: "Share new features" },
            ].map((template, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div>
                  <p className="font-medium">{template.title}</p>
                  <p className="text-sm text-muted-foreground">{template.desc}</p>
                </div>
                <Button variant="ghost" size="sm">
                  Use
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Message History & Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Segment</TableHead>
                <TableHead>Sent Date</TableHead>
                <TableHead className="text-right">Delivered</TableHead>
                <TableHead className="text-right">Opened</TableHead>
                <TableHead className="text-right">Open Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messageHistory.map((message) => (
                <TableRow key={message.id}>
                  <TableCell className="font-medium">{message.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{message.segment}</Badge>
                  </TableCell>
                  <TableCell>{message.sent}</TableCell>
                  <TableCell className="text-right font-mono">
                    {message.delivered.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {message.opened.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {((message.opened / message.delivered) * 100).toFixed(1)}%
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
