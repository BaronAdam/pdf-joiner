export const LOCALES = [
  { code: "en", name: "English" },
  { code: "pl", name: "Polski" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];

export function isLocale(v: unknown): v is Locale {
  return LOCALES.some((l) => l.code === v);
}

type Forms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

const en = {
  privacy: "Files never leave your device",
  heroTitle: "Join PDFs, page for page.",
  heroSub:
    "Add your files, put them in the order you want, and download one PDF. Nothing is resized or re-rendered.",
  dropHero: "Drop PDF files here",
  or: "or",
  browse: "Browse files",
  steps: [
    "1 · Add two or more PDFs",
    "2 · Drag to rearrange",
    "3 · Merge & download",
  ],
  dropTitle: "Drop PDFs here to add more",
  dropSub:
    "Pages are appended exactly as they are — size, orientation and quality untouched.",
  joinOrder: "Join order",
  joinHint:
    "Drag any preview onto another to swap places, or use the arrows. First card becomes the first pages.",
  clearAll: "Clear all",
  reading: "Reading file…",
  adding: "Adding pages…",
  earlier: (name: string) => `Move ${name} earlier`,
  later: (name: string) => `Move ${name} later`,
  remove: (name: string) => `Remove ${name}`,
  dragLabel: (name: string, pos: number, count: number) =>
    `${name}, position ${pos} of ${count}. Press space to pick up, arrow keys to move.`,
  fileName: "File name",
  merge: "Merge & download",
  merging: "Merging…",
  idle: "Merged in your browser, nothing uploaded.",
  done: (name: string) => `Done — ${name} downloaded.`,
  progress: "Merge progress",
  stepText: (i: number, n: number, name: string) =>
    `Adding file ${i} of ${n}${name ? ` — ${name}` : ""}`,
  language: "Language",
  toDark: "Switch to dark mode",
  toLight: "Switch to light mode",
  dismiss: "Dismiss",
  notPdf: (name: string) => `${name} isn't a PDF and was skipped.`,
  password: "Password-protected — unlock it first",
  unreadable: "Couldn't read this file — it may be damaged",
  mergeFailed: "Merging failed. One of the files may be damaged.",
  page: { one: "page", other: "pages" } as Forms,
  file: { one: "file", other: "files" } as Forms,
  portrait: "portrait",
  landscape: "landscape",
};

export type Dict = typeof en;

const pl: Dict = {
  privacy: "Twoje pliki nigdy nie opuszczają urządzenia",
  heroTitle: "Łącz pliki PDF, strona po stronie.",
  heroSub:
    "Dodaj pliki, ustaw je w wybranej kolejności i pobierz jeden PDF. Nic nie jest skalowane ani renderowane ponownie.",
  dropHero: "Upuść pliki PDF tutaj",
  or: "lub",
  browse: "Wybierz pliki",
  steps: [
    "1 · Dodaj co najmniej dwa pliki PDF",
    "2 · Przeciągnij, aby zmienić kolejność",
    "3 · Połącz i pobierz",
  ],
  dropTitle: "Upuść pliki PDF tutaj, aby dodać kolejne",
  dropSub:
    "Strony są dołączane bez zmian — rozmiar, orientacja i jakość pozostają nienaruszone.",
  joinOrder: "Kolejność łączenia",
  joinHint:
    "Przeciągnij podgląd na inny, aby zamienić je miejscami, lub użyj strzałek. Pierwsza karta to pierwsze strony.",
  clearAll: "Wyczyść wszystko",
  reading: "Odczytywanie pliku…",
  adding: "Dodawanie stron…",
  earlier: (name) => `Przesuń ${name} wcześniej`,
  later: (name) => `Przesuń ${name} później`,
  remove: (name) => `Usuń ${name}`,
  dragLabel: (name, pos, count) =>
    `${name}, pozycja ${pos} z ${count}. Naciśnij spację, aby chwycić, strzałki, aby przesunąć.`,
  fileName: "Nazwa pliku",
  merge: "Połącz i pobierz",
  merging: "Łączenie…",
  idle: "Łączenie odbywa się w przeglądarce, nic nie jest przesyłane.",
  done: (name) => `Gotowe — pobrano ${name}.`,
  progress: "Postęp łączenia",
  stepText: (i, n, name) =>
    `Dodawanie pliku ${i} z ${n}${name ? ` — ${name}` : ""}`,
  language: "Język",
  toDark: "Przełącz na tryb ciemny",
  toLight: "Przełącz na tryb jasny",
  dismiss: "Zamknij",
  notPdf: (name) => `Plik ${name} nie jest PDF-em i został pominięty.`,
  password: "Zabezpieczony hasłem — najpierw go odblokuj",
  unreadable: "Nie można odczytać pliku — może być uszkodzony",
  mergeFailed: "Łączenie nie powiodło się. Któryś z plików może być uszkodzony.",
  page: { one: "strona", few: "strony", many: "stron", other: "strony" },
  file: { one: "plik", few: "pliki", many: "plików", other: "pliku" },
  portrait: "pionowo",
  landscape: "poziomo",
};

const de: Dict = {
  privacy: "Ihre Dateien verlassen nie Ihr Gerät",
  heroTitle: "PDFs zusammenfügen, Seite für Seite.",
  heroSub:
    "Fügen Sie Ihre Dateien hinzu, bringen Sie sie in die gewünschte Reihenfolge und laden Sie ein einziges PDF herunter. Nichts wird skaliert oder neu gerendert.",
  dropHero: "PDF-Dateien hier ablegen",
  or: "oder",
  browse: "Dateien auswählen",
  steps: [
    "1 · Zwei oder mehr PDFs hinzufügen",
    "2 · Zum Umsortieren ziehen",
    "3 · Zusammenführen & herunterladen",
  ],
  dropTitle: "PDFs hierher ziehen, um weitere hinzuzufügen",
  dropSub:
    "Seiten werden unverändert angehängt – Größe, Ausrichtung und Qualität bleiben erhalten.",
  joinOrder: "Reihenfolge",
  joinHint:
    "Ziehen Sie eine Vorschau auf eine andere, um sie zu tauschen, oder nutzen Sie die Pfeile. Die erste Karte liefert die ersten Seiten.",
  clearAll: "Alle entfernen",
  reading: "Datei wird gelesen…",
  adding: "Seiten werden hinzugefügt…",
  earlier: (name) => `${name} weiter nach vorn`,
  later: (name) => `${name} weiter nach hinten`,
  remove: (name) => `${name} entfernen`,
  dragLabel: (name, pos, count) =>
    `${name}, Position ${pos} von ${count}. Leertaste zum Aufnehmen, Pfeiltasten zum Verschieben.`,
  fileName: "Dateiname",
  merge: "Zusammenführen & herunterladen",
  merging: "Wird zusammengeführt…",
  idle: "Im Browser zusammengeführt, nichts wird hochgeladen.",
  done: (name) => `Fertig – ${name} heruntergeladen.`,
  progress: "Fortschritt",
  stepText: (i, n, name) =>
    `Datei ${i} von ${n} wird hinzugefügt${name ? ` — ${name}` : ""}`,
  language: "Sprache",
  toDark: "Zum dunklen Modus wechseln",
  toLight: "Zum hellen Modus wechseln",
  dismiss: "Schließen",
  notPdf: (name) => `${name} ist kein PDF und wurde übersprungen.`,
  password: "Passwortgeschützt — zuerst entsperren",
  unreadable: "Datei konnte nicht gelesen werden — möglicherweise beschädigt",
  mergeFailed:
    "Zusammenführen fehlgeschlagen. Eine der Dateien ist möglicherweise beschädigt.",
  page: { one: "Seite", other: "Seiten" },
  file: { one: "Datei", other: "Dateien" },
  portrait: "Hochformat",
  landscape: "Querformat",
};

const fr: Dict = {
  privacy: "Vos fichiers ne quittent jamais votre appareil",
  heroTitle: "Fusionnez vos PDF, page par page.",
  heroSub:
    "Ajoutez vos fichiers, mettez-les dans l’ordre voulu et téléchargez un seul PDF. Rien n’est redimensionné ni recalculé.",
  dropHero: "Déposez vos fichiers PDF ici",
  or: "ou",
  browse: "Parcourir les fichiers",
  steps: [
    "1 · Ajoutez au moins deux PDF",
    "2 · Glissez pour réorganiser",
    "3 · Fusionnez et téléchargez",
  ],
  dropTitle: "Déposez des PDF ici pour en ajouter",
  dropSub:
    "Les pages sont ajoutées telles quelles : taille, orientation et qualité inchangées.",
  joinOrder: "Ordre de fusion",
  joinHint:
    "Faites glisser un aperçu sur un autre pour les échanger, ou utilisez les flèches. La première carte donne les premières pages.",
  clearAll: "Tout effacer",
  reading: "Lecture du fichier…",
  adding: "Ajout des pages…",
  earlier: (name) => `Déplacer ${name} avant`,
  later: (name) => `Déplacer ${name} après`,
  remove: (name) => `Retirer ${name}`,
  dragLabel: (name, pos, count) =>
    `${name}, position ${pos} sur ${count}. Appuyez sur espace pour saisir, sur les flèches pour déplacer.`,
  fileName: "Nom du fichier",
  merge: "Fusionner et télécharger",
  merging: "Fusion…",
  idle: "Fusionné dans votre navigateur, rien n’est envoyé.",
  done: (name) => `Terminé : ${name} téléchargé.`,
  progress: "Progression de la fusion",
  stepText: (i, n, name) =>
    `Ajout du fichier ${i} sur ${n}${name ? ` — ${name}` : ""}`,
  language: "Langue",
  toDark: "Passer en mode sombre",
  toLight: "Passer en mode clair",
  dismiss: "Fermer",
  notPdf: (name) => `${name} n’est pas un PDF et a été ignoré.`,
  password: "Protégé par mot de passe — déverrouillez-le d’abord",
  unreadable: "Impossible de lire ce fichier — il est peut-être endommagé",
  mergeFailed:
    "La fusion a échoué. L’un des fichiers est peut-être endommagé.",
  page: { one: "page", other: "pages" },
  file: { one: "fichier", other: "fichiers" },
  portrait: "portrait",
  landscape: "paysage",
};

const es: Dict = {
  privacy: "Tus archivos nunca salen de tu dispositivo",
  heroTitle: "Une PDF, página a página.",
  heroSub:
    "Añade tus archivos, ponlos en el orden que quieras y descarga un único PDF. Nada se redimensiona ni se vuelve a renderizar.",
  dropHero: "Suelta aquí los archivos PDF",
  or: "o",
  browse: "Examinar archivos",
  steps: [
    "1 · Añade dos o más PDF",
    "2 · Arrastra para reordenar",
    "3 · Une y descarga",
  ],
  dropTitle: "Suelta PDF aquí para añadir más",
  dropSub:
    "Las páginas se añaden tal cual: tamaño, orientación y calidad intactos.",
  joinOrder: "Orden de unión",
  joinHint:
    "Arrastra una vista previa sobre otra para intercambiarlas, o usa las flechas. La primera tarjeta serán las primeras páginas.",
  clearAll: "Borrar todo",
  reading: "Leyendo archivo…",
  adding: "Añadiendo páginas…",
  earlier: (name) => `Mover ${name} antes`,
  later: (name) => `Mover ${name} después`,
  remove: (name) => `Quitar ${name}`,
  dragLabel: (name, pos, count) =>
    `${name}, posición ${pos} de ${count}. Pulsa espacio para coger, flechas para mover.`,
  fileName: "Nombre del archivo",
  merge: "Unir y descargar",
  merging: "Uniendo…",
  idle: "Unido en tu navegador, no se sube nada.",
  done: (name) => `Listo: ${name} descargado.`,
  progress: "Progreso de la unión",
  stepText: (i, n, name) =>
    `Añadiendo archivo ${i} de ${n}${name ? ` — ${name}` : ""}`,
  language: "Idioma",
  toDark: "Cambiar a modo oscuro",
  toLight: "Cambiar a modo claro",
  dismiss: "Cerrar",
  notPdf: (name) => `${name} no es un PDF y se omitió.`,
  password: "Protegido con contraseña — desbloquéalo primero",
  unreadable: "No se pudo leer este archivo — puede estar dañado",
  mergeFailed: "La unión falló. Puede que uno de los archivos esté dañado.",
  page: { one: "página", other: "páginas" },
  file: { one: "archivo", other: "archivos" },
  portrait: "vertical",
  landscape: "horizontal",
};

export const DICTS: Record<Locale, Dict> = { en, pl, de, fr, es };

export function formatCount(locale: Locale, n: number, forms: Forms): string {
  const rule = new Intl.PluralRules(locale).select(n);
  return `${n} ${forms[rule] ?? forms.other}`;
}

export type PageFormat = {
  paper: string | null;
  w: number;
  h: number;
  landscape: boolean;
};

export function formatLabel(t: Dict, f: PageFormat): string {
  const orientation = f.landscape ? t.landscape : t.portrait;
  return f.paper
    ? `${f.paper} ${orientation}`
    : `${Math.round(f.w)}×${Math.round(f.h)} pt`;
}

export function detectLocale(languages: readonly string[]): Locale {
  for (const l of languages) {
    const code = l.toLowerCase().split("-")[0];
    if (isLocale(code)) return code;
  }
  return "en";
}
