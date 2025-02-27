import { z } from "zod";
import { DNS } from "./dns";
import { EXPERIMENTAL } from "./experimental";
import { INBOUND } from "./inbound";
import { LOG } from "./log";
import { OUTBOUND } from "./outbound";
import { ROUTE } from "./route";

export { OUTBOUND } from "./outbound";
export type { Outbound } from "./outbound";
export { PORT } from "./rule-set";

export const SINGBOX = z
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

export type Singbox = z.infer<typeof SINGBOX>;
