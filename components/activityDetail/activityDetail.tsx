"use client";

import { Activity } from "@/constants/activities";
import { Container } from "../container";
import { PageTitle } from "../pageTitle";
import { Button } from "../button";
import { ActivityFAQ } from "../activityFAQ";
import Link from "next/link";

interface ActivityDetailProps {
  activity: Activity;
}

export function ActivityDetail({ activity }: ActivityDetailProps) {
  const IconComponent = activity.icon;

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-6 mt-28">
        <Container>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: activity.color }}
              >
                <IconComponent size={40} style={{ color: "#ffff" }} />
              </div>
            </div>

            <PageTitle
              centered
              title={activity.label}
              description={activity.description}
            />

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rendez-vous">
                <Button>Demander un devis gratuit</Button>
              </Link>
              <Link href="/rendez-vous">
                <Button variant="outline">Contactez-nous</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6 font-ca-slalom">
                Nos services en {activity.label.toLowerCase()}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-epilogue">
                {activity.bigDescription}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: activity.color }}
                  ></div>
                  <div>
                    <h3 className="font-semibold text-black font-ca-slalom">
                      Intervention rapide
                    </h3>
                    <p className="text-gray-600 font-epilogue">
                      Nous intervenons dans les plus brefs délais pour résoudre
                      vos problèmes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: activity.color }}
                  ></div>
                  <div>
                    <h3 className="font-semibold text-black font-ca-slalom">
                      Devis gratuit
                    </h3>
                    <p className="text-gray-600 font-epilogue">
                      Nous établissons un devis détaillé et transparent, sans
                      engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: activity.color }}
                  ></div>
                  <div>
                    <h3 className="font-semibold text-black font-ca-slalom">
                      Garantie qualité
                    </h3>
                    <p className="text-gray-600 font-epilogue">
                      Tous nos travaux sont garantis et réalisés par des
                      professionnels qualifiés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2 font-ca-slalom">
                  {activity.job.title}
                </h3>
                <p className="text-gray-600 font-epilogue">
                  {activity.job.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-epilogue">
                    Disponibilité
                  </span>
                  <span className="font-semibold text-black font-ca-slalom">
                    24h/24 - 7j/7
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-epilogue">
                    Zone d&apos;intervention
                  </span>
                  <span className="font-semibold text-black font-ca-slalom">
                    Somme / Picardie
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-epilogue">Devis</span>
                  <span className="font-semibold text-green-600 font-ca-slalom">
                    Gratuit
                  </span>
                </div>
              </div>

              <Link href="/rendez-vous">
                <Button className="w-full mt-6">Prendre rendez-vous</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <ActivityFAQ faqData={activity.faq} activityName={activity.label} />
    </>
  );
}
