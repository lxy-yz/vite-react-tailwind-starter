/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({ routeStyle: "remix", dirs: ["src/routes"] }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "react-router-dom",
        {
          react: [
            "useState",
            "useCallback",
            "useMemo",
            "useEffect",
            "useRef",
            "useContext",
            "useReducer",
            "createContext",
          ],
        },
        {
          "@testing-library/react": [
            "render",
            "fireEvent",
            "waitFor",
            //FIXME: type conflict with window.screen
            // "screen",
          ],
        },
        {
          "@testing-library/user-event": [["default", "userEvent"]],
        },
      ],

      dts: "src/auto-imports.d.ts",
    }),
  ],

  // https://vitest.dev/config/
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setup-tests.ts",
  },
});
