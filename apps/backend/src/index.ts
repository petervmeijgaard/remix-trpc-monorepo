import { createServer } from "./server.js";

const server = createServer({
	dev: true,
	port: 8081,
	prefix: "/trpc",
});

void server.start();
