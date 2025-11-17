/// <reference types="astro/client" />
/// <reference types="@astrojs/react/types" />

// SVGR: allow importing SVGs as React components
declare module "*.svg?react" {
  import * as React from "react";
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}

// Fallback: standard SVG import returns a URL string
declare module "*.svg" {
  const src: string;
  export default src;
}