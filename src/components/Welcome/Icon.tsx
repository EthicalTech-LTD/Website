export default function Icon({ children }: any) {
  return (
    <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {children}
    </div>
  );
}
