"use client";

import { nullable, z } from "zod";

export const permissionFormSchema = z.object({
  permissionName: z.string().min(2).max(50),
  permissions: z.record(z.array(z.enum(["View", "Edit", "Delete"]))).optional(),
});
