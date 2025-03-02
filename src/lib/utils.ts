import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatRequirementLabel = (key: string) => {
  const labels: Record<string, string> = {
    paymentScreenshot: "Payment Screenshot",
    ticketId: "Ticket ID",
    adhaarCard: "Aadhaar Card",
    studentIdCard: "Student ID Card",
  };
  return labels[key] || key; // Fallback to key if not in labels
};
