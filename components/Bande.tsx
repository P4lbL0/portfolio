import type { Fait } from "@/lib/content";

/** La bande colorée de chiffres, sous une couverture. */
export default function Bande({ chiffres }: { chiffres: Fait[] }) {
  if (chiffres.length === 0) return null;

  return (
    <div className="band">
      <div className="wrap">
        {chiffres.map((c) => (
          <div key={c.label}>
            <b>{c.valeur}</b>
            <span>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
