/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import yaml from "@rollup/plugin-yaml";

import Frontmatter from "front-matter";
import MarkdownIt from "markdown-it";
import prism from "markdown-it-prism";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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

    // https://github.com/hmsk/vite-plugin-markdown/blob/main/src/index.ts
    {
      name: "vite-plugin-markdown",
      enforce: "pre",
      transform(code, id) {
        if (!id.endsWith(".md")) return null;

        const contents = [];
        const { attributes, body } = Frontmatter<unknown>(code);
        contents.push(`const attributes = ${JSON.stringify(attributes)}`);
        contents.push("export { attributes }");

        const md = MarkdownIt({ html: true, xhtmlOut: true });
        md.use(prism);

        const html = md.render(body);
        const element = `
          React.createElement('main', {
            className: 'prose prose-sm m-auto text-left',
            dangerouslySetInnerHTML: { __html: ${JSON.stringify(html)} }
          })
        `;
        contents.push(`import React from "react"`);
        contents.push(`const ReactComponent = () => ${element}`);
        contents.push("export default ReactComponent");

        return {
          code: contents.join("\n"),
        };
      },
    },

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
});
