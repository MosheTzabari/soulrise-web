import { cookies } from "next/headers";
import type { Locale } from "@/content/types";

export const LANGUAGE_COOKIE = "soulrise-language";

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LANGUAGE_COOKIE)?.value;
  return value === "en" ? "en" : "he";
}
