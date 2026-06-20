import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Instagram } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { INSTAGRAM_URL } from "@/lib/business";
import storefront from "@/assets/storefront-night.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import pbm from "@/assets/dish-paneer-butter-masala.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import chaat from "@/assets/dish-chaat.jpg";
import gobi from "@/assets/dish-gobi65.jpg";
import roll from "@/assets/dish-roll.jpg";
import naan from "@/assets/dish-naan.jpg";
import lassi from "@/assets/dish-lassi.jpg";
import dough from "@/assets/kitchen-dough.jpg";
import spices from "@/assets/spices.jpg";

type Tile = { src: string; alt: string; span?: string };

const TILES: Tile[] = [
  { src: storefront, alt: "Storefront at night", span: "md:col-span-2 md:row-span-2" },
  { src: paneerTikka, alt: "Paneer Tikka" },
  { src: biryani, alt: "Veg Biryani" },
  { src: chaat, alt: "Pani Puri" },
  { src: pbm, alt: "Paneer Butter Masala", span: "md:row-span-2" },
  { src: naan, alt: "Butter Naan basket" },
  { src: gobi, alt: "Gobi 65" },
  { src: roll, alt: "Paneer Roll" },
  { src: dough, alt: "Fresh dough being kneaded", span: "md:col-span-2" },
  { src: lassi, alt: "Mango Lassi" },
  { src: spices, alt: "Fresh spices" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — North Chappathies" },
      { name: "description", content: "A glimpse of the kitchen, the counter, and everything in between at North Chappathies, Perumbakkam." },
      { property: "og:title", content: "Gallery — North Chappathies" },
      { property: "og:description", content: "Inside the kitchen and onto the plate." },
      { property: "og:image", content: storefront },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<Tile | null>(null);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-10 md:px-8 md:pt-24">
        <SectionLabel number="04">Gallery</SectionLabel>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
          A glimpse of the kitchen, the counter, and <span className="italic text-saffron">everything in between.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {TILES.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(t)}
              className={`group relative overflow-hidden bg-muted ${t.span ?? ""}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
            </button>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
            Follow more on Instagram.
          </h2>
          <p className="mt-4 text-ink-soft">New plates, new specials, behind-the-counter moments.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-primary mt-8">
            <Instagram size={14} /> Follow Us
          </a>
        </div>
      </section>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-5 backdrop-blur-sm"
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-canvas text-ink"
          >
            <X size={18} />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[88vh] max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
}