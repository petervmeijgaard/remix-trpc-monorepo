import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@acme/api";
import superjson from "superjson";
import { httpBatchLink } from "@trpc/client";
import { PropsWithChildren } from "react";
import { queryClient } from "~/client/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export const api = createTRPCReact<AppRouter>();

export const trpcClient = api.createClient({
	transformer: superjson,
	links: [
		httpBatchLink({
			url: "http://localhost:8081/trpc",
			headers: () => ({
				"x-trpc-source": "react",
			}),
		}),
	],
});

export const TRPCProvider = ({ children }: PropsWithChildren) => {
	return (
		<api.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</api.Provider>
	);
};
