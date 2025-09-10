import { Flame, Leaf, Plug2, Wrench } from "lucide-react";

export type FAQItem = {
  id: string;
  question: string;
  answer: string | string[] | React.ReactElement;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  features?: string[];
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
  services: ServiceItem[];
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
    services: [
      {
        id: "plumbing-service-1",
        title: "Installation et rénovation de salles de bain",
        description:
          "Rénovation complète de votre salle de bain avec des équipements modernes et conformes aux normes.",
        features: [
          "Pose de sanitaires",
          "Installation de douche à l'italienne",
          "Carrelage et faïence",
          "Robinetterie haut de gamme",
        ],
      },
      {
        id: "plumbing-service-2",
        title: "Détection et réparation de fuites d'eau",
        description:
          "Intervention rapide pour localiser et réparer tous types de fuites, même les plus difficiles à détecter.",
        features: [
          "Détection par caméra",
          "Réparation sans casse",
          "Recherche de fuite souterraine",
          "Dépannage 24h/24",
        ],
      },
      {
        id: "plumbing-service-3",
        title: "Installation et entretien de chauffe-eau",
        description:
          "Installation, réparation et entretien de tous types de chauffe-eau pour un confort optimal.",
        features: [
          "Chauffe-eau électrique",
          "Chauffe-eau gaz",
          "Ballon thermodynamique",
          "Entretien préventif",
        ],
      },
      {
        id: "plumbing-service-4",
        title: "Pose et remplacement de sanitaires",
        description:
          "Installation et remplacement de tous vos équipements sanitaires avec garantie qualité.",
        features: [
          "WC suspendus",
          "Lavabos design",
          "Douches et baignoires",
          "Accessoires PMR",
        ],
      },
      {
        id: "plumbing-service-5",
        title: "Débouchage et entretien de canalisations",
        description:
          "Débouchage professionnel et entretien préventif de vos canalisations et évacuations.",
        features: [
          "Débouchage haute pression",
          "Inspection vidéo",
          "Curage préventif",
          "Traitement anti-odeurs",
        ],
      },
      {
        id: "plumbing-service-6",
        title: "Adoucisseurs d'eau et systèmes de filtration",
        description:
          "Installation de systèmes de traitement de l'eau pour améliorer sa qualité et protéger vos installations.",
        features: [
          "Adoucisseurs d'eau",
          "Filtres anti-calcaire",
          "Osmoseurs",
          "Maintenance incluse",
        ],
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
    services: [
      {
        id: "electricity-service-1",
        title: "Mise aux normes électriques",
        description:
          "Mise en conformité de votre installation électrique selon les normes NF C 15-100 pour votre sécurité.",
        features: [
          "Diagnostic électrique complet",
          "Remplacement du tableau",
          "Mise à la terre",
          "Certification Consuel",
        ],
      },
      {
        id: "electricity-service-2",
        title: "Installation de bornes de recharge",
        description:
          "Installation de bornes de recharge pour véhicules électriques à domicile ou en entreprise.",
        features: [
          "Borne 7kW à 22kW",
          "Wallbox intelligente",
          "Installation sécurisée",
          "Accompagnement aux aides",
        ],
      },
      {
        id: "electricity-service-3",
        title: "Éclairage et domotique",
        description:
          "Installation d'éclairages modernes et systèmes domotiques pour votre confort.",
        features: [
          "LED basse consommation",
          "Éclairage connecté",
          "Détecteurs de mouvement",
          "Variateurs intelligents",
        ],
      },
      {
        id: "electricity-service-4",
        title: "Prises et circuits électriques",
        description:
          "Ajout et rénovation de prises électriques et circuits pour répondre à vos nouveaux besoins.",
        features: [
          "Prises USB intégrées",
          "Circuits spécialisés",
          "Protection différentielle",
          "Prises étanches",
        ],
      },
      {
        id: "electricity-service-5",
        title: "Dépannage électrique d'urgence",
        description:
          "Intervention rapide 24h/24 pour tous vos problèmes électriques urgents.",
        features: [
          "Panne de courant",
          "Court-circuit",
          "Disjoncteur qui saute",
          "Intervention immédiate",
        ],
      },
      {
        id: "electricity-service-6",
        title: "Chauffage électrique",
        description:
          "Installation et maintenance de systèmes de chauffage électrique performants.",
        features: [
          "Radiateurs connectés",
          "Plancher chauffant",
          "Convecteurs design",
          "Programmation intelligente",
        ],
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
    services: [
      {
        id: "chauffage-service-1",
        title: "Installation de pompes à chaleur",
        description:
          "Installation de pompes à chaleur air-air ou air-eau pour un chauffage écologique et économique.",
        features: [
          "PAC air-air",
          "PAC air-eau",
          "Installation certifiée",
          "Aides financières",
        ],
      },
      {
        id: "chauffage-service-2",
        title: "Entretien et dépannage de chaudières",
        description:
          "Entretien annuel obligatoire et dépannage de tous types de chaudières gaz et fioul.",
        features: [
          "Entretien préventif",
          "Réparation toutes marques",
          "Pièces d'origine",
          "Intervention rapide",
        ],
      },
      {
        id: "chauffage-service-3",
        title: "Installation de chaudières",
        description:
          "Installation de chaudières haute performance pour optimiser votre confort et vos économies.",
        features: [
          "Chaudière condensation",
          "Chaudière hybride",
          "Chaudière biomasse",
          "Garantie constructeur",
        ],
      },
      {
        id: "chauffage-service-4",
        title: "Radiateurs et plancher chauffant",
        description:
          "Installation et remplacement de radiateurs et systèmes de plancher chauffant.",
        features: [
          "Radiateurs design",
          "Plancher hydraulique",
          "Régulation zone par zone",
          "Émetteurs basse température",
        ],
      },
      {
        id: "chauffage-service-5",
        title: "Systèmes de régulation",
        description:
          "Installation de thermostats intelligents et systèmes de régulation pour optimiser votre consommation.",
        features: [
          "Thermostat connecté",
          "Programmation avancée",
          "Régulation multizone",
          "Économies garanties",
        ],
      },
      {
        id: "chauffage-service-6",
        title: "Maintenance préventive",
        description:
          "Contrats d'entretien pour assurer le bon fonctionnement de vos installations de chauffage.",
        features: [
          "Visite annuelle",
          "Nettoyage complet",
          "Réglages optimaux",
          "Dépannage prioritaire",
        ],
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
    services: [
      {
        id: "renewable-service-1",
        title: "Installation de panneaux solaires photovoltaïques",
        description:
          "Installation complète de panneaux solaires pour produire votre propre électricité verte.",
        features: [
          "Panneaux haute performance",
          "Onduleurs dernière génération",
          "Monitoring en temps réel",
          "Garantie 25 ans",
        ],
      },
      {
        id: "renewable-service-2",
        title: "Chauffe-eau solaire",
        description:
          "Installation de chauffe-eau solaires pour réduire vos factures d'eau chaude sanitaire.",
        features: [
          "Capteurs thermiques",
          "Ballon solaire",
          "Système d'appoint",
          "Économies jusqu'à 70%",
        ],
      },
      {
        id: "renewable-service-3",
        title: "Pompes à chaleur écologiques",
        description:
          "Installation de pompes à chaleur utilisant les énergies renouvelables de l'air ou du sol.",
        features: [
          "PAC géothermique",
          "PAC aérothermique",
          "COP élevé",
          "Éligible aux aides",
        ],
      },
      {
        id: "renewable-service-4",
        title: "Systèmes de stockage d'énergie",
        description:
          "Installation de batteries pour stocker l'énergie produite par vos panneaux solaires.",
        features: [
          "Batteries lithium",
          "Gestion intelligente",
          "Autoconsommation optimisée",
          "Autonomie énergétique",
        ],
      },
      {
        id: "renewable-service-5",
        title: "Audit énergétique",
        description:
          "Évaluation complète de votre consommation pour optimiser vos installations renouvelables.",
        features: [
          "Bilan énergétique",
          "Préconisations personnalisées",
          "Calcul de rentabilité",
          "Accompagnement aux aides",
        ],
      },
      {
        id: "renewable-service-6",
        title: "Maintenance et optimisation",
        description:
          "Entretien et optimisation de vos installations d'énergie renouvelable pour une performance maximale.",
        features: [
          "Maintenance préventive",
          "Nettoyage panneaux",
          "Vérification onduleurs",
          "Optimisation production",
        ],
      },
    ],
  },
];
