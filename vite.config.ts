/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import yaml from "@rollup/plugin-yaml";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    optimizeDeps: {
      include: ['react/jsx-runtime'],
    },

    plugins: [
      (await import(
        "@mdx-js/rollup"
      )).default({
        remarkPlugins: [
          (await import(
            "remark-gfm"
          )).default
        ]
        /*jsxImportSource: …, otherOptions… */
      }),

      react(),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ["tsx", "md"],
        routeStyle: "remix",
        dirs: ["src/routes"],
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        resolvers: [
          IconsResolver({
            prefix: "Icon",
            extension: "jsx",
          }),
        ],
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
            "react-i18next": ["useTranslation"],
          },
          { "usehooks-ts": ["useDarkMode"] },
          {
            "@testing-library/react": [
              "render",
              "fireEvent",
              "waitFor",
              // FIXME: type conflict with window.screen
              // "screen",
            ],
          },
          {
            "@testing-library/user-event": [["default", "userEvent"]],
          },
        ],
        dts: "src/auto-imports.d.ts",
      }),

      yaml(),

      // https://github.com/antfu/unplugin-icons
      Icons({
        compiler: "jsx",
        jsx: "react",
        autoInstall: false,
      }),
    ],

    // https://vitest.dev/config/
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/setup-tests.ts",
    },
  };
});
