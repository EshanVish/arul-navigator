import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Calendar, Heart, Zap, Bot, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg font-bold">A</span>
            </div>
            <span className="font-serif text-xl font-medium tracking-tight">Arul Health</span>
          </div>
          <Button variant="ghost" onClick={handleLogin} className="text-sm font-medium">
            Log in
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70" />

        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-8 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Now Available in Beta
          </div>

          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground mb-6 leading-[1.1]">
            The Operating System for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Your Cancer Journey
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            A free virtual assistant that manages appointments, finds resources, and supports you emotionally.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              onClick={handleLogin}
              className="h-14 px-8 rounded-full text-lg shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Get Started with Google
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-xs text-muted-foreground mt-4 sm:mt-0">
              No credit card required. Free forever for patients.
            </p>
          </div>
        </div>

        {/* Abstract Interface Preview */}
        <div className="mt-20 max-w-5xl mx-auto relative perspective-1000">
          <div className="relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-2 shadow-2xl transform rotate-x-12 opacity-90 hover:rotate-x-0 hover:opacity-100 transition-all duration-700 ease-out">
            <div className="bg-background rounded-xl overflow-hidden border border-border/50 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5" />
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg font-medium text-foreground">"I've found 3 oncologists near you that accept your insurance."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Stats (Faux) */}
      <section className="py-12 border-y border-border/40 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">POWERING THE JOURNEY FOR FAMILIES ACROSS THE NATION</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            <div className="flex items-center gap-2 text-xl font-bold font-serif"><Shield className="w-6 h-6" /> SecureHealth</div>
            <div className="flex items-center gap-2 text-xl font-bold font-serif"><Heart className="w-6 h-6" /> CareAlliance</div>
            <div className="flex items-center gap-2 text-xl font-bold font-serif"><Zap className="w-6 h-6" /> FastTrack</div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features - Solace Content Adapted */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Complete Care Coordination</h2>
            <p className="text-lg text-muted-foreground">
              We've digitized the role of a patient navigator. All the empathy of a human, with the speed and precision of AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

            {/* Feature 1: Navigation (Large Left) */}
            <div className="md:col-span-2 row-span-2 bg-card border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4">AI-Powered Navigation</h3>
                  <p className="text-lg text-muted-foreground max-w-md">
                    Find cancer advocates, specialists, and clinical trials in seconds. We verify insurance, check availability, and help you understand your options.
                  </p>
                </div>

                {/* Visual abstraction */}
                <div className="mt-8 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 max-w-sm ml-auto transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-muted-foreground">&gt; Searching database... found 3 matches.</div>
                    <div className="text-xs font-mono text-primary">&gt; Dr. Sarah Chen (Oncologist) - 2.1 miles</div>
                    <div className="text-xs font-mono text-primary">&gt; Verifying insurance coverage... Approved.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Logistics (Right Top) */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Smart Logistics</h3>
              <p className="text-muted-foreground">
                We sync your portals, manage your calendar, and prep your day. Never miss a dose or an appointment.
              </p>
            </div>

            {/* Feature 3: Emotional Support (Right Bottom) */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-ring/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-ring" />
              </div>
              <h3 className="text-2xl font-serif mb-3">Always-On Companion</h3>
              <p className="text-muted-foreground">
                A friend to talk to, 24/7. Vent, ask questions, or just chat. We're here to listen and help you process.
              </p>
            </div>

            {/* Feature 4: Centralized Command (Bottom Span) */}
            <div className="md:col-span-3 bg-secondary/30 border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 group hover:bg-secondary/40 transition-colors">
              <div className="flex-1">
                <h3 className="text-3xl font-serif mb-4">Your Centralized Command Center</h3>
                <p className="text-lg text-muted-foreground">
                  One dashboard for everything. No more binders, loose papers, or confusing portals. Access your care plan from anywhere.
                </p>
                <Button onClick={handleLogin} variant="link" className="px-0 mt-4 text-primary font-semibold text-lg hover:no-underline group-hover:translate-x-1 transition-transform">
                  View the Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="flex-1 w-full max-w-md bg-background rounded-xl shadow-lg border border-border p-6 transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                <div className="space-y-3">
                  <div className="h-2 w-1/3 bg-muted rounded animate-pulse" />
                  <div className="h-16 w-full bg-accent/5 rounded-lg border border-accent/10 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">👋</div>
                    <div>
                      <div className="h-2 w-24 bg-foreground/10 rounded mb-1" />
                      <div className="h-2 w-16 bg-foreground/10 rounded" />
                    </div>
                  </div>
                  <div className="h-16 w-full bg-primary/5 rounded-lg border border-primary/10 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">🏥</div>
                    <div>
                      <div className="h-2 w-32 bg-foreground/10 rounded mb-1" />
                      <div className="h-2 w-12 bg-foreground/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">How Arul Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            <div className="absolute top-12 left-0 w-full h-0.5 bg-border -z-10 hidden md:block" />

            <div className="bg-background pt-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-serif flex items-center justify-center mx-auto mb-6 shadow-xl ring-8 ring-background">1</div>
              <h3 className="text-xl font-bold mb-3">Connect Your Journey</h3>
              <p className="text-muted-foreground">Log in and tell us about your diagnosis. We instantly organize your information.</p>
            </div>

            <div className="bg-background pt-4">
              <div className="w-16 h-16 bg-background border-2 border-primary text-primary rounded-full text-2xl font-serif flex items-center justify-center mx-auto mb-6 shadow-xl ring-8 ring-background">2</div>
              <h3 className="text-xl font-bold mb-3">Meet Arul</h3>
              <p className="text-muted-foreground">Your AI navigator drafts a plan, finds resources, and introduces itself.</p>
            </div>

            <div className="bg-background pt-4">
              <div className="w-16 h-16 bg-background border-2 border-primary text-primary rounded-full text-2xl font-serif flex items-center justify-center mx-auto mb-6 shadow-xl ring-8 ring-background">3</div>
              <h3 className="text-xl font-bold mb-3">Focus on Healing</h3>
              <p className="text-muted-foreground">We handle the phone calls, emails, and scheduling. You focus on getting better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40 bg-card text-card-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-xs font-bold">A</span>
            </div>
            <span className="font-serif text-lg font-medium">Arul Health</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Arul Health Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
