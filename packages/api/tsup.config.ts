import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
	bundle: false,
	clean: !watch,
	dts: true,
	entry: ["src/**/*.ts", "!src/**/*.test.*"],
	format: "esm",
	outDir: "lib",
	sourcemap: true,
}));
