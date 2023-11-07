import ws from "@fastify/websocket";
import cors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { createContext, appRouter } from "@acme/api";

export interface ServerOptions {
	dev?: boolean;
	port?: number;
	prefix?: string;
}

export function createServer(opts: ServerOptions) {
	const dev = opts.dev ?? true;
	const port = opts.port ?? 8081;
	const prefix = opts.prefix ?? "/trpc";
	const server = fastify({ logger: dev });

	void server.register(cors, {});

	void server.register(ws);
	void server.register(fastifyTRPCPlugin, {
		prefix,
		useWSS: true,
		trpcOptions: { router: appRouter, createContext },
	});

	server.get("/", async () => {
		return { hello: "wait-on 💨" };
	});

	const stop = async () => {
		await server.close();
	};

	const start = async () => {
		try {
			await server.listen({ port });
			console.log("listening on port", port);
		} catch (err) {
			server.log.error(err);
			process.exit(1);
		}
	};

	return { server, start, stop };
}
