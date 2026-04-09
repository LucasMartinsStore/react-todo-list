import { cva, type VariantProps } from "class-variance-authority";

const skeletonVariants = cva(`animate-pulse bg-gray-200 pointer-events-none`, {
  variants: {
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "lg",
  },
});

interface ISkeletonProps
  extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div"> {}

export function Skeleton({ rounded, className, ...props }: ISkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props} />
  );
}
