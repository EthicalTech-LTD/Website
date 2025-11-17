import Stars from "@/icons/stars.svg?react";
import { Icon } from "./Icon";

const Tick = () => (
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
    className="w-5 h-5 text-emerald-500"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
    <path d="m9 11 3 3L22 4"></path>
  </svg>
);

const cards = [
  {
    title: "Web development",
    description:
      "Beautiful, accessible websites built with modern standards and ethical design principles.",
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
            className="w-8 h-8 text-white"
          >
            <path d="m18 16 4-4-4-4"></path>
            <path d="m6 8-4 4 4 4"></path>
            <path d="m14.5 4-5 16"></path>
          </svg>
        </Icon>
      );
    },
    bullets: ["Responsive design", "Optimised performance", "WCAG compliant"],
  },
  {
    title: "Digital strategy",
    description:
      "Honest consulting that prioritizes your real needs over upselling unnecessary features.",
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
            className="w-8 h-8 text-white"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path>
          </svg>
        </Icon>
      );
    },
    bullets: ["Business analysis", "Tech stack selection", "Growth planning"],
  },
  {
    title: "Product design",
    description:
      "User-centered design that respects privacy and creates genuine value for your customers.",
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
            className="w-8 h-8 text-white"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        </Icon>
      );
    },
    bullets: ["UX Research", "UI Design", "Prototyping"],
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow hover:bg-primary/80 mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
            <Stars />
            What we do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services that serve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert digital services delivered with transparency, integrity, and
            care.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => {
            return (
              <div key={c.title}>
                <div className="rounded-xl text-card-foreground shadow h-full border-2 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl group bg-white">
                  <div className="p-8">
                    {c.icon && c.icon()}
                    <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
                    <p className="text-emerald-900 mb-6 leading-relaxed">
                      {c.description}
                    </p>
                    <div className="space-y-2">
                      {c.bullets.map((b) => (
                        <div key={`${c.title}-${b}`} className="flex items-center gap-2 text-emerald-800">
                          <Tick />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
