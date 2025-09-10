import { Flame, Leaf, Plug2, Wrench } from "lucide-react";

export type FAQItem = {
  id: string;
  question: string;
  answer: string | string[] | React.ReactElement;
};

export type Activity = {
  id: string;
  name: string;
  link: string;
  label: string;
  icon: React.ElementType;
  color: string;
  job: {
    title: string;
    description: string;
  };
  description: string;
  bigDescription: string;
  faq: FAQItem[];
};

export const activities: Activity[] = [
  {
    id: "plumbing",
    name: "plomberie",
    label: "Plomberie",
    link: "plomberie",
    icon: Wrench,
    color: "#044BFF",
    job: {
      title: "Plombier",
      description: "Spécialiste en installations et réparations de plomberie.",
    },
    description: "Interventions rapides pour tous vos besoins en plomberie.",
    bigDescription:
      "De la simple fuite d'eau à la rénovation complète de votre salle de bain, nous intervenons rapidement et garantissons des solutions fiables et durables.",
    faq: [
      {
        id: "plumbing-1",
        question: "Combien coûte une intervention de plomberie ?",
        answer:
          "Le coût varie selon la nature de l'intervention. Pour une simple réparation de fuite, comptez entre 80€ et 150€. Pour des travaux plus complexes comme une rénovation de salle de bain, nous établissons un devis gratuit personnalisé.",
      },
      {
        id: "plumbing-2",
        question: "Intervenez-vous en urgence pour les fuites d'eau ?",
        answer:
          "Oui, nous intervenons 24h/24 et 7j/7 pour les urgences de plomberie. En cas de fuite importante, coupez l'arrivée d'eau principale et contactez-nous immédiatement.",
      },
      {
        id: "plumbing-3",
        question: "Proposez-vous des contrats d'entretien pour la plomberie ?",
        answer:
          "Nous proposons des contrats d'entretien annuels comprenant la vérification de vos installations, le détartrage des équipements et un dépannage prioritaire en cas de problème.",
      },
    ],
  },
  {
    id: "electricity",
    name: "electricite",
    link: "electricite",
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
    faq: [
      {
        id: "electricity-1",
        question:
          "Comment savoir si mon installation électrique est aux normes ?",
        answer:
          "Nous réalisons un diagnostic électrique complet selon la norme NF C 15-100. Ce diagnostic identifie les éventuels défauts et vous propose les mises à niveau nécessaires pour votre sécurité.",
      },
      {
        id: "electricity-2",
        question: "Que faire en cas de panne électrique totale ?",
        answer:
          "Vérifiez d'abord votre disjoncteur principal et les fusibles. Si le problème persiste, contactez-nous en urgence. Ne tentez jamais de réparer vous-même une installation électrique.",
      },
      {
        id: "electricity-3",
        question:
          "Installez-vous des bornes de recharge pour véhicules électriques ?",
        answer:
          "Oui, nous sommes spécialisés dans l'installation de bornes de recharge domestiques et professionnelles. Nous vous accompagnons dans le choix de la solution adaptée à vos besoins.",
      },
    ],
  },
  {
    id: "chauffage",
    name: "chauffage",
    link: "chauffage",
    label: "Chauffage",
    icon: Flame,
    color: "#EC4545",
    job: {
      title: "Chauffagiste",
      description: "Spécialiste en installations et réparations de chauffage.",
    },
    description: "Interventions rapides pour tous vos besoins en chauffage.",
    bigDescription:
      "De l'entretien de votre système au remplacement complet, nous veillons à votre confort thermique avec des solutions efficaces et adaptées.",
    faq: [
      {
        id: "chauffage-1",
        question: "Quand faut-il entretenir ma chaudière ?",
        answer:
          "L'entretien annuel de votre chaudière est obligatoire. Nous recommandons de le faire avant la période de chauffe, idéalement en septembre ou octobre, pour garantir un fonctionnement optimal.",
      },
      {
        id: "chauffage-2",
        question: "Ma chaudière fait du bruit, est-ce normal ?",
        answer:
          "Des bruits anormaux peuvent indiquer un problème (entartrage, dysfonctionnement, etc.). Nous vous conseillons de faire vérifier votre installation rapidement pour éviter une panne plus importante.",
      },
      {
        id: "chauffage-3",
        question: "Quels sont les avantages d'une pompe à chaleur ?",
        answer:
          "La pompe à chaleur permet de réduire vos factures de chauffage jusqu'à 70% et bénéficie d'aides financières. C'est une solution écologique et économique sur le long terme.",
      },
    ],
  },
  {
    id: "energy-renewable",
    name: "énergie renouvelable",
    link: "energie-renouvelable",
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
    faq: [
      {
        id: "renewable-1",
        question: "Quelle est la rentabilité des panneaux solaires ?",
        answer:
          "L'installation se rentabilise généralement entre 8 et 12 ans selon votre consommation. Les panneaux ont une durée de vie de 25 ans minimum, garantissant un retour sur investissement intéressant.",
      },
      {
        id: "renewable-2",
        question:
          "Puis-je bénéficier d'aides pour l'installation de panneaux solaires ?",
        answer:
          "Oui, plusieurs aides existent : la prime à l'autoconsommation, les tarifs de rachat d'EDF, MaPrimeRénov', l'éco-prêt à taux zéro, et souvent des aides locales. Nous vous accompagnons dans vos démarches.",
      },
      {
        id: "renewable-3",
        question: "L'entretien des panneaux solaires est-il nécessaire ?",
        answer:
          "Les panneaux solaires nécessitent peu d'entretien. Un nettoyage annuel et une vérification de l'installation suffisent généralement. Nous proposons des contrats de maintenance pour optimiser leur performance.",
      },
    ],
  },
];
