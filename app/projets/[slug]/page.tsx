import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Bande from "@/components/Bande";
import Blocs from "@/components/Blocs";
import Pied from "@/components/Pied";
import { riche } from "@/lib/riche";
import { getProjet, projetsVedettes } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projetsVedettes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const projet = getProjet(slug);
  if (!projet) return {};

  return {
    title: projet.nom,
    description: projet.sousTitre ?? projet.resume,
  };
}

export default async function FicheProjet({ params }: Params) {
  const { slug } = await params;
  const projet = getProjet(slug);
  if (!projet) notFound();

  const liens = (projet.liens ?? []).map((l) => ({
    label: l.label,
    valeur: l.url.replace(/^https?:\/\/(www\.)?/, ""),
    url: l.url,
  }));

  return (
    <>
      <header className="cover sheet-cover">
        <div className="wrap">
          <Link className="back" href="/#projets">
            &larr; Tous les projets
          </Link>

          <h1>{projet.nom}</h1>
          {projet.sousTitre ? <p className="sub">{projet.sousTitre}</p> : null}

          {projet.meta && projet.meta.length > 0 ? (
            <div className="sheet-meta">
              {projet.meta.map((m) => (
                <span key={m}>{riche(m)}</span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {projet.chiffres ? <Bande chiffres={projet.chiffres} /> : null}

      <div className="wrap">
        <section className="sec">
          {projet.contenu ? <Blocs blocs={projet.contenu} /> : null}
        </section>
      </div>

      {liens.length > 0 ? (
        <Pied titre="Voir le projet" entrees={liens} tampon={false} />
      ) : (
        <Pied />
      )}
    </>
  );
}
