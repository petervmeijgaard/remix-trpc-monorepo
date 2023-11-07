import type { MetaFunction } from "@remix-run/node";
import { api } from "~/utils/api";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const query = api.todo.getTodos.useQuery();

	return (
		<div>
			{query.isLoading && <div>Loading...</div>}
			{query.data && <pre>{JSON.stringify(query.data, null, 2)}</pre>}
		</div>
	);
}
