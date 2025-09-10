"use client";

import { Container } from "../container";
import { SectionTitle } from "../sectionTitle";
import { ServiceItem } from "@/constants/activities";
import { Button } from "../button";
import Link from "next/link";

interface PopularServicesProps {
  services: ServiceItem[];
  activityName: string;
  activityColor: string;
}

export function PopularServices({
  services,
  activityName,
  activityColor,
}: PopularServicesProps) {
  const displayedServices = services.slice(0, 6);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <Container>
        <SectionTitle
          subTitle="Services"
          title={`Nos services de ${activityName.toLowerCase()} les plus populaires`}
          description={`Découvrez notre gamme complète de services en ${activityName.toLowerCase()}. Des interventions rapides aux projets de rénovation, nous avons la solution adaptée à vos besoins.`}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: activityColor }}
                  ></div>
                  <h3 className="text-xl font-bold text-black font-ca-slalom">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 font-epilogue mb-6 leading-relaxed">
                  {service.description}
                </p>

                {service.features && service.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-black mb-3 font-ca-slalom">
                      Nos prestations :
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0"
                            style={{ backgroundColor: activityColor }}
                          ></div>
                          <span className="text-gray-600 text-sm font-epilogue">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link href="/rendez-vous">
                  <Button variant="outline" className="w-full">
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-epilogue mb-6">
            Nos services couvrent bien plus que ces prestations :&nbsp;
            <Link
              href="/rendez-vous"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              contactez-nous
            </Link>
            &nbsp;pour toute demande spécifique.
          </p>

          <div className="flex justify-center">
            <Link href="/rendez-vous">
              <Button className="px-8 py-3">
                Obtenir un devis personnalisé
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
