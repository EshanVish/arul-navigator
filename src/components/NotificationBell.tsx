import { Bell, Play, Video, MessageSquare, Info } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const notifications = [
    {
        id: 1,
        title: "Live Session Starting",
        description: "Gentle Yoga with Sarah is starting now.",
        time: "Now",
        icon: Video,
        color: "text-red-500",
        bg: "bg-red-500/10",
        unread: true
    },
    {
        id: 2,
        title: "New Meditation Added",
        description: "'Finding Calm' has been added to the library.",
        time: "2h ago",
        icon: Play,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        unread: true
    },
    {
        id: 3,
        title: "New Reply",
        description: "Mark D. replied to your discussion topic.",
        time: "5h ago",
        icon: MessageSquare,
        color: "text-primary",
        bg: "bg-primary/10",
        unread: false
    }
];

export const NotificationBell = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-muted/50 transition-colors">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 mr-4" align="end">
                <div className="p-4 border-b border-border bg-muted/20">
                    <h4 className="font-semibold leading-none">Notifications</h4>
                    <p className="text-xs text-muted-foreground mt-1">You have 2 unread messages.</p>
                </div>
                <ScrollArea className="h-[300px]">
                    <div className="flex flex-col">
                        {notifications.map((n) => (
                            <div key={n.id} className={cn(
                                "p-4 flex gap-3 hover:bg-muted/50 transition-colors cursor-pointer border-b border-border/50 last:border-0",
                                n.unread ? "bg-accent/5" : ""
                            )}>
                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", n.bg)}>
                                    <n.icon className={cn("w-5 h-5", n.color)} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">{n.title}</p>
                                    <p className="text-xs text-muted-foreground line-clamp-2">{n.description}</p>
                                    <p className="text-[10px] text-muted-foreground pt-1">{n.time}</p>
                                </div>
                                {n.unread && (
                                    <div className="ml-auto flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </PopoverContent>
        </Popover>
    );
};
