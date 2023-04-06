// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mdParser from "@/lib/markdownParser";
import { marked } from "marked";
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

import { convert } from "html-to-text";
type Data = {
  data?: string;
  head?: string;
  body?: string;
  content?: string;
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch("https://blog.coolhead.in/contact");
  const data = await response.text();

  const head = data.match(/<head[^>]*>[\s\S]*<\/head>/gi)?.join("");
  const body = data.match(/<body[^>]*>[\s\S]*<\/body>/gi)?.join(" ");

  if (head && body) {
    const content = marked.parse(body);

    const newbody = marked.parse(body);

    const text = convert(newbody, { wordwrap: 130 });

    console.log(data);
    res.status(200).json({ text: text });
  }
}
