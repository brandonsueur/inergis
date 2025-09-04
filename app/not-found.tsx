import Link from "next/link";
import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { PageTitle } from "@/components/pageTitle";
import { Button } from "@/components/button";
import { project } from "@/constants/project";

export default function NotFound() {
  return (
    <Layout>
      <Container className="mt-40 mb-20 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-8xl font-ca-slalom font-bold text-secondary">
            404
          </span>

          <PageTitle
            title="Page non trouvée"
            subTitle="Erreur"
            description="La page que vous recherchez semble introuvable."
            centered
          />

          <div className="mt-8 max-w-xl text-lg text-gray-500">
            <p>
              Nous sommes désolés, mais la page que vous avez demandée
              n&apos;existe pas ou a été déplacée. Veuillez vérifier l&apos;URL
              ou revenir à la page d&apos;accueil.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/" passHref>
              <Button variant="primary" size="lg">
                Retour à l&apos;accueil
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-lg font-ca-slalom font-semibold text-primary mb-4">
            Besoin d&apos;aide ?
          </h3>
          <p className="text-gray-500 mb-4">
            Si vous avez des questions ou si vous cherchez une information
            spécifique, n&apos;hésitez pas à nous contacter.
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-gray-600">
              <strong>Email:</strong>{" "}
              {project.contact?.email || "contact@inergis.fr"}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Téléphone:</strong>{" "}
              {project.contact?.phone || "03 XX XX XX XX"}
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
