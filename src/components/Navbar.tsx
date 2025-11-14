export default function Navbar() {
  return (
    <header class="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-teal-800 to-teal-500 rounded-lg flex items-center justify-center">
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
              class="lucide lucide-heart w-6 h-6 text-white"
              data-source-location="pages/Home:92:14"
              data-dynamic-content="false"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </div>
          <span
            data-source-location="pages/Home:94:12"
            data-dynamic-content="false"
            class="text-2xl font-bold brand text-[#303030]"
          >
            EthicalTech UK
          </span>
        </div>
        <nav
          data-source-location="pages/Home:98:10"
          data-dynamic-content="false"
          class="hidden md:flex items-center gap-8"
        >
          <a
            data-source-location="pages/Home:99:12"
            data-dynamic-content="false"
            href="#values"
            class="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Values
          </a>
          <a
            data-source-location="pages/Home:100:12"
            data-dynamic-content="false"
            href="#services"
            class="text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            Services
          </a>

          <button
            data-source-location="pages/Home:102:12"
            data-dynamic-content="false"
            class="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 font-medium"
          >
            Get in touch
          </button>
        </nav>
      </div>
    </header>
  );
}
