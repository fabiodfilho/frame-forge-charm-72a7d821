import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isExiting, setIsExiting] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    // Se a localização mudou, dispara a animação de saída
    if (location.pathname !== displayLocation.pathname) {
      setIsExiting(true);
      
      // Aguarda a animação de saída completar antes de atualizar o conteúdo
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setIsExiting(false);
      }, 500); // Mesmo tempo da animação de saída (mais suave)

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div
      key={displayLocation.pathname}
      className={isExiting ? "page-exit" : "page-enter"}
    >
      {children}
    </div>
  );
}
