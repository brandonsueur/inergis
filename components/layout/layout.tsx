import { Footer } from "@/sections/footer";
import { Menu } from "../menu";
import clsx from "clsx";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div>
        <Menu />
      </div>

      <main className={clsx("flex-1 w-full relative", className)}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
