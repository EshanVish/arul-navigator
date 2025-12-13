import { cn } from "@/lib/utils";

interface FloatingResourceCardProps {
  name: string;
  icon: string;
  color: string;
  className?: string;
}

export const FloatingResourceCard = ({ name, icon, color, className }: FloatingResourceCardProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 bg-card rounded-xl shadow-card border border-border/50",
        "opacity-60 hover:opacity-100 transition-opacity duration-300",
        className
      )}
    >
      <div 
        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground truncate max-w-[140px]">
        {name}
      </span>
    </div>
  );
};
