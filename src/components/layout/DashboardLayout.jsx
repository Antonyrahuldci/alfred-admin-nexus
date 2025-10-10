import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    _jsxs("div", { className: "flex h-screen w-full overflow-hidden bg-background", children: [
      _jsx(Sidebar, { isOpen: sidebarOpen, onToggle: () => setSidebarOpen(!sidebarOpen) }),
      _jsxs("div", { className: "flex flex-1 flex-col overflow-hidden",
        style: { backgroundColor: "#F4F4F4" }, children: [
        _jsx(Navbar, {}),
        _jsx("main", { className: "flex-1 overflow-y-auto p-6", children:
          _jsx(Outlet, {}) }
        )] }
      )] }
    ));

};