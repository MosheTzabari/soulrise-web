import { en } from "./en";
import { he } from "./he";
import type { Locale } from "./types";

export const content = { he, en };
export const getContent = (locale: Locale) => content[locale];
