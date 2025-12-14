import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Smartphone, Check, Loader2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type SMSSetupDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const SMSSetupDialog = ({ open, onOpenChange }: SMSSetupDialogProps) => {
    const [phone, setPhone] = useState("");
    const [preference, setPreference] = useState<"imessage" | "sms">("imessage");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    const handleClose = () => {
        onOpenChange(false);
        // Reset after transition
        setTimeout(() => {
            setSent(false);
            setPhone("");
            setPreference("imessage");
        }, 300);
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl font-serif">
                        <Smartphone className="w-5 h-5 text-primary" />
                        Arul in your pocket
                    </DialogTitle>
                    <DialogDescription>
                        Text Arul anytime to check appointments, find resources, or just chat. No app download required.
                    </DialogDescription>
                </DialogHeader>

                {!sent ? (
                    <form onSubmit={handleSubmit} className="py-4 space-y-4">

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Preferred Method</label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setPreference("imessage")}
                                    className={cn(
                                        "flex items-center justify-center gap-2 py-2 rounded-lg border text-sm font-medium transition-all",
                                        preference === "imessage"
                                            ? "bg-blue-500 text-white border-blue-600 shadow-sm"
                                            : "bg-card hover:bg-muted text-muted-foreground border-border"
                                    )}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    iMessage
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setPreference("sms")}
                                    className={cn(
                                        "flex items-center justify-center gap-2 py-2 rounded-lg border text-sm font-medium transition-all",
                                        preference === "sms"
                                            ? "bg-green-500 text-white border-green-600 shadow-sm"
                                            : "bg-card hover:bg-muted text-muted-foreground border-border"
                                    )}
                                >
                                    <Smartphone className="w-4 h-4" />
                                    SMS
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Mobile Number</label>
                            <Input
                                type="tel"
                                placeholder="(555) 000-0000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <p className="text-xs text-muted-foreground">We'll send a secure setup link via {preference === 'imessage' ? 'iMessage' : 'SMS'}.</p>
                        </div>

                        <DialogFooter>
                            <Button type="submit" className="w-full" disabled={!phone || loading}>
                                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : `Send ${preference === 'imessage' ? 'iMessage' : 'SMS'} Link`}
                            </Button>
                        </DialogFooter>
                    </form>
                ) : (
                    <div className="py-8 flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                        <div className={cn("w-16 h-16 rounded-full flex items-center justify-center", preference === 'imessage' ? "bg-blue-100" : "bg-green-100")}>
                            <Check className={cn("w-8 h-8", preference === 'imessage' ? "text-blue-600" : "text-green-600")} />
                        </div>
                        <div className="text-center">
                            <h3 className="font-semibold text-lg">Check your messages</h3>
                            <p className="text-muted-foreground text-sm max-w-[250px] mx-auto">
                                We've sent a link to <span className="text-foreground font-medium">{phone}</span> via {preference === 'imessage' ? 'iMessage' : 'SMS'}.
                            </p>
                        </div>
                        <Button variant="outline" onClick={handleClose} className="w-full mt-4">
                            Done
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
