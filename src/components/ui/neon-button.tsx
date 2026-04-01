import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative group border font-semibold mx-auto text-center rounded transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-fire/10 hover:bg-fire/5 border-fire/30 text-cream",
        solid: "bg-fire hover:bg-orange-600 text-ink border-transparent",
        ghost: "border-transparent bg-transparent hover:border-fire/40 hover:bg-fire/5 text-cream",
        outline: "border-2 border-cream/20 bg-transparent text-cream hover:border-fire hover:text-fire hover:bg-fire/5",
      },
      size: {
        default: "px-8 py-4 text-base",
        sm: "px-6 py-2 text-sm",
        lg: "px-10 py-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  neon?: boolean;
  asChild?: boolean;
  href?: string;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, neon = true, size, variant, children, href, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if (href) {
      return (
        <a href={href} className={classes}>
          <span
            className={cn(
              "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-400 to-transparent hidden",
              neon && "block"
            )}
          />
          {children}
          <span
            className={cn(
              "absolute group-hover:opacity-40 transition-all duration-500 inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-400 to-transparent hidden",
              neon && "block"
            )}
          />
        </a>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        <span
          className={cn(
            "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-400 to-transparent hidden",
            neon && "block"
          )}
        />
        {children}
        <span
          className={cn(
            "absolute group-hover:opacity-40 transition-all duration-500 inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-400 to-transparent hidden",
            neon && "block"
          )}
        />
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";

export { NeonButton, buttonVariants };
