import Link from "next/link";
import { Brand } from "./brand";
import { LanguageSwitcher } from "./language-switcher";
import type { Locale, SiteContent } from "@/content/types";

export function Footer({ locale, copy, path = "/" }: { locale: Locale; copy: SiteContent; path?: string }) {
  return <footer className="site-footer"><div className="shell footer-grid"><div><Brand /><p>{copy.footer.line}</p></div><nav aria-label={locale === "he" ? "ניווט תחתון" : "Footer navigation"}><Link href="/privacy">{copy.footer.privacy}</Link><Link href="/terms">{copy.footer.terms}</Link><Link href="/support">{copy.footer.support}</Link><Link href="/organizers">{copy.footer.organizers}</Link></nav><LanguageSwitcher locale={locale} returnTo={path} /></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} SoulRise. {copy.footer.rights}</span><span>Early access</span></div></footer>;
}
