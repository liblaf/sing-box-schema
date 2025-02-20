import { z } from "zod";
import { DNS } from "./dns";
import { EXPERIMENTAL } from "./experimental";
import { INBOUND } from "./inbound";
import { LOG } from "./log";
import { OUTBOUND } from "./outbound";
import { ROUTE } from "./route";

export const SING_BOX = z
  .object({
    $schema: z.string(),
    log: LOG,
    dns: DNS,
    route: ROUTE,
    inbounds: z.array(INBOUND),
    outbounds: z.array(OUTBOUND),
    experimental: EXPERIMENTAL,
  })
  .partial();

export type SingBox = z.infer<typeof SING_BOX>;
