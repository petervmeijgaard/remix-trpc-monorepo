import { router } from "./trpc.js";
import { todoRouter } from "./routers/todo.js";
export { createContext, type Context } from "./context.js";

export const appRouter = router({
	todo: todoRouter,
});

export type AppRouter = typeof appRouter;
