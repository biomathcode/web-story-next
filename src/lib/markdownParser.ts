// TODO: use marked to convert md string to Lexer data

import { marked } from "marked";

const mdParser = (content: string) => {
  const data: string[] = [];

  const response = marked.lexer(content);

  const paragraphs = response.filter((el) => el.type !== "space");

  return paragraphs;
};

export default mdParser;
