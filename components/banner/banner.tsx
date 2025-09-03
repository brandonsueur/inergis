import { Button } from "../button";
import { Container } from "../container";

export const Banner = () => {
  return (
    <Container className="mt-38 z-10 mb-52">
      <div className="space-x-reverse md:grid md:grid-cols-12 gap-x-8 items-center">
        <div className="md:col-span-12 lg:col-span-7 xl:col-span-9">
          <h1 className="text-4xl font-airbnb text-primary lg:text-5xl font-medium leading-none mb-4 font-ca-slalom coin-shimmer-responsive">
            Du courant à l’eau, jusqu’au soleil, nous maîtrisons vos énergies.
          </h1>

          <p className="text-md text-gray-500 font-epilogue leading-relaxed mb-12 max-w-xl">
            Spécialistes en électricité, plomberie et énergies renouvelables,
            nous vous accompagnons dans tous vos projets, de l’installation à la
            rénovation. Fiabilité, performance et respect de l’environnement
            sont au cœur de notre savoir-faire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button>Demandez votre devis gratuit</Button>
            <Button variant="outline">Découvrir nos services</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
