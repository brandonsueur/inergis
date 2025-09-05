import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { project } from "../../constants/project";
import { Container } from "../../components/container";
import { PageTitle } from "../../components/pageTitle";
import { formatTitle, formatDescription } from "../../utils/metadata";

export const generateMetadata = (): Metadata => {
  const title = "Carte de visite numérique";
  const description =
    "Ajoutez Inergis à vos contacts en un simple clic - Spécialistes en électricité, plomberie et énergies renouvelables";

  return {
    title: formatTitle(title),
    description: formatDescription(description),
    openGraph: {
      title: formatTitle(title),
      description: formatDescription(description),
      url: `${project.url}/carte`,
      siteName: project.siteName,
      images: [
        {
          url: `${project.url}/og-carte.jpg`,
          width: 1200,
          height: 630,
          alt: "Carte de visite numérique Inergis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: formatTitle(title),
      description: formatDescription(description),
      images: [`${project.url}/og-carte.jpg`],
    },
  };
};

export default function CarteVisitePage() {
  return (
    <div className="py-12">
      <Container>
        <PageTitle
          centered
          title="Carte de visite numérique"
          subTitle="Ajoutez Inergis à vos contacts en un simple clic"
        />
        <div className="flex flex-col items-center justify-center mt-12 mb-16">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full">
            <div className="bg-blue-800 py-6 px-4 text-center">
              <Image
                src="/logo-white.svg"
                alt="Inergis Logo"
                width={120}
                height={60}
                className="h-16 mx-auto mb-2"
              />
              <p className="text-white">
                Spécialistes en électricité, plomberie et énergies renouvelables
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-700 mt-1 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Adresse</p>
                    <p className="text-gray-600">{project.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-700 mt-1 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Téléphone</p>
                    <a
                      href={`tel:${project.contact.phone}`}
                      className="text-blue-700 hover:underline"
                    >
                      {project.contact.phone.replace(
                        /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
                        "$1 $2 $3 $4 $5"
                      )}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-700 mt-1 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href={`mailto:${project.contact.email}`}
                      className="text-blue-700 hover:underline"
                    >
                      {project.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-700 mt-1 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Site web</p>
                    <a
                      href={project.url}
                      className="text-blue-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.url.replace("https://", "")}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/inergis.vcf"
                  download="Inergis.vcf"
                  className="inline-flex items-center px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  Ajouter aux contacts
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-2">Partagez notre carte de visite</p>
            <div className="flex justify-center space-x-4">
              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?text=Découvrez les services d'Inergis - ${project.url}/carte-visite`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-500"
                aria-label="Partager sur WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:?subject=Carte de visite Inergis&body=Voici la carte de visite numérique d'Inergis: ${project.url}/carte-visite`}
                className="text-gray-600 hover:text-blue-500"
                aria-label="Partager par email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </a>

              {/* SMS */}
              <a
                href={`sms:?&body=Découvrez les services d'Inergis - ${project.url}/carte-visite`}
                className="text-gray-600 hover:text-blue-500"
                aria-label="Partager par SMS"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="text-blue-700 hover:text-blue-800 inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
