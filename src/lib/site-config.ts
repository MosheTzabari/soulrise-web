export type ReleaseMode = "early_access" | "app_store" | "public";

export const siteConfig = {
  siteName: "SoulRise",
  canonicalDomain: null as string | null,
  releaseMode: "early_access" as ReleaseMode,
  appStoreUrl: null as string | null,
  googlePlayUrl: null as string | null,
  generalDeepLink: null as string | null,
  supportContact: null as string | null,
  organizerFormEndpoint: null as string | null,
  socialLinks: {} as Record<string, string>,
};

export const publicBaseUrl = siteConfig.canonicalDomain ?? "http://localhost:3000";
