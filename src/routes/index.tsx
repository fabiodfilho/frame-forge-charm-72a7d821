import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fábio Dantas — Portfólio" },
      { name: "description", content: "Portfólio de Fábio Dantas — desenvolvimento (CODE) e Design / UX." },
      { property: "og:title", content: "Fábio Dantas — Portfólio" },
      { property: "og:description", content: "Portfólio de Fábio Dantas — desenvolvimento (CODE) e Design / UX." },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://api.builder.io/api/v1/image/assets/TEMP/99a1d5e9855cbc5954bf5bebfae1818139520730?width=582",
      },
    ],
  }),
  component: Index,
});

const LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/f7b1b81530a33d7c41d87963d8ee399701132bb4?width=129";
const PORTRAIT =
  "https://api.builder.io/api/v1/image/assets/TEMP/99a1d5e9855cbc5954bf5bebfae1818139520730?width=582";

const fontAdvent = { fontFamily: "'Advent Pro', system-ui, sans-serif" };
const fontAgdasima = { fontFamily: "'Agdasima', system-ui, sans-serif" };
const fontPlaywrite = { fontFamily: "'Playwrite CU', cursive" };

function PortfolioCard({ label }: { label: string }) {
  return (
    <div className="relative w-full max-w-[260px] aspect-[232/127] bg-foreground text-background select-none">
      <span
        className="absolute left-[6%] top-1/2 -translate-y-1/2 origin-center font-bold uppercase tracking-tight text-[clamp(18px,2.4vw,34px)]"
        style={{ ...fontAgdasima, transform: "translateY(-50%) rotate(-90deg)" }}
      >
        fábio
      </span>
      <div className="absolute inset-0 pl-[28%] pr-4 flex flex-col justify-center">
        <span
          className="font-bold uppercase leading-none tracking-tight text-[clamp(28px,4vw,49px)]"
          style={fontAgdasima}
        >
          dantas
        </span>
        <span
          className="uppercase leading-none tracking-tight text-[clamp(18px,2.4vw,32px)] mt-1"
          style={fontAdvent}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function Index() {
  const { t } = useI18n();
  return (
    <div className="overflow-x-hidden">
      {/* SOBRE */}
      <section className="relative">
        <h1
          className="px-6 max-w-7xl mx-auto pt-10 pb-6 uppercase font-bold tracking-tight text-primary leading-none text-[clamp(64px,10vw,120px)]"
          style={fontAgdasima}
        >
          {t("about.title")}
        </h1>
        <div className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-[1.6fr_1fr] items-start">
            <p
              className="uppercase text-justify leading-snug tracking-tight text-[clamp(14px,1.2vw,17px)]"
              style={fontAdvent}
            >
              <span className="block mb-3 font-extrabold text-[clamp(18px,1.7vw,23px)]">
                {t("about.welcome")}
              </span>{" "}
              {t("about.p1")}
              <br />
              <br />
              {t("about.p2")}
              <br />
              <br />
              {t("about.p3")}
              <br />
              <br />
              {t("about.p4")}
            </p>
            <div className="flex justify-center md:justify-end">
              <img
                src={PORTRAIT}
                alt="Fábio Dantas"
                className="w-full max-w-[291px] aspect-square object-cover border-4 border-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="code" className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2
          className="text-[clamp(32px,5vw,51px)] leading-tight mb-14"
          style={fontPlaywrite}
        >
          {t("portfolio.title")}
        </h2>
        <div className="flex justify-center items-center gap-10">
          <a
            href="/code"
            aria-label="Portfólio Code"
            className="group block max-w-[240px] w-full focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-sm"
          >
            <img
              src="https://i.ibb.co/N6X2hXfg/fabio-code.jpg"
              alt="Fábio Dantas — Code"
              className="w-full aspect-[232/127] object-contain mx-auto border border-foreground bg-black transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg"
            />
          </a>

          <a
            href="/design-ux"
            aria-label="Portfólio Design"
            className="group block max-w-[240px] w-full focus:outline-none focus:ring-4 focus:ring-primary/30 rounded-sm"
          >
            <img
              src="https://i.ibb.co/pjCn4gzG/fabio-design.jpg"
              alt="Fábio Dantas — Design"
              className="w-full aspect-[232/127] object-contain mx-auto border border-foreground bg-black transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg"
            />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
