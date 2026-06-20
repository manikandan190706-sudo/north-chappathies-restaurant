import { createFileRoute } from "@tanstack/react-router";
import { Star, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SectionLabel } from "@/components/SectionLabel";
import { MotifDivider } from "@/components/Motif";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — North Chappathies Veg Restaurant" },
      { name: "description", content: `${BUSINESS.rating} stars across ${BUSINESS.reviewCount} Google reviews. Read what guests are saying about North Chappathies in Perumbakkam, Chennai.` },
      { property: "og:title", content: "Reviews — North Chappathies" },
      { property: "og:description", content: `${BUSINESS.rating}★ · ${BUSINESS.reviewCount} Google reviews.` },
    ],
  }),
  component: ReviewsPage,
});

const PLACEHOLDERS = Array.from({ length: 6 });

function ReviewsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-16 md:px-8 md:pt-24">
        <SectionLabel number="05">Customer Voices</SectionLabel>
        <div className="mt-8 grid items-end gap-10 md:grid-cols-12">
          <h1 className="font-display text-5xl leading-[1.02] text-ink md:col-span-7 md:text-7xl">
            What guests are <span className="italic text-saffron">saying.</span>
          </h1>
          <div className="md:col-span-5">
            <div className="flex items-center gap-6 border-l border-saffron pl-6">
              <div className="font-display text-7xl leading-none text-ink">
                {BUSINESS.rating}
                <span className="text-saffron">★</span>
              </div>
              <div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.round(BUSINESS.rating) ? "fill-saffron text-saffron" : "text-ink/20"}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-ink-soft">
                  Based on {BUSINESS.reviewCount} Google reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            {PLACEHOLDERS.map((_, i) => (
              <figure key={i} className="border border-hairline bg-card p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((__, j) => (
                      <Star key={j} size={12} className="fill-saffron text-saffron" />
                    ))}
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-soft">
                    Google Review
                  </span>
                </div>
                <span className="mt-6 block font-display text-6xl leading-none text-saffron">“</span>
                <blockquote className="-mt-4 font-display text-2xl leading-snug text-ink">
                  [REVIEW PLACEHOLDER — replace with verified Google review text]
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between text-sm text-ink-soft">
                  <span>— Guest name</span>
                  <span>Verified</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-ink text-canvas">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-28">
          <MotifDivider className="text-saffron mb-8" />
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Eaten with us recently?
          </h2>
          <p className="mt-4 text-canvas/70">
            Reviews from real guests are the kindest thing you can leave behind.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className="btn-saffron">
              Leave Us a Review <ExternalLink size={14} />
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-canvas/60 px-6 py-[0.85rem] text-[0.78rem] font-medium uppercase tracking-[0.18em] text-canvas hover:bg-canvas hover:text-ink transition-colors"
            >
              Read All on Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}