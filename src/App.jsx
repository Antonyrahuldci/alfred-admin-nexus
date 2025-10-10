import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import UserAnalytics from "./pages/UserAnalytics";
import Subscriptions from "./pages/Subscriptions";
import CreditUsage from "./pages/CreditUsage";
import Communications from "./pages/Communications";
import SystemHealth from "./pages/SystemHealth";
import SecurityCompliance from "./pages/SecurityCompliance";
import Integrations from "./pages/Integrations";
import PredictiveInsights from "./pages/PredictiveInsights";
import AdminControls from "./pages/AdminControls";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const queryClient = new QueryClient();

const App = () =>
_jsx(QueryClientProvider, { client: queryClient, children:
  _jsxs(TooltipProvider, { children: [
    _jsx(Toaster, {}),
    _jsx(Sonner, {}),
    _jsx(BrowserRouter, { children:
      _jsxs(Routes, { children: [
        _jsxs(Route, { element: _jsx(DashboardLayout, {}), children: [
          _jsx(Route, { path: "/", element: _jsx(Overview, {}) }),
          _jsx(Route, { path: "/users", element: _jsx(Users, {}) }),
          _jsx(Route, { path: "/user-analytics", element: _jsx(UserAnalytics, {}) }),
          _jsx(Route, { path: "/subscriptions", element: _jsx(Subscriptions, {}) }),
          _jsx(Route, { path: "/credit-usage", element: _jsx(CreditUsage, {}) }),
          _jsx(Route, { path: "/communications", element: _jsx(Communications, {}) }),
          _jsx(Route, { path: "/system-health", element: _jsx(SystemHealth, {}) }),
          _jsx(Route, { path: "/security", element: _jsx(SecurityCompliance, {}) }),
          _jsx(Route, { path: "/integrations", element: _jsx(Integrations, {}) }),
          _jsx(Route, { path: "/ai-insights", element: _jsx(PredictiveInsights, {}) }),
          _jsx(Route, { path: "/admin-controls", element: _jsx(AdminControls, {}) }),
          _jsx(Route, { path: "/reports", element: _jsx(Reports, {}) })] }
        ),
        _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }
      ) }
    )] }
  ) }
);


export default App;