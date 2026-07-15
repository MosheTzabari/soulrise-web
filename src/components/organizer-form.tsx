"use client";

import { FormEvent, useState } from "react";
import type { SiteContent } from "@/content/types";

export function OrganizerForm({ copy }: { copy: SiteContent["organizers"] }) {
  const [errors, setErrors] = useState<Record<string, string>>({}); const [success, setSuccess] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSuccess(false); const form = new FormData(event.currentTarget); const next: Record<string, string> = {};
    for (const key of ["fullName", "businessName", "phone", "email", "eventType", "note"]) if (!String(form.get(key) || "").trim()) next[key] = copy.required;
    const email = String(form.get("email") || ""); if (email && !/^\S+@\S+\.\S+$/.test(email)) next.email = copy.invalidEmail;
    if (form.get("privacy") !== "on") next.privacy = copy.privacy;
    setErrors(next); if (!Object.keys(next).length) setSuccess(true);
  }
  const fieldConfig: Record<string, { type?: string; autoComplete?: string; inputMode?: "email" | "tel" | "url" }> = { fullName: { autoComplete: "name" }, businessName: { autoComplete: "organization" }, phone: { type: "tel", autoComplete: "tel", inputMode: "tel" }, email: { type: "email", autoComplete: "email", inputMode: "email" }, website: { type: "url", autoComplete: "url", inputMode: "url" }, eventType: { autoComplete: "off" } };
  const field = (name: string, optional = false) => { const config = fieldConfig[name] ?? {}; const isDirectional = ["phone", "email", "website"].includes(name); return <div className="field"><label htmlFor={name}>{copy.fields[name]}{!optional && <span aria-hidden="true"> *</span>}</label><input id={name} name={name} type={config.type ?? "text"} autoComplete={config.autoComplete} inputMode={config.inputMode} dir={isDirectional ? "ltr" : undefined} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} /><p className="error" id={`${name}-error`} aria-live="polite">{errors[name] ?? "\u00a0"}</p></div>; };
  return <form className="organizer-form" onSubmit={submit} noValidate>{success && <div className="success" role="status">{copy.success}</div>}<div className="form-grid">{field("fullName")}{field("businessName")}{field("phone")}{field("email")}{field("website", true)}{field("eventType")}</div><div className="field"><label htmlFor="note">{copy.fields.note} <span aria-hidden="true">*</span></label><textarea id="note" name="note" rows={5} autoComplete="off" aria-invalid={!!errors.note} aria-describedby={errors.note ? "note-error" : undefined} /><p className="error" id="note-error" aria-live="polite">{errors.note ?? "\u00a0"}</p></div><div className="check-field"><input id="privacy" name="privacy" type="checkbox" aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} /><label htmlFor="privacy">{copy.fields.privacy}</label></div><p className="error" id="privacy-error" aria-live="polite">{errors.privacy ?? "\u00a0"}</p><button className="button" type="submit">{copy.submit}</button></form>;
}
