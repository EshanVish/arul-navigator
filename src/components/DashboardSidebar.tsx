import { Clock, Users, Calendar, MessageSquare, Grid3X3, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Clock, label: "Recent", href: "#" },
  { icon: Users, label: "Navigator", href: "#" },
  { icon: Calendar, label: "Schedule", href: "#" },
  { icon: MessageSquare, label: "Messages", href: "#" },
  { icon: Grid3X3, label: "Resources", href: "#" },
];

export const DashboardSidebar = () => {
  return (
    <aside className="w-16 h-screen bg-card border-r border-border flex flex-col items-center py-6 gap-2">
      {navItems.map((item) => (
        <button
          key={item.label}
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center",
            "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent",
            "transition-all duration-200"
          )}
          title={item.label}
        >
          <item.icon className="w-5 h-5" />
        </button>
      ))}
      
      <div className="flex-1" />
      
      <button
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center",
          "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent",
          "transition-all duration-200"
        )}
        title="Settings"
      >
        <Settings className="w-5 h-5" />
      </button>
    </aside>
  );
};
