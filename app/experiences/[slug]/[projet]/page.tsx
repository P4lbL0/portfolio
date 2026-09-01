import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Bande from "@/components/Bande";
import Blocs from "@/components/Blocs";
import Pied from "@/components/Pied";
import { riche } from "@/lib/riche";
import { experiences, getProjetStage } from "@/lib/content";

type Params = { params: Promise<{ slug: string; projet: string }> };

export function generateStaticParams() {
  return experiences.flatMap((xp) =>
    (xp.projets ?? []).map((p) => ({ slug: xp.slug, projet: p.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, projet } = await params;
  const trouve = getProjetStage(slug, projet);
  if (!trouve) return {};

  return {
    title: `${trouve.projet.titre} — ${trouve.xp.entreprise}`,
    description: trouve.projet.sousTitre,
  };
}

export default async function FicheProjetStage({ params }: Params) {
  const { slug, projet } = await params;
  const trouve = getProjetStage(slug, projet);
  if (!trouve) notFound();

  const { xp, projet: p, precedent, suivant } = trouve;

  return (
    <>
      <header className="cover sheet-cover">
        <div className="wrap">
          <Link className="back" href={`/experiences/${xp.slug}#chantiers`}>
            &larr; {xp.entreprise} — tous les chantiers
          </Link>

          <span className="chantier-n grand">{p.numero}</span>
          <h1>{p.titre}</h1>
          <p className="sub">{p.sousTitre}</p>

          <div className="sheet-meta">
            {p.meta.map((m) => (
              <span key={m}>{riche(m)}</span>
            ))}
          </div>

          {p.stack && p.stack.length > 0 ? (
            <div className="stack-tags">
              {p.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {p.chiffres ? <Bande chiffres={p.chiffres} /> : null}

      <div className="wrap">
        <section className="sec">
          <Blocs blocs={p.contenu} />
        </section>

        <nav className="voisins" aria-label="Autres chantiers">
          {precedent ? (
            <Link href={`/experiences/${xp.slug}/${precedent.slug}`}>
              <span>Chantier précédent</span>
              <b>{precedent.titre}</b>
            </Link>
          ) : (
            <span />
          )}

          {suivant ? (
            <Link className="droite" href={`/experiences/${xp.slug}/${suivant.slug}`}>
              <span>Chantier suivant</span>
              <b>{suivant.titre}</b>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>

      <Pied />
    </>
  );
}
