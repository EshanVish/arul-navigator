import { useState, useEffect } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Check, Mail, Loader2, ArrowRight, Users, Plus } from "lucide-react";
import BookingWizard from "@/components/BookingWizard";
import CommunityView from "@/components/CommunityView";
import MentalHealthView from "@/components/MentalHealthView";
import PeerNavigatorView from "@/components/PeerNavigatorView";
import { NotificationBell } from "@/components/NotificationBell";
import { SMSSetupDialog } from "@/components/SMSSetupDialog";
import { Smartphone } from "lucide-react";
import { NavigatorPromoCard } from "@/components/NavigatorPromoCard";

const Dashboard = () => {
  // State for Email Task
  const [emailStatus, setEmailStatus] = useState<"sending" | "completed" | "hidden">("sending");
  // State for Walkthrough: 0=Sidebar, 1=Search, 2=Upcoming, 3=Done
  const [tourStep, setTourStep] = useState<number | null>(0);

  // State for Booking Popup
  const [showBooking, setShowBooking] = useState(false);

  // State for Add Event Modal
  const [showAddEvent, setShowAddEvent] = useState(false);

  // State for SMS Setup Dialog
  const [showSMSSetup, setShowSMSSetup] = useState(false);

  useEffect(() => {
    // Simulate email sending completion
    const timer = setTimeout(() => {
      setEmailStatus("completed");
      // Hide after showing completed for 3s? Or keep it? User said "show when it is completed".
      // Let's keep it visible as "Completed".
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleNextStep = () => {
    if (tourStep === 3) {
      setTourStep(null);
      setTimeout(() => setShowBooking(true), 500);
    } else {
      setTourStep((prev) => (prev === null ? null : prev + 1));
    }
  };

  // Walkthrough highlighter styles
  const getHighlightClass = (step: number) => {
    if (tourStep === step) return "relative z-50 ring-4 ring-primary ring-offset-4 rounded-xl bg-card/50";
    if (tourStep !== null) return "opacity-40 pointer-events-none transition-opacity duration-300";
    return "";
  };

  // State for View Switching
  const [currentView, setCurrentView] = useState("command-center");

  return (
    <div className="min-h-screen flex w-full relative overflow-hidden">
      {/* Walkthrough Overlay */}
      {tourStep !== null && (
        <div className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-500" />
      )}

      {/* Sidebar Wrapper for Highlight */}
      <div className={cn(
        "relative transition-all duration-300 animate-in fade-in slide-in-from-left-8 duration-1000 ease-out",
        tourStep === 0 ? "z-50" : ""
      )}>
        <DashboardSidebar activeView={currentView} onViewChange={setCurrentView} />

        {/* Step 0 Tooltip (Sidebar) */}
        {tourStep === 0 && (
          <div className="absolute left-20 top-20 bg-popover text-popover-foreground p-4 rounded-xl shadow-xl w-64 animate-in fade-in slide-in-from-left-4 duration-300 z-50">
            <h3 className="font-semibold mb-1">Personal Navigator</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Your dedicated sidebar. Access sessions, chat, and join the <strong className="text-primary">Community</strong> here.
            </p>
            <Button size="sm" onClick={handleNextStep} className="w-full">
              Next
            </Button>
          </div>
        )}
      </div>

      <main className="flex-1 gradient-fluid relative flex flex-col">

        {/* Notification Bell */}
        <div className="absolute top-6 right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-700 delay-500">
          <NotificationBell />
        </div>

        {/* VIEW: Command Center (Home) */}
        {currentView === "command-center" && (
          <>
            {/* Email Task Status */}
            <div className="absolute top-4 left-0 right-0 flex justify-center z-30 px-4 animate-in slide-in-from-top-8 fade-in duration-1000 ease-out">
              {emailStatus !== "hidden" && (
                <div className={cn(
                  "bg-background/80 backdrop-blur-md border border-border px-4 py-2.5 rounded-full shadow-sm flex items-center gap-3 transition-all duration-500",
                  emailStatus === "completed" ? "bg-green-500/10 border-green-200" : ""
                )}>
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                    emailStatus === "completed" ? "bg-green-500 text-white" : "bg-primary/10 text-primary"
                  )}>
                    {emailStatus === "completed" ? <Check className="w-3.5 h-3.5" /> : <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  </div>
                  <span className="text-sm font-medium">
                    {emailStatus === "completed" ? "Emails sent successfully" : "Sending emails to resources..."}
                  </span>
                  {emailStatus === "completed" && (
                    <button onClick={() => setEmailStatus("hidden")} className="ml-2 text-muted-foreground hover:text-foreground">
                      <span className="sr-only">Dismiss</span>
                      ×
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-8 px-4 w-full max-w-7xl mx-auto h-[calc(100vh-6rem)] overflow-hidden">
              {/* Welcome message */}
              <div
                className={cn(
                  "text-center transition-opacity duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both shrink-0",
                  tourStep !== null && tourStep !== 1 ? "opacity-40" : "opacity-100"
                )}
              >
                <h1 className="text-2xl md:text-4xl font-serif text-foreground mb-1">
                  Good morning
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">
                  How can Arul help you today?
                </p>
              </div>

              {/* Search bar & Step 1 Tooltip */}
              <div
                className={cn(
                  "w-full max-w-3xl transition-all duration-300 relative animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both shrink-0",
                  tourStep === 1 ? "z-50" : ""
                )}
                style={{ animationDelay: "150ms" }}
              >
                <div className={cn("transition-all duration-300", tourStep === 1 ? "scale-105" : "")}>
                  <SearchBar />
                </div>

                {tourStep === 1 && (
                  <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground p-4 rounded-xl shadow-xl w-72 animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-popover rotate-45" />
                    <h3 className="font-semibold mb-1">Your Command Center</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ask questions, find specialists, or assign tasks to your agent here.
                    </p>
                    <Button size="sm" onClick={handleNextStep} className="w-full">
                      Next
                    </Button>
                  </div>
                )}
              </div>


              {/* Upcoming & Promo Section */}
              <div
                className={cn(
                  "w-full max-w-5xl mx-auto transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both shrink-0",
                  tourStep === 2 ? "z-50 opacity-100" : ""
                )}
                style={{ animationDelay: "300ms" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_300px] gap-6 items-start">

                  {/* Left Column: Schedule */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between px-1">
                      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        Upcoming
                      </h2>
                      <button
                        onClick={() => setShowAddEvent(true)}
                        className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                        title="Add Event"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="bg-card rounded-xl shadow-card border border-border p-4 w-full hover:border-accent/50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <span className="text-xl">📅</span>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-foreground">Navigator check-in</p>
                          <p className="text-sm text-muted-foreground">Tomorrow, 2:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl shadow-card border border-border p-4 w-full hover:border-primary/50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <span className="text-xl">💊</span>
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-foreground">Medication Reminder</p>
                          <p className="text-sm text-muted-foreground">Daily, 8:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Promo Card */}
                  <div className="relative">
                    <NavigatorPromoCard onBook={() => setShowBooking(true)} />

                    {/* Tooltip for step 2 attached here now? Or keep on left? */}
                    {tourStep === 2 && (
                      <div className="absolute -left-[14rem] top-1/2 -translate-y-1/2 bg-popover text-popover-foreground p-4 rounded-xl shadow-xl w-64 animate-in fade-in slide-in-from-right-4 duration-300 z-50">
                        <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-popover rotate-45" />
                        <h3 className="font-semibold mb-1">Stay Connected</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Manage your schedule on the left, or connect with your personal navigator on the right.
                        </p>
                        <Button size="sm" onClick={handleNextStep} className="w-full">
                          Next
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* VIEW: Community */}
        {currentView === "community" && (
          <CommunityView />
        )}

        {/* VIEW: Mental Health */}
        {currentView === "mental-health" && (
          <MentalHealthView />
        )}

        {/* VIEW: Peer Navigator */}
        {currentView === "peer-navigator" && (
          <PeerNavigatorView />
        )}

      </main>

      {/* Sticky SMS Setup Pill (Step 3) */}
      <div className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300",
        tourStep === 3 ? "z-[60]" : "z-50"
      )}>
        <button
          onClick={() => setShowSMSSetup(true)}
          className={cn(
            "bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-full px-5 py-2.5 flex items-center gap-3 hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 delay-1000 group",
            tourStep === 3 ? "ring-4 ring-primary ring-offset-4" : ""
          )}
        >
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Smartphone className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-sm font-semibold text-foreground">Access agent on the go</p>
            <p className="text-[10px] text-muted-foreground font-medium">Set up SMS • It's Free</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
        </button>

        {tourStep === 3 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground p-4 rounded-xl shadow-xl w-72 animate-in fade-in slide-in-from-bottom-4 duration-300 z-50">
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-popover rotate-45" />
            <h3 className="font-semibold mb-1">Arul in Your Pocket</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Sync via iMessage or SMS to chat with your agent anytime, anywhere.
            </p>
            <Button size="sm" onClick={handleNextStep} className="w-full">
              Finish Tour
            </Button>
          </div>
        )}
      </div>

      {/* Add Event Modal */}
      <Dialog open={showAddEvent} onOpenChange={setShowAddEvent}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Add to Schedule</DialogTitle>
            <DialogDescription>
              Keep track of your journey. We'll handle the reminders.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Type</label>
              <div className="flex gap-2">
                <button className="flex-1 bg-accent/20 text-accent border border-accent/20 py-2 rounded-lg text-sm font-medium">
                  Appointment
                </button>
                <button className="flex-1 bg-card border border-border py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted/50">
                  Medication
                </button>
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <input id="title" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="e.g., Dr. Smith Checkup" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="time" className="text-sm font-medium">Time</label>
              <input id="time" type="time" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
            </div>

            <div className="bg-muted/50 rounded-lg p-3 flex items-start gap-3 mt-2">
              <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Automatically synced with your <span className="text-foreground font-medium">Google Calendar</span> and <span className="text-foreground font-medium">SMS</span>.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setShowAddEvent(false)} className="w-full">
              Add Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Booking Popup */}
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="sm:max-w-2xl p-6 md:p-8">
          <div className="bg-background">
            <BookingWizard onComplete={() => setShowBooking(false)} />
          </div>
        </DialogContent>
      </Dialog>

      <SMSSetupDialog open={showSMSSetup} onOpenChange={setShowSMSSetup} />
    </div>
  );
};

export default Dashboard;

