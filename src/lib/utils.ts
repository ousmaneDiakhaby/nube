import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine les classes CSS en gérant les conflits de Tailwind.
 * @param inputs Classes CSS à fusionner.
 * @returns Une seule chaîne de classes CSS optimisée.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};
