import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
    defaultVariants: {
      animate: false,
    },
  },
});

interface IIconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
}
export function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IIconProps) {
  return (
    <SvgComponent
      className={`${iconVariants({ animate })} ${className}`}
      {...props}
    />
  );
}
