export const excludeCharactersMarkdown = (text: string) => {
  return text
    .replace(/<[^>]+>/g, "") // Remove HTML tags
    .replace(/&[a-zA-Z0-9#]+;/g, "") // Remove HTML entities
    .replace(/[\u200B-\u200D\uFEFF]/g, ""); // Remove zero-width characters
};

export const removeMarkdown = (text: string) => {
  return (
    text
      .replace(/^#+\s/gm, "")
      // Supprime gras, italique, souligné, barré (**texte**, *texte*, etc.)
      .replace(/(\*\*|__)(.*?)\1/g, "$2")
      .replace(/(\*|_)(.*?)\1/g, "$2")
      .replace(/~~(.*?)~~/g, "$1")
      // Supprime les liens [texte](url)
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Supprime les images ![alt](url)
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
      // Supprime les backticks `code`
      .replace(/`(.*?)`/g, "$1")
      // Supprime les blockquotes >
      .replace(/^>\s?/gm, "")
      // Supprime les listes (-, *, +)
      .replace(/^(\s*[-*+]\s)/gm, "")
      // Supprime les lignes horizontales ---
      .replace(/^---$/gm, "")
      .trim()
  );
};
