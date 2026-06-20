import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Star } from "lucide-react";
import { BUSINESS, INSTAGRAM_URL } from "@/lib/business";
import { MotifDivider } from "./Motif";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-hairline bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <MotifDivider className="mb-12" />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow-saffron">Pure Vegetarian Kitchen</p>
            <h3 className="mt-3 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
              North Chappathies
            </h3>
            <p className="mt-4 max-w-md text-sm text-ink-soft">
              Four cuisines, one entirely vegetarian table. Made fresh, every day,
              in Perumbakkam.
            </p>
            <a
              href={BUSINESS.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-7"
            >
              Order on Zomato
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/", "Home"],
                ["/menu", "Menu"],
                ["/about", "About"],
                ["/gallery", "Gallery"],
                ["/reviews", "Reviews"],
                ["/visit", "Visit Us"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-ink/80 hover:text-saffron transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Visit</p>
            <address className="not-italic text-sm leading-relaxed text-ink/80">
              {BUSINESS.address}
            </address>
            <p className="mt-3 flex items-center gap-2 text-sm">
              <Phone size={14} className="text-saffron" />
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-ink hover:text-saffron">
                {BUSINESS.phone}
              </a>
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-ink/80">
              <MapPin size={14} className="text-saffron" />
              {BUSINESS.hours}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-ink/80">
              <Star size={14} className="text-saffron fill-saffron" />
              {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-ink/80 hover:text-saffron"
            >
              <Instagram size={16} /> Follow on Instagram
            </a>
          </div>
        </div>

        <div className="hairline mt-14 mb-6" />
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-ink-soft md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} North Chappathies Veg Restaurant.</p>
          <p>{BUSINESS.tagline}</p>
        </div>
      </div>
    </footer>
  );
}