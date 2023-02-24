// TODO: use marked to convert md string to Lexer data

import { marked } from "marked";

const mdParser = (content: string) => {
  const response = marked?.lexer(content);

  const paragraphs = response.filter((el) => {
    if (el.type !== "space" && el.type !== "hr") {
      if (el.type === "list") {
        const items = el.items.map((op, v) => {
          return op;
        });
        return items;
      } else {
        return el;
      }
    }
  });

  return paragraphs.flat();
};

export default mdParser;
