import { z } from "zod";
import { DNS_SERVER_HTTPS } from "./https";
import { DNS_SERVER_LOCAL } from "./local";

export const DNS_SERVER = z.discriminatedUnion("type", [
  DNS_SERVER_LOCAL,
  DNS_SERVER_HTTPS,
]);
