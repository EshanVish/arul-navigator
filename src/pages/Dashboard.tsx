import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SearchBar } from "@/components/SearchBar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex w-full">
      <DashboardSidebar />
      
      <main className="flex-1 gradient-warm">
        <div className="h-screen flex flex-col items-center justify-center px-4">
          {/* Welcome message */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
              Good morning
            </h1>
            <p className="text-muted-foreground">
              How can Arul help you today?
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <SearchBar />
          </div>

          {/* Upcoming section */}
          <div 
            className="mt-16 text-center animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
              Upcoming
            </h2>
            <div className="flex flex-col gap-3">
              <div className="bg-card rounded-xl shadow-card border border-border p-4 max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-accent">📅</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground text-sm">Navigator Check-in</p>
                    <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl shadow-card border border-border p-4 max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-ring/10 flex items-center justify-center">
                    <span className="text-ring">💊</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-foreground text-sm">Medication Reminder</p>
                    <p className="text-xs text-muted-foreground">Daily, 8:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
