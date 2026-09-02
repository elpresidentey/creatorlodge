import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[88px] w-full rounded-xl border border-[#D2D2D7] bg-white px-4 py-3 text-[15px] leading-relaxed text-[#1D1D1F] placeholder:text-[#86868B] shadow-sm ring-offset-white focus-visible:outline-none focus-visible:border-[#0071E3] focus-visible:ring-4 focus-visible:ring-[#0071E3]/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
