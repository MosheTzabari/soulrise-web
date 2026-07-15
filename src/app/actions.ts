"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LANGUAGE_COOKIE } from "@/lib/locale";

export async function setLanguage(formData: FormData) {
  const locale = formData.get("locale") === "en" ? "en" : "he";
  const returnTo = String(formData.get("returnTo") || "/");
  const safePath = returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/";
  (await cookies()).set(LANGUAGE_COOKIE, locale, { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24 * 365 });
  redirect(safePath);
}
