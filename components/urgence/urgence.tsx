import { Phone } from "lucide-react";
import { Container } from "../container";

export const Urgence = () => {
  return (
    <div className="bg-primary fixed inset-x-0 top-0 z-50 isolate">
      <Container className="text-white p-2 flex justify-between text-sm md:text-md">
        <p className="w-60 md:w-96 text-xs md:text-sm">
          Urgence <span className="font-bold">électricité</span> ou{" "}
          <span className=" font-bold">plomberie</span> ?{" "}
          <span>Intervention rapide 7j/7</span>
        </p>

        <a
          href="tel:0365889783"
          className="flex items-center gap-4 text-xs md:text-sm w-40 md:w-auto"
          aria-label="Numéro de téléphone"
          title="Numéro de téléphone"
        >
          <Phone width={18} height={18} />
          03 65 88 97 83{" "}
          <span className="hidden md:flex">/ 06 40 87 15 53</span>
        </a>
      </Container>
    </div>
  );
};
