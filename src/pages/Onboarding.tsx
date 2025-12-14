import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ResourceBackground, matchedResourceIndices } from "@/components/ResourceBackground";
import { OnboardingModal } from "@/components/OnboardingModal";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle, ArrowRight } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"floating" | "organizing" | "matching">("floating");
  const [organizedCount, setOrganizedCount] = useState(0);
  const [activeResourceIndex, setActiveResourceIndex] = useState<number | null>(null);
  const [currentMatchedIndex, setCurrentMatchedIndex] = useState(0);
  const [completedResources, setCompletedResources] = useState<number[]>([]);
  const [transitionStep, setTransitionStep] = useState<"idle" | "sending" | "welcome">("idle");

  const handleComplete = () => {
    navigate("/dashboard");
  };

  const handleStepChange = useCallback((step: string, progress: number) => {
    setOrganizedCount(progress);
  }, []);

  const handlePhaseChange = useCallback((newPhase: "floating" | "organizing" | "matching") => {
    setPhase(newPhase);
    if (newPhase === "matching") {
      // Start with first matched resource highlighted
      setTimeout(() => {
        setActiveResourceIndex(0);
      }, 800);
    }
  }, []);

  const handleResourceClick = (resourceIndex: number) => {
    // Find which matched index this corresponds to
    const matchedIdx = matchedResourceIndices.indexOf(resourceIndex);
    if (matchedIdx !== -1 && !completedResources.includes(resourceIndex)) {
      setCurrentMatchedIndex(matchedIdx);
      setActiveResourceIndex(matchedIdx);
    }
  };

  const handleResourceAction = (action: "send" | "skip") => {
    const currentResourceRealIndex = matchedResourceIndices[currentMatchedIndex];
    setCompletedResources(prev => [...prev, currentResourceRealIndex]);

    if (currentMatchedIndex < matchedResourceIndices.length - 1) {
      const nextIndex = currentMatchedIndex + 1;
      setCurrentMatchedIndex(nextIndex);
      setActiveResourceIndex(nextIndex);
    } else {
      // All resources reviewed, start transition
      setTransitionStep("sending");

      // Sending phase -> Welcome phase
      setTimeout(() => {
        setTransitionStep("welcome");
      }, 2000);

      // Welcome phase -> Dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 3500);
    }
  };

  // Progress bar calculation
  const progressPercent = phase === "matching"
    ? ((completedResources.length) / matchedResourceIndices.length) * 100
    : 0;

  return (
    <div className={cn(
      "min-h-screen gradient-sky relative flex px-4 transition-all duration-500 ease-in-out overflow-hidden",
      phase === "matching" ? "items-end justify-center pb-12" : "items-center justify-center"
    )}>
      {/* Transition Overlay */}
      {transitionStep !== "idle" && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md animate-in fade-in duration-500">
          {transitionStep === "sending" && (
            <div className="text-center space-y-4 animate-in zoom-in-95 duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-foreground">Sending Emails...</h2>
                <p className="text-muted-foreground">Connecting you with your care team</p>
              </div>
            </div>
          )}

          {transitionStep === "welcome" && (
            <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-10 h-10 text-green-600 animate-in zoom-in spin-in-180 duration-500" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-foreground">Welcome to Arul</h2>
                <p className="text-lg text-muted-foreground mt-2">Your dashboard is ready.</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Progress bar at top during matching phase */}
      {phase === "matching" && transitionStep === "idle" && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
          <div
            className="h-full bg-ring transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      <div className={cn("transition-all duration-500", transitionStep !== "idle" && "opacity-0 scale-95 blur-sm")}>
        <ResourceBackground
          phase={phase}
          organizedCount={organizedCount}
          activeResourceIndex={activeResourceIndex !== null ? matchedResourceIndices[activeResourceIndex] : null}
          completedResources={completedResources}
          onResourceClick={handleResourceClick}
        />
      </div>

      <div className={cn(
        "relative z-10 transition-all duration-500",
        transitionStep !== "idle" && "opacity-0 translate-y-10"
      )}>
        <OnboardingModal
          onComplete={handleComplete}
          onStepChange={handleStepChange}
          onPhaseChange={handlePhaseChange}
          activeResourceIndex={activeResourceIndex}
          onResourceAction={handleResourceAction}
        />
      </div>
    </div>
  );
};

export default Onboarding;