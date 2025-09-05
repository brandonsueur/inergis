import { Footer } from "@/sections/footer";
import { Menu } from "../menu";
import clsx from "clsx";
import { Container } from "../container";
import { Phone } from "lucide-react";
import { Urgence } from "../urgence";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Urgence />
      <div className="bg-white fixed inset-x-0 top-0 z-40 isolate">
        <Menu />
      </div>

      <main className={clsx("flex-1 w-full relative", className)}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
