import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Star, ArrowRight, Utensils, Truck, Bike, ShoppingBag, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { TOTAL_DISHES } from "@/lib/menu";
import { MotifDivider } from "@/components/Motif";
import { SectionLabel } from "@/components/SectionLabel";
import { InstagramStrip } from "@/components/InstagramStrip";
import heroSpread from "@/assets/hero-spread.jpg";
import storefront from "@/assets/storefront-night.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import pbm from "@/assets/dish-paneer-butter-masala.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import chaat from "@/assets/dish-chaat.jpg";
import gobi from "@/assets/dish-gobi65.jpg";
import roll from "@/assets/dish-roll.jpg";
import spices from "@/assets/spices.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "North Chappathies — Pure Veg Restaurant in Perumbakkam, Chennai" },
      {
        name: "description",
        content:
          "Indian, Chinese, Tandoori and Chaat — 240+ dishes, entirely vegetarian. Dine in, drive through, or order online in Perumbakkam, Chennai.",
      },
      { property: "og:title", content: "North Chappathies — Pure Veg Restaurant" },
      { property: "og:description", content: "Four cuisines, one entirely vegetarian table. Perumbakkam, Chennai." },
      { property: "og:image", content: heroSpread },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StoryTeaser />
      <SignatureDishes />
      <WhyUs />
      <VoicesPreview />
      <InstagramStrip />
      <VisitTeaser />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${-y * 4}deg`);
      el.style.setProperty("--ry", `${x * 6}deg`);
      el.style.setProperty("--tx", `${x * 14}px`);
      el.style.setProperty("--ty", `${y * 14}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-10 pb-20 md:grid-cols-12 md:gap-8 md:px-8 md:pt-16">
        <div className="md:col-span-6 md:pr-6">
          <p className="eyebrow-saffron reveal">
            Pure Vegetarian Kitchen · Perumbakkam, Chennai
          </p>
          <h1 className="reveal mt-6 font-display text-[2.6rem] leading-[0.98] text-ink sm:text-6xl md:text-[5.5rem]" style={{ animationDelay: "80ms" }}>
            Four cuisines.
            <br />
            <span className="italic text-saffron">One vegetarian</span>
            <br />
            table.
          </h1>
          <p className="reveal mt-7 max-w-md text-base leading-relaxed text-ink-soft md:text-lg" style={{ animationDelay: "180ms" }}>
            Indian, Chinese, Tandoori and Chaat — over {TOTAL_DISHES} dishes,
            cooked fresh every day, served in the neighbourhood we call home.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "260ms" }}>
            <a href={BUSINESS.orderUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Order Online <ArrowRight size={14} />
            </a>
            <Link to="/menu" className="btn-ghost">
              Explore the Menu
            </Link>
          </div>
        </div>

        <div ref={ref} className="relative md:col-span-6" style={{ perspective: "1400px" }}>
          <div
            className="relative aspect-[5/6] w-full overflow-hidden rounded-[2px] shadow-[0_30px_80px_-40px_oklch(0.235_0.022_60/0.35)]"
            style={{
              transform:
                "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translate3d(var(--tx,0), var(--ty,0), 0)",
              transition: "transform 400ms cubic-bezier(.2,.7,.2,1)",
            }}
          >
            <img
              src={heroSpread}
              alt="An overhead spread of vegetarian Indian dishes"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/15 via-transparent to-transparent" />
          </div>

          {/* floating tiles */}
          <div className="absolute -left-6 top-10 hidden h-28 w-28 overflow-hidden rounded-full border-4 border-canvas shadow-xl float-soft md:block">
            <img src={paneerTikka} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-4 bottom-10 hidden h-32 w-32 overflow-hidden rounded-full border-4 border-canvas shadow-xl float-soft md:block" style={{ animationDelay: "1.5s" }}>
            <img src={biryani} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-soft md:flex">
        <span className="eyebrow text-[0.6rem]">Scroll</span>
        <ChevronDown size={16} className="scroll-cue-dot" />
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-hairline bg-canvas/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-5 px-5 py-8 md:grid-cols-4 md:px-8 md:py-6">
        <div className="flex items-center gap-3">
          <Star size={18} className="fill-saffron text-saffron" />
          <div className="leading-tight">
            <div className="font-display text-xl text-ink">{BUSINESS.rating}★</div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
              {BUSINESS.reviewCount} Google reviews
            </div>
          </div>
        </div>
        <TrustItem icon={<Utensils size={16} />} label="Dine-in" />
        <TrustItem icon={<Truck size={16} />} label="Drive-through" />
        <TrustItem icon={<Bike size={16} />} label="No-contact Delivery" />
      </div>
    </section>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-ink/80">
      <span className="text-saffron">{icon}</span>
      <span className="text-[0.78rem] uppercase tracking-[0.18em]">{label}</span>
    </div>
  );
}

function StoryTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <div className="relative md:col-span-6">
          <img
            src={storefront}
            alt="North Chappathies storefront at night, warm signage glow"
            loading="lazy"
            className="w-full rounded-[2px] object-cover shadow-[0_30px_80px_-40px_oklch(0.235_0.022_60/0.4)]"
          />
          <img
            src={spices}
            alt=""
            loading="lazy"
            className="absolute -bottom-10 -right-6 hidden h-40 w-40 rounded-[2px] border-4 border-canvas object-cover shadow-xl md:block"
          />
        </div>
        <div className="md:col-span-6 md:pl-8">
          <SectionLabel number="01">The Story</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
            A neighbourhood kitchen, entirely vegetarian — and proud of it.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            North Chappathies began with a simple idea: a place in Perumbakkam where
            North Indian, Indo-Chinese, tandoori and chaat can sit at the same
            table — without a single non-vegetarian ingredient on the menu. Today,
            it's a daily ritual for the families and friends who call this stretch of
            Nookampalayam Road home.
          </p>
          <Link to="/about" className="btn-ghost mt-8">
            Read Our Story <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const SIGNATURE = [
  { img: paneerTikka, name: "Paneer Tikka", note: "Yoghurt-marinated, tandoor-charred, finished with lime." },
  { img: pbm, name: "Paneer Butter Masala", note: "Tomato, cashew, butter — slow-cooked to a glossy red." },
  { img: biryani, name: "Veg Biryani", note: "Long-grain basmati, whole spice, crisp fried onion." },
  { img: gobi, name: "Gobi 65", note: "Cauliflower, curry leaves, chili — Chennai-style crunch." },
  { img: chaat, name: "Pani Puri", note: "Crisp puri, tamarind water, mint — five seconds of joy." },
  { img: roll, name: "Paneer Roll", note: "Tandoori paneer, onions, mint chutney, wrapped warm." },
];

function SignatureDishes() {
  return (
    <section className="bg-canvas border-t border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <SectionLabel number="02">Signature Dishes</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              A first look at the table.
            </h2>
          </div>
          <p className="text-sm text-ink-soft md:col-span-4 md:text-right">
            Six from a menu of more than {TOTAL_DISHES} — the dishes our regulars
            return for, week after week.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURE.map((d) => (
            <article key={d.name} className="group">
              <div className="overflow-hidden bg-muted">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-ink">{d.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{d.note}</p>
                </div>
                <span className="mt-1 h-px w-6 shrink-0 bg-saffron transition-all duration-300 group-hover:w-10" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/menu" className="btn-primary">
            See the Full Menu <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  { n: "01", t: "100% Vegetarian Kitchen", d: "No exceptions. No cross-contact. Ever." },
  { n: "02", t: "Four Cuisines, One Address", d: "Indian, Chinese, Tandoori and Chaat — together." },
  { n: "03", t: "Fresh, Made-to-Order", d: "Cooked when you order, not held under heat lamps." },
  { n: "04", t: "Dine-in, Drive-thru, Delivered", d: "However you want it, however quickly you need it." },
];

function WhyUs() {
  return (
    <section className="border-t border-hairline bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionLabel number="03">Why North Chappathies</SectionLabel>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-ink md:text-6xl">
          Built around four things we refuse to compromise.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.n} className="bg-canvas p-7 md:p-9 transition-colors hover:bg-secondary/60">
              <span className="font-display text-3xl text-saffron">{p.n}</span>
              <h3 className="mt-6 font-display text-2xl leading-tight text-ink">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VoicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionLabel number="04">Customer Voices</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink md:text-5xl">
            What guests keep coming back for.
          </h2>
          <Link to="/reviews" className="btn-ghost mt-8">
            Read More Reviews <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-8 md:col-span-8 md:grid-cols-2">
          {[
            "A real find in Perumbakkam — the Paneer Butter Masala and butter naan are unbelievably good for the price.",
            "Vegetarian variety I haven't seen anywhere else nearby. The biryani is genuinely special.",
            "Friendly service, quick delivery, and the food tastes home-made in the best way.",
          ].map((q, i) => (
            <figure key={i} className="border-l border-saffron pl-6">
              <span className="font-display text-5xl leading-none text-saffron">“</span>
              <blockquote className="mt-2 font-display text-xl leading-snug text-ink">
                {q}
              </blockquote>
              <figcaption className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft">
                Google Review · Verified
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitTeaser() {
  return (
    <section className="border-t border-hairline bg-ink text-canvas">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-7">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-saffron">
            Find Us
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] md:text-6xl">
            Open daily, 11 AM to 11:30 PM — pull up, walk in, or have it sent over.
          </h2>
          <p className="mt-6 max-w-xl text-canvas/70">
            {BUSINESS.address}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className="btn-saffron">
              Get Directions
            </a>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-canvas/60 px-6 py-[0.85rem] text-[0.78rem] font-medium uppercase tracking-[0.18em] text-canvas transition-colors hover:bg-canvas hover:text-ink"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <MotifDivider className="text-saffron/80 mb-6" />
          <dl className="space-y-5 text-sm">
            {[
              ["Hours", "Open daily · 11:00 AM – 11:30 PM"],
              ["Price", BUSINESS.priceRange],
              ["Service", BUSINESS.services.join(" · ")],
              ["Order", "Zomato"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-4 border-b border-canvas/15 pb-4">
                <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-saffron">{k}</dt>
                <dd className="col-span-2 text-canvas/85">{v}</dd>
              </div>
            ))}
          </dl>
          <a href={BUSINESS.orderUrl} target="_blank" rel="noreferrer" className="btn-saffron mt-8 w-full">
            <ShoppingBag size={14} /> Order on Zomato
          </a>
        </div>
      </div>
    </section>
  );
}