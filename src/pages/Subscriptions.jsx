import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, Users, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const plans = [
  { name: "Free", price: "$0", subscribers: 2134, revenue: 0 },
  { name: "Pro", price: "$29", subscribers: 2456, revenue: 71224 },
  { name: "Enterprise", price: "$99", subscribers: 644, revenue: 63756 },
];

const revenueByPlan = [
  { name: "Pro", value: 71224 },
  { name: "Enterprise", value: 63756 },
];

const COLORS = ["hsl(217 91% 60%)", "hsl(142 76% 36%)"];

const paymentHistory = [
  {
    id: 1,
    user: "john.doe@email.com",
    plan: "Pro",
    amount: "$29",
    date: "2024-10-01",
    status: "Completed",
  },
  {
    id: 2,
    user: "jane.smith@email.com",
    plan: "Enterprise",
    amount: "$99",
    date: "2024-10-01",
    status: "Completed",
  },
  {
    id: 3,
    user: "mike.wilson@email.com",
    plan: "Pro",
    amount: "$29",
    date: "2024-10-02",
    status: "Completed",
  },
  {
    id: 4,
    user: "sarah.jones@email.com",
    plan: "Enterprise",
    amount: "$99",
    date: "2024-10-02",
    status: "Failed",
  },
  {
    id: 5,
    user: "alex.brown@email.com",
    plan: "Pro",
    amount: "$29",
    date: "2024-10-03",
    status: "Completed",
  },
];

export default function Subscriptions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subscriptions</h1>
          <p className="text-muted-foreground">
            Manage plans, pricing, and subscriber data
          </p>
        </div>
        {/* <Button>Add New Plan</Button> */}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="overflow-hidden bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{plan.name}</span>
                <Badge variant={plan.name === "Free" ? "secondary" : "default"}>
                  {plan.price}/mo
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-2xl font-bold">
                  {plan.subscribers.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">subscribers</span>
              </div>
              {plan.revenue > 0 && (
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-2xl font-bold">
                    ${plan.revenue.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">MRR</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Revenue by Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={revenueByPlan}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: $${value.toLocaleString()}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {revenueByPlan.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coupon Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="font-medium">SUMMER20</p>
                  <p className="text-sm text-muted-foreground">
                    20% off for 3 months
                  </p>
                </div>
                <Badge>Active</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="font-medium">EARLYBIRD</p>
                  <p className="text-sm text-muted-foreground">
                    50% off first month
                  </p>
                </div>
                <Badge variant="secondary">Expired</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Create New Coupon
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.user}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{payment.plan}</Badge>
                  </TableCell>
                  <TableCell className="font-mono">{payment.amount}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        payment.status === "Completed" ? "default" : "destructive"
                      }
                    >
                      {payment.status}
                    </Badge>
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
