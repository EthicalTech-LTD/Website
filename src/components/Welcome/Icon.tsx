export function Icon({ children }: any) {
  return (
    <div className="w-14 h-14 bg-linear-to-br from-emerald-700 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {children}
    </div>
  );
}

export default Icon;
