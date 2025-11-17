import Stars from "@/icons/stars.svg?react";

const stats = [
  { value: "100%", description: "Transparent pricing" },
  { value: "1:1", description: "Pay ratio (lowest to highest)" },
  { value: "20+", description: "Happy clients" },
  { value: "0", description: "Dark patterns used" },
];

function StatsBlock() {
  return (
    <div className="relative">
      <div className="relative bg-linear-to-br from-emerald-800 to-emerald-700 rounded-3xl p-8 shadow-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-600/20 to-emerald-500/20 rounded-3xl backdrop-blur-sm"></div>
        <div className="relative space-y-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-emerald-100">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WelcomeHero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow mb-6 bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-50">
              <Stars />
              Redefining digital excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Technology with a
              <span className="block bg-linear-to-r from-emerald-800 to-emerald-500 bg-clip-text text-transparent">
                conscience
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We build digital products that are fair to customers and ethical
              to employees. No hidden agendas, no exploitative practices—just
              honest work, honest pricing, and honest pay.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-10 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xl px-8 w-full md:w-fit">
                Start a project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5 ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-emerald-100 shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md text-xl px-8 w-full md:w-fit">
                Learn our approach
              </button>
            </div>
          </div>
          <StatsBlock />
        </div>
      </div>
    </section>
  );
}
