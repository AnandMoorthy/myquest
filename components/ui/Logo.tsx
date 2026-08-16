import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "iconOnly";
  className?: string;
  priority?: boolean;
  href?: string;
};

export function Logo({
  variant = "full",
  className,
  priority = false,
  href = "#",
}: LogoProps) {
  const content = (
    <>
      <Image
        src={withBasePath("/logo.png")}
        alt="MyQuest"
        width={variant === "iconOnly" ? 36 : 40}
        height={variant === "iconOnly" ? 36 : 40}
        priority={priority}
        className={cn(
          "shrink-0 object-contain",
          variant === "iconOnly" ? "h-9 w-9" : "h-10 w-10"
        )}
      />
      {variant === "full" && (
        <span className="flex flex-col items-start leading-tight">
          <span className="text-lg font-bold tracking-tight text-foreground">
            My<span className="text-primary">Quest</span>
          </span>
          <span className="text-[11px] font-medium tracking-wide text-foreground/50">
            Discover. Join. Host.
          </span>
        </span>
      )}
    </>
  );

  return (
    <a
      href={href}
      className={cn(
        "flex cursor-pointer items-center gap-2.5 font-bold text-foreground",
        className
      )}
    >
      {content}
    </a>
  );
}
