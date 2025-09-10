import { Layout } from "@/components/layout";
import { AppointmentForm } from "@/components/appointmentForm";
import { metadata } from "@/utils/metadata";

export const generateMetadata = () => {
  return metadata(
    "Prendre rendez-vous - Devis gratuit",
    "Prenez rendez-vous avec nos experts ou demandez un devis gratuit. Intervention rapide pour tous vos besoins en plomberie, électricité, chauffage et énergies renouvelables."
  );
};

export default function RendezVousPage() {
  return (
    <Layout>
      <AppointmentForm />
    </Layout>
  );
}
