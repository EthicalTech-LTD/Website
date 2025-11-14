export default function WelcomeHero() {
  return (
    <section class="pt-32 pb-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div style="opacity: 1; transform: none;">
            <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow mb-6 bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-50">
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
                class="lucide lucide-sparkles w-3 h-3 mr-1"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              Redefining Digital Excellence
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Technology with a
              <span class="block bg-linear-to-r from-emerald-800 to-emerald-500 bg-clip-text text-transparent">
                Conscience
              </span>
            </h1>
            <p class="text-xl text-slate-600 mb-8 leading-relaxed">
              We build digital products that are fair to customers and ethical
              to employees. No hidden agendas, no exploitative practices—just
              honest work, honest pricing, and honest pay.
            </p>
            <div class="flex flex-wrap gap-4">
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-10 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8">
                Start a Project
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
                  class="lucide lucide-arrow-right w-5 h-5 ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md text-lg px-8">
                Learn Our Approach
              </button>
            </div>
          </div>
          <div class="relative" style="opacity: 1; transform: none;">
            <div class="relative bg-gradient-to-br from-emerald-800 to-emerald-500 rounded-3xl p-12 shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-500/20 rounded-3xl backdrop-blur-sm"></div>
              <div class="relative space-y-6">
                <div
                  class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  style="opacity: 1; transform: none;"
                >
                  <div class="text-4xl font-bold text-white mb-2">100%</div>
                  <div class="text-emerald-100">Transparent Pricing</div>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  style="opacity: 1; transform: none;"
                >
                  <div class="text-4xl font-bold text-white mb-2">1:1</div>
                  <div class="text-emerald-100">
                    Pay Ratio (Lowest to Highest)
                  </div>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  style="opacity: 1; transform: none;"
                >
                  <div class="text-4xl font-bold text-white mb-2">50+</div>
                  <div class="text-emerald-100">Happy Clients</div>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  style="opacity: 1; transform: none;"
                >
                  <div class="text-4xl font-bold text-white mb-2">0</div>
                  <div class="text-emerald-100">Dark Patterns Used</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
