import { useI18n } from "@/lib/i18n";

const fontAdvent = { fontFamily: "'Advent Pro', system-ui, sans-serif" };
const fontAgdasima = { fontFamily: "'Agdasima', system-ui, sans-serif" };
const fontPlaywrite = { fontFamily: "'Playwrite CU', cursive" };

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <>
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
            <div className="rounded-r-3xl border-[3px] border-foreground bg-background p-8 md:p-12 min-h-[155px] flex flex-col md:flex-row gap-10 items-center justify-around flex-wrap">
              <a
                href="https://wa.me/5583988270861"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <svg className="h-14 w-14 text-primary" viewBox="0 0 77 78" fill="currentColor" aria-hidden>
                  <path d="M0 77.35l5.44-19.86A38.3 38.3 0 0 1 .32 38.32C.33 17.19 17.53 0 38.65 0c10.25 0 19.88 4 27.11 11.24a38.3 38.3 0 0 1 11.22 27.12c-.01 21.13-17.2 38.32-38.33 38.32a38.3 38.3 0 0 1-18.33-4.67L0 77.35Zm21.26-12.27c5.4 3.21 10.56 5.13 17.38 5.13 17.56 0 31.86-14.29 31.87-31.86C70.52 20.75 56.28 6.48 38.67 6.47 21.09 6.47 6.8 20.76 6.79 38.33c0 7.17 2.1 12.54 5.63 18.16L9.2 68.24l12.06-3.16ZM57.96 47.47c-.24-.4-.88-.64-1.84-1.12-.96-.48-5.67-2.8-6.55-3.12-.88-.32-1.51-.48-2.15.48-.64.96-2.47 3.12-3.03 3.76-.56.64-1.12.72-2.07.24-.96-.48-4.04-1.49-7.7-4.75-2.85-2.54-4.78-5.68-5.33-6.64-.56-.96-.06-1.48.42-1.95.43-.43.96-1.12 1.44-1.68.48-.56.64-.96.96-1.6.32-.64.16-1.2-.08-1.68-.24-.48-2.15-5.2-2.95-7.11-.78-1.87-1.57-1.62-2.16-1.65l-1.84-.03c-.64 0-1.68.24-2.55 1.2-.88.96-3.36 3.27-3.36 7.99 0 4.71 3.43 9.27 3.91 9.9.48.64 6.75 10.32 16.36 14.47 2.29.99 4.07 1.58 5.46 2.02 2.3.73 4.39.62 6.04.38 1.84-.27 5.67-2.32 6.47-4.55.8-2.24.8-4.16.56-4.56Z" />
                </svg>
                <span
                  className="uppercase font-bold tracking-tight text-[clamp(18px,2.4vw,36px)]"
                  style={fontAdvent}
                >
                  +55 (83) 9 8827-0861
                </span>
              </a>
              <a
                href="mailto:fabiodfilhodev@gmail.com"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <svg className="h-14 w-14 text-primary" viewBox="0 0 76 70" fill="currentColor" aria-hidden>
                  <path d="M60.09 0H15.81C11.62.01 7.6 1.67 4.64 4.64 1.67 7.6.01 11.62 0 15.81v37.96c.01 4.19 1.67 8.21 4.64 11.17 2.96 2.97 6.98 4.63 11.17 4.64h44.28c4.19-.01 8.21-1.67 11.18-4.64 2.96-2.96 4.63-6.98 4.64-11.17V15.81c-.01-4.19-1.68-8.21-4.64-11.17C68.31 1.67 64.29.01 60.09 0Zm-44.28 6.33h44.28c1.89 0 3.74.57 5.31 1.63a9.78 9.78 0 0 1 3.48 4.33L44.67 36.52a9.6 9.6 0 0 1-6.71 2.77 9.6 9.6 0 0 1-6.71-2.77L7.02 12.29a9.78 9.78 0 0 1 3.48-4.33 9.78 9.78 0 0 1 5.31-1.63Zm44.28 56.93H15.81c-2.51 0-4.93-1-6.7-2.78a9.49 9.49 0 0 1-2.78-6.71V20.56l20.45 20.43c2.97 2.96 6.99 4.62 11.18 4.62 4.19 0 8.21-1.66 11.18-4.62L69.58 20.56v33.21c0 2.51-1 4.93-2.78 6.71a9.49 9.49 0 0 1-6.7 2.78Z" />
                </svg>
                <span
                  className="uppercase font-bold tracking-tight text-[clamp(18px,2.4vw,36px)] break-all"
                  style={fontAdvent}
                >
                  fabiodfilhodev@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OBRIGADO */}
      <section className="relative py-16 overflow-hidden">
        <h2
          className="text-center text-[clamp(28px,4.5vw,51px)] leading-tight"
          style={fontPlaywrite}
        >
          {t("thanks")}
        </h2>
      </section>

      {/* FOOTER */}
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
    </>
  );
}