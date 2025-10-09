import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Send, Eye, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const campaignHistory = [
  {
    id: 1,
    name: "New Feature Announcement",
    sent: "2024-01-15",
    recipients: 5234,
    opened: 3245,
    clicked: 1892,
    status: "completed",
  },
  {
    id: 2,
    name: "Monthly Usage Report",
    sent: "2024-01-08",
    recipients: 4892,
    opened: 3567,
    clicked: 2134,
    status: "completed",
  },
  {
    id: 3,
    name: "Upgrade Promotion",
    sent: "2024-01-03",
    recipients: 2341,
    opened: 1876,
    clicked: 945,
    status: "completed",
  },
];

const emailTemplates = [
  { id: 1, name: "Welcome Email", category: "Onboarding" },
  { id: 2, name: "Monthly Report", category: "Engagement" },
  { id: 3, name: "Renewal Reminder", category: "Retention" },
  { id: 4, name: "Feature Update", category: "Product" },
  { id: 5, name: "Feedback Request", category: "Engagement" },
];

const scheduledEmails = [
  { id: 1, name: "Weekly Digest", schedule: "Every Monday 9:00 AM", recipients: "All Active Users" },
  { id: 2, name: "Renewal Reminder", schedule: "7 days before expiry", recipients: "Expiring Subscriptions" },
  { id: 3, name: "Low Credit Alert", schedule: "When credits < 1000", recipients: "Pro & Enterprise" },
];

export default function Communications() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [segment, setSegment] = useState("all");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Communications</h1>
        <p className="text-muted-foreground">Send emails and manage campaigns</p>
      </div>

      <Tabs defaultValue="compose" className="space-y-4">
        <TabsList>
          <TabsTrigger value="compose">Compose Email</TabsTrigger>
          <TabsTrigger value="history">Campaign History</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
        </TabsList>

        <TabsContent value="compose">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Compose New Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Recipient Segment</label>
                <Select value={segment} onValueChange={setSegment}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users (5,234)</SelectItem>
                    <SelectItem value="active">Active Users (4,892)</SelectItem>
                    <SelectItem value="high-usage">High Usage (1,245)</SelectItem>
                    <SelectItem value="low-usage">Low Usage (892)</SelectItem>
                    <SelectItem value="free">Free Plan (2,341)</SelectItem>
                    <SelectItem value="pro">Pro Plan (2,145)</SelectItem>
                    <SelectItem value="enterprise">Enterprise Plan (748)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject Line</label>
                <Input
                  placeholder="Enter email subject..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Enter your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={10}
                />
              </div>

              <div className="flex gap-3">
                <Button className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Now
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Schedule
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Campaign History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignHistory.map((campaign) => (
                  <div key={campaign.id} className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{campaign.name}</h3>
                        <p className="text-sm text-muted-foreground">Sent on {campaign.sent}</p>
                      </div>
                      <Badge variant={campaign.status === "completed" ? "default" : "secondary"}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold">{campaign.recipients.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Recipients</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{campaign.opened.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">Opened</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{((campaign.opened / campaign.recipients) * 100).toFixed(1)}%</p>
                        <p className="text-sm text-muted-foreground">Open Rate</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{((campaign.clicked / campaign.recipients) * 100).toFixed(1)}%</p>
                        <p className="text-sm text-muted-foreground">Click Rate</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Email Templates</CardTitle>
                <Button size="sm">Create Template</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emailTemplates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                      <p className="font-medium">{template.name}</p>
                      <p className="text-sm text-muted-foreground">{template.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">Use</Button>
                      <Button size="sm" variant="outline">Clone</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Scheduled Auto-Emails
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scheduledEmails.map((email) => (
                  <div key={email.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{email.name}</p>
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-sm text-muted-foreground">Schedule: {email.schedule}</p>
                      <p className="text-sm text-muted-foreground">Recipients: {email.recipients}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">Pause</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
