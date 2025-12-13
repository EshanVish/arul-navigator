import { FloatingResourceCard } from "./FloatingResourceCard";
import { cn } from "@/lib/utils";

export const resources = [
  { name: "American Cancer Society", icon: "🏥", color: "#DBEAFE", description: "Financial assistance & support groups", email: "Dear American Cancer Society,\n\nI am reaching out to learn more about the financial assistance programs and support groups available in my area. I was recently diagnosed and am looking for resources to help navigate this journey.\n\nThank you for your time and support." },
  { name: "CancerCare", icon: "💙", color: "#E0E7FF", description: "Free counseling & support services", email: "Dear CancerCare Team,\n\nI am interested in learning about your free counseling and support services. I am currently going through cancer treatment and would appreciate any guidance on mental health resources available.\n\nThank you for your help." },
  { name: "Patient Advocate Foundation", icon: "🤝", color: "#FEF3C7", description: "Insurance & healthcare access help", email: "Dear Patient Advocate Foundation,\n\nI am seeking assistance with insurance navigation and healthcare access. I would like to understand what support options are available for patients in my situation.\n\nThank you for your assistance." },
  { name: "Cancer Care", icon: "🎗️", color: "#FFE4E6", description: "Emotional support services", email: "Dear Cancer Care,\n\nI am reaching out to learn about your emotional support services for cancer patients and families.\n\nThank you." },
  { name: "Leukemia Foundation", icon: "🩺", color: "#FEF3C7", description: "Blood cancer support", email: "Dear Leukemia Foundation,\n\nI am interested in learning about support services for blood cancer patients.\n\nThank you." },
  { name: "Susan G. Komen", icon: "🎀", color: "#FCE7F3", description: "Breast cancer resources", email: "Dear Susan G. Komen,\n\nI am reaching out for breast cancer support resources.\n\nThank you." },
  { name: "St. Jude", icon: "⭐", color: "#DCFCE7", description: "Pediatric cancer support", email: "Dear St. Jude,\n\nI am interested in pediatric cancer support services.\n\nThank you." },
  { name: "Livestrong", icon: "💛", color: "#FEF9C3", description: "Survivorship programs", email: "Dear Livestrong,\n\nI am reaching out about survivorship programs.\n\nThank you." },
  { name: "Stand Up To Cancer", icon: "🧡", color: "#FFEDD5", description: "Research & awareness", email: "Dear Stand Up To Cancer,\n\nI am interested in learning about your programs.\n\nThank you." },
  { name: "Pancreatic Cancer...", icon: "💜", color: "#F3E8FF", description: "Pancreatic cancer support", email: "Dear Pancreatic Cancer Action,\n\nI am reaching out for support resources.\n\nThank you." },
  { name: "Lung Cancer Res...", icon: "🫁", color: "#E0F2FE", description: "Lung cancer resources", email: "Dear Lung Cancer Alliance,\n\nI am interested in lung cancer support.\n\nThank you." },
  { name: "National Cancer In...", icon: "🏛️", color: "#F1F5F9", description: "Government resources", email: "Dear NCI,\n\nI am reaching out for cancer resources.\n\nThank you." },
];

// Matched resources (first 3 shown after intake)
export const matchedResourceIndices = [0, 1, 2];

interface ResourceBackgroundProps {
  phase: "floating" | "organizing" | "matching";
  organizedCount?: number; // How many cards have organized (0-12)
  activeResourceIndex?: number | null;
  completedResources?: number[];
  onResourceClick?: (index: number) => void;
}

export const ResourceBackground = ({ 
  phase, 
  organizedCount = 0,
  activeResourceIndex,
  completedResources = [],
  onResourceClick,
}: ResourceBackgroundProps) => {
  
  // Positions for floating state
  const floatingPositions = [
    { top: "10%", left: "5%" },
    { top: "15%", left: "25%" },
    { top: "8%", right: "30%" },
    { top: "12%", right: "5%" },
    { top: "35%", left: "3%" },
    { top: "42%", left: "18%" },
    { top: "38%", right: "15%" },
    { top: "45%", right: "3%" },
    { bottom: "25%", left: "8%" },
    { bottom: "18%", left: "25%" },
    { bottom: "22%", right: "20%" },
    { bottom: "15%", right: "8%" },
  ];

  // Organized positions (row at top)
  const organizedPositions = [
    { top: "120px", left: "calc(50% - 450px)" },
    { top: "120px", left: "calc(50% - 200px)" },
    { top: "120px", left: "calc(50% + 50px)" },
    { top: "120px", left: "calc(50% + 300px)" },
    { top: "190px", left: "calc(50% - 350px)" },
    { top: "190px", left: "calc(50% - 100px)" },
    { top: "190px", left: "calc(50% + 150px)" },
    { top: "190px", left: "calc(50% + 400px)" },
    { top: "260px", left: "calc(50% - 400px)" },
    { top: "260px", left: "calc(50% - 150px)" },
    { top: "260px", left: "calc(50% + 100px)" },
    { top: "260px", left: "calc(50% + 350px)" },
  ];

  // Matching phase positions (matched ones at top center, others fade out)
  const matchingPositions = [
    { top: "100px", left: "calc(50% - 280px)" }, // Matched 1
    { top: "100px", left: "calc(50% - 10px)", transform: "translateX(-50%)" }, // Matched 2
    { top: "170px", left: "calc(50% - 10px)", transform: "translateX(-50%)" }, // Matched 3
    // Others scattered faded
    { top: "35%", left: "5%", opacity: 0.3 },
    { top: "40%", right: "8%", opacity: 0.3 },
    { top: "50%", left: "12%", opacity: 0.3 },
    { top: "55%", right: "15%", opacity: 0.3 },
    { bottom: "35%", left: "8%", opacity: 0.3 },
    { bottom: "28%", right: "12%", opacity: 0.3 },
    { bottom: "20%", left: "20%", opacity: 0.3 },
    { bottom: "25%", right: "25%", opacity: 0.3 },
    { bottom: "15%", right: "5%", opacity: 0.3 },
  ];

  const getPositionStyle = (index: number) => {
    if (phase === "matching") {
      const pos = matchingPositions[index];
      return {
        position: "absolute" as const,
        ...pos,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      };
    }
    
    if (phase === "organizing" && index < organizedCount) {
      const pos = organizedPositions[index];
      return {
        position: "absolute" as const,
        ...pos,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      };
    }
    
    const pos = floatingPositions[index];
    return {
      position: "absolute" as const,
      ...pos,
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const animations = [
    "animate-float",
    "animate-float-delayed",
    "animate-float-slow",
    "animate-float",
    "animate-float-slow",
    "animate-float-delayed",
    "animate-float",
    "animate-float-delayed",
    "animate-float-delayed",
    "animate-float",
    "animate-float-slow",
    "animate-float",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {resources.map((resource, index) => {
        const isOrganized = phase === "organizing" && index < organizedCount;
        const isMatched = phase === "matching" && matchedResourceIndices.includes(index);
        const isActive = activeResourceIndex === index;
        const isCompleted = completedResources.includes(index);
        
        // Hide non-matched resources in matching phase after a delay
        const shouldShow = phase !== "matching" || matchedResourceIndices.includes(index) || index < 8;
        
        if (!shouldShow) return null;

        return (
          <div
            key={resource.name}
            style={getPositionStyle(index)}
            className={cn(
              phase === "floating" && animations[index],
              (isOrganized || phase === "matching") && "!animate-none",
              isMatched && "pointer-events-auto",
              isCompleted && "opacity-50",
            )}
          >
            <FloatingResourceCard
              {...resource}
              isActive={isActive}
              isMatched={isMatched}
              isOrganized={isOrganized}
              onClick={isMatched && onResourceClick ? () => onResourceClick(index) : undefined}
            />
          </div>
        );
      })}
    </div>
  );
};
