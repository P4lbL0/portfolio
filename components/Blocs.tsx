import type { Bloc } from "@/lib/content";
import { riche } from "@/lib/riche";

/**
 * Rendu des blocs de contenu d'une fiche. Ajouter un type de bloc ici et dans
 * `Bloc` (lib/content.ts) suffit à l'utiliser partout.
 */
export default function Blocs({ blocs }: { blocs: Bloc[] }) {
  return (
    <div className="prose read">
      {blocs.map((bloc, i) => {
        switch (bloc.type) {
          case "titre":
            return (
              <h2 className="h3" key={i}>
                {bloc.texte}
              </h2>
            );

          case "para":
            return <p key={i}>{riche(bloc.texte)}</p>;

          case "liste":
            return (
              <ul key={i}>
                {bloc.items.map((item, j) => (
                  <li key={j}>
                    {item.fort ? <strong>{item.fort} </strong> : null}
                    {riche(item.texte)}
                  </li>
                ))}
              </ul>
            );

          case "citation":
            return (
              <blockquote className="pull" key={i}>
                {bloc.texte}
              </blockquote>
            );

          case "image":
            return (
              <figure className="figure" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={bloc.src} alt={bloc.alt} />
                {bloc.legende ? <figcaption>{bloc.legende}</figcaption> : null}
              </figure>
            );

          case "reserve":
            return (
              <div className="slot" key={i}>
                {bloc.texte}
              </div>
            );
        }
      })}
    </div>
  );
}
