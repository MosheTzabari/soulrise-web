import type { MetadataRoute } from "next";
import { publicBaseUrl } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/organizers", "/privacy", "/terms", "/support", "/open", "/download"].map(path => ({ url: `${publicBaseUrl}${path}`, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 })); }
