import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Plug,
  FileText,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Coins,
  Mail,
  Activity,
  Shield,
  Sparkles,
  UserCog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/" },
  { icon: Users, label: "Users", path: "/users" },
  { icon: TrendingUp, label: "User Analytics", path: "/user-analytics" },
  { icon: CreditCard, label: "Revenue & Subs", path: "/subscriptions" },
  { icon: Coins, label: "Credit & Usage", path: "/credit-usage" },
  { icon: Mail, label: "Communications", path: "/communications" },
  { icon: Activity, label: "System Health", path: "/system-health" },
  { icon: Shield, label: "Security", path: "/security" },
  { icon: Plug, label: "Integrations", path: "/integrations" },
  { icon: Sparkles, label: "AI Insights", path: "/ai-insights" },
  { icon: UserCog, label: "Admin Controls", path: "/admin-controls" },
  { icon: FileText, label: "Reports", path: "/reports" },
];

export const Sidebar = ({ isOpen, onToggle }) => {
  return _jsxs("aside", {
    className: cn(
      "relative flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
      isOpen ? "w-64" : "w-16"
    ),
    children: [
      _jsxs("div", {
        className:
          "flex h-16 items-center justify-between border-b border-sidebar-border px-4",
        children: [
          isOpen &&
            _jsx("h1", {
              className: "text-xl font-bold text-sidebar-foreground",
              children: "Simbli Admin",
            }),

          _jsx(Button, {
            variant: "ghost",
            size: "icon",
            onClick: onToggle,
            className:
              "ml-auto text-sidebar-foreground hover:bg-sidebar-accent",
            children: isOpen
              ? _jsx(ChevronLeft, { className: "h-4 w-4" })
              : _jsx(ChevronRight, { className: "h-4 w-4" }),
          }),
        ],
      }),

      _jsx("nav", {
        className: "flex-1 space-y-1 p-3",
        children: navItems.map((item) =>
          _jsxs(
            NavLink,
            {
              to: item.path,
              className: ({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                ),
              children: [
                _jsx(item.icon, { className: "h-5 w-5 flex-shrink-0" }),
                isOpen && _jsx("span", { children: item.label }),
              ],
            },
            item.path
          )
        ),
      }),
    ],
  });
};
