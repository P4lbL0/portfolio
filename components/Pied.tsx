import { contacts, profil } from "@/lib/content";

type Entree = { label: string; valeur: string; url: string };

/**
 * Le dos du magazine. Par défaut il porte les coordonnées ; une fiche peut lui
 * passer ses propres liens (voir le projet en ligne, le code…).
 */
export default function Pied({
  titre = "Me joindre",
  entrees = contacts,
  tampon = true,
}: {
  titre?: string;
  entrees?: Entree[];
  tampon?: boolean;
}) {
  return (
    <footer className="foot">
      <div className="wrap">
        <h2 className="h2">{titre}</h2>
        <div className="rule" />

        <div className="grid">
          {entrees.map((e) => (
            <a
              key={e.label + e.valeur}
              href={e.url}
              target={e.url.startsWith("http") ? "_blank" : undefined}
              rel={e.url.startsWith("http") ? "noreferrer" : undefined}
            >
              <b>{e.label}</b>
              <span className="val">{e.valeur}</span>
            </a>
          ))}
        </div>

        {tampon ? (
          <p className="stamp">
            Mis à jour le {profil.majLe} — {profil.lieu}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
