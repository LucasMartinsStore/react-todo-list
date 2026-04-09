import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-126 px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface IContainerProps
  extends React.ComponentProps<"div">, VariantProps<typeof containerVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

export function Container({
  children,
  className,
  as = "div",
  ...props
}: IContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ className, size: "md" }),
      ...props,
    },
    children,
  );
}
