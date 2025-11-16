export default function ContactSection() {
  return (
    <section class="py-20 px-6 bg-slate-50">
      <div class="max-w-4xl mx-auto text-center">
        <div style="opacity: 1; transform: none;">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to work with an agency that gives a damn?
          </h2>
          <p class="text-xl text-slate-600 mb-10">
            Let's build something meaningful together. No sales pressure, just
            honest conversation.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-10 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-10 w-full md:w-fit">
              Get in touch
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
                class="w-5 h-5 ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-emerald-100 hover:text-accent-foreground h-10 rounded-md text-lg px-10 w-full md:w-fit">
              View our pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
