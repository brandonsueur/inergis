import { project } from "@/constants";

export const formatTitle = (title: string) => {
  const maxLength = 50;

  if (title?.length === 0) return project.title;

  if (title?.length > maxLength) {
    return `${title?.slice(0, maxLength)}...`;
  }

  return `${title} - ${project.siteName}`;
};

export const formatDescription = (description: string) => {
  const maxLength = 200;
  if (description?.length > maxLength) {
    return `${description.slice(0, maxLength)}...`;
  }

  return description;
};

export const metadata = (title: string, description: string) => {
  return {
    title: formatTitle(title),
    description: formatDescription(description),
    openGraph: {
      title: formatTitle(title),
      description: formatDescription(description),
      url: project.url,
      siteName: project.siteName,
      images: [
        {
          url: `${project.url}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: formatTitle(title),
      description: formatDescription(description),
      images: [`${project.url}/og-image.png`],
    },
  };
};
