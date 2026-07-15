import { setLanguage } from "@/app/actions";
import type { Locale } from "@/content/types";

export function LanguageSwitcher({ locale, returnTo }: { locale: Locale; returnTo: string }) {
  const next = locale === "he" ? "en" : "he";
  return <form action={setLanguage}><input type="hidden" name="locale" value={next} /><input type="hidden" name="returnTo" value={returnTo} /><button className="language-button" type="submit" lang={next}>{next === "he" ? "עברית" : "English"}</button></form>;
}
