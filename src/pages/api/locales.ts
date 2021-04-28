import { NextApiRequest, NextApiResponse } from "next";
import enLocale from "./en.json";
import ruLocale from "./ru.json";

export default async function Locales(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { locale } = req.query as { locale: string };

  res.status(200).json({ text: locale === "ru" ? ruLocale : enLocale });
}
