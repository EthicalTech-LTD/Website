import type { JSX } from "solid-js/jsx-runtime";

interface IconProps {
  children: JSX.Element;
}

export function Icon({ children }: any) {
  return (
    <div class="w-14 h-14 bg-gradient-to-br from-emerald-700 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {children}
    </div>
  );
}

export default Icon;
