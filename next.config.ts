import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "./app/styles/variables.scss";
      @import "./app/styles/mixins.scss";
    `,
  }
};

export default nextConfig;
