import { Footer } from "@/sections/footer";
import { Menu } from "../menu";
import clsx from "clsx";
import { Container } from "../container";
import { Phone } from "lucide-react";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <div className="bg-primary fixed inset-x-0 top-0 z-50 isolate">
        <Container className="text-white p-2 flex justify-between text-sm md:text-md">
          <p className="w-70 md:w-96">
            Urgence <span className="font-bold">électricité</span> ou{" "}
            <span className=" font-bold">plomberie</span> ? Intervention rapide
            7j/7
          </p>

          <a href="tel:0365889783" className="flex items-center gap-4">
            <Phone width={18} height={18} />
            03 65 88 97 83{" "}
            <span className="hidden md:flex">/ 06 40 87 15 53</span>
          </a>
        </Container>
      </div>

      <div className="bg-white fixed inset-x-0 top-0 z-40 isolate mt-10">
        <Menu />
      </div>

      <main className={clsx("flex-1 w-full relative", className)}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
