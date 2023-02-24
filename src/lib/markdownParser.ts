// TODO: use marked to convert md string to Lexer data

import { marked } from "marked";

const mdParser = (content: string) => {
  const response = marked?.lexer(content);

  const data: any = [];

  const paragraphs = response.filter((el) => {
    if (el.type !== "space" && el.type !== "hr") {
      if (el.type === "list") {
        console.log("this is if list", el.type);

        const items = el.items.map((op, v) => {
          data.push(op);

          return op;
        });
        return items;
      } else {
        console.log("this is else", el.type);
        data.push(el);
        return el;
      }
    }
  });

  console.log(paragraphs, "this is without flat");

  console.log(data, "new lists");

  console.log(paragraphs.flat());

  return data;
};

export default mdParser;
