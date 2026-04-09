import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "../Text";

// eslint-disable-next-line react-refresh/only-export-components
export const inputVariants = cva(
  `border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none`,
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

interface IInputProps
  extends
    Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputVariants> {}

export function Input({ disabled, size, className, ...props }: IInputProps) {
  return (
    <input
      className={cx(
        inputVariants({ disabled, size, className }),
        textVariants(),
        className,
      )}
      {...props}
    />
  );
}
