import { Clock, Users, Calendar, MessageSquare, Grid3X3, Settings, HeartHandshake, Brain, Terminal, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "command-center", icon: Terminal, label: "Command Center" },
  { id: "peer-navigator", icon: UserCircle, label: "Peer Navigator" },
  { id: "mental-health", icon: Brain, label: "Mental Health" },
];

type DashboardSidebarProps = {
  activeView: string;
  onViewChange: (view: string) => void;
};

export const DashboardSidebar = ({ activeView, onViewChange }: DashboardSidebarProps) => {
  return (
    <aside className="group w-16 hover:w-64 h-screen bg-card border-r border-border flex flex-col py-6 gap-2 transition-all duration-300 ease-in-out z-50">
      <div className="flex flex-col gap-2 px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl w-full",
              "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent",
              "transition-all duration-200",
              activeView === item.id && "bg-sidebar-accent text-sidebar-primary"
            )}
            title={item.label}
          >
            <item.icon className="w-5 h-5 min-w-[20px]" />
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap overflow-hidden">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex-1" />

      <div className="px-3 flex flex-col gap-2">
        {/* Community Button */}
        <button
          onClick={() => onViewChange("community")}
          className={cn(
            "flex items-center gap-3 p-3 rounded-xl w-full",
            "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent",
            "transition-all duration-200",
            activeView === "community" && "bg-sidebar-accent text-sidebar-primary"
          )}
          title="Community"
        >
          <HeartHandshake className="w-5 h-5 min-w-[20px]" />
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap overflow-hidden">
            Community
          </span>
        </button>

        {/* Settings Button */}
        <button
          className={cn(
            "flex items-center gap-3 p-3 rounded-xl w-full",
            "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent",
            "transition-all duration-200"
          )}
          title="Settings"
        >
          <Settings className="w-5 h-5 min-w-[20px]" />
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap overflow-hidden">
            Settings
          </span>
        </button>
      </div>
    </aside>
  );
};
