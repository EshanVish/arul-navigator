import { UserCircle, Calendar, MessageSquare, Phone, Video, Heart, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const PeerNavigatorView = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-serif text-foreground flex items-center gap-3">
                    <UserCircle className="w-8 h-8 text-primary" />
                    Your Peer Navigator
                </h1>
                <p className="text-muted-foreground">
                    Connect with your dedicated peer navigator who has walked the same path and is here to support you.
                </p>
            </div>

            {/* Navigator Profile Card */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Profile Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                            alt="Zoe, Peer Navigator"
                            className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-background"></div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 space-y-4">
                        <div>
                            <h2 className="text-2xl font-serif text-foreground mb-1">Zoe Martinez, 22</h2>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <Award className="w-4 h-4 text-primary" />
                                <span>Certified Peer Navigator • Breast Cancer Survivor</span>
                            </div>
                            <div className="flex items-center gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                                ))}
                                <span className="text-sm text-muted-foreground ml-2">(4.9/5 from 127 reviews)</span>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                            "Helping someone feel seen makes mentoring so worth it. I've been through this journey, and
                            I'm here to help you navigate every step with compassion and understanding."
                        </blockquote>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border">
                                School Stress
                            </span>
                            <span className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border">
                                Anxiety Management
                            </span>
                            <span className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border">
                                Treatment Planning
                            </span>
                            <span className="px-3 py-1 bg-background rounded-full text-xs font-medium border border-border">
                                Young Adults
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Button className="bg-primary hover:bg-primary/90">
                                <Calendar className="w-4 h-4 mr-2" />
                                Schedule Session
                            </Button>
                            <Button variant="outline">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                            <Button variant="outline">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Video className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-foreground">1:1 Video Call</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                        Connect face-to-face for personalized guidance and support.
                    </p>
                    <span className="text-xs text-primary font-medium">Free for all members →</span>
                </div>

                <div className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MessageSquare className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-foreground">Chat Anytime</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                        Ask questions and get support via secure messaging.
                    </p>
                    <span className="text-xs text-primary font-medium">24/7 access →</span>
                </div>

                <div className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Heart className="w-5 h-5 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-foreground">Emotional Support</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                        Share your feelings with someone who truly understands.
                    </p>
                    <span className="text-xs text-primary font-medium">Always available →</span>
                </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Upcoming Sessions with Zoe</h2>

                <div className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Calendar className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground">Weekly Check-in</h3>
                                <p className="text-sm text-muted-foreground mt-1">Tomorrow, 2:00 PM • 45 minutes</p>
                                <p className="text-sm text-muted-foreground mt-1">Discuss treatment updates and coping strategies</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button size="sm">Join Session</Button>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <Video className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground">Support Group Session</h3>
                                <p className="text-sm text-muted-foreground mt-1">Friday, 6:00 PM • 60 minutes</p>
                                <p className="text-sm text-muted-foreground mt-1">Group session for young adult cancer patients</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">Details</Button>
                            <Button size="sm">RSVP</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Conversations */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Recent Conversations</h2>

                <div className="bg-card border border-border rounded-xl divide-y divide-border">
                    <div className="p-4 hover:bg-accent/5 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                            <MessageSquare className="w-5 h-5 text-muted-foreground mt-1" />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-medium text-foreground">Treatment Side Effects</h4>
                                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    Thanks for the tips on managing nausea. The ginger tea really helps! I'll try the small frequent meals approach...
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 hover:bg-accent/5 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                            <MessageSquare className="w-5 h-5 text-muted-foreground mt-1" />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-medium text-foreground">Insurance Questions</h4>
                                    <span className="text-xs text-muted-foreground">Yesterday</span>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    Zoe helped me understand my coverage and connected me with a financial navigator. So helpful!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 hover:bg-accent/5 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                            <MessageSquare className="w-5 h-5 text-muted-foreground mt-1" />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-medium text-foreground">Family Support</h4>
                                    <span className="text-xs text-muted-foreground">3 days ago</span>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    Discussed how to talk to my family about my diagnosis. Feeling more confident now...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeerNavigatorView;
