import { Play, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavigatorPromoCardProps = {
    onBook: () => void;
};

export const NavigatorPromoCard = ({ onBook }: NavigatorPromoCardProps) => {
    return (
        <div className="bg-[#EBE9E4] rounded-2xl p-4 flex flex-col items-start gap-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">

            {/* Background decoration or texture could go here */}

            <div className="w-full relative aspect-video rounded-xl overflow-hidden bg-zinc-900 shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
                {/* Placeholder image - using a friendly portrait */}
                <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                    alt="Navigator Zoe"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 text-white ml-1 fill-current" />
                    </div>
                </div>

                {/* Name Tag overlay */}
                <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                    <p className="text-white font-serif tracking-wide text-sm">Zoe, 22</p>
                    <p className="text-white/80 text-[9px] font-medium uppercase tracking-wider">Peer Navigator</p>
                </div>
            </div>

            <div className="space-y-2 w-full">
                <div>
                    <div className="flex gap-0.5 mb-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-orange-400 fill-current" />)}
                    </div>
                    <h3 className="text-lg font-serif text-zinc-900 leading-tight">
                        "Helping someone feel seen makes mentoring so worth it."
                    </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-white/60 rounded-full text-[10px] font-medium text-zinc-700 border border-zinc-200">School Stress</span>
                    <span className="px-2 py-0.5 bg-white/60 rounded-full text-[10px] font-medium text-zinc-700 border border-zinc-200">Anxiety</span>
                </div>

                <Button onClick={onBook} className="w-full bg-zinc-900 text-white hover:bg-zinc-800 h-9 rounded-xl text-xs font-medium shadow-md hover:shadow-xl transition-all">
                    <Calendar className="w-3 h-3 mr-2" />
                    Book 1:1 Support
                </Button>

                <p className="text-[10px] text-center text-muted-foreground">
                    Free for all members • 4.9/5 Average Rating
                </p>
            </div>
        </div>
    );
};
