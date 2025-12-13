import { useState } from "react";
import { Plus, ArrowUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const quickActions = [
  { label: "Find local resources", icon: Zap },
  { label: "Find specialists", icon: Zap },
  { label: "Prep my day", icon: Zap },
  { label: "Sync my portals", icon: Zap },
];

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="relative bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
        <div className="flex items-center px-4">
          <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Plus className="w-5 h-5" />
          </button>
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

      <div className="flex items-center justify-center gap-2 flex-wrap">
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground border border-transparent hover:border-border transition-all">
          <Plus className="w-4 h-4" />
        </button>
        {quickActions.map((action) => (
          <button
            key={action.label}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full",
              "bg-card border border-border shadow-card",
              "text-accent text-sm font-medium",
              "hover:border-accent transition-all duration-200"
            )}
          >
            <action.icon className="w-4 h-4" />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};
