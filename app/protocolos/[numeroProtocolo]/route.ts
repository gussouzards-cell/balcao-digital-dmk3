import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ numeroProtocolo: string }> },
) {
  const baseURL = process.env.PRODAM_API_URL ?? "";
  if (!baseURL) {
    return NextResponse.json({ error: "PRODAM_API_URL não configurada" }, { status: 500 });
  }

  const { numeroProtocolo } = await ctx.params;
  const upstream = `${baseURL.replace(/\/$/, "")}/protocolos/${encodeURIComponent(numeroProtocolo)}`;

  const res = await fetch(upstream, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    return new NextResponse(text, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

