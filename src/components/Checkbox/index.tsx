import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "../Icon";
import CheckIcon from "../../assets/icons/Check-Regular.svg?react";
import { Skeleton } from "../Skeleton";

const checkboxWrapperVariants = cva(
  "inline-flex items-center justify-center relative group",
);

const checkboxVariants = cva(
  `
  appearance-none peer flex items-center justify-center cursor-pointer
   transition overflow-hidden 
`,
  {
    variants: {
      variant: {
        none: "",
        default: `
        border-green-base
      hover:border-green-dark hover:bg-green-dark/20
      checked:border-green-base checked:bg-green-base
      group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
      border-2 border-solid
        `,
      },
      size: {
        md: "w-5 h-5 rounded",
      },
      disabled: {
        true: "pointer-events-none ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  },
);

const checkboxIconVariants = cva(
  `absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block fill-white`,
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface ICheckBoxProps
  extends
    Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof checkboxVariants> {
  loading?: boolean;
}

export function CheckBox({
  variant,
  disabled,
  size,
  className,
  loading,
  ...props
}: ICheckBoxProps) {
  if (loading) {
    return (
      <Skeleton
        rounded={"sm"}
        className={checkboxVariants({ variant: "none", size })}
      />
    );
  }
  return (
    <label className={checkboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={checkboxVariants({ variant, disabled, size, className })}
        {...props}
      />
      <Icon svg={CheckIcon} className={checkboxIconVariants({ size })} />
    </label>
  );
}
