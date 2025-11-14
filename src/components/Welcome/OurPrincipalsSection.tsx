import Icon from "./Icon";

const values = [
  {
    title: "Transparent pricing",
    description:
      "No hidden fees, no surprises. Every client sees exactly what they're paying for and why.",
    icon: () => {
      return (
        <Icon>
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
            class="lucide lucide-dollar-sign w-7 h-7 text-white"
          >
            <line x1="12" x2="12" y1="2" y2="22"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </Icon>
      );
    },
  },
  {
    title: "Fair pay scheme",
    description:
      "Everyone from junior to senior earns equitably. We believe in sharing success, not hoarding it.",
    icon: () => {
      return (
        <Icon>
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
            class="w-7 h-7 text-white"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </Icon>
      );
    },
  },
  {
    title: "People first",
    description:
      "Technology serves humans, not the other way around. We build with empathy and purpose.",
    icon: () => {
      return (
        <Icon>
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
            class="w-7 h-7 text-white"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </Icon>
      );
    },
  },
  {
    title: "Ethical standards",
    description:
      "We say no to dark patterns, data exploitation, and profit-over-people practices.",
    icon: () => {
      return (
        <Icon>
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
            class="w-7 h-7 text-white"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          </svg>
        </Icon>
      );
    },
  },
];

function RenderValueCard({ title, description, icon }) {
  return (
    <div style="opacity: 1; transform: none;">
      <div class="rounded-xl bg-card text-card-foreground shadow h-full border-2 border-emerald-800 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg group">
        <div class="p-6">
          {icon()}
          <h3 class="text-xl font-bold mb-3">{title}</h3>
          <p class="text-slate-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function OurPrincipalsSection() {
  return (
    <section id="values" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
            Our principles
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Built on ethics, not exploitation
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            These aren't just values on a wall. They're commitments we live by
            every single day.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => RenderValueCard(value))}
        </div>
      </div>
    </section>
  );
}
