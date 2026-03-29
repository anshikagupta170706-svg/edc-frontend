import { Rocket, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrambleText } from '@/components/ui/scramble-text';

const UpcomingEventButton = ({ className, onClick, size = 'default' }) => {
  const isSmall = size === 'small';

  return (
    <>
      <style>
        {`
          @keyframes shimmer-sweep {
            0% { transform: translateX(-150%) skewX(-12deg); }
            100% { transform: translateX(350%) skewX(-12deg); }
          }
          .animate-shimmer-sweep {
            animation: shimmer-sweep 2.5s infinite linear;
          }
        `}
      </style>
      <div 
        className={cn("relative group cursor-pointer flex items-center justify-center", className)}
        onClick={onClick}
      >
        {/* Animated Glow Backdrop */}
        <div className={cn(
          "absolute -inset-1 bg-gradient-to-r from-[#05B1DE] via-cyan-400 to-blue-600 rounded-full blur-lg opacity-40 group-hover:opacity-80 transition-all duration-700 group-hover:duration-200 animate-pulse",
          isSmall && "blur-md"
        )}></div>
        
        {/* Main Button Container */}
        <div className="relative w-full p-[1.5px] rounded-full bg-gradient-to-r from-white/10 via-[#05B1DE]/40 to-white/10 overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-[1.03] active:scale-95">
          
          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#05B1DE]/5 to-white/5 pointer-events-none"></div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer-sweep"></div>
          </div>

          {/* Inner Content */}
          <div className={cn(
            "relative flex items-center justify-center bg-[#030303]/90 backdrop-blur-3xl rounded-full",
            isSmall ? "p-2" : "p-3"
          )}>
            {/* Icon with Glow */}
            <div className="relative flex items-center justify-center">
              <Rocket className={cn("text-[#05B1DE] transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110", isSmall ? "size-4" : "size-5")} />
              <div className={cn("absolute inset-0 bg-[#05B1DE] blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500", isSmall ? "size-4" : "size-5")}></div>
            </div>

            {/* Glowing dot indicator (subtle) */}
            <div className={cn("absolute top-0 right-0 rounded-full bg-[#05B1DE] shadow-[0_0_8px_#05B1DE] animate-pulse", isSmall ? "w-1 h-1" : "w-1.5 h-1.5")}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEventButton;
