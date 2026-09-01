import type { Metadata, Viewport } from "next";
import { Anton, Newsreader, Archivo } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { profil } from "@/lib/content";
import "./globals.css";

/* Polices chargées ici, une seule fois pour tout le site. */
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--f-disp",
});

const newsreader = Newsreader({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--f-read",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--f-ui",
});

export const metadata: Metadata = {
  title: {
    default: `${profil.prenom} ${profil.nom}`,
    template: `%s — ${profil.prenom} ${profil.nom}`,
  },
  description:
    "Administration et exploitation des données, développement full-stack. Parcours, stages et projets d'Angelos Lemire.",
  authors: [{ name: `${profil.prenom} ${profil.nom}` }],
  openGraph: {
    title: `${profil.prenom} ${profil.nom}`,
    description:
      "Administration et exploitation des données, développement full-stack.",
    type: "profile",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#101B3D",
};

/**
 * Applique le thème mémorisé avant le premier rendu, pour éviter que la page
 * s'affiche en clair une fraction de seconde avant de passer en sombre.
 */
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${anton.variable} ${newsreader.variable} ${archivo.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>

        <div className="topbar">
          <div className="wrap">
            <Link href="/" className="marque">
              {profil.prenom} {profil.nom}
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <main id="contenu">{children}</main>
      </body>
    </html>
  );
}
