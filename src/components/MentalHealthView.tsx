import { Brain, Heart, Phone, MessageCircle, Calendar, Video, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const MentalHealthView = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-serif text-foreground flex items-center gap-3">
                    <Brain className="w-8 h-8 text-primary" />
                    Mental Health Support
                </h1>
                <p className="text-muted-foreground">
                    Access resources, counseling, and support for your mental wellbeing during your cancer journey.
                </p>
            </div>

            {/* Crisis Support Banner */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-red-600 mt-1" />
                    <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">Crisis Support Available 24/7</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            If you're experiencing a mental health crisis, help is available immediately.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700">
                                <Phone className="w-4 h-4 mr-2" />
                                988 Suicide & Crisis Lifeline
                            </Button>
                            <Button variant="outline" size="sm">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Crisis Text Line (Text HOME to 741741)
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Counseling */}
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Video className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">Virtual Counseling</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Connect with licensed therapists who specialize in cancer-related mental health.
                            </p>
                            <Button variant="outline" size="sm">
                                Schedule Session
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Support Groups */}
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">Support Groups</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Join peer support groups for shared experiences and mutual encouragement.
                            </p>
                            <Button variant="outline" size="sm">
                                Browse Groups
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Meditation & Mindfulness */}
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Heart className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">Meditation & Mindfulness</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Guided meditations and mindfulness exercises for stress relief and relaxation.
                            </p>
                            <Button variant="outline" size="sm">
                                Start Practice
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Educational Resources */}
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <BookOpen className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">Educational Resources</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Learn coping strategies, understand your emotions, and build resilience.
                            </p>
                            <Button variant="outline" size="sm">
                                Explore Resources
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Upcoming Sessions</h2>
                <div className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium text-foreground">Mindfulness Session with Dr. Sarah Chen</h3>
                            <p className="text-sm text-muted-foreground">Tomorrow, 3:00 PM • 45 minutes</p>
                        </div>
                        <Button variant="outline" size="sm">
                            Join
                        </Button>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium text-foreground">Cancer Survivors Support Group</h3>
                            <p className="text-sm text-muted-foreground">Friday, 6:00 PM • Weekly meetup</p>
                        </div>
                        <Button variant="outline" size="sm">
                            RSVP
                        </Button>
                    </div>
                </div>
            </div>

            {/* Resources Links */}
            <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Additional Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a href="#" className="text-sm text-primary hover:underline">→ Cancer Support Community</a>
                    <a href="#" className="text-sm text-primary hover:underline">→ American Psychosocial Oncology Society</a>
                    <a href="#" className="text-sm text-primary hover:underline">→ National Cancer Institute - Emotions & Cancer</a>
                    <a href="#" className="text-sm text-primary hover:underline">→ CancerCare's Free Counseling</a>
                </div>
            </div>
        </div>
    );
};

export default MentalHealthView;
