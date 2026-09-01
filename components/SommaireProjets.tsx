import Link from "next/link";
import type { ProjetStage } from "@/lib/content";

/**
 * Le sommaire des chantiers d'une expérience : une carte par projet, chacune
 * menant à sa propre page. C'est la première chose qu'on voit en entrant sur
 * la fiche, avant le texte de fond.
 */
export default function SommaireProjets({
  base,
  projets,
  titre = "Les chantiers",
  chapeau,
}: {
  /** Slug de l'expérience, pour fabriquer les liens. */
  base: string;
  projets: ProjetStage[];
  titre?: string;
  chapeau?: string;
}) {
  if (projets.length === 0) return null;

  return (
    <section className="sommaire" id="chantiers">
      <div className="wrap">
        <h2 className="h2">{titre}</h2>
        <div className="rule" />
        {chapeau ? <p className="sommaire-chapeau">{chapeau}</p> : null}

        <div className="sommaire-grille">
          {projets.map((p) => (
            <Link className="chantier" key={p.slug} href={`/experiences/${base}/${p.slug}`}>
              <span className="chantier-n">{p.numero}</span>
              <span className="chantier-tag">{p.tag}</span>
              <h3>{p.titre}</h3>
              <span className="chantier-cle">{p.accroche}</span>
              <p>{p.resume}</p>
              <span className="chantier-go">Lire ce chantier &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
