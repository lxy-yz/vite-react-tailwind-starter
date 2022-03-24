## File-based Routing

Routes will be auto-generated for tsx files in this dir with the same file structure.
Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

### Path Aliasing (TODO?)

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
import { isDark } from "../../../../composables";
```

now, you can use

```ts
import { isDark } from "~/composables";
```
