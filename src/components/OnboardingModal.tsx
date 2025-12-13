import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface OnboardingModalProps {
  onComplete: () => void;
}

type Step = "welcome" | "basics" | "diagnosis" | "resources";

const patientTypes = [
  { value: "patient", label: "Cancer Patient" },
  { value: "survivor", label: "Cancer Survivor" },
  { value: "caregiver", label: "Caregiver" },
];

const stages = ["Stage I", "Stage II", "Stage III", "Stage IV", "Unknown"];

const suggestedResources = [
  { name: "American Cancer Society", description: "Financial assistance & support groups", icon: "🏥" },
  { name: "CancerCare", description: "Free counseling & support services", icon: "💙" },
  { name: "Patient Advocate Foundation", description: "Insurance & healthcare access help", icon: "🤝" },
];

export const OnboardingModal = ({ onComplete }: OnboardingModalProps) => {
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
  const [selectedResources, setSelectedResources] = useState<string[]>([]);

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

  const toggleResource = (name: string) => {
    setSelectedResources(prev => 
      prev.includes(name) ? prev.filter(r => r !== name) : [...prev, name]
    );
  };

  return (
    <div className="bg-card rounded-2xl shadow-soft p-8 w-full max-w-md animate-scale-in">
      {step === "welcome" && (
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif text-foreground">Welcome to Arul Health</h2>
            <p className="text-muted-foreground">A new way to manage everything with your healthcare</p>
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
            <h2 className="text-2xl font-serif text-foreground">Before we dive in</h2>
            <p className="text-muted-foreground">Share a few basics about yourself</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Location / Zip Code <span className="text-accent">*</span>
              </label>
              <Input
                placeholder="Enter your zip code"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Date of Birth <span className="text-accent">*</span>
              </label>
              <Input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
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
                    onClick={() => setFormData({ ...formData, patientType: type.value })}
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
              disabled={!formData.zipCode || !formData.dob || !formData.patientType}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {step === "diagnosis" && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif text-foreground">Tell us more</h2>
            <p className="text-muted-foreground">This helps us find the right resources for you</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                What is the diagnosis?
              </label>
              <Input
                placeholder="e.g., Breast Cancer, Leukemia"
                value={formData.diagnosis}
                onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, diagnosisDate: e.target.value })}
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

      {step === "resources" && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif text-foreground">Local Resources</h2>
            <p className="text-muted-foreground">We'll reach out to these organizations on your behalf</p>
          </div>

          <div className="space-y-3">
            {suggestedResources.map((resource) => (
              <button
                key={resource.name}
                onClick={() => toggleResource(resource.name)}
                className={cn(
                  "w-full p-4 rounded-xl border text-left transition-all duration-200",
                  selectedResources.includes(resource.name)
                    ? "border-accent bg-accent/5"
                    : "border-border bg-card hover:border-accent/50"
                )}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{resource.icon}</span>
                  <div>
                    <p className="font-medium text-foreground">{resource.name}</p>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <div className={cn(
                    "ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                    selectedResources.includes(resource.name)
                      ? "border-accent bg-accent"
                      : "border-muted-foreground"
                  )}>
                    {selectedResources.includes(resource.name) && (
                      <svg className="w-3 h-3 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={handleBack} className="flex-1">
              Back
            </Button>
            <Button variant="ghost" onClick={onComplete}>
              Skip
            </Button>
            <Button onClick={onComplete} className="flex-1">
              Confirm
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
