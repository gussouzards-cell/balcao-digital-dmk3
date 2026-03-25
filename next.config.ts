import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
  // Evita o Turbopack usar outro lockfile (ex.: C:\Users\<user>\package-lock.json) como raiz — causa “Panic in async function” no dev.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return [
      {
        source: "/inicio/renovacao/atendimento/:protocolo/aprovacao",
        destination: "/inicio/renovacao/atendimento/:protocolo/conclusao",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
