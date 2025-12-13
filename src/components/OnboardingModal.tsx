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
  {
    name: "American Cancer Society",
    description: "Financial assistance & support groups",
    icon: "🏥",
    email: "Dear American Cancer Society,\n\nI am reaching out to learn more about the financial assistance programs and support groups available in my area. I was recently diagnosed and am looking for resources to help navigate this journey.\n\nThank you for your time and support.",
  },
  {
    name: "CancerCare",
    description: "Free counseling & support services",
    icon: "💙",
    email: "Dear CancerCare Team,\n\nI am interested in learning about your free counseling and support services. I am currently going through cancer treatment and would appreciate any guidance on mental health resources available.\n\nThank you for your help.",
  },
  {
    name: "Patient Advocate Foundation",
    description: "Insurance & healthcare access help",
    icon: "🤝",
    email: "Dear Patient Advocate Foundation,\n\nI am seeking assistance with insurance navigation and healthcare access. I would like to understand what support options are available for patients in my situation.\n\nThank you for your assistance.",
  },
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
  const [currentResourceIndex, setCurrentResourceIndex] = useState(0);
  const [activeResource, setActiveResource] = useState<number | null>(null);
  const [completedResources, setCompletedResources] = useState<number[]>([]);

  const handleNext = () => {
    const steps: Step[] = ["welcome", "basics", "diagnosis", "resources"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
      if (steps[currentIndex + 1] === "resources") {
        setActiveResource(0);
      }
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

  const handleResourceAction = (action: "send" | "skip") => {
    setCompletedResources((prev) => [...prev, currentResourceIndex]);
    
    if (currentResourceIndex < suggestedResources.length - 1) {
      const nextIndex = currentResourceIndex + 1;
      setCurrentResourceIndex(nextIndex);
      setActiveResource(nextIndex);
    } else {
      onComplete();
    }
  };

  const progressPercent = ((currentResourceIndex) / suggestedResources.length) * 100;

  return (
    <div className="w-full max-w-lg animate-scale-in">
      {step !== "resources" ? (
        <div className="bg-card rounded-2xl shadow-soft p-8">
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
      ) : (
        <div className="space-y-8">
          {/* Progress bar */}
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-ring transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Resource chips at top */}
          <div className="flex flex-wrap gap-3 justify-center">
            {suggestedResources.map((resource, index) => (
              <div
                key={resource.name}
                className={cn(
                  "px-4 py-3 rounded-xl border flex items-center gap-3 transition-all duration-300",
                  activeResource === index
                    ? "border-ring bg-ring/10 ring-2 ring-ring shadow-lg"
                    : completedResources.includes(index)
                    ? "border-muted bg-muted/50 opacity-60"
                    : "border-border bg-card"
                )}
              >
                <span className="text-xl">{resource.icon}</span>
                <span className="font-medium text-foreground">{resource.name}</span>
              </div>
            ))}
          </div>

          {/* Active resource popup */}
          {activeResource !== null && (
            <div className="bg-card rounded-2xl shadow-soft border border-border p-6 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {suggestedResources[activeResource].icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-serif text-foreground">
                      {suggestedResources[activeResource].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {suggestedResources[activeResource].description}
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide font-medium">
                    Draft Email
                  </p>
                  <p className="text-sm text-foreground whitespace-pre-line leading-relaxed">
                    {suggestedResources[activeResource].email}
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" onClick={handleBack} className="flex-1">
                    Previous
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => handleResourceAction("skip")}
                    className="text-muted-foreground"
                  >
                    Skip
                  </Button>
                  <Button
                    onClick={() => handleResourceAction("send")}
                    className="flex-1"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};