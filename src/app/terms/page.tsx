import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
export const metadata: Metadata = { title: "Terms of use — temporary", robots: { index: false, follow: true }, alternates: { canonical: "/terms" } };
export default function Page() { return <LegalPage kind="terms" />; }
