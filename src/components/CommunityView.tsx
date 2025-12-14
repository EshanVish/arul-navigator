import { Users, Play, MessageSquare, Heart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const CommunityView = () => {
    return (
        <div className="h-full w-full overflow-y-auto p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-serif text-foreground mb-2">Westwood Community</h1>
                <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Connecting you with support in 90024
                </p>
            </div>

            {/* Neighbors */}
            <section className="space-y-4">
                <h2 className="text-xl font-medium flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Neighbors Near You
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Sarah L.", role: "Survivor (Breast)", dist: "0.5 mi" },
                        { name: "David K.", role: "Caregiver", dist: "1.2 mi" },
                        { name: "Maria R.", role: "Patient (Lung)", dist: "2.0 mi" },
                        { name: "James T.", role: "Survivor", dist: "2.5 mi" },
                    ].map((person, i) => (
                        <div key={i} className="bg-card border border-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3 group-hover:bg-accent/30 transition-colors">
                                <span className="font-semibold text-accent">{person.name[0]}</span>
                            </div>
                            <h3 className="font-medium">{person.name}</h3>
                            <p className="text-xs text-muted-foreground">{person.role}</p>
                            <p className="text-xs text-primary mt-2 flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> {person.dist}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Wellness */}
            <section className="space-y-4">
                <h2 className="text-xl font-medium flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    Wellness & Mindfulness
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "10-min Morning Meditation", type: "Meditation", color: "bg-blue-100 text-blue-700" },
                        { title: "Gentle Yoga for Recovery", type: "Yoga", color: "bg-green-100 text-green-700" },
                        { title: "Sleep Stories for Rest", type: "Sleep", color: "bg-indigo-100 text-indigo-700" },
                    ].map((item, i) => (
                        <div key={i} className="relative aspect-video bg-muted rounded-xl overflow-hidden cursor-pointer group hover:opacity-90 transition-opacity">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 text-foreground ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-3 left-3 right-3">
                                <span className={cn("text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block", item.color)}>
                                    {item.type}
                                </span>
                                <p className="text-white font-medium shadow-black/50 drop-shadow-md">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Forum */}
            <section className="space-y-4">
                <h2 className="text-xl font-medium flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Local Discussions
                </h2>
                <div className="bg-card border border-border rounded-xl divide-y divide-border">
                    {[
                        { topic: "Best integrative oncologist in Westwood?", author: "Sarah L.", replies: 12, time: "2h ago" },
                        { topic: "Looking for a walking buddy at Holmby Park", author: "Mark D.", replies: 5, time: "4h ago" },
                        { topic: "Experiences with cisplatin side effects?", author: "Jenny W.", replies: 28, time: "1d ago" },
                    ].map((thread, i) => (
                        <div key={i} className="p-4 hover:bg-muted/30 transition-colors cursor-pointer flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-foreground mb-1">{thread.topic}</h3>
                                <div className="text-xs text-muted-foreground flex items-center gap-3">
                                    <span>Posted by {thread.author}</span>
                                    <span>•</span>
                                    <span>{thread.time}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground bg-muted/50 px-3 py-1 rounded-full text-xs font-medium">
                                <MessageSquare className="w-3.5 h-3.5" />
                                {thread.replies}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="w-full py-3 text-sm text-center text-primary hover:bg-primary/5 rounded-lg border border-transparent hover:border-primary/10 transition-all">
                    View all 42 discussions
                </button>
            </section>

        </div>
    );
};

export default CommunityView;
