"use client";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/sectionTitle";
import { FC } from "react";

export const Innovation: FC = () => {
  return (
    <div className="bg-primary py-20 mt-16">
      <Container>
        <SectionTitle
          subTitle="Innovation"
          title="Ensemble, construisons un habitat plus responsable"
          centered
          className="max-w-3xl mx-auto text-white"
        />

        <p className="text-base font-epilogue text-md text-white leading-relaxed max-w-3xl mx-auto mt-8 text-center">
          Nous nous distinguons par notre volonté d’allier savoir-faire
          artisanal et innovation durable.
          <br />
          <br /> Chez Inergis, nous concevons des installations respectueuses de
          l’environnement : réseaux de plomberie optimisés pour économiser
          l’eau, systèmes électriques intelligents pour maîtriser la
          consommation, solutions de chauffage performantes et moins
          énergivores, équipements basés sur les énergies renouvelables pour
          réduire durablement l’empreinte carbone des bâtiments. <br />
          <br />
          Chaque jour, nous repensons nos méthodes, sélectionnons des matériaux
          responsables et intégrons les dernières technologies pour garantir
          confort, sécurité et performance à nos clients.
        </p>

        <div className="mx-auto mt-12 w-fit">
          <Button>Demandez votre devis gratuit</Button>
        </div>
      </Container>
    </div>
  );
};
