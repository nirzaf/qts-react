import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white shadow hover:bg-black/90",
        destructive:
          "bg-black text-white shadow-sm hover:bg-black/90",
        outline:
          "border-2 border-black text-black bg-white shadow-sm hover:bg-black hover:text-white",
        secondary:
          "bg-white text-black border-2 border-black shadow-sm hover:bg-black hover:text-white",
        ghost: 
          "text-black hover:bg-black/10",
        link: 
          "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className="relative w-full h-full">
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 overflow-hidden">
            <div className="torch-wave absolute w-[200%] h-full top-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>
        </div>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
