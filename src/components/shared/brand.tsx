import Link from "next/link";

export function Brand() {
  // Temporary text lockup. Replace with an approved asset from public/brand/logos.
  return <Link className="brand" href="/" aria-label="SoulRise home"><span>SoulRise</span><span className="brand-dot" aria-hidden="true" /></Link>;
}
