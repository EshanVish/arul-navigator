import { useState, useEffect } from "react";
import { X, HeartHandshake, UserCircle, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

type NotificationSource = "community" | "peer-navigator" | "nurse";

type Notification = {
    id: string;
    source: NotificationSource;
    sourceName: string;
    title: string;
    message: string;
    time: string;
    avatar?: string;
};

const sourceConfig = {
    community: {
        icon: HeartHandshake,
        color: "text-purple-600",
        bgColor: "bg-purple-100",
    },
    "peer-navigator": {
        icon: UserCircle,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
    },
    nurse: {
        icon: Stethoscope,
        color: "text-green-600",
        bgColor: "bg-green-100",
    },
};

export const NotificationToast = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

    // Sample notifications that will appear
    const sampleNotifications: Notification[] = [
        {
            id: "1",
            source: "community",
            sourceName: "Community",
            title: "New Discussion Post",
            message: "Sarah started a discussion: 'Tips for managing treatment side effects'",
            time: "2m ago",
        },
        {
            id: "2",
            source: "peer-navigator",
            sourceName: "Zoe Martinez",
            title: "Message from your Navigator",
            message: "Hi! Just checking in - how are you feeling today? 💙",
            time: "5m ago",
        },
        {
            id: "3",
            source: "nurse",
            sourceName: "Nurse Alex",
            title: "Appointment Reminder",
            message: "Your telehealth appointment is tomorrow at 2:00 PM",
            time: "10m ago",
        },
    ];

    useEffect(() => {
        // Show notifications one by one with delays
        const timers: NodeJS.Timeout[] = [];

        sampleNotifications.forEach((notification, index) => {
            const timer = setTimeout(() => {
                setCurrentNotification(notification);
                setNotifications((prev) => [...prev, notification]);

                // Auto-hide after 5 seconds
                const hideTimer = setTimeout(() => {
                    setCurrentNotification(null);
                }, 5000);
                timers.push(hideTimer);
            }, index * 7000); // Show each notification 7 seconds apart

            timers.push(timer);
        });

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    const handleDismiss = () => {
        setCurrentNotification(null);
    };

    if (!currentNotification) return null;

    const config = sourceConfig[currentNotification.source];
    const IconComponent = config.icon;

    return (
        <div className="fixed top-6 right-6 z-[100] animate-in slide-in-from-right-full fade-in duration-300">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 w-[380px] overflow-hidden">
                {/* iOS-style blur header bar */}
                <div className="h-1 bg-gradient-to-r from-gray-400/50 to-gray-300/50" />

                <div className="p-4">
                    <div className="flex items-start gap-3">
                        {/* Icon/Avatar */}
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", config.bgColor)}>
                            <IconComponent className={cn("w-5 h-5", config.color)} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-gray-900">
                                        {currentNotification.sourceName}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {currentNotification.time}
                                    </span>
                                </div>
                                <button
                                    onClick={handleDismiss}
                                    className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-500" />
                                </button>
                            </div>

                            <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">
                                {currentNotification.title}
                            </h4>

                            <p className="text-sm text-gray-600 line-clamp-2">
                                {currentNotification.message}
                            </p>
                        </div>
                    </div>

                    {/* iOS-style action buttons - optional */}
                    <div className="mt-3 flex gap-2">
                        <button className="flex-1 py-2 text-xs font-semibold text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">
                            View
                        </button>
                        <button
                            onClick={handleDismiss}
                            className="flex-1 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
