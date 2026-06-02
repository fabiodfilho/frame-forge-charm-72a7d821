import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/code")({
  head: () => ({
    meta: [
      { title: "CODE — Fábio Dantas" },
      { name: "description", content: "Projetos de desenvolvimento de Fábio Dantas." },
    ],
  }),
  component: CodePage,
});

function CodePage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1
          className="uppercase font-bold tracking-tight text-primary leading-none text-[clamp(48px,8vw,96px)]"
          style={{ fontFamily: "'Agdasima', system-ui, sans-serif" }}
        >
          {t("code.page.title")}
        </h1>
        <p className="mt-6 text-lg" style={{ fontFamily: "'Advent Pro', system-ui, sans-serif" }}>
          {t("code.page.desc")}
        </p>
        <Link to="/" className="inline-block mt-10 underline hover:text-primary">
          {t("back.home")}
        </Link>
      </main>
    </div>
  );
}