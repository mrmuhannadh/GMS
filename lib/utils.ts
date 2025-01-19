import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum USER_ROLES {
  SUPER_ADMINISTRATOR = "SUPER_ADMINISTRATOR",
  PLAYER = "PLAYER",
  TRAINEE = "TRAINEE"
}

export enum USER_STATUS {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  BLOCKED = "BLOCKED"
}