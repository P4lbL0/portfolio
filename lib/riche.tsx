import type { ReactNode } from "react";

/**
 * Rend un texte du fichier de contenu en respectant deux marqueurs simples :
 *   **gras**   → <strong>
 *   _italique_ → <em>
 *
 * On passe par des noeuds React plutôt que par du HTML injecté : le contenu
 * reste du texte, jamais du balisage exécutable.
 */
export function riche(texte: string): ReactNode {
  const morceaux = texte.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);

  return morceaux.map((m, i) => {
    if (m.startsWith("**") && m.endsWith("**")) {
      return <strong key={i}>{m.slice(2, -2)}</strong>;
    }
    if (m.length > 2 && m.startsWith("_") && m.endsWith("_")) {
      return <em key={i}>{m.slice(1, -1)}</em>;
    }
    return m;
  });
}
