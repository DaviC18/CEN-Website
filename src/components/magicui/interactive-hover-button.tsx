import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative max-sm:w-[110px] sm:w-[127px] cursor-pointer flex justify-center overflow-hidden rounded-full border-black bg-background p-2 px-6 max-sm:p-1 max-sm:px-2.5 min-[440px]:p-2 min-[440px]:px-2 min-[440px]:w-[127px] text-center font-semibold duration-600 hover:bg-black",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 ">
        <div className="h-2 w-2 max-md:pl-2 max-sm:pl-0 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 left-6/30 z-10 max-sm:px-2.5 flex h-full w-full translate-x-12 items-center max-sm:justify-center justify-center gap-1 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span className="text-violet-600 max-sm:text-sm sm:text-[16px] min-[440px]:text-[15px]">
          {children}
        </span>
        <ArrowRight className="text-violet-600 sm:w-6" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
