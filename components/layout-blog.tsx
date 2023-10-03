import { cn } from "../lib/utils";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
  className?: string;
  dir?: "rtl" | "ltr";
};

const LayoutBlog = ({ children, className, dir = "rtl" }: Props) => {
  return (
    <>
      <Meta />
      <div
        className={cn("min-h-screen max-w-2xl mx-auto", className)}
        dir={dir}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

export default LayoutBlog;
