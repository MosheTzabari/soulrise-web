import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
export const metadata: Metadata = { title: "Early access", description: "SoulRise release and early-access information.", alternates: { canonical: "/download" } };
export default function Page() { return <PageShell path="/download">{({ copy }) => <section className="status-page"><div className="status-card"><span className="status-icon" aria-hidden="true">01</span><p className="eyebrow">Early access</p><h1>{copy.download.title}</h1><p className="lead">{copy.download.body}</p><div className="qr-placeholder" aria-label={copy.download.note}>QR</div><p className="notice">{copy.download.note}</p><div className="button-row"><Link className="button" href="/organizers">{copy.home.access.organizer}</Link><Link className="button button-secondary" href="/">{copy.common.home}</Link></div></div></section>}</PageShell>; }
