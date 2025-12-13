import { cn } from "@/lib/utils";

interface FloatingResourceCardProps {
  name: string;
  icon: string;
  color: string;
  className?: string;
  isActive?: boolean;
  isMatched?: boolean;
  isOrganized?: boolean;
  onClick?: () => void;
}

export const FloatingResourceCard = ({ 
  name, 
  icon, 
  color, 
  className,
  isActive = false,
  isMatched = false,
  isOrganized = false,
  onClick,
}: FloatingResourceCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 bg-card rounded-xl shadow-card border transition-all duration-500",
        isActive 
          ? "border-ring ring-2 ring-ring shadow-lg opacity-100 scale-105 z-20" 
          : isMatched 
          ? "border-ring/50 opacity-100"
          : isOrganized
          ? "border-border opacity-90"
          : "border-border/50 opacity-60",
        onClick && "cursor-pointer hover:opacity-100",
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