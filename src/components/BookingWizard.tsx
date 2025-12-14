import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, Check, Loader2, Search, ArrowRight, ShieldCheck, Calendar as CalendarIcon, Clock, Users, Heart, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

type BookingWizardProps = {
    onComplete: () => void;
};

const BookingWizard = ({ onComplete }: BookingWizardProps) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const totalSteps = 6;
    const progress = (step / totalSteps) * 100;

    const handleNext = (key: string, value: any) => {
        if (key) setAnswers((prev) => ({ ...prev, [key]: value }));
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (step > 0) setStep((prev) => prev - 1);
    };

    useEffect(() => {
        if (step === 4) { // Adjusted step index for verification
            // Simulate verification
            const timer = setTimeout(() => {
                handleNext("verified", true);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const handleBooking = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(6); // Success
        }, 1500);
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center space-y-2">
                            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-serif text-foreground">Meet Your Human Care Team</h2>
                            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                                Arul's AI is powerful, but nothing beats human connection.
                            </p>
                        </div>

                        <div className="grid gap-3 md:grid-cols-2">
                            <div className="bg-card p-3 rounded-lg border border-border shadow-sm">
                                <h3 className="font-medium flex items-center gap-2 mb-1 text-sm">
                                    <Heart className="w-3.5 h-3.5 text-red-500" /> Peer Navigators
                                </h3>
                                <p className="text-xs text-muted-foreground">Survivors who have walked in your shoes and offer emotional guidance.</p>
                            </div>
                            <div className="bg-card p-3 rounded-lg border border-border shadow-sm">
                                <h3 className="font-medium flex items-center gap-2 mb-1 text-sm">
                                    <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Nurse Navigators
                                </h3>
                                <p className="text-xs text-muted-foreground">Clinical experts to help explain diagnoses and treatment options.</p>
                            </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-xl relative">
                            <div className="flex gap-3">
                                <MessageSquare className="w-5 h-5 text-primary/30 shrink-0 mt-1" />
                                <div>
                                    <blockquote className="italic text-sm text-muted-foreground mb-2 leading-relaxed">
                                        "Talking to Sarah changed my whole outlook. I realized I wasn't alone in this fight."
                                    </blockquote>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-[10px] font-bold text-accent">JD</div>
                                        <div>
                                            <p className="font-semibold text-xs">Jane D.</p>
                                            <p className="text-[10px] text-muted-foreground">Breast Cancer Survivor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="w-full" onClick={() => handleNext("", "")}>
                            Check My Eligibility
                        </Button>
                    </div>
                );

            case 1:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-3xl font-serif text-foreground">Do you have a Medicare plan?</h2>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleNext("medicare", "yes")}
                                className="w-full text-left p-4 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-colors text-lg font-medium"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => handleNext("medicare", "no")}
                                className="w-full text-left p-4 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-colors text-lg font-medium"
                            >
                                No
                            </button>
                        </div>
                        <a href="#" className="flex items-center text-sm font-medium text-primary hover:underline mt-4">
                            What is a Medicare plan? <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-3xl font-serif text-foreground">Do you have a Medicare Advantage plan?</h2>
                        <p className="text-muted-foreground">We need a bit more information to find your benefits.</p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleNext("advantage", "yes")}
                                className="w-full text-left p-4 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-colors text-lg font-medium"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => handleNext("advantage", "no")}
                                className="w-full text-left p-4 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-colors text-lg font-medium"
                            >
                                No
                            </button>
                            <button
                                onClick={() => handleNext("advantage", "unsure")}
                                className="w-full text-left p-4 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-colors text-lg font-medium"
                            >
                                Not sure
                            </button>
                        </div>
                        <a href="#" className="flex items-center text-sm font-medium text-primary hover:underline mt-4">
                            What's a Medicare Advantage Plan? <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-3xl font-serif text-foreground">What company is your Medicare Advantage plan with?</h2>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Company<span className="text-red-500">*</span></label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <Input
                                    placeholder="Start typing to search..."
                                    className="pl-10 h-12 text-lg rounded-xl"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleNext("carrier", e.currentTarget.value);
                                    }}
                                />
                            </div>
                        </div>
                        <a href="#" className="flex items-center text-sm font-medium text-primary hover:underline mt-4">
                            I have original Medicare <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                );

            case 4:
                return (
                    <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-500">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center relative">
                            <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping" />
                            <Loader2 className="w-10 h-10 text-primary animate-spin" />
                        </div>

                        <div className="text-center space-y-2">
                            <h3 className="text-xl font-medium">Verifying your coverage...</h3>
                            <p className="text-muted-foreground max-w-xs mx-auto">Please wait while we check your eligibility for free support sessions.</p>
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                            <h2 className="text-2xl font-serif text-foreground flex items-center gap-2">
                                <Check className="w-6 h-6 text-green-500" />
                                Benefits Verified
                            </h2>
                            <p className="text-muted-foreground mt-1">You are eligible for fully covered 1:1 support sessions.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl border border-border p-2">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md"
                                />
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-medium flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Available Times
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {["09:00 AM", "10:00 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={cn(
                                                "p-2 text-sm rounded-lg border transition-all",
                                                selectedTime === time
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "bg-background border-border hover:border-primary/50"
                                            )}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>

                                {selectedTime && (
                                    <Button onClick={handleBooking} className="w-full mt-4" disabled={loading}>
                                        {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : "Confirm Booking"}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div className="flex flex-col items-center justify-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-500">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-serif">You're all set!</h2>
                            <p className="text-muted-foreground">Your appointment has been confirmed for {date?.toLocaleDateString()} at {selectedTime}.</p>
                            <p className="text-sm text-muted-foreground">A confirmation email has been sent to you.</p>
                        </div>
                        <Button onClick={onComplete} size="lg" className="w-full max-w-xs mt-4">
                            Return to Dashboard
                        </Button>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col h-full max-h-[80vh]">
            {/* Header */}
            <div className="flex items-center justify-between pb-4">
                {step > 1 && step < 6 && (
                    <button
                        onClick={handleBack}
                        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Go Back
                    </button>
                )}
                <div className="flex-1" />
            </div>

            {step < 6 && (
                <div className="h-1 bg-muted rounded-full w-full mb-8 overflow-hidden">
                    <div
                        className="h-full bg-green-600 transition-all duration-500 ease-in-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-1">
                {renderStep()}
            </div>

            {/* Footer */}
            {step < 6 && (
                <div className="pt-8 mt-auto text-center">
                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        All information you share is secure and confidential
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        Have questions? Call us at <a href="#" className="underline text-primary">(213)-267-7359</a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default BookingWizard;
