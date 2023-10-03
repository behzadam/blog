import { cn } from "../lib/utils";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
  className?: string;
  dir?: "rtl" | "ltr";
};

const Layout = ({ children, className, dir = "rtl" }: Props) => {
  return (
    <>
      <Meta />
      <div className={cn("min-h-screen", className)} dir={dir}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
