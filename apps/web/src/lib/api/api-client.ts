import type { ApiError } from "@tutoring-saas/types";
import { publicEnv } from "@/config/env";

type ApiClientOptions = {
  token?: string | null;
};

export class ApiClient {
  constructor(private readonly options: ApiClientOptions = {}) {}

  async get<TResponse>(path: string): Promise<TResponse> {
    return this.request<TResponse>(path, {
      method: "GET",
    });
  }

  async post<TBody, TResponse>(path: string, body: TBody): Promise<TResponse> {
    return this.request<TResponse>(path, {
      body: JSON.stringify(body),
      method: "POST",
    });
  }

  private async request<TResponse>(path: string, init: RequestInit): Promise<TResponse> {
    const response = await fetch(`${publicEnv.NEXT_PUBLIC_API_URL}/v1${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(this.options.token ? { Authorization: `Bearer ${this.options.token}` } : {}),
        ...init.headers,
      },
    });

    if (!response.ok) {
      const fallbackError: ApiError = {
        error: {
          code: "REQUEST_FAILED",
          message: "The request could not be completed.",
        },
      };
      const error = (await response.json().catch(() => fallbackError)) as ApiError;
      throw new Error(error.error.message);
    }

    return (await response.json()) as TResponse;
  }
}
