"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Bascule clair / sombre. Le thème retenu est mémorisé dans le navigateur du
 * visiteur ; sans choix explicite, on suit le réglage de son système.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const actuel = document.documentElement.getAttribute("data-theme");
    if (actuel === "light" || actuel === "dark") {
      setTheme(actuel);
      return;
    }
    const sombre = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(sombre ? "dark" : "light");
  }, []);

  function basculer() {
    const suivant: Theme = theme === "dark" ? "light" : "dark";
    setTheme(suivant);
    document.documentElement.setAttribute("data-theme", suivant);
    try {
      localStorage.setItem("theme", suivant);
    } catch {
      // Navigation privée ou stockage bloqué : le choix ne survivra pas au
      // rechargement, mais la page reste utilisable.
    }
  }

  // Avant l'hydratation on ne connaît pas encore le thème : on réserve la place
  // sans annoncer un libellé qui pourrait être faux.
  const libelle = theme === null ? "Thème" : theme === "dark" ? "Clair" : "Sombre";

  return (
    <button
      type="button"
      className="theme-btn"
      onClick={basculer}
      aria-pressed={theme === "dark"}
      aria-label="Changer de thème"
    >
      {libelle}
    </button>
  );
}
