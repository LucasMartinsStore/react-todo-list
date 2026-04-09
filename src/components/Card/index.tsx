import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  `rounded-lg border-solid border-gray-200 bg-white shadow-sm`,
  {
    variants: {
      size: {
        none: "",
        md: "p-5",
      },
    },
    defaultVariants: {
      size: "none",
    },
  },
);

interface ICardProps
  extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}
export function Card({
  children,
  className,
  size,
  as = "div",
  ...props
}: ICardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children,
  );
}
