import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/code")({
  head: () => ({
    meta: [
      { title: "CODE — Fábio Dantas" },
      { name: "description", content: "Projetos de desenvolvimento de Fábio Dantas." },
      { property: "og:title", content: "CODE — Projetos de Fábio Dantas" },
      { property: "og:description", content: "Galeria de projetos de desenvolvimento de Fábio Dantas." },
    ],
  }),
  component: CodePage,
});

const fontAdvent = { fontFamily: "'Advent Pro', system-ui, sans-serif" };
const fontAgdasima = { fontFamily: "'Agdasima', system-ui, sans-serif" };
const fontPlaywrite = { fontFamily: "'Playwrite CU', cursive" };

const BANNER_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/bec25a0bfe491fdab4bf039e2fbc1e5c0b91f640?width=539";
const PROJECT_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/f5482c4c72c3f52a3eba410aca88d9277b419d8e?width=2202";

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="w-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-[155/68] object-cover border-4 border-foreground"
      />
      <div className="mt-4 flex items-start justify-between gap-6">
        <p
          className="uppercase text-justify leading-snug tracking-tight text-[clamp(13px,1.1vw,17px)] flex-1"
          style={fontAdvent}
        >
          <span
            className="font-extrabold text-[clamp(18px,1.6vw,23px)] mr-2"
            style={fontAdvent}
          >
            {project.title}
          </span>
          {project.description}
        </p>
        <a
          href={project.github ?? "#"}
          target="_blank"
          rel="noreferrer"
          aria-label={`GitHub ${project.title}`}
          className="shrink-0 inline-flex h-[46px] w-[46px] items-center justify-center rounded-md bg-foreground text-background hover:bg-primary transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function CodePage() {
  const { t } = useI18n();

  const projects: Project[] = [
    { title: "IECCM", description: t("project.ieccm.desc"), image: PROJECT_IMG },
    { title: "IECCM", description: t("project.ieccm.desc"), image: PROJECT_IMG },
    { title: "IECCM", description: t("project.ieccm.desc"), image: PROJECT_IMG },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO faixa em gradiente azul */}
      <section
        className="w-full"
        style={{
          background:
            "linear-gradient(270deg, #008CB5 -16.58%, #010043 29.06%, #275DAB 49.42%, #184B95 74.71%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between gap-6 flex-wrap">
          <img
            src={BANNER_IMG}
            alt=""
            className="w-[clamp(160px,22vw,270px)] h-auto"
          />
          <h1
            className="text-background text-right text-[clamp(36px,5vw,51px)] leading-none"
            style={fontPlaywrite}
          >
            {t("projects.title")}
          </h1>
        </div>
      </section>

      {/* GRID DE PROJETOS */}
      <section className="mx-auto max-w-7xl px-6 py-20 flex flex-col gap-20">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
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
    </div>
  );
}