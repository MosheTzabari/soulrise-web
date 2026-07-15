import type { ReactNode } from "react";
import { getContent } from "@/content";
import { getLocale } from "@/lib/locale";
import { Header } from "./header";
import { Footer } from "./footer";

export async function PageShell({ children, path }: { children: (data: { copy: ReturnType<typeof getContent>; locale: Awaited<ReturnType<typeof getLocale>> }) => ReactNode; path: string }) {
  const locale = await getLocale(); const copy = getContent(locale);
  return <><Header locale={locale} copy={copy} path={path} /><main>{children({ copy, locale })}</main><Footer locale={locale} copy={copy} path={path} /></>;
}
