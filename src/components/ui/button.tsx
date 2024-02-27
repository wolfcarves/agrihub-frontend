import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";
import LoadingSpinner from "@icons/LoadingSpinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-base font-poppins-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white rounded-2xl hover:opacity-90 shadow-sm focus:border focus:ring-2 ring-primary",
        default_rounded:
          "bg-primary rounded-full text-primary-foreground shadow-sm hover:bg-primary hover:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive",
        outline:
          "border border-gray-400 bg-background rounded-2xl hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-sec  ondary/80",
        ghost: "bg-background hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-[1.3rem]",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant: vrt = "default",
      size,
      asChild = false,
      isLoading,
      ...props
    },
    ref
  ) => {
    let variant = vrt;

    const Comp = asChild ? Slot : "button";

    if (isLoading) variant = "outline";

    return (
      <div className="relative">
        {isLoading ? (
          <Comp
            disabled={isLoading}
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
          >
            <LoadingSpinner className="text-lg z-50 text-[#222222]" />
          </Comp>
        ) : (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        )}
      </div>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
