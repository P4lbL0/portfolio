import type { Video as VideoType } from "@/lib/content";

/**
 * Le film d'un projet, en tête de fiche.
 *
 * `preload="none"` est volontaire : rien n'est téléchargé tant que le visiteur
 * ne lance pas la lecture. Seule l'affiche (quelques dizaines de kilooctets)
 * est chargée. C'est ce qui permet de mettre un film de 5 Mo sur une fiche sans
 * le faire payer à ceux qui ne le regardent pas.
 */
export default function Video({ video }: { video: VideoType }) {
  return (
    <section className="film">
      <div className="wrap">
        <figure>
          <video
            controls
            preload="none"
            poster={video.affiche}
            playsInline
            width={1920}
            height={1080}
          >
            <source src={video.src} type="video/mp4" />
            Votre navigateur ne sait pas lire cette vidéo.{" "}
            <a href={video.src}>La télécharger</a>.
          </video>

          <figcaption>
            {video.legende}
            {video.duree ? <span className="film-duree">{video.duree}</span> : null}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
