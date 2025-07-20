import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface CustomButtonProps extends ComponentProps<typeof Button> {}

const CustomButton = ({ className, children, ...props }: CustomButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-red-900 hover:bg-red-800",
        "rounded-full h-12 px-8 text-white uppercase tracking-wide",
        "shadow-lg hover:shadow-xl transition-all duration-300",
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
