export const qs = {
  stringify(params: Record<string, unknown>): string {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) {
        continue;
      }

      (Array.isArray(value) ? value : [value]).forEach((v: unknown) => {
        searchParams.append(key, String(v));
      });
    }

    return searchParams.toString();
  },

  parse(paramsString: string) {
    const res: Record<string, string | Array<string>> = {};
    const searchParams = new URLSearchParams(paramsString);

    for (const [key, value] of searchParams.entries()) {
      if (Array.isArray(res[key])) {
        res[key] = [...res[key], value];
      } else {
        res[key] = value;
      }
    }

    return res;
  },
};

export default function invariant(
  value: boolean,
  message?: string
): asserts value;
export default function invariant<T>(
  value: T | null | undefined,
  message?: string
): asserts value is T;

export default function invariant(value: unknown, message?: string) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message || "Invariant failed");
  }
}
