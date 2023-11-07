import "dotenv/config";
import { type Config } from "drizzle-kit";

export default {
	schema: "./src/drizzle/schema.ts",
	driver: "turso",
	dbCredentials: {
		url: process.env.DATABASE_URL ?? "",
		authToken: process.env.DATABASE_AUTH_TOKEN ?? "",
	},
} satisfies Config;