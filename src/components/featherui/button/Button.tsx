import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps, ReactNode } from "react"

const buttonVariants = cva(
  "cursor-pointer rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground dark:focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-primary/70 border text-secondary-foreground shadow-xs hover:bg-secondary/80 z-20 transform transition-all duration-200 ease-in-out hover:scale-105 dark:bg-secondary/50 dark:text-secondary-foreground dark:hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        animate:
          "bg-white  text-primary-foreground shadow-xs hover:bg-white overflow-hidden z-10",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = ({
  label,
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    label: string | ReactNode
  }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {label}
    </button>
  )
}
export { Button, buttonVariants }
