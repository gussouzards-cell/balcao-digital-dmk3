type ApiResponse<T> = {
  data: T;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

async function get<T>(path: string): Promise<ApiResponse<T>> {
  const res = await fetch(`${baseURL}${path}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API GET ${path} failed (${res.status}). ${text}`.trim());
  }

  const json = (await res.json()) as T;
  return { data: json };
}

export const api = { get };

