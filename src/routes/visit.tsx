import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Utensils, Truck, Bike, ShoppingBag, Instagram } from "lucide-react";
import { BUSINESS, INSTAGRAM_URL } from "@/lib/business";
import { SectionLabel } from "@/components/SectionLabel";
import storefront from "@/assets/storefront-night.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — North Chappathies, Perumbakkam, Chennai" },
      { name: "description", content: `${BUSINESS.address}. Open daily 11 AM – 11:30 PM. Dine-in, drive-through, no-contact delivery, or order online on Zomato.` },
      { property: "og:title", content: "Visit North Chappathies" },
      { property: "og:description", content: "Open daily, 11 AM – 11:30 PM. Perumbakkam, Chennai." },
      { property: "og:image", content: storefront },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-12 md:px-8 md:pt-24">
        <SectionLabel number="06">Visit Us</SectionLabel>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
          Come for a thali. <span className="italic text-saffron">Stay until close.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Info panel */}
          <div className="border border-hairline bg-card p-8 md:col-span-5 md:p-10">
            <p className="eyebrow-saffron">The Restaurant</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink">{BUSINESS.fullName}</h2>

            <dl className="mt-8 space-y-6">
              <InfoRow icon={<MapPin size={16} />} label="Address">
                {BUSINESS.address}
              </InfoRow>
              <InfoRow icon={<Phone size={16} />} label="Phone">
                <a href={`tel:${BUSINESS.phoneTel}`} className="text-ink hover:text-saffron">
                  {BUSINESS.phone}
                </a>
              </InfoRow>
              <InfoRow icon={<Clock size={16} />} label="Hours">
                Open daily · 11:00 AM – 11:30 PM
              </InfoRow>
              <InfoRow icon={<ShoppingBag size={16} />} label="Price">
                {BUSINESS.priceRange}
              </InfoRow>
            </dl>

            <div className="mt-8 grid grid-cols-2 gap-2 border-t border-hairline pt-6">
              <ServiceTag icon={<Utensils size={14} />}>Dine-in</ServiceTag>
              <ServiceTag icon={<Truck size={14} />}>Drive-through</ServiceTag>
              <ServiceTag icon={<Bike size={14} />}>No-contact Delivery</ServiceTag>
              <ServiceTag icon={<ShoppingBag size={14} />}>Order Online</ServiceTag>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Get Directions
              </a>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-ghost">
                Call Now
              </a>
              <a href={BUSINESS.orderUrl} target="_blank" rel="noreferrer" className="btn-saffron">
                Order on Zomato
              </a>
            </div>

            <p className="mt-8 text-sm text-ink-soft">
              Questions about a large order or event? Call us directly — we're happy to help.
            </p>
          </div>

          {/* Map + storefront */}
          <div className="space-y-6 md:col-span-7">
            <div className="aspect-[4/3] w-full overflow-hidden border border-hairline">
              <iframe
                title="Map to North Chappathies"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
            <div className="relative overflow-hidden">
              <img
                src={storefront}
                alt="North Chappathies storefront at night"
                loading="lazy"
                className="w-full"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-canvas/95 px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-ink">
                Look for this sign
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow-saffron">Stay Close</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
                Follow along on Instagram.
              </h2>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-ghost">
              <Instagram size={14} /> Follow
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <span className="mt-1 text-saffron">{icon}</span>
      <div>
        <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-ink-soft">{label}</dt>
        <dd className="mt-1 text-[0.95rem] leading-relaxed text-ink">{children}</dd>
      </div>
    </div>
  );
}

function ServiceTag({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-hairline px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink/80">
      <span className="text-saffron">{icon}</span>
      {children}
    </div>
  );
}