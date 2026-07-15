import Link from "next/link";
import { Brand } from "./brand";
import { LanguageSwitcher } from "./language-switcher";
import type { Locale, SiteContent } from "@/content/types";

export function Header({ locale, copy, path = "/" }: { locale: Locale; copy: SiteContent; path?: string }) {
  return <header className="site-header"><div className="shell header-inner"><Brand /><nav aria-label={locale === "he" ? "ניווט ראשי" : "Main navigation"}><Link href="/#platform">{copy.nav.overview}</Link><Link href="/organizers">{copy.nav.organizers}</Link></nav><div className="header-actions"><LanguageSwitcher locale={locale} returnTo={path} /><Link className="button button-small" href="/download">{copy.nav.earlyAccess}</Link></div></div></header>;
}
