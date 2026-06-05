import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

const FLAG_BR =
  "https://api.builder.io/api/v1/image/assets/TEMP/ac8f5687a0ead88ecd0c5ae4cdb441323a19d23a?width=56";
const FLAG_US =
  "https://api.builder.io/api/v1/image/assets/TEMP/6bb5a1cb45de80cdfc34d8f7220cff9422b050d1?width=56";

const fontAdvent = { fontFamily: "'Advent Pro', system-ui, sans-serif" };
const fontAgdasima = { fontFamily: "'Agdasima', system-ui, sans-serif" };

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const changeLang = (next: "pt" | "en") => {
    if (next === lang) return;
    setLang(next);
    toast.success(next === "pt" ? "Idioma alterado para Português" : "Language changed to English");
  };
  return (
    <header className="w-full border-b border-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between gap-6 flex-wrap">
        <div className="leading-none" style={fontAgdasima}>
                     <Link to="/" aria-label="Home" className="shrink-0">
                     <div className="uppercase font-bold tracking-tight text-[clamp(24px,1vw,44px)]">
                      fábio
                    </div>
                    <div className="uppercase font-bold tracking-tight text-[clamp(24px,1vw,44px)] -mt-1">
                      dantas
                    </div></Link>
                    
                  </div>
        <nav className="flex items-center gap-8 uppercase" style={fontAdvent}>
          <Link
            to="/code"
            className="text-[clamp(20px,2vw,31px)] tracking-tight hover:text-primary transition-colors"
            activeProps={{ className: "text-primary" }}
          >
            {t("nav.code")}
          </Link>
          <Link
            to="/design-ux"
            className="text-[clamp(20px,2vw,31px)] tracking-tight hover:text-primary transition-colors"
            activeProps={{ className: "text-primary" }}
          >
            {t("nav.design")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Português"
            onClick={() => changeLang("pt")}
            className={`block transition-opacity ${lang === "pt" ? "opacity-100 ring-2 ring-primary" : "opacity-60 hover:opacity-100"}`}
          >
            <img src="/bandeira-do-brasil.png" alt="Português" className="h-5 w-7 object-cover" />
          </button>
          <button
            type="button"
            aria-label="English"
            onClick={() => changeLang("en")}
            className={`block transition-opacity ${lang === "en" ? "opacity-100 ring-2 ring-primary" : "opacity-60 hover:opacity-100"}`}
          >
            <img src="/bandeira-dos-eua.png" alt="English" className="h-5 w-7 object-cover" />
          </button>
        </div>
      </div>
    </header>
  );
}