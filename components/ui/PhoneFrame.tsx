import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[458/1024] w-full overflow-hidden rounded-[2.4rem] bg-[#16161e] p-[7px] shadow-[0_24px_80px_-16px_rgba(0,0,0,0.7)] ring-1 ring-white/12",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-[#16161e]">
        {children}
      </div>
    </div>
  );
}
