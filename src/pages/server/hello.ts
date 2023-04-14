import type { APIRoute } from "astro";

export const get: APIRoute = () => {
	return {
		status: 200,
		body: "Hello World!",
	};
};
