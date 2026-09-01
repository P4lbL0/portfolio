import Link from "next/link";
import Image from "next/image";
import Bande from "@/components/Bande";
import Pied from "@/components/Pied";
import { riche } from "@/lib/riche";
import {
  competences,
  experiences,
  formation,
  profil,
  projetsSecondaires,
  projetsVedettes,
} from "@/lib/content";

export default function Accueil() {
  return (
    <>
      {/* ------------------------------ couverture ------------------------------ */}
      <header className="cover">
        <div className="wrap">
          <div className="cover-grid">
            <div>
              <p className="kicker">{profil.kicker}</p>

              <h1>
                <span>{profil.prenom}</span>
                <span className="b">{profil.nom}</span>
              </h1>

              <p className="chapo">{riche(profil.chapeau)}</p>
            </div>

            {profil.photo ? (
              <Image
                className="portrait"
                src={profil.photo}
                alt={profil.photoAlt}
                width={210}
                height={280}
                priority
              />
            ) : (
              <div className="portrait-vide">Photo à venir</div>
            )}
          </div>

          <div className="byline">
            {profil.byline.map((b) => (
              <span key={b.texte}>{riche(b.texte)}</span>
            ))}
            <a href="mailto:lemire.angelos@gmail.com">
              <strong>lemire.angelos@gmail.com</strong>
            </a>
            <a href="https://github.com/P4lbL0" target="_blank" rel="noreferrer">
              GitHub <strong>P4lbL0</strong>
            </a>
          </div>
        </div>
      </header>

      <Bande chiffres={profil.chiffres} />

      <div className="wrap">
        {/* ------------------------------ qui je suis ------------------------------ */}
        <section className="sec">
          <h2 className="h2">Qui je suis</h2>
          <div className="rule" />

          <div className="prose read">
            {profil.presentation.map((p, i) => (
              <p key={i} className={i === 0 ? "lettrine" : undefined}>
                {riche(p)}
              </p>
            ))}
          </div>

          <blockquote className="pull">« {profil.citation} »</blockquote>
        </section>

        {/* ------------------------------ expériences ------------------------------ */}
        <section className="sec" id="experiences">
          <h2 className="h2">Expériences</h2>
          <div className="rule" />

          {experiences.map((xp) => (
            <article className="xp" key={xp.slug}>
              <p className="tag">{xp.tag}</p>
              <h3>{xp.entreprise}</h3>
              <p className="when">{xp.periode}</p>
              <p>{riche(xp.resume)}</p>

              {xp.faits && xp.faits.length > 0 ? (
                <dl className="facts">
                  {xp.faits.map((f) => (
                    <div key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.valeur}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              <Link className="more" href={`/experiences/${xp.slug}`}>
                Lire la fiche complète
              </Link>
            </article>
          ))}
        </section>

        {/* ------------------------------ formation ------------------------------ */}
        <section className="sec">
          <h2 className="h2">Formation</h2>
          <div className="rule" />

          <div className="years">
            {formation.map((f) => (
              <div className="yr" key={f.intitule}>
                <span className="when">{f.periode}</span>
                <h3>{f.intitule}</h3>
                <span className="where">{f.lieu}</span>
                <p>{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------ projets ------------------------------ */}
        <section className="sec" id="projets">
          <h2 className="h2">Projets</h2>
          <div className="rule" />

          <div className="projs">
            {projetsVedettes.map((p, i) => (
              <article key={p.slug}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>

                <h3>
                  <Link href={`/projets/${p.slug}`}>{p.nom}</Link>
                </h3>

                <Link
                  className="go"
                  href={`/projets/${p.slug}`}
                  aria-label={`Voir la fiche de ${p.nom}`}
                >
                  <span aria-hidden="true">&rarr;</span>
                </Link>

                {/* Le lien direct vers le projet, sans passer par la fiche. */}
                {p.urlLive ? (
                  <a
                    className="live on live-lien"
                    href={p.urlLive}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.statut}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  <span className="live">{p.statut}</span>
                )}

                <p>{p.resume}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------ et aussi ------------------------------ */}
        <section className="sec">
          <h2 className="h2">Et aussi</h2>
          <div className="rule thin" />

          <div className="mini">
            {projetsSecondaires.map((p) => {
              const lien = p.liens?.[0]?.url;
              const contenu = (
                <>
                  <b>{p.nom}</b>
                  <span>{p.resume}</span>
                </>
              );

              return lien ? (
                <a key={p.slug} href={lien} target="_blank" rel="noreferrer">
                  {contenu}
                </a>
              ) : (
                <div key={p.slug}>{contenu}</div>
              );
            })}
          </div>
        </section>

        {/* ------------------------------ compétences ------------------------------ */}
        <section className="sec">
          <h2 className="h2">Ce que je sais faire</h2>
          <div className="rule" />

          <dl className="skills">
            {competences.map((c) => (
              <div key={c.titre} style={{ display: "contents" }}>
                <dt>{c.titre}</dt>
                <dd>{riche(c.contenu)}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ------------------------------ hors écran ------------------------------ */}
        <section className="sec">
          <h2 className="h2">Hors écran</h2>
          <div className="rule thin" />

          <div className="prose read">
            {profil.horsEcran.map((p, i) => (
              <p key={i}>{riche(p)}</p>
            ))}
          </div>
        </section>
      </div>

      <Pied />
    </>
  );
}
