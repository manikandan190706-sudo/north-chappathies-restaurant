import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/business";
import { SectionLabel } from "./SectionLabel";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import naan from "@/assets/dish-naan.jpg";
import gobi from "@/assets/dish-gobi65.jpg";
import chaat from "@/assets/dish-chaat.jpg";
import lassi from "@/assets/dish-lassi.jpg";

const TILES = [paneerTikka, biryani, naan, gobi, chaat, lassi];

export function InstagramStrip() {
  return (
    <section className="border-t border-hairline bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel number="—">From the Kitchen</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              See it before you taste it.
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <Instagram size={14} /> Follow on Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3">
          {TILES.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-muted"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
              <Instagram
                size={20}
                className="absolute inset-0 m-auto text-canvas opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}