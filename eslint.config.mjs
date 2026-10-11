import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // These React Compiler rules are newer than the existing lint
      // baseline and flag intentional platform/navigation effects.
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off"
    }
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])
]);
