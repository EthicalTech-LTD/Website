const cultureCards = [
  {
    title: "Pay ratio: 1:1",
    description:
      "Our highest paid team member earns exactly the same as our lowest. True equity.",
    icon: () => {
      return (
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
          class="lucide lucide-trending-up w-6 h-6 text-emerald-200 flex-shrink-0 mt-1"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      );
    },
  },
  {
    title: "Profit sharing",
    description:
      "Success is shared equally. Every team member gets the same profit share.",
    icon: () => {
      return (
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
          class="lucide lucide-heart w-6 h-6 text-emerald-200 flex-shrink-0 mt-1"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      );
    },
  },
  {
    title: "Open book",
    description:
      "Every financial decision is transparent and accessible to the entire team.",
    icon: () => {
      return (
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
          class="lucide lucide-shield w-6 h-6 text-emerald-200 flex-shrink-0 mt-1"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      );
    },
  },
];

const testimonials = [
  {
    quote: "Their work is exceptional and their pricing is fair.",
    author: "Marcus Rivera",
    company: "Innovate Labs",
  },
  {
    quote:
      "Finally, an agency that treats us like partners, not cash cows. Their transparent pricing model is revolutionary.",
    author: "Sarah Chen",
    company: "GreenLeaf Co",
  },
];

function RenderTestimonials() {
  return (
    <div
      class="bg-white rounded-3xl p-8 shadow-2xl"
      style="opacity: 1; transform: none;"
    >
      <h3 class="text-2xl font-bold text-emerald-900 mb-6">What people say</h3>
      <div class="space-y-6">
        {testimonials.map((t) => (
          <div class="border-l-4 border-emerald-500 pl-6 py-2">
            <p class="text-emerald-900 mb-3 leading-relaxed">
              <q>{t.quote}</q>
            </p>
            <div>
              <div class="font-bold text-emerald-800">{t.author}</div>
              <div class="text-sm text-slate-500">{t.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CultureSection() {
  return (
    <section
      id="culture"
      class="py-20 px-6 bg-gradient-to-br from-emerald-800 to-emerald-500 text-white"
    >
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div style="opacity: 1; transform: none;">
            <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow mb-6 bg-white/20 text-white border-white/30 hover:bg-white/20">
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
                class="lucide lucide-zap w-3 h-3 mr-1"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
              Our culture
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              A flat structure that actually works
            </h2>
            <p class="text-xl text-emerald-50 mb-8 leading-relaxed">
              No hierarchy games. No salary secrets. Our junior developers earn
              a fair wage, and our senior developers aren't astronomically
              overpaid. Everyone knows what everyone makes, and we're proud of
              it.
            </p>
            <div class="space-y-4">
              {cultureCards.map((c) => (
                <div class="flex items-start gap-4 bg-emerald-700 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  {c.icon && c.icon()}
                  <div>
                    <h4 class="font-bold mb-1">{c.title}</h4>
                    <p class="text-emerald-100">
                      Our highest paid team member earns exactly the same as our
                      lowest. True equity.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <RenderTestimonials />
        </div>
      </div>
    </section>
  );
}
