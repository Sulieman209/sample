import { z } from "zod";

export const requiredString = z.string().trim().min(1);

export function invariant(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export function toIsoDate(value: Date): string {
  return value.toISOString();
}
