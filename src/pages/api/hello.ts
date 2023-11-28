// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

type Data = {
  data?: string;
  msg?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.url) {
    const response = await fetch(req.query.url as any);
    const data = await response.text();

    res.status(200).json({ data: data });
  } else {
    res.status(400).json({ msg: "url is not correct" });
  }
}
