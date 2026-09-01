import Link from "next/link";
import Pied from "@/components/Pied";

export default function Introuvable() {
  return (
    <>
      <header className="cover sheet-cover">
        <div className="wrap">
          <Link className="back" href="/">
            &larr; Retour à l&apos;accueil
          </Link>
          <h1>Page introuvable</h1>
          <p className="sub">
            Cette adresse ne mène nulle part. Elle a peut-être changé, ou la page
            n&apos;existe pas encore.
          </p>
        </div>
      </header>

      <Pied />
    </>
  );
}
