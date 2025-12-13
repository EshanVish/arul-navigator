import { FloatingResourceCard } from "./FloatingResourceCard";

const resources = [
  { name: "Cancer Care", icon: "🎗️", color: "#FFE4E6" },
  { name: "American Cancer Society", icon: "🏥", color: "#DBEAFE" },
  { name: "CancerCare", icon: "💙", color: "#E0E7FF" },
  { name: "Leukemia Foundation", icon: "🩺", color: "#FEF3C7" },
  { name: "Susan G. Komen", icon: "🎀", color: "#FCE7F3" },
  { name: "St. Jude", icon: "⭐", color: "#DCFCE7" },
  { name: "Livestrong", icon: "💛", color: "#FEF9C3" },
  { name: "Stand Up To Cancer", icon: "🧡", color: "#FFEDD5" },
  { name: "Pancreatic Cancer Action", icon: "💜", color: "#F3E8FF" },
  { name: "Lung Cancer Alliance", icon: "🫁", color: "#E0F2FE" },
  { name: "Breast Cancer Research", icon: "🔬", color: "#FCE7F3" },
  { name: "National Cancer Institute", icon: "🏛️", color: "#F1F5F9" },
];

export const ResourceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top row */}
      <div className="absolute top-16 left-8">
        <FloatingResourceCard {...resources[0]} className="animate-float" />
      </div>
      <div className="absolute top-24 left-[20%]">
        <FloatingResourceCard {...resources[1]} className="animate-float-delayed" />
      </div>
      <div className="absolute top-12 right-[25%]">
        <FloatingResourceCard {...resources[2]} className="animate-float-slow" />
      </div>
      <div className="absolute top-20 right-12">
        <FloatingResourceCard {...resources[3]} className="animate-float" />
      </div>

      {/* Middle row */}
      <div className="absolute top-[35%] left-4">
        <FloatingResourceCard {...resources[4]} className="animate-float-slow" />
      </div>
      <div className="absolute top-[40%] left-[15%]">
        <FloatingResourceCard {...resources[5]} className="animate-float-delayed" />
      </div>
      <div className="absolute top-[38%] right-[18%]">
        <FloatingResourceCard {...resources[6]} className="animate-float" />
      </div>
      <div className="absolute top-[42%] right-8">
        <FloatingResourceCard {...resources[7]} className="animate-float-delayed" />
      </div>

      {/* Bottom row */}
      <div className="absolute bottom-32 left-12">
        <FloatingResourceCard {...resources[8]} className="animate-float-delayed" />
      </div>
      <div className="absolute bottom-24 left-[22%]">
        <FloatingResourceCard {...resources[9]} className="animate-float" />
      </div>
      <div className="absolute bottom-28 right-[20%]">
        <FloatingResourceCard {...resources[10]} className="animate-float-slow" />
      </div>
      <div className="absolute bottom-20 right-16">
        <FloatingResourceCard {...resources[11]} className="animate-float" />
      </div>
    </div>
  );
};
