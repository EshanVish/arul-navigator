import { useNavigate } from "react-router-dom";
import { ResourceBackground } from "@/components/ResourceBackground";
import { OnboardingModal } from "@/components/OnboardingModal";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen gradient-sky relative flex items-center justify-center px-4">
      <ResourceBackground />
      
      <div className="relative z-10">
        <OnboardingModal onComplete={handleComplete} />
      </div>
    </div>
  );
};

export default Onboarding;
