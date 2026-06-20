import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { TOTAL_DISHES } from "@/lib/menu";
import { SectionLabel } from "@/components/SectionLabel";
import { MotifDivider } from "@/components/Motif";
import storefront from "@/assets/storefront-night.jpg";
import dough from "@/assets/kitchen-dough.jpg";
import spices from "@/assets/spices.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — North Chappathies Veg Restaurant, Perumbakkam" },
      { name: "description", content: "A pure-vegetarian kitchen bringing Indian, Chinese, Tandoori and Chaat together in Perumbakkam — built on freshness, variety, and an unwavering vegetarian-only commitment." },
      { property: "og:title", content: "About — North Chappathies" },
      { property: "og:description", content: "240+ vegetarian dishes, four cuisines, one neighbourhood kitchen." },
      { property: "og:image", content: storefront },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  ["01", "Vegetarian, Always.", "No exceptions, no compromises. Not now, not ever."],
  ["02", "Variety Without Limits.", "Four cuisines, one table, more than 240 ways in."],
  ["03", "Fresh, Every Single Day.", "Made to order — not stockpiled, not reheated."],
  ["04", "Open to Everyone.", "Dine in, drive through, or have it sent over."],
] as const;

const STATS = [
  [`${TOTAL_DISHES}+`, "Dishes"],
  ["4", "Cuisines"],
  [`${BUSINESS.reviewCount}`, "Google Reviews"],
  [`${BUSINESS.rating}★`, "Rating"],
] as const;

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-10 md:px-8 md:pt-24">
        <SectionLabel number="01">The Story</SectionLabel>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
          A neighbourhood kitchen — <span className="italic text-saffron">entirely vegetarian</span>, on purpose.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <img
              src={storefront}
              alt="The storefront of North Chappathies, lit warmly at night"
              loading="lazy"
              className="w-full rounded-[2px] shadow-[0_30px_80px_-40px_oklch(0.235_0.022_60/0.4)]"
            />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft md:col-span-5 md:pt-6">
            <p>
              North Chappathies opened in Perumbakkam with one simple, stubborn idea:
              the food we love to share — North Indian gravies, tandoori plates,
              Indo-Chinese, the messy joy of chaat — should sit at the same table,
              cooked with the same care, and never once need a non-vegetarian
              ingredient to be brilliant.
            </p>
            <p>
              Today, that means a kitchen running four cuisines and more than {TOTAL_DISHES}
              dishes, plus a full counter of fresh juices, lassis and milkshakes.
              Every plate is made to order — never held under heat lamps, never
              microwaved back to life.
            </p>
            <p>
              We're a neighbourhood kitchen. Our regulars are families, students,
              IT folks finishing late shifts, and groups who come in for a thali
              and stay until we're closing the shutters at 11:30. We like it that way.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <SectionLabel number="02">Our Values</SectionLabel>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            Four things we refuse to compromise.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
            {VALUES.map(([n, t, d]) => (
              <div key={n} className="bg-canvas p-8 md:p-12">
                <span className="font-display text-3xl text-saffron">{n}</span>
                <h3 className="mt-5 font-display text-3xl leading-tight text-ink">{t}</h3>
                <p className="mt-3 text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionLabel number="03">By the Numbers</SectionLabel>
        <div className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {STATS.map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-6xl leading-none text-ink md:text-7xl">{v}</div>
              <div className="mt-3 text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 md:grid-cols-2">
          <img src={dough} alt="Hands kneading fresh dough" loading="lazy" className="w-full rounded-[2px]" />
          <img src={spices} alt="A palette of fresh spices" loading="lazy" className="w-full rounded-[2px]" />
        </div>
      </section>

      <section className="border-t border-hairline bg-ink text-canvas">
        <div className="mx-auto max-w-5xl px-5 py-24 text-center md:px-8 md:py-32">
          <MotifDivider className="text-saffron mb-8" />
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Taste the difference.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-canvas/70">
            The menu's long, the kitchen's open late, and there's a table waiting.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/menu" className="btn-saffron">
              See Our Menu <ArrowRight size={14} />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 rounded-full border border-canvas/60 px-6 py-[0.85rem] text-[0.78rem] font-medium uppercase tracking-[0.18em] text-canvas hover:bg-canvas hover:text-ink transition-colors"
            >
              Visit Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}