import type { Metadata } from "next";
import { getLocale } from "@/lib/locale";
import { publicBaseUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(publicBaseUrl), title: { default: "SoulRise — Events, people, and community", template: "%s | SoulRise" },
  description: "Discover events, connect with people and organizers, and keep social moments, tickets, and event information together.",
  applicationName: siteConfig.siteName, alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: siteConfig.siteName, title: "SoulRise", description: "Discover events. Connect with people. Experience more together." },
  twitter: { card: "summary", title: "SoulRise", description: "Discover events. Connect with people. Experience more together." },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale(); return <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}><body>{children}</body></html>;
}
