import { useState } from "react";
import { Plus, ArrowUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const quickActions = [
  { label: "Find local resources", icon: Zap, command: "/find resources" },
  { label: "Find specialists", icon: Zap, command: "/find specialists" },
  { label: "Order food", icon: Zap, command: "/order food" },
  { label: "Prep my day", icon: Zap, command: "/prep my day" },
  { label: "Sync my portals", icon: Zap, command: "/sync portals" },
];

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="relative bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
        <div className="flex items-center px-4">
          <input
            type="text"
            placeholder="Give Arul a task to do"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 h-14 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
          />
          <button
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200",
              query
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 w-full justify-center md:justify-start">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => setQuery(action.command)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full shrink-0 whitespace-nowrap box-border",
                "bg-card border border-border shadow-sm",
                "text-muted-foreground text-sm font-medium",
                "hover:border-accent hover:text-accent transition-all duration-200",
                "opacity-90 hover:opacity-100"
              )}
            >
              <action.icon className="w-3.5 h-3.5 fill-current" />
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
