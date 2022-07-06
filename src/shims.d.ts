interface Window {
  analytics: any;
}

declare module "*.md" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
