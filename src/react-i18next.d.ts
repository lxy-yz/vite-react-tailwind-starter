import "react-i18next";
import type { defaultNS } from "./modules/i18n";

// FIXME:
// resource in json format used for type only
// keep it in sync with yml files
import resource from "../locales/en.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      [defaultNS]: typeof resource;
    };
  }
}
