import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
export const metadata: Metadata = { title: "Privacy policy — temporary", robots: { index: false, follow: true }, alternates: { canonical: "/privacy" } };
export default function Page() { return <LegalPage kind="privacy" />; }
