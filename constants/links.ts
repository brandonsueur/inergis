import { project } from "./project";

export type NavigationLink = {
  href: string;
  label: string;
  logged?: boolean;
  available?: boolean;
  children?: NavigationLink[];
  noLabel?: boolean;
};

export const navigationsLinks: NavigationLink[] = [
  { href: "/services", label: "Nos services" },
  { href: "/contact", label: "Contact" },
  { href: "/rendez-vous", label: "Un devis gratuit ?" },
];

export const footerConfig = {
  contact: project.contact,
  sections: [
    {
      title: "Liens utiles",
      links: [
        { label: "Accueil", href: "/" },
        { label: "Nos services", href: "#services" },
        { label: "Devis gratuit", href: "mailto:devis@inergis.fr" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Socials",
      links: [
        { label: "Facebook", href: "https://www.facebook.com/inergis.sarl" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/inergis.sarl",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/sarl-inergis-59a70a382/",
        },
      ],
    },
    {
      title: "Mentions légales",
      links: [
        {
          label: "Mentions légales",
          href: "/mentions-legales",
        },
        {
          label: "Politique de confidentialité",
          href: "/politique-de-confidentialite",
        },
        {
          label: "Conditions d'utilisation",
          href: "/conditions-d-utilisation",
        },
      ],
    },
  ],
  social: project.socials,
};
