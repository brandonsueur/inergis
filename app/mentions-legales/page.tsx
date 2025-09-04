import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { PageTitle } from "@/components/pageTitle";
import { project } from "@/constants/project";

export default function MentionsLegales() {
  return (
    <Layout>
      <Container className="mt-40 mb-20">
        <PageTitle
          title="Mentions légales"
          subTitle="Informations juridiques"
          description="Consultez les informations juridiques concernant notre site web et notre société."
        />

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-ca-slalom font-semibold text-primary mb-4">
              Édition du site
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Le présent site web est édité par la société {project.siteName},
              SARL, société à responsabilité limitée au capital de 1 000€,
              immatriculée au Registre du Commerce et des Sociétés sous le siren
              990 102 626, dont le siège social est situé{" "}
              {project.contact.address}.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Numéro de TVA intracommunautaire : FR80990102626
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-ca-slalom font-semibold text-primary mb-4">
              Directeur de la publication
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Le directeur de la publication est M.Scellier Julien et M.Durier
              Anthony, en qualité de gérant de la société {project.siteName}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-ca-slalom font-semibold text-primary mb-4">
              Développement & Maintenance
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              Le site {project.siteName} a été développé et maintenu par la
              société Hulli Studio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-ca-slalom font-semibold text-primary mb-4">
              Hébergement
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Le site est hébergé par la société Vercel, dont le siège social
              est situé à San Francisco, Californie, États-Unis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-ca-slalom font-semibold text-primary mb-4">
              Propriété intellectuelle
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              L&apos;ensemble des éléments constituant ce site (textes,
              graphismes, logiciels, photographies, images, vidéos, sons, plans,
              logos, marques, créations et œuvres protégeables diverses, bases
              de données, etc.) ainsi que le site lui-même, relèvent des
              législations françaises et internationales sur le droit
              d&apos;auteur et la propriété intellectuelle.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Ces éléments sont la propriété exclusive de {project.siteName}.
              Toute reproduction ou représentation, totale ou partielle, de ce
              site ou de l&apos;un quelconque des éléments qui le composent,
              sans l&apos;autorisation expresse de {project.siteName}, est
              interdite et constituerait une contrefaçon sanctionnée par le Code
              de la propriété intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-ca-slalom font-semibold text-primary mb-4">
              Protection des données personnelles
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {project.siteName} s&apos;engage à protéger vos données
              personnelles et votre vie privée. Les informations recueillies sur
              ce site font l&apos;objet d&apos;un traitement informatique
              destiné à répondre à vos demandes.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Conformément à la loi &quot;Informatique et Libertés&quot; du 6
              janvier 1978 modifiée et au Règlement Général sur la Protection
              des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification, et d&apos;opposition aux informations qui vous
              concernent.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Pour exercer ce droit, veuillez nous contacter à l&apos;adresse
              suivante : {project.contact.email}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-ca-slalom font-semibold text-primary mb-4">
              Contact
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Pour toute question relative aux présentes mentions légales, vous
              pouvez nous contacter à l&apos;adresse email suivante :{" "}
              {project.contact.email}
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Téléphone : {project.contact.phone}
            </p>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
