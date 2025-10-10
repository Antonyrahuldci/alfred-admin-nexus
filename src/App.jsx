import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Login from "./pages/Login";
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
import NotFound from "./pages/NotFound";
import Swal from "sweetalert2";
import ProtectedRoute from "./routes/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/overview" element={<Overview />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user-analytics" element={<UserAnalytics />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/credit-usage" element={<CreditUsage />} />
              <Route path="/communications" element={<Communications />} />
              <Route path="/system-health" element={<SystemHealth />} />
              <Route path="/security" element={<SecurityCompliance />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/ai-insights" element={<PredictiveInsights />} />
              <Route path="/admin-controls" element={<AdminControls />} />
              <Route path="/reports" element={<Reports />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
