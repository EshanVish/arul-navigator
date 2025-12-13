import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { resources, matchedResourceIndices } from "./ResourceBackground";

interface OnboardingModalProps {
  onComplete: () => void;
  onStepChange?: (step: string, progress: number) => void;
  onPhaseChange?: (phase: "floating" | "organizing" | "matching") => void;
  activeResourceIndex?: number | null;
  onResourceAction?: (action: "send" | "skip") => void;
}

type Step = "welcome" | "basics" | "diagnosis" | "resources";

const patientTypes = [
  { value: "patient", label: "Cancer Patient" },
  { value: "survivor", label: "Cancer Survivor" },
  { value: "caregiver", label: "Caregiver" },
];

const stages = ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"];

export const OnboardingModal = ({ 
  onComplete, 
  onStepChange,
  onPhaseChange,
  activeResourceIndex,
  onResourceAction,
}: OnboardingModalProps) => {
  const [step, setStep] = useState<Step>("welcome");
  const [formData, setFormData] = useState({
    location: "",
    zipCode: "",
    dob: "",
    patientType: "",
    diagnosis: "",
    stage: "",
    diagnosisDate: "",
  });

  // Calculate how many fields are filled for organizing animation
  const filledFields = [
    formData.zipCode,
    formData.dob,
    formData.patientType,
    formData.diagnosis,
    formData.stage,
    formData.diagnosisDate,
  ].filter(Boolean).length;

  useEffect(() => {
    // Notify parent of progress for background animation
    const organizedCount = Math.min(filledFields * 2, 12);
    onStepChange?.(step, organizedCount);
    
    // Update phase based on step
    if (step === "resources") {
      onPhaseChange?.("matching");
    } else if (filledFields > 0) {
      onPhaseChange?.("organizing");
    } else {
      onPhaseChange?.("floating");
    }
  }, [step, filledFields, onStepChange, onPhaseChange]);

  const handleNext = () => {
    const steps: Step[] = ["welcome", "basics", "diagnosis", "resources"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    const steps: Step[] = ["welcome", "basics", "diagnosis", "resources"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  // Resource matching phase
  if (step === "resources" && activeResourceIndex !== null && activeResourceIndex !== undefined) {
    const matchedIndex = matchedResourceIndices[activeResourceIndex];
    const resource = resources[matchedIndex];
    
    return (
      <div className="bg-card rounded-2xl shadow-soft p-6 w-full max-w-lg animate-scale-in">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
              style={{ backgroundColor: resource.color }}
            >
              {resource.icon}
            </div>
            <div>
              <h3 className="text-xl font-serif text-foreground">
                {resource.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resource.description}
              </p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-xl p-4 border border-border">
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-medium">
              Draft Email
            </p>
            <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">
              {resource.email}
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              onClick={handleBack} 
              className="flex-1"
            >
              Previous
            </Button>
            <Button
              variant="ghost"
              onClick={() => onResourceAction?.("skip")}
              className="text-muted-foreground"
            >
              Skip
            </Button>
            <Button
              onClick={() => onResourceAction?.("send")}
              className="flex-1"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show simple message during resource matching phase when no resource is selected
  if (step === "resources") {
    return (
      <div className="bg-card rounded-2xl shadow-soft p-8 w-full max-w-md animate-scale-in text-center">
        <h2 className="text-2xl font-serif text-foreground mb-2">Local Resources</h2>
        <p className="text-muted-foreground">
          We found resources that match your needs. Click on a highlighted resource above to review.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl shadow-soft p-8 w-full max-w-md animate-scale-in">
      {step === "welcome" && (
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif text-foreground">
              Welcome to Arul Health
            </h2>
            <p className="text-muted-foreground">
              Your partner in navigating cancer care and everyday challenges.
            </p>
          </div>
          <div className="pt-4">
            <p className="text-lg text-foreground mb-6">Let's start fresh</p>
            <Button onClick={handleNext} size="lg" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}

      {step === "basics" && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif text-foreground">
              Before we dive in
            </h2>
            <p className="text-muted-foreground">
              Share a few basics about yourself
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Location / Zip Code <span className="text-accent">*</span>
              </label>
              <Input
                placeholder="Enter your zip code"
                value={formData.zipCode}
                onChange={(e) =>
                  setFormData({ ...formData, zipCode: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Date of Birth <span className="text-accent">*</span>
              </label>
              <Input
                type="date"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                I am a... <span className="text-accent">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {patientTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() =>
                      setFormData({ ...formData, patientType: type.value })
                    }
                    className={cn(
                      "px-4 py-2 rounded-lg border text-sm transition-all duration-200",
                      formData.patientType === type.value
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border bg-card hover:border-accent/50"
                    )}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={handleBack} className="flex-1">
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="flex-1"
              disabled={
                !formData.zipCode || !formData.dob || !formData.patientType
              }
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {step === "diagnosis" && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif text-foreground">
              Tell us more
            </h2>
            <p className="text-muted-foreground">
              This helps us find the right resources for you
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                What is the diagnosis?
              </label>
              <Input
                placeholder="e.g., Breast Cancer, Leukemia"
                value={formData.diagnosis}
                onChange={(e) =>
                  setFormData({ ...formData, diagnosis: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Stage (if applicable)
              </label>
              <div className="flex flex-wrap gap-2">
                {stages.map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setFormData({ ...formData, stage })}
                    className={cn(
                      "px-4 py-2 rounded-lg border text-sm transition-all duration-200",
                      formData.stage === stage
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border bg-card hover:border-accent/50"
                    )}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Date of Diagnosis (if known)
              </label>
              <Input
                type="date"
                value={formData.diagnosisDate}
                onChange={(e) =>
                  setFormData({ ...formData, diagnosisDate: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={handleBack} className="flex-1">
              Back
            </Button>
            <Button onClick={handleNext} className="flex-1">
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};