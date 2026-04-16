import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format a price amount with current symbol
// @param amount - The price amount to format
// @param currency - The currency code (default: "£")
// @returns The formatted price string (e.g., "£19.99")
export function formatPrice(
  amount: number | null | undefined,
  currency: string = "£",
): string {
  return `${currency}${(amount ?? 0).toFixed(2)}`;
}
