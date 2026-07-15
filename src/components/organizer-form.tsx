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
  const field = (name: string, type = "text", optional = false) => <div className="field"><label htmlFor={name}>{copy.fields[name]}{!optional && <span aria-hidden="true"> *</span>}</label><input id={name} name={name} type={type} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} />{errors[name] && <p className="error" id={`${name}-error`}>{errors[name]}</p>}</div>;
  return <form className="organizer-form" onSubmit={submit} noValidate>{success && <div className="success" role="status">{copy.success}</div>}<div className="form-grid">{field("fullName")}{field("businessName")}{field("phone", "tel")}{field("email", "email")}{field("website", "url", true)}{field("eventType")}</div><div className="field"><label htmlFor="note">{copy.fields.note} <span aria-hidden="true">*</span></label><textarea id="note" name="note" rows={5} aria-invalid={!!errors.note} aria-describedby={errors.note ? "note-error" : undefined} />{errors.note && <p className="error" id="note-error">{errors.note}</p>}</div><div className="check-field"><input id="privacy" name="privacy" type="checkbox" aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} /><label htmlFor="privacy">{copy.fields.privacy}</label></div>{errors.privacy && <p className="error" id="privacy-error">{errors.privacy}</p>}<button className="button" type="submit">{copy.submit}</button></form>;
}
