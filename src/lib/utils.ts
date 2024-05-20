import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const jumpToReleventDiv = (id: string) => {
  const releventDiv = document.getElementById(id);
  if (releventDiv === null) return;
  releventDiv.scrollIntoView({ behavior: "smooth" });
};