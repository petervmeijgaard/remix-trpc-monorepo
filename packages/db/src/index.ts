import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./drizzle/schema.js";

console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);
console.log(`DATABASE_AUTH_TOKEN: ${process.env.DATABASE_AUTH_TOKEN}`);

const client = createClient({
	url: process.env.DATABASE_URL ?? "",
	authToken: process.env.DATABASE_AUTH_TOKEN ?? "",
});

export { type Todo, todos } from "./drizzle/schema.js";

export const db = drizzle(client, { schema });
