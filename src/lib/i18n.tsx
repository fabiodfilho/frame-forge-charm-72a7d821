import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, { pt: string; en: string }>;

export const dict: Dict = {
  "nav.code": { pt: "CODE", en: "CODE" },
  "nav.design": { pt: "Design / UX", en: "Design / UX" },
  "about.title": { pt: "SOBRE", en: "ABOUT" },
  "about.welcome": { pt: "BEM-VINDO AO MEU PORTFÓLIO!", en: "WELCOME TO MY PORTFOLIO!" },
  "portfolio.title": { pt: "Conheça meu portfólio", en: "Discover my portfolio" },
  "contact.title": { pt: "contato", en: "contact" },
  "contact.name": { pt: "NOME", en: "NAME" },
  "contact.email": { pt: "E-MAIL", en: "E-MAIL" },
  "contact.message": { pt: "MENSAGEM", en: "MESSAGE" },
  "contact.send": { pt: "Enviar", en: "Send" },
  "thanks": { pt: "Obrigado por visitar!", en: "Thanks for visiting!" },
  "footer.rights": { pt: "Todos os direitos reservados", en: "All rights reserved" },
  "code.page.title": { pt: "Projetos de Código", en: "Code Projects" },
  "code.page.desc": { pt: "Em breve: meus projetos de desenvolvimento.", en: "Coming soon: my development projects." },
  "projects.title": { pt: "Projetos", en: "Projects" },
  "project.ieccm.title": { pt: "Projetos de IECCM", en: "IECCM Projects" },
  "about.p1": {
    pt: "Sou Fábio Dantas, desenvolvedor Full Stack com interesse especial em UX Design e transformação digital e habilidade em desenvolvimento de software. Gosto de entender problemas, desenhar soluções e construir experiências que facilitem a vida das pessoas.",
    en: "I'm Fábio Dantas, a Full Stack developer with a special interest in UX Design and digital transformation, and a strong background in software development. I enjoy understanding problems, designing solutions and building experiences that make people's lives easier.",
  },
  "about.p2": {
    pt: "Formação acadêmica em Sistemas de Informação, com cursos complementares em UX Design.",
    en: "Academic background in Information Systems, with complementary courses in UX Design.",
  },
  "about.p3": {
    pt: "Minha jornada na tecnologia me permitiu atuar em projetos de diferentes áreas, desde sistemas web e automações até iniciativas sociais e educacionais. Cada projeto é uma oportunidade de aprender, evoluir e criar algo que gere impacto positivo.",
    en: "My journey in technology has allowed me to work on projects across many areas — from web systems and automations to social and educational initiatives. Each project is an opportunity to learn, evolve and create something with a positive impact.",
  },
  "about.p4": {
    pt: "Neste espaço compartilho trabalhos que representam minhas competências em Front-end, Back-end, Design de Experiência do Usuário e otimização de processos, demonstrando como a tecnologia pode ser utilizada para conectar pessoas, resolver desafios e gerar valor.",
    en: "Here I share work that represents my skills in Front-end, Back-end, User Experience Design and process optimization, showing how technology can be used to connect people, solve challenges and generate value.",
  },
  "lang.changed": { pt: "Idioma alterado para Português", en: "Language changed to English" },
  "project.ieccm.desc": {
    pt: "A 'IECCM' é um projeto de rebrand que realizei para atualizar e fortalecer a identidade visual da marca. Durante o processo, trabalhei em uma nova logo, uma paleta de cores e uma tipografia que melhor representassem os valores e a seriedade da instituição. O objetivo foi modernizar a comunicação, tornando-a mais atraente e alinhada com o público-alvo, sem perder a essência da marca.",
    en: "'IECCM' is a rebrand project I carried out to refresh and strengthen the brand identity. I worked on a new logo, color palette and typography that better represent the values and seriousness of the institution. The goal was to modernize the communication, making it more attractive and aligned with the audience without losing the brand essence.",
  },
  "design.page.title": { pt: "Projetos de Design / UX", en: "Design / UX Projects" },
  "design.page.desc": { pt: "Em breve: meus projetos de design.", en: "Coming soon: my design projects." },
  "back.home": { pt: "← Voltar para Home", en: "← Back to Home" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = (k: keyof typeof dict) => dict[k]?.[lang] ?? String(k);
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}