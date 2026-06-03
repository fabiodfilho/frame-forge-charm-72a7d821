import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { SiteFooter } from "@/components/SiteFooter";

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
const IMG_ABCODE =
  "https://api.builder.io/api/v1/image/assets/TEMP/7d611a8989867c469192e741d7aacfbc46c842f9?width=1102";
const IMG_CANVAS =
  "https://api.builder.io/api/v1/image/assets/TEMP/8ea618db608a2a56e70dc81bb756ea96ef564554?width=1102";
const IMG_AVA =
  "https://api.builder.io/api/v1/image/assets/TEMP/d822f87cf3173f9c86a06400b92b935e643121bc?width=1102";
const IMG_LITTLEHELP =
  "https://api.builder.io/api/v1/image/assets/TEMP/b3d38501b6d1cfbd2c95abf747ed8915c91adb4e?width=1102";

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  behance?: string;
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
        <div className="shrink-0 flex flex-col gap-2">
          <a
            href={project.github ?? "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub ${project.title}`}
            className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-md bg-foreground text-background hover:bg-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.05.78 2.12v3.14c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <a
            href={project.behance ?? "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={`Behance ${project.title}`}
            className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-md bg-foreground text-background hover:bg-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M7.8 7.5c.86 0 1.62.08 2.3.27.69.18 1.27.45 1.76.81.49.37.86.84 1.13 1.41.27.57.41 1.27.41 2.09 0 .89-.2 1.63-.6 2.22-.4.59-1 1.08-1.81 1.46 1.1.32 1.92.86 2.46 1.64.54.78.81 1.71.81 2.81 0 .89-.17 1.65-.51 2.31-.34.65-.81 1.19-1.39 1.6-.59.42-1.27.72-2.04.92-.77.2-1.58.3-2.43.3H0V7.5h7.8Zm-.46 6.04c.7 0 1.27-.16 1.72-.49.45-.33.67-.86.67-1.6 0-.41-.07-.74-.22-1-.15-.26-.35-.46-.6-.61-.26-.15-.55-.25-.88-.31-.33-.06-.68-.09-1.04-.09H3.96v4.1h3.38Zm.2 6.36c.4 0 .78-.04 1.14-.12.36-.08.69-.21.97-.4.28-.18.5-.43.66-.74.16-.31.24-.7.24-1.18 0-.94-.27-1.62-.8-2.02-.53-.4-1.24-.6-2.12-.6H3.96v5.06h3.58ZM18.5 19.4c.54.52 1.32.79 2.34.79.73 0 1.36-.18 1.89-.55.53-.37.85-.76.97-1.18h3.13c-.5 1.55-1.27 2.66-2.3 3.32-1.03.67-2.28 1-3.74 1-1.02 0-1.94-.16-2.77-.49-.83-.32-1.53-.78-2.11-1.39-.58-.6-1.03-1.31-1.34-2.14-.31-.83-.47-1.74-.47-2.74 0-.96.16-1.86.48-2.69.32-.83.78-1.55 1.37-2.16.6-.61 1.31-1.09 2.13-1.45.83-.36 1.74-.54 2.74-.54 1.12 0 2.1.22 2.94.65.84.43 1.53 1.01 2.07 1.74.54.73.94 1.56 1.18 2.49.24.93.32 1.91.25 2.94H17.65c.06 1.18.37 2.03.85 2.4Zm4.13-6.48c-.43-.47-1.13-.71-2.04-.71-.6 0-1.1.1-1.49.31-.4.21-.71.47-.95.78-.24.31-.4.64-.49.97-.09.34-.14.62-.16.84h6.16c-.09-.99-.4-1.72-.83-2.19h-.2ZM17.5 8.86h7.62V7H17.5v1.86Z"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function CodePage() {
  const { t } = useI18n();

  const projects: Project[] = [
    { title: t("project.abcode.title"), description: t("project.abcode.desc"), image: IMG_ABCODE },
    { title: t("project.canvas.title"), description: t("project.canvas.desc"), image: IMG_CANVAS },
    { title: t("project.ava.title"), description: t("project.ava.desc"), image: IMG_AVA },
    { title: t("project.littlehelp.title"), description: t("project.littlehelp.desc"), image: IMG_LITTLEHELP },
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

      <SiteFooter />
    </div>
  );
}