import { Flame, Leaf, Plug2, Wrench } from "lucide-react";

export type Activity = {
  id: string;
  name: string;
  label: string;
  icon: React.ElementType;
  color: string;
  job: {
    title: string;
    description: string;
  };
  description: string;
  bigDescription: string;
};

export const activities: Activity[] = [
  {
    id: "plumbing",
    name: "plomberie",
    label: "Plomberie",
    icon: Wrench,
    color: "#044BFF",
    job: {
      title: "Plombier",
      description: "Spécialiste en installations et réparations de plomberie.",
    },
    description: "Interventions rapides pour tous vos besoins en plomberie.",
    bigDescription:
      "De la simple fuite d’eau à la rénovation complète de votre salle de bain, nous intervenons rapidement et garantissons des solutions fiables et durables.",
  },
  {
    id: "electricity",
    name: "electricite",
    label: "Électricité",
    icon: Plug2,
    color: "#FFB700",
    job: {
      title: "Électricien",
      description: "Spécialiste en installations et réparations électriques.",
    },
    description:
      "Installation, dépannage et maintenance électrique pour particuliers et professionnels.",
    bigDescription:
      "De la mise aux normes de vos installations au dépannage, nous assurons sécurité et performance avec des interventions rapides et soignées.",
  },
  {
    id: "chauffage",
    name: "chauffage",
    label: "Chauffage",
    icon: Flame,
    color: "#EC4545",
    job: {
      title: "Chauffagiste",
      description: "Spécialiste en installations et réparations de chauffage.",
    },
    description: "Interventions rapides pour tous vos besoins en chauffage.",
    bigDescription:
      "De l’entretien de votre système au remplacement complet, nous veillons à votre confort thermique avec des solutions efficaces et adaptées.",
  },
  {
    id: "energy-renewable",
    name: "énergie renouvelable",
    label: "Énergie renouvelable",
    icon: Leaf,
    color: "#00B300",
    job: {
      title: "Spécialiste en énergie renouvelable",
      description: "Expert en solutions énergétiques durables.",
    },
    description:
      "Conseils et installations pour un avenir énergétique durable.",
    bigDescription:
      " Des panneaux solaires à la pose de pompes à chaleur, nous vous aidons à réduire vos factures avec des solutions durables.",
  },
];
