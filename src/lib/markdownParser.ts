import { marked } from "marked";

import htmlToMarkdown from "@wcj/html-to-markdown";

const mdParser = async (content: string) => {
  const el = await htmlToMarkdown({ html: content });

  console.log("html to markdown", el);
  const response = marked?.lexer(el || "");

  const data: any = [];

  response.filter((el) => {
    if (el.type !== "space" && el.type !== "hr") {
      if (el.type === "list") {
        const items = el?.items?.map((op, v) => {
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
