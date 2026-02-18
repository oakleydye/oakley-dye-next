import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type CustomVariant = "primary" | "outline-glow" | "ghost-dim";

interface CustomButtonProps extends Omit<ComponentProps<typeof Button>, "variant"> {
  variant?: CustomVariant | ComponentProps<typeof Button>["variant"];
}

const CustomButton = ({ className, children, variant = "primary", ...props }: CustomButtonProps) => {
  if (variant === "outline-glow") {
    return (
      <Button
        variant="outline"
        className={cn(
          "border-2 border-primary text-primary hover:bg-primary/10",
          "rounded-full h-12 px-8 uppercase tracking-wide font-semibold",
          "shadow-lg hover:glow-red-sm transition-all duration-300",
          "hover:-translate-y-1 active:translate-y-0",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }

  if (variant === "ghost-dim") {
    return (
      <Button
        variant="ghost"
        className={cn(
          "text-muted-foreground hover:text-foreground hover:bg-white/5",
          "rounded-full h-12 px-8 uppercase tracking-wide",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }

  // Default: primary
  return (
    <Button
      className={cn(
        "bg-primary hover:bg-primary/90",
        "rounded-full h-12 px-8 text-primary-foreground uppercase tracking-wide font-semibold",
        "shadow-lg hover:shadow-xl hover:glow-red-sm transition-all duration-300",
        "hover:-translate-y-1 active:translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
