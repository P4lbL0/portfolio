import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Bande from "@/components/Bande";
import Blocs from "@/components/Blocs";
import Pied from "@/components/Pied";
import SommaireProjets from "@/components/SommaireProjets";
import { riche } from "@/lib/riche";
import { experiences, getExperience } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const xp = getExperience(slug);
  if (!xp) return {};

  return {
    title: xp.entreprise,
    description: xp.sousTitre,
  };
}

export default async function FicheExperience({ params }: Params) {
  const { slug } = await params;
  const xp = getExperience(slug);
  if (!xp) notFound();

  return (
    <>
      <header className="cover sheet-cover">
        <div className="wrap">
          <Link className="back" href="/#experiences">
            &larr; Toutes les expériences
          </Link>

          <h1>{xp.entreprise}</h1>
          <p className="sub">{xp.sousTitre}</p>

          <div className="sheet-meta">
            {xp.meta.map((m) => (
              <span key={m}>{riche(m)}</span>
            ))}
          </div>

          {xp.stack && xp.stack.length > 0 ? (
            <div className="stack-tags">
              {xp.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {xp.chiffres ? <Bande chiffres={xp.chiffres} /> : null}

      {xp.projets ? (
        <SommaireProjets
          base={xp.slug}
          projets={xp.projets}
          titre={`Les ${xp.projets.length} chantiers`}
          chapeau="Chaque chantier a sa page. Les deux premiers forment le projet phare ; les suivants sont les missions menées en parallèle, de la plus lourde à la plus modeste."
        />
      ) : null}

      <div className="wrap">
        <section className="sec">
          <Blocs blocs={xp.contenu} />
        </section>
      </div>

      <Pied />
    </>
  );
}
