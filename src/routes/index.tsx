import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/lib/i18n";

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

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
              Lorem ipsum dolor sit amet. Est obcaecati perferendis et voluptatem
              earum quo enim odit ut quisquam deserunt rem nulla consequatur qui
              eaque omnis. Eum quia velit et debitis sunt est delectus fuga eum
              vitae similique sit itaque tempora vel impedit temporibus aut enim
              molestiae. Qui fugiat maxime At iusto impedit et repudiandae dolor
              et voluptatum nulla non nobis tenetur. Ab error amet in enim
              corporis eos consequatur natus rem molestiae rerum ut galisum
              mollitia ea suscipit illum qui sunt excepturi?
              <br />
              <br />
              Non voluptatem consequuntur in veniam voluptatem est nulla dolor
              hic sequi rerum in minima eaque qui perspiciatis omnis in corrupti
              consectetur. In autem tempore ea dolorum iure ut impedit quae sit
              alias error ut expedita dicta qui explicabo quae cum corrupti
              mollitia. Ea minima cumque cum unde odio vel itaque nihil sed
              sequi mollitia cum repellat veritatis a sunt minus.
              <br />
              <br />
              Qui velit amet ut modi ducimus in possimus doloribus ut modi
              reiciendis et natus internos et doloribus impedit. Ut voluptas
              voluptates ad cumque quod eos tenetur fuga.
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
        
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="uppercase font-bold tracking-tight leading-none text-foreground text-[clamp(48px,7vw,78px)]"
            style={fontAgdasima}
          >
            {t("contact.title")}
          </h2>
        </div>
        <div className="relative mt-6">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[60%] bg-primary -z-10" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-r-3xl border-[3px] border-foreground bg-background p-8 md:p-12 min-h-[295px] flex flex-col md:flex-row gap-8 items-center justify-between">
              <form className="flex-1 w-full grid gap-4" style={fontAdvent}>
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  className="w-full bg-transparent border-b-2 border-foreground/40 focus:border-primary outline-none py-2 uppercase tracking-wide"
                />
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  className="w-full bg-transparent border-b-2 border-foreground/40 focus:border-primary outline-none py-2 uppercase tracking-wide"
                />
                <textarea
                  rows={3}
                  placeholder={t("contact.message")}
                  className="w-full bg-transparent border-b-2 border-foreground/40 focus:border-primary outline-none py-2 uppercase tracking-wide resize-none"
                />
                <button
                  type="button"
                  className="self-start mt-2 bg-foreground text-background px-8 py-3 uppercase tracking-widest hover:bg-primary transition-colors"
                  style={fontAgdasima}
                >
                  {t("contact.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OBRIGADO + ondas */}
      <section className="relative py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
        <br></br>
          <h2
            className="text-center text-[clamp(28px,4.5vw,51px)] leading-tight"
            style={fontPlaywrite}
          >
            {t("thanks")}
          </h2>
        <br></br>
        </div>
      </section>

      {/* FOOTER preto com logo Fábio Dantas */}
      <footer className="bg-foreground text-background py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="leading-none" style={fontAgdasima}>
            <div className="uppercase font-bold tracking-tight text-[clamp(28px,3vw,44px)]">
              fábio
            </div>
            <div className="uppercase font-bold tracking-tight text-[clamp(28px,3vw,43px)] -mt-1">
              dantas
            </div>
          </div>
          <div className="text-xs uppercase tracking-widest opacity-70" style={fontAdvent}>
            © {new Date().getFullYear()} — {t("footer.rights")}
          </div>
        </div>
      </footer>
    </div>
  );
}
