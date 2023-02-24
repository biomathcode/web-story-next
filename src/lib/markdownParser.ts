// TODO: use marked to convert md string to Lexer data

import { marked } from "marked";

const mdParser = (content: string) => {
  const response = marked?.lexer(content);

  const data: any = [];

  response.filter((el) => {
    if (el.type !== "space" && el.type !== "hr") {
      if (el.type === "list") {
        const items = el.items.map((op, v) => {
          data.push(op);

          return op;
        });
        return items;
      } else {
        data.push(el);
        return el;
      }
    }
  });

  return data;
};

export default mdParser;
