import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  ListTodo,
  Bell,
  Plug,
  Settings,
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

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

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

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "relative flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {isOpen && (
          <h1 className="text-xl font-bold text-sidebar-foreground">
            Simbli Alfred
          </h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="ml-auto text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {isOpen && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
