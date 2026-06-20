import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { MENU, TOTAL_DISHES, TOTAL_CATEGORIES } from "@/lib/menu";
import { SectionLabel } from "@/components/SectionLabel";
import { MotifDivider } from "@/components/Motif";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — North Chappathies Veg Restaurant" },
      { name: "description", content: `Over ${TOTAL_DISHES} pure-vegetarian dishes across ${TOTAL_CATEGORIES}+ categories — Indian, Chinese, Tandoori and Chaat. Live pricing on Zomato.` },
      { property: "og:title", content: "Menu — North Chappathies" },
      { property: "og:description", content: "240+ vegetarian dishes across Indian, Chinese, Tandoori, Chaat, and beverages." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [groupId, setGroupId] = useState<"food" | "beverages">("food");
  const [query, setQuery] = useState("");
  const group = MENU.find((g) => g.id === groupId)!;

  const categories = useMemo(() => {
    if (!query.trim()) return group.categories;
    const q = query.toLowerCase();
    return group.categories
      .map((c) => ({ ...c, items: c.items.filter((i) => i.name.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length > 0);
  }, [group, query]);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
          <SectionLabel number="02">The Menu</SectionLabel>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {TOTAL_DISHES}+ dishes. <span className="italic text-saffron">Zero</span> meat.
          </h1>
          <p className="mt-6 max-w-2xl text-ink-soft md:text-lg">
            Indian, Chinese, Tandoori, Chaat — plus an entire menu of milkshakes,
            lassis, juices and sodas. À la carte pricing is available in-restaurant
            and on our delivery partner — see Order Online for live pricing.
          </p>

          <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="inline-flex rounded-full border border-ink p-1">
              {MENU.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGroupId(g.id)}
                  className={`relative rounded-full px-6 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
                    groupId === g.id ? "bg-ink text-canvas" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>

            <label className="flex w-full items-center gap-3 border-b border-ink/30 pb-2 md:w-80">
              <Search size={16} className="text-ink-soft" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes..."
                className="w-full bg-transparent text-sm placeholder:text-ink-soft/70 focus:outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-16 z-30 border-b border-hairline bg-canvas/90 backdrop-blur md:top-20">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 md:px-8">
          <ul className="flex gap-6 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] whitespace-nowrap text-ink-soft">
            {categories.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="hover:text-saffron transition-colors">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        {categories.length === 0 && (
          <p className="py-20 text-center font-display text-2xl text-ink-soft">
            No dishes match "{query}". Try another search.
          </p>
        )}
        {categories.map((c, idx) => (
          <section key={c.id} id={c.id} className="scroll-mt-36 py-12 md:py-16">
            <div className="grid items-end gap-6 md:grid-cols-12">
              <div className="md:col-span-8">
                <span className="eyebrow-saffron">{String(idx + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
                  {c.name}
                </h2>
              </div>
              <p className="text-sm text-ink-soft md:col-span-4 md:text-right">{c.blurb}</p>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.items.map((i) => (
                <li
                  key={i.name}
                  className="group flex items-center gap-3 border-b border-hairline/70 py-2.5 text-ink"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-saffron/0 transition-colors group-hover:bg-saffron" />
                  <span className="text-[0.95rem]">{i.name}</span>
                </li>
              ))}
            </ul>

            <MotifDivider className="mt-14" />
          </section>
        ))}
      </div>

      {/* Floating Order CTA */}
      <a
        href={BUSINESS.orderUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-5 z-30 hidden items-center gap-2 rounded-full bg-saffron px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink shadow-xl transition-transform hover:-translate-y-0.5 md:bottom-8 md:inline-flex"
      >
        <ShoppingBag size={14} /> Order Online
      </a>
    </>
  );
}