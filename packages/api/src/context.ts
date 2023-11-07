import { inferAsyncReturnType } from "@trpc/server";
import { db } from "@acme/db";

type CreateContextOptions = {};

export const createContext = (opts: CreateContextOptions) => ({
	...opts,
	db,
});

export type Context = inferAsyncReturnType<typeof createContext>;
