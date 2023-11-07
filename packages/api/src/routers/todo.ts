import { publicProcedure, router } from "../trpc.js";

export const todoRouter = router({
	getTodos: publicProcedure.query(async ({ ctx }) => {
		return ctx.db.query.todos.findMany();
	}),
});
