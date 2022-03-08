import { QueryClient } from "react-query";

import { qs } from "./utils";
import type { Todo } from "./types";

export const queryClient = new QueryClient();

export function createTodo(todo: Partial<Todo>): Promise<Todo> {
  return client("/api/todos", { data: todo });
}

export function getAllTodos(): Promise<Todo[]> {
  return client("/api/todos");
}

export function updateTodo(todo: Partial<Todo>) {
  return client(`/api/todos/${todo.id}`, { method: "PUT", data: todo });
}

export function getTodo(id: string): Promise<Todo> {
  return client(`/api/todos/${id}`);
}

export function deleteTodo(id: string) {
  return client(`/api/todos/${id}`, { method: "DELETE" });
}

async function client(
  endpoint: string,
  {
    data,
    params,
    ...customConfig
  }: {
    data?: Record<string, unknown>;
    params?: Record<string, unknown>;
  } & RequestInit = {}
) {
  const config: RequestInit = {
    method: data ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...(data && {
        "content-type": "application/json",
      }),
      ...customConfig.headers,
    },
    ...(data && {
      body: JSON.stringify(data),
    }),
    credentials: "same-origin",
  };

  let url = `${endpoint}`;
  if (params) {
    url += `?${qs.stringify(params)}`;
  }

  const request = new Request(url, config);
  const response = await fetch(request);

  if (response.ok) {
    const res = await response.json();
    return res.data;
  } else {
    throw new ClientError(await response.text(), request, response);
  }
}

class ClientError {
  status: number;
  req: Request;
  res: Response;

  constructor(message: string, request: Request, response: Response) {
    this.status = response.status;
    this.req = request;
    this.res = response;
  }
}
