import { cx } from "class-variance-authority";
interface IMainContentProps extends React.ComponentPropsWithoutRef<"main"> {
  children: React.ReactNode;
}
export function MainContent({
  children,
  className,
  ...props
}: IMainContentProps) {
  return (
    <main className={cx("mt-4 md:mt-8", className)} {...props}>
      {children}
    </main>
  );
}
