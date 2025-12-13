import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ResourceBackground, matchedResourceIndices } from "@/components/ResourceBackground";
import { OnboardingModal } from "@/components/OnboardingModal";

const Onboarding = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"floating" | "organizing" | "matching">("floating");
  const [organizedCount, setOrganizedCount] = useState(0);
  const [activeResourceIndex, setActiveResourceIndex] = useState<number | null>(null);
  const [currentMatchedIndex, setCurrentMatchedIndex] = useState(0);
  const [completedResources, setCompletedResources] = useState<number[]>([]);

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
      // All resources reviewed, go to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    }
  };

  // Progress bar calculation
  const progressPercent = phase === "matching" 
    ? ((completedResources.length) / matchedResourceIndices.length) * 100
    : 0;

  return (
    <div className="min-h-screen gradient-sky relative flex items-center justify-center px-4">
      {/* Progress bar at top during matching phase */}
      {phase === "matching" && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
          <div 
            className="h-full bg-ring transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      <ResourceBackground 
        phase={phase}
        organizedCount={organizedCount}
        activeResourceIndex={activeResourceIndex !== null ? matchedResourceIndices[activeResourceIndex] : null}
        completedResources={completedResources}
        onResourceClick={handleResourceClick}
      />
      
      <div className="relative z-10">
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