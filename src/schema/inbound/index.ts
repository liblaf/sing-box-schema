import { z } from "zod";
import { INBOUND_MIXED } from "./mixed";

export const INBOUND = z.discriminatedUnion("type", [INBOUND_MIXED]);
