import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger } from
"@/components/ui/dialog";
import { Search, Eye } from "lucide-react";






import { Checkbox } from "@/components/ui/checkbox";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
"recharts";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const mockUsers = [
{ id: 1, name: "John Doe", email: "john.doe@email.com", plan: "Pro", joinDate: "2024-01-15", lastActive: "2 hours ago", wordCount: 125000, images: 450, serpUsage: 89 },
{ id: 2, name: "Jane Smith", email: "jane.smith@email.com", plan: "Enterprise", joinDate: "2023-11-20", lastActive: "5 minutes ago", wordCount: 450000, images: 1200, serpUsage: 234 },
{ id: 3, name: "Mike Wilson", email: "mike.wilson@email.com", plan: "Free", joinDate: "2024-05-10", lastActive: "1 day ago", wordCount: 15000, images: 25, serpUsage: 12 },
{ id: 4, name: "Sarah Jones", email: "sarah.jones@email.com", plan: "Pro", joinDate: "2024-02-28", lastActive: "3 hours ago", wordCount: 275000, images: 680, serpUsage: 145 },
{ id: 5, name: "David Brown", email: "david.brown@email.com", plan: "Enterprise", joinDate: "2023-12-05", lastActive: "1 hour ago", wordCount: 380000, images: 950, serpUsage: 198 },
{ id: 6, name: "Emily Davis", email: "emily.davis@email.com", plan: "Pro", joinDate: "2024-03-18", lastActive: "30 minutes ago", wordCount: 195000, images: 520, serpUsage: 112 },
{ id: 7, name: "Chris Martin", email: "chris.martin@email.com", plan: "Free", joinDate: "2024-06-22", lastActive: "5 days ago", wordCount: 8500, images: 15, serpUsage: 7 },
{ id: 8, name: "Amanda White", email: "amanda.white@email.com", plan: "Pro", joinDate: "2024-01-30", lastActive: "4 hours ago", wordCount: 215000, images: 585, serpUsage: 128 },
{ id: 9, name: "Robert Taylor", email: "robert.taylor@email.com", plan: "Enterprise", joinDate: "2023-10-15", lastActive: "15 minutes ago", wordCount: 520000, images: 1450, serpUsage: 276 },
{ id: 10, name: "Lisa Anderson", email: "lisa.anderson@email.com", plan: "Free", joinDate: "2024-07-08", lastActive: "3 days ago", wordCount: 12000, images: 18, serpUsage: 9 },
{ id: 11, name: "James Thomas", email: "james.thomas@email.com", plan: "Pro", joinDate: "2024-02-14", lastActive: "1 hour ago", wordCount: 245000, images: 620, serpUsage: 138 },
{ id: 12, name: "Jessica Moore", email: "jessica.moore@email.com", plan: "Enterprise", joinDate: "2023-09-28", lastActive: "20 minutes ago", wordCount: 475000, images: 1380, serpUsage: 265 },
{ id: 13, name: "Daniel Jackson", email: "daniel.jackson@email.com", plan: "Free", joinDate: "2024-08-01", lastActive: "2 days ago", wordCount: 9500, images: 12, serpUsage: 5 },
{ id: 14, name: "Michelle Lee", email: "michelle.lee@email.com", plan: "Pro", joinDate: "2024-04-05", lastActive: "6 hours ago", wordCount: 185000, images: 495, serpUsage: 105 },
{ id: 15, name: "Kevin Harris", email: "kevin.harris@email.com", plan: "Enterprise", joinDate: "2023-11-10", lastActive: "10 minutes ago", wordCount: 425000, images: 1150, serpUsage: 228 },
{ id: 16, name: "Rachel Clark", email: "rachel.clark@email.com", plan: "Free", joinDate: "2024-06-15", lastActive: "4 days ago", wordCount: 11000, images: 20, serpUsage: 8 },
{ id: 17, name: "Brian Lewis", email: "brian.lewis@email.com", plan: "Pro", joinDate: "2024-03-22", lastActive: "2 hours ago", wordCount: 205000, images: 545, serpUsage: 118 },
{ id: 18, name: "Nicole Walker", email: "nicole.walker@email.com", plan: "Enterprise", joinDate: "2023-08-19", lastActive: "25 minutes ago", wordCount: 495000, images: 1425, serpUsage: 282 },
{ id: 19, name: "Steven Hall", email: "steven.hall@email.com", plan: "Free", joinDate: "2024-07-20", lastActive: "6 days ago", wordCount: 7200, images: 10, serpUsage: 4 },
{ id: 20, name: "Karen Allen", email: "karen.allen@email.com", plan: "Pro", joinDate: "2024-01-25", lastActive: "5 hours ago", wordCount: 235000, images: 605, serpUsage: 132 },
{ id: 21, name: "Gary Young", email: "gary.young@email.com", plan: "Enterprise", joinDate: "2023-12-18", lastActive: "35 minutes ago", wordCount: 410000, images: 1090, serpUsage: 215 },
{ id: 22, name: "Patricia King", email: "patricia.king@email.com", plan: "Free", joinDate: "2024-08-10", lastActive: "8 days ago", wordCount: 6800, images: 8, serpUsage: 3 },
{ id: 23, name: "Timothy Wright", email: "timothy.wright@email.com", plan: "Pro", joinDate: "2024-04-12", lastActive: "1 hour ago", wordCount: 225000, images: 595, serpUsage: 125 },
{ id: 24, name: "Sharon Lopez", email: "sharon.lopez@email.com", plan: "Enterprise", joinDate: "2023-10-30", lastActive: "45 minutes ago", wordCount: 465000, images: 1320, serpUsage: 252 },
{ id: 25, name: "Edward Hill", email: "edward.hill@email.com", plan: "Free", joinDate: "2024-07-28", lastActive: "7 days ago", wordCount: 8900, images: 14, serpUsage: 6 },
{ id: 26, name: "Donna Scott", email: "donna.scott@email.com", plan: "Pro", joinDate: "2024-02-08", lastActive: "3 hours ago", wordCount: 255000, images: 655, serpUsage: 142 },
{ id: 27, name: "Ronald Green", email: "ronald.green@email.com", plan: "Enterprise", joinDate: "2023-09-15", lastActive: "12 minutes ago", wordCount: 505000, images: 1480, serpUsage: 289 },
{ id: 28, name: "Cynthia Adams", email: "cynthia.adams@email.com", plan: "Free", joinDate: "2024-08-22", lastActive: "9 days ago", wordCount: 5500, images: 6, serpUsage: 2 }];


const userActivityData = [
{ day: "Mon", words: 5000, images: 15 },
{ day: "Tue", words: 7200, images: 22 },
{ day: "Wed", words: 6800, images: 19 },
{ day: "Thu", words: 9100, images: 28 },
{ day: "Fri", words: 8500, images: 25 },
{ day: "Sat", words: 4200, images: 12 },
{ day: "Sun", words: 3800, images: 10 }];


export default function Users() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [planFilter, setPlanFilter] = useState("all");
  const [activityFilter, setActivityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("words-desc");

  const toggleUserSelection = (userId) => {
    setSelectedUsers((prev) =>
    prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  const isUserActive = (lastActive) => {
    const activePatterns = ["minute", "hour", "minutes ago", "hours ago"];
    return activePatterns.some((pattern) => lastActive.toLowerCase().includes(pattern));
  };

  const filteredAndSortedUsers = mockUsers.
  filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlan = planFilter === "all" || user.plan.toLowerCase() === planFilter;
    const matchesActivity = activityFilter === "all" ||
    activityFilter === "active" && isUserActive(user.lastActive) ||
    activityFilter === "inactive" && !isUserActive(user.lastActive);
    return matchesSearch && matchesPlan && matchesActivity;
  }).
  sort((a, b) => {
    switch (sortBy) {
      case "words-desc":return b.wordCount - a.wordCount;
      case "words-asc":return a.wordCount - b.wordCount;
      case "images-desc":return b.images - a.images;
      case "images-asc":return a.images - b.images;
      case "serp-desc":return b.serpUsage - a.serpUsage;
      case "serp-asc":return a.serpUsage - b.serpUsage;
      default:return 0;
    }
  });

  return (
    _jsxs("div", { className: "space-y-6", children: [
      _jsxs("div", { className: "flex items-center justify-between", children: [
        _jsxs("div", { children: [
          _jsx("h1", { className: "text-3xl font-bold text-foreground", children: "Users" }),
          _jsx("p", { className: "text-muted-foreground", children: "Manage and monitor all platform users" })] }
        ),
        _jsx(Button, { children: "Add User" })] }
      ),

      _jsxs(Card, { children: [
        _jsx(CardHeader, { children:
          _jsx(CardTitle, { children: "Filters & Search" }) }
        ),
        _jsx(CardContent, { children:
          _jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
            _jsxs("div", { className: "relative", children: [
              _jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
              _jsx(Input, {
                placeholder: "Search users...",
                className: "pl-10",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value) }
              )] }
            ),
            _jsxs(Select, { value: planFilter, onValueChange: setPlanFilter, children: [
              _jsx(SelectTrigger, { children:
                _jsx(SelectValue, { placeholder: "Plan Type" }) }
              ),
              _jsxs(SelectContent, { children: [
                _jsx(SelectItem, { value: "all", children: "All Plans" }),
                _jsx(SelectItem, { value: "free", children: "Free" }),
                _jsx(SelectItem, { value: "pro", children: "Pro" }),
                _jsx(SelectItem, { value: "enterprise", children: "Enterprise" })] }
              )] }
            ),
            _jsxs(Select, { value: activityFilter, onValueChange: setActivityFilter, children: [
              _jsx(SelectTrigger, { children:
                _jsx(SelectValue, { placeholder: "Activity Status" }) }
              ),
              _jsxs(SelectContent, { children: [
                _jsx(SelectItem, { value: "all", children: "All Users" }),
                _jsx(SelectItem, { value: "active", children: "Active" }),
                _jsx(SelectItem, { value: "inactive", children: "Inactive" })] }
              )] }
            ),
            _jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [
              _jsx(SelectTrigger, { children:
                _jsx(SelectValue, { placeholder: "Sort By" }) }
              ),
              _jsxs(SelectContent, { children: [
                _jsx(SelectItem, { value: "words-desc", children: "Words (High to Low)" }),
                _jsx(SelectItem, { value: "words-asc", children: "Words (Low to High)" }),
                _jsx(SelectItem, { value: "images-desc", children: "Images (High to Low)" }),
                _jsx(SelectItem, { value: "images-asc", children: "Images (Low to High)" }),
                _jsx(SelectItem, { value: "serp-desc", children: "SERP (High to Low)" }),
                _jsx(SelectItem, { value: "serp-asc", children: "SERP (Low to High)" })] }
              )] }
            )] }
          ) }
        )] }
      ),

      selectedUsers.length > 0 &&
      _jsx(Card, { className: "border-primary", children:
        _jsxs(CardContent, { className: "flex items-center justify-between p-4", children: [
          _jsxs("span", { className: "text-sm font-medium", children: [
            selectedUsers.length, " user(s) selected"] }
          ),
          _jsxs("div", { className: "flex gap-2", children: [
            _jsx(Button, { variant: "outline", size: "sm", children: "Activate" }

            ),
            _jsx(Button, { variant: "outline", size: "sm", children: "Suspend" }

            ),
            _jsx(Button, { variant: "destructive", size: "sm", children: "Delete" }

            )] }
          )] }
        ) }
      ),


      _jsx(Card, { children:
        _jsx(CardContent, { className: "p-0", children:
          _jsxs(Table, { children: [
            _jsx(TableHeader, { children:
              _jsxs(TableRow, { children: [
                _jsx(TableHead, { className: "w-12", children:
                  _jsx(Checkbox, {
                    checked: selectedUsers.length === filteredAndSortedUsers.length && filteredAndSortedUsers.length > 0,
                    onCheckedChange: (checked) => {
                      if (checked) {
                        setSelectedUsers(filteredAndSortedUsers.map((u) => u.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    } }
                  ) }
                ),
                _jsx(TableHead, { children: "Name" }),
                _jsx(TableHead, { children: "Email" }),
                _jsx(TableHead, { children: "Plan" }),
                _jsx(TableHead, { children: "Join Date" }),
                _jsx(TableHead, { children: "Last Active" }),
                _jsx(TableHead, { className: "text-right", children: "Words" }),
                _jsx(TableHead, { className: "text-right", children: "Images" }),
                _jsx(TableHead, { className: "text-right", children: "SERP" }),
                _jsx(TableHead, { className: "w-12" })] }
              ) }
            ),
            _jsx(TableBody, { children:
              filteredAndSortedUsers.map((user) =>
              _jsxs(TableRow, { children: [
                _jsx(TableCell, { children:
                  _jsx(Checkbox, {
                    checked: selectedUsers.includes(user.id),
                    onCheckedChange: () => toggleUserSelection(user.id) }
                  ) }
                ),
                _jsx(TableCell, { className: "font-medium", children: user.name }),
                _jsx(TableCell, { children: user.email }),
                _jsx(TableCell, { children:
                  _jsx(Badge, {
                    variant:
                    user.plan === "Enterprise" ?
                    "default" :
                    user.plan === "Pro" ?
                    "default" :
                    "secondary", children:


                    user.plan }
                  ) }
                ),
                _jsx(TableCell, { children: user.joinDate }),
                _jsx(TableCell, { className: "text-muted-foreground", children: user.lastActive }),
                _jsx(TableCell, { className: "text-right font-mono", children:
                  user.wordCount.toLocaleString() }
                ),
                _jsx(TableCell, { className: "text-right font-mono", children: user.images }),
                _jsx(TableCell, { className: "text-right font-mono", children: user.serpUsage }),
                _jsx(TableCell, { children:
                  _jsxs(Dialog, { children: [
                    _jsx(DialogTrigger, { asChild: true, children:
                      _jsx(Button, {
                        variant: "ghost",
                        size: "icon",
                        onClick: () => setSelectedUser(user), children:

                        _jsx(Eye, { className: "h-4 w-4" }) }
                      ) }
                    ),
                    _jsxs(DialogContent, { className: "max-w-3xl", children: [
                      _jsx(DialogHeader, { children:
                        _jsxs(DialogTitle, { children: ["User Details: ", user.name] }) }
                      ),
                      _jsxs("div", { className: "space-y-6 mt-4", children: [
                        _jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
                          _jsxs("div", { className: "space-y-1", children: [
                            _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Email" }),
                            _jsx("p", { className: "text-sm", children: user.email })] }
                          ),
                          _jsxs("div", { className: "space-y-1", children: [
                            _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Plan" }),
                            _jsx(Badge, { children: user.plan })] }
                          ),
                          _jsxs("div", { className: "space-y-1", children: [
                            _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Join Date" }

                            ),
                            _jsx("p", { className: "text-sm", children: user.joinDate })] }
                          ),
                          _jsxs("div", { className: "space-y-1", children: [
                            _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Last Active" }

                            ),
                            _jsx("p", { className: "text-sm", children: user.lastActive })] }
                          )] }
                        ),

                        _jsxs("div", { children: [
                          _jsx("h3", { className: "mb-4 text-lg font-semibold", children: "Usage Trends" }),
                          _jsx(ResponsiveContainer, { width: "100%", height: 200, children:
                            _jsxs(LineChart, { data: userActivityData, children: [
                              _jsx(CartesianGrid, {
                                strokeDasharray: "3 3",
                                stroke: "hsl(var(--border))" }
                              ),
                              _jsx(XAxis, {
                                dataKey: "day",
                                stroke: "hsl(var(--muted-foreground))" }
                              ),
                              _jsx(YAxis, { stroke: "hsl(var(--muted-foreground))" }),
                              _jsx(Tooltip, {
                                contentStyle: {
                                  backgroundColor: "hsl(var(--card))",
                                  border: "1px solid hsl(var(--border))",
                                  borderRadius: "0.5rem"
                                } }
                              ),
                              _jsx(Line, {
                                type: "monotone",
                                dataKey: "words",
                                stroke: "hsl(var(--primary))",
                                strokeWidth: 2 }
                              ),
                              _jsx(Line, {
                                type: "monotone",
                                dataKey: "images",
                                stroke: "hsl(var(--success))",
                                strokeWidth: 2 }
                              )] }
                            ) }
                          )] }
                        ),

                        _jsxs("div", { children: [
                          _jsx("h3", { className: "mb-3 text-lg font-semibold", children: "Recent Actions" }),
                          _jsx("div", { className: "space-y-2", children:
                            [
                            "Generated 5,000 words of content",
                            "Created 15 AI images",
                            "Completed 8 SERP analyses",
                            "Exported 3 documents"].
                            map((action, i) =>
                            _jsxs("div", {

                              className: "flex items-center justify-between rounded-lg border border-border p-3", children: [

                              _jsx("span", { className: "text-sm", children: action }),
                              _jsxs("span", { className: "text-xs text-muted-foreground", children: [
                                i + 1, " day", i > 0 ? "s" : "", " ago"] }
                              )] }, i
                            )
                            ) }
                          )] }
                        ),

                        _jsxs("div", { className: "flex gap-2", children: [
                          _jsx(Button, { variant: "outline", children: "Suspend User" }),
                          _jsx(Button, { variant: "outline", children: "Reset Password" }),
                          _jsx(Button, { children: "Upgrade Plan" })] }
                        )] }
                      )] }
                    )] }
                  ) }
                )] }, user.id
              )
              ) }
            )] }
          ) }
        ) }
      )] }
    ));

}