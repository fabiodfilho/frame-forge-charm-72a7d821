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
  "/abcodeimg.png";
const IMG_CANVAS =
  "/canvasimg.png";
const IMG_AVA =
  "/avaunifacisaimg.png";
const IMG_LITTLEHELP =
  "/litllehelpimg.png";

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