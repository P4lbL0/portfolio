import { domaine } from "@/lib/content";

/**
 * Les boutons d'accès en tête de fiche. C'est le premier endroit où le lecteur
 * doit pouvoir ouvrir le projet — pas le pied de page.
 */
export default function Actions({
  urlLive,
  urlCode,
}: {
  urlLive?: string;
  urlCode?: string;
}) {
  if (!urlLive && !urlCode) return null;

  return (
    <div className="actions">
      {urlLive ? (
        <a className="btn btn-plein" href={urlLive} target="_blank" rel="noreferrer">
          Ouvrir {domaine(urlLive)}
          <span aria-hidden="true"> ↗</span>
        </a>
      ) : null}

      {urlCode ? (
        <a className="btn btn-vide" href={urlCode} target="_blank" rel="noreferrer">
          Voir le code
          <span aria-hidden="true"> ↗</span>
        </a>
      ) : null}
    </div>
  );
}
