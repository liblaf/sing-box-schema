import { SING_BOX } from "@lib";

import { zodToJsonSchema } from "zod-to-json-schema";

const jsonSchema = zodToJsonSchema(SING_BOX);
Bun.file("schema.json").write(JSON.stringify(jsonSchema));
