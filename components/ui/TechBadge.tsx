import type { ReactNode } from "react";

export default function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-[10px] font-mono text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-sm">
      {children}
    </span>
  );
}
