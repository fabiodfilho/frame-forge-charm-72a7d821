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

      <SiteFooter />
    </div>
  );
}