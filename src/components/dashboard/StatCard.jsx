
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";












export const StatCard = ({ title, value, icon: Icon, trend, className }) => {
  return (
    _jsx(Card, { className: cn("overflow-hidden bg-gradient-card", className), children:
      _jsx(CardContent, { className: "p-6", children:
        _jsxs("div", { className: "flex items-start justify-between", children: [
          _jsxs("div", { className: "space-y-2", children: [
            _jsx("p", { className: "text-sm font-medium text-muted-foreground", children: title }),
            _jsx("p", { className: "text-3xl font-bold text-foreground", children: value }),
            trend &&
            _jsxs("p", {
              className: cn(
                "text-sm font-medium",
                trend.isPositive ? "text-success" : "text-destructive"
              ), children: [

              trend.isPositive ? "↑" : "↓", " ", Math.abs(trend.value), "%"] }
            )] }

          ),
          _jsx("div", { className: "rounded-lg bg-primary/10 p-3", children:
            _jsx(Icon, { className: "h-6 w-6 text-primary" }) }
          )] }
        ) }
      ) }
    ));

};