import { cn } from "@/lib/utils";import { jsx as _jsx } from "react/jsx-runtime";

function Skeleton({ className, ...props }) {
  return _jsx("div", { className: cn("animate-pulse rounded-md bg-muted", className), ...props });
}

export { Skeleton };