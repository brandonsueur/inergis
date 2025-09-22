import { Layout } from "@/components/layout";
import { ContactForm } from "@/components";
import { metadata } from "@/utils/metadata";

export const generateMetadata = () => {
  return metadata(
    "Contact",
    "Contactez nos experts en électricité, plomberie, chauffage et énergies renouvelables. Devis gratuit, intervention rapide dans les Hauts-de-France."
  );
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
}
