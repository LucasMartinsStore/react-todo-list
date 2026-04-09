import { cva, cx, type VariantProps } from "class-variance-authority";
import { Text } from "../Text";
import { Skeleton } from "../Skeleton";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-green-light",
        secondary: "bg-pink-light",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const badgeLoadingVariants = cva("", {
  variants: {
    size: {
      sm: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface IBadgeProps
  extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export function Badge({
  children,
  variant,
  size,
  className,
  loading,
  ...props
}: IBadgeProps) {
  if (loading) {
    return (
      <Skeleton
        className={cx(
          badgeLoadingVariants({ size }),
          badgeVariants({ variant: "none" }),
          className,
        )}
        rounded={"full"}
      />
    );
  }
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
