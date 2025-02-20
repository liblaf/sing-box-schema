import { z } from "zod";

export const OUTBOUND_DIRECT = z
  .object({ type: z.literal("direct"), tag: z.string() })
  .partial()
  .required({ type: true, tag: true });
