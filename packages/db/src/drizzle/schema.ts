import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
	id: integer("id").primaryKey(),
	title: text("title").notNull(),
	description: text("description"),
	done: integer("done").notNull().default(0),
});

export type Todo = typeof todos.$inferSelect;
