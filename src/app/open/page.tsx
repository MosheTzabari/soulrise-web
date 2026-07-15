import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
export const metadata: Metadata = { title: "Open the app", description: "Information about opening SoulRise.", alternates: { canonical: "/open" } };
export default function Page() { return <PageShell path="/open">{({ copy }) => <section className="status-page"><div className="status-card"><span className="status-icon" aria-hidden="true">↗</span><p className="eyebrow">{copy.common.appLink}</p><h1>{copy.open.title}</h1><p className="lead">{copy.open.body}</p><p className="notice">{copy.open.note}</p><Link className="button" href="/">{copy.common.home}</Link></div></section>}</PageShell>; }
