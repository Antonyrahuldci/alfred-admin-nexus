import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger } from
"@/components/ui/dropdown-menu";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export const Navbar = () => {
  return (
    _jsxs("header", { className: "flex h-16 items-center justify-between border-b border-border bg-card px-6", children: [
      _jsx("div", { className: "flex flex-1 items-center gap-4", children:
        _jsxs("div", { className: "relative w-96", children: [
          _jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          _jsx(Input, {
            type: "search",
            placeholder: "Search users, subscriptions, tasks...",
            className: "pl-10" }
          )] }
        ) }
      ),

      _jsx("div", { className: "flex items-center gap-4", children:
        _jsxs(DropdownMenu, { children: [
          _jsx(DropdownMenuTrigger, { asChild: true, children:
            _jsxs("button", { className: "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-muted", children: [
              _jsx(Avatar, { className: "h-8 w-8", children:
                _jsx(AvatarFallback, { className: "bg-primary text-primary-foreground", children:
                  _jsx(User, { className: "h-4 w-4" }) }
                ) }
              ),
              _jsxs("div", { className: "text-left text-sm", children: [
                _jsx("div", { className: "font-medium", children: "Admin User" }),
                _jsx("div", { className: "text-xs text-muted-foreground", children: "admin@simbli.com" })] }
              )] }
            ) }
          ),
          _jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
            _jsx(DropdownMenuLabel, { children: "My Account" }),
            _jsx(DropdownMenuSeparator, {}),
            _jsx(DropdownMenuItem, { children: "Profile" }),
            _jsx(DropdownMenuItem, { children: "Settings" }),
            _jsx(DropdownMenuSeparator, {}),
            _jsx(DropdownMenuItem, { className: "text-destructive", children: "Logout" })] }
          )] }
        ) }
      )] }
    ));

};