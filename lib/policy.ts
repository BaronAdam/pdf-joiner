import type { Locale } from "./i18n";

type Section = { heading: string; body: string[]; list?: string[] };

export type Policy = {
  footerPrivacy: string;
  back: string;
  title: string;
  updated: (date: string) => string;
  summaryTitle: string;
  summary: string[];
  sections: Section[];
  contact: { heading: string; body: string; linkText: string };
};

const en: Policy = {
  footerPrivacy: "Privacy policy",
  back: "Back to PDF Joiner",
  title: "Privacy policy",
  updated: (d) => `Last updated ${d}`,
  summaryTitle: "In short",
  summary: [
    "Your PDFs are processed entirely in your browser. They are never uploaded, stored or seen by anyone else.",
    "No accounts, no cookies, no analytics, no advertising, no third-party trackers.",
    "The only thing saved on your device is your language and theme — and only if you choose them yourself.",
  ],
  sections: [
    {
      heading: "Your files",
      body: [
        "The PDFs you add are read and merged by code running inside your browser tab, using your own device's memory. Nothing is sent to a server, so there is nothing for us to store, inspect or lose. You can confirm this in your browser's network tab while you use the app.",
        "Closing or reloading the tab discards your files. The merged PDF is created on your device and downloaded straight to it.",
      ],
    },
    {
      heading: "What is stored on your device",
      body: [
        "If — and only if — you pick a language or a colour theme, the app remembers it using your browser's local storage:",
      ],
      list: [
        "`pj-locale`: the language you chose",
        "`pj-theme`: light or dark",
      ],
    },
    {
      heading: "Cookies and preferences",
      body: [
        "We do not use cookies. The two values above stay on your device, are never sent to us, and exist only so the app looks the way you asked next time. Until you choose, the app simply follows your browser's language and your system's theme without saving anything. You can remove the saved values at any time by clearing this site's data in your browser settings.",
      ],
    },
    {
      heading: "Hosting and technical data",
      body: [
        "The site is delivered by Microsoft Azure Static Web Apps. As with any web host, Microsoft may process technical request data — such as your IP address, browser type, time and the page requested — to deliver the site, keep it secure and fix problems. We add no analytics or tracking of our own and do not use this data to identify you. Microsoft's own handling of data is described in the Microsoft privacy statement.",
      ],
    },
    {
      heading: "Third parties",
      body: [
        "There are none. Fonts are bundled with the site rather than loaded from a font provider, and there are no advertisements, embedded widgets or social media buttons.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Because the app does not collect personal data, there is normally nothing for us to access, correct or delete. If you are in the EU or EEA, you nevertheless have the rights granted by the GDPR: access, rectification, erasure, restriction, objection, and the right to complain to your data protection authority. Feel free to contact us with any question.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "If we ever change how the app handles data — for example by adding a feature that needs a server — we will update this page before the change goes live and refresh the date at the top.",
      ],
    },
  ],
  contact: {
    heading: "Contact",
    body: "This app is operated by BaronDev. Questions about privacy can be sent via",
    linkText: "GitHub",
  },
};

const pl: Policy = {
  footerPrivacy: "Polityka prywatności",
  back: "Wróć do PDF Joiner",
  title: "Polityka prywatności",
  updated: (d) => `Ostatnia aktualizacja: ${d}`,
  summaryTitle: "W skrócie",
  summary: [
    "Twoje pliki PDF są przetwarzane w całości w przeglądarce. Nigdy nie są wysyłane, przechowywane ani widziane przez nikogo innego.",
    "Bez kont, bez plików cookie, bez analityki, bez reklam i bez zewnętrznych skryptów śledzących.",
    "Jedyne, co zapisujemy na Twoim urządzeniu, to język i motyw — i tylko wtedy, gdy sam je wybierzesz.",
  ],
  sections: [
    {
      heading: "Twoje pliki",
      body: [
        "Dodane pliki PDF są odczytywane i łączone przez kod działający w karcie Twojej przeglądarki, z użyciem pamięci Twojego urządzenia. Nic nie jest wysyłane na serwer, więc nie mamy czego przechowywać, przeglądać ani zgubić. Możesz to sprawdzić w zakładce „Sieć” narzędzi przeglądarki podczas korzystania z aplikacji.",
        "Zamknięcie lub odświeżenie karty usuwa Twoje pliki. Połączony plik PDF powstaje na Twoim urządzeniu i jest pobierany bezpośrednio na nie.",
      ],
    },
    {
      heading: "Co jest zapisywane na Twoim urządzeniu",
      body: [
        "Jeśli — i tylko jeśli — wybierzesz język lub motyw kolorystyczny, aplikacja zapamięta go w pamięci lokalnej przeglądarki:",
      ],
      list: [
        "`pj-locale`: wybrany język",
        "`pj-theme`: jasny lub ciemny",
      ],
    },
    {
      heading: "Pliki cookie i preferencje",
      body: [
        "Nie używamy plików cookie. Powyższe dwie wartości pozostają na Twoim urządzeniu, nigdy do nas nie trafiają i służą tylko temu, by aplikacja następnym razem wyglądała tak, jak chcesz. Dopóki nie dokonasz wyboru, aplikacja po prostu korzysta z języka przeglądarki i motywu systemu, niczego nie zapisując. Zapisane wartości możesz w każdej chwili usunąć, czyszcząc dane tej witryny w ustawieniach przeglądarki.",
      ],
    },
    {
      heading: "Hosting i dane techniczne",
      body: [
        "Witryna jest udostępniana przez Microsoft Azure Static Web Apps. Jak każdy dostawca hostingu, Microsoft może przetwarzać techniczne dane żądań — takie jak adres IP, typ przeglądarki, czas i żądana strona — aby dostarczać witrynę, dbać o jej bezpieczeństwo i usuwać problemy. Sami nie dodajemy analityki ani śledzenia i nie używamy tych danych do identyfikowania Ciebie. Sposób postępowania Microsoftu z danymi opisuje oświadczenie o ochronie prywatności Microsoft.",
      ],
    },
    {
      heading: "Podmioty trzecie",
      body: [
        "Brak. Czcionki są dołączone do witryny, a nie ładowane od zewnętrznego dostawcy, i nie ma tu reklam, osadzonych widżetów ani przycisków mediów społecznościowych.",
      ],
    },
    {
      heading: "Twoje prawa",
      body: [
        "Ponieważ aplikacja nie zbiera danych osobowych, zwykle nie ma czego udostępniać, poprawiać ani usuwać. Jeśli jesteś w UE lub EOG, przysługują Ci mimo to prawa wynikające z RODO: dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu oraz prawo wniesienia skargi do organu ochrony danych. Chętnie odpowiemy na każde pytanie.",
      ],
    },
    {
      heading: "Zmiany polityki",
      body: [
        "Jeśli kiedykolwiek zmienimy sposób, w jaki aplikacja obchodzi się z danymi — na przykład dodając funkcję wymagającą serwera — zaktualizujemy tę stronę przed wprowadzeniem zmiany i odświeżymy datę na górze.",
      ],
    },
  ],
  contact: {
    heading: "Kontakt",
    body: "Aplikację prowadzi BaronDev. Pytania dotyczące prywatności można kierować przez",
    linkText: "GitHub",
  },
};

const de: Policy = {
  footerPrivacy: "Datenschutzerklärung",
  back: "Zurück zu PDF Joiner",
  title: "Datenschutzerklärung",
  updated: (d) => `Zuletzt aktualisiert: ${d}`,
  summaryTitle: "Kurz gesagt",
  summary: [
    "Ihre PDFs werden vollständig in Ihrem Browser verarbeitet. Sie werden nie hochgeladen, gespeichert oder von anderen eingesehen.",
    "Keine Konten, keine Cookies, keine Analyse, keine Werbung, keine Tracker von Drittanbietern.",
    "Auf Ihrem Gerät wird nur Ihre Sprache und Ihr Design gespeichert — und nur, wenn Sie beides selbst wählen.",
  ],
  sections: [
    {
      heading: "Ihre Dateien",
      body: [
        "Die von Ihnen hinzugefügten PDFs werden von Code gelesen und zusammengeführt, der in Ihrem Browser-Tab läuft und den Speicher Ihres eigenen Geräts nutzt. Es wird nichts an einen Server gesendet, sodass wir nichts speichern, einsehen oder verlieren können. Das können Sie im Netzwerk-Tab Ihres Browsers während der Nutzung überprüfen.",
        "Beim Schließen oder Neuladen des Tabs werden Ihre Dateien verworfen. Das zusammengeführte PDF entsteht auf Ihrem Gerät und wird direkt dort heruntergeladen.",
      ],
    },
    {
      heading: "Was auf Ihrem Gerät gespeichert wird",
      body: [
        "Wenn — und nur wenn — Sie eine Sprache oder ein Farbdesign auswählen, merkt sich die App dies im lokalen Speicher Ihres Browsers:",
      ],
      list: [
        "`pj-locale`: die gewählte Sprache",
        "`pj-theme`: hell oder dunkel",
      ],
    },
    {
      heading: "Cookies und Einstellungen",
      body: [
        "Wir verwenden keine Cookies. Die beiden Werte bleiben auf Ihrem Gerät, werden nie an uns übermittelt und dienen nur dazu, dass die App beim nächsten Mal so aussieht, wie Sie es wünschen. Solange Sie nichts wählen, folgt die App einfach der Sprache Ihres Browsers und dem Design Ihres Systems, ohne etwas zu speichern. Sie können die gespeicherten Werte jederzeit entfernen, indem Sie die Daten dieser Website in den Browser-Einstellungen löschen.",
      ],
    },
    {
      heading: "Hosting und technische Daten",
      body: [
        "Die Website wird über Microsoft Azure Static Web Apps ausgeliefert. Wie jeder Webhoster kann Microsoft technische Anfragedaten verarbeiten — etwa IP-Adresse, Browsertyp, Zeitpunkt und aufgerufene Seite —, um die Website auszuliefern, abzusichern und Fehler zu beheben. Wir setzen keine eigene Analyse oder Nachverfolgung ein und nutzen diese Daten nicht, um Sie zu identifizieren. Wie Microsoft mit Daten umgeht, beschreibt die Datenschutzerklärung von Microsoft.",
      ],
    },
    {
      heading: "Drittanbieter",
      body: [
        "Es gibt keine. Schriften sind Teil der Website und werden nicht von einem Schriftanbieter geladen; es gibt keine Werbung, eingebetteten Widgets oder Social-Media-Schaltflächen.",
      ],
    },
    {
      heading: "Ihre Rechte",
      body: [
        "Da die App keine personenbezogenen Daten erhebt, gibt es normalerweise nichts, das wir Ihnen mitteilen, berichtigen oder löschen könnten. Sind Sie in der EU oder im EWR, stehen Ihnen dennoch die Rechte der DSGVO zu: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch sowie das Recht auf Beschwerde bei Ihrer Datenschutzbehörde. Bei Fragen können Sie sich gern an uns wenden.",
      ],
    },
    {
      heading: "Änderungen dieser Erklärung",
      body: [
        "Sollten wir jemals ändern, wie die App mit Daten umgeht — etwa durch eine Funktion, die einen Server benötigt —, aktualisieren wir diese Seite vor der Änderung und erneuern das Datum oben.",
      ],
    },
  ],
  contact: {
    heading: "Kontakt",
    body: "Diese App wird von BaronDev betrieben. Fragen zum Datenschutz können Sie über",
    linkText: "GitHub",
  },
};

const fr: Policy = {
  footerPrivacy: "Politique de confidentialité",
  back: "Retour à PDF Joiner",
  title: "Politique de confidentialité",
  updated: (d) => `Dernière mise à jour : ${d}`,
  summaryTitle: "En bref",
  summary: [
    "Vos PDF sont traités entièrement dans votre navigateur. Ils ne sont jamais envoyés, stockés ni vus par quelqu’un d’autre.",
    "Pas de compte, pas de cookies, pas d’analyse, pas de publicité, pas de traceurs tiers.",
    "La seule chose enregistrée sur votre appareil est votre langue et votre thème — et uniquement si vous les choisissez vous-même.",
  ],
  sections: [
    {
      heading: "Vos fichiers",
      body: [
        "Les PDF que vous ajoutez sont lus et fusionnés par du code exécuté dans l’onglet de votre navigateur, avec la mémoire de votre propre appareil. Rien n’est envoyé à un serveur : nous n’avons donc rien à stocker, examiner ou perdre. Vous pouvez le vérifier dans l’onglet Réseau de votre navigateur pendant l’utilisation.",
        "Fermer ou recharger l’onglet supprime vos fichiers. Le PDF fusionné est créé sur votre appareil et téléchargé directement dessus.",
      ],
    },
    {
      heading: "Ce qui est enregistré sur votre appareil",
      body: [
        "Si — et seulement si — vous choisissez une langue ou un thème de couleur, l’application s’en souvient grâce au stockage local de votre navigateur :",
      ],
      list: [
        "`pj-locale` : la langue choisie",
        "`pj-theme` : clair ou sombre",
      ],
    },
    {
      heading: "Cookies et préférences",
      body: [
        "Nous n’utilisons pas de cookies. Les deux valeurs ci-dessus restent sur votre appareil, ne nous sont jamais transmises et servent uniquement à ce que l’application ait l’apparence souhaitée la prochaine fois. Tant que vous n’avez rien choisi, l’application suit simplement la langue de votre navigateur et le thème de votre système sans rien enregistrer. Vous pouvez supprimer ces valeurs à tout moment en effaçant les données de ce site dans les paramètres de votre navigateur.",
      ],
    },
    {
      heading: "Hébergement et données techniques",
      body: [
        "Le site est servi par Microsoft Azure Static Web Apps. Comme tout hébergeur, Microsoft peut traiter des données techniques de requête — telles que votre adresse IP, le type de navigateur, l’heure et la page demandée — pour diffuser le site, le sécuriser et résoudre les problèmes. Nous n’ajoutons ni analyse ni suivi et n’utilisons pas ces données pour vous identifier. Le traitement des données par Microsoft est décrit dans la déclaration de confidentialité de Microsoft.",
      ],
    },
    {
      heading: "Tiers",
      body: [
        "Il n’y en a aucun. Les polices sont intégrées au site au lieu d’être chargées depuis un fournisseur, et il n’y a ni publicité, ni widget intégré, ni bouton de réseau social.",
      ],
    },
    {
      heading: "Vos droits",
      body: [
        "L’application ne collectant pas de données personnelles, il n’y a normalement rien que nous puissions consulter, rectifier ou supprimer. Si vous êtes dans l’UE ou l’EEE, vous disposez néanmoins des droits prévus par le RGPD : accès, rectification, effacement, limitation, opposition, ainsi que le droit d’introduire une réclamation auprès de votre autorité de protection des données. N’hésitez pas à nous poser vos questions.",
      ],
    },
    {
      heading: "Modifications de cette politique",
      body: [
        "Si nous modifions un jour la façon dont l’application traite les données — par exemple en ajoutant une fonctionnalité nécessitant un serveur —, nous mettrons cette page à jour avant la mise en ligne et actualiserons la date en haut.",
      ],
    },
  ],
  contact: {
    heading: "Contact",
    body: "Cette application est exploitée par BaronDev. Les questions relatives à la vie privée peuvent être envoyées via",
    linkText: "GitHub",
  },
};

const es: Policy = {
  footerPrivacy: "Política de privacidad",
  back: "Volver a PDF Joiner",
  title: "Política de privacidad",
  updated: (d) => `Última actualización: ${d}`,
  summaryTitle: "En resumen",
  summary: [
    "Tus PDF se procesan por completo en tu navegador. Nunca se suben, almacenan ni los ve nadie más.",
    "Sin cuentas, sin cookies, sin analítica, sin publicidad, sin rastreadores de terceros.",
    "Lo único que se guarda en tu dispositivo es tu idioma y tu tema, y solo si los eliges tú.",
  ],
  sections: [
    {
      heading: "Tus archivos",
      body: [
        "Los PDF que añades se leen y se unen mediante código que se ejecuta en la pestaña de tu navegador, usando la memoria de tu propio dispositivo. No se envía nada a ningún servidor, así que no tenemos nada que almacenar, inspeccionar ni perder. Puedes comprobarlo en la pestaña de red de tu navegador mientras usas la aplicación.",
        "Al cerrar o recargar la pestaña se descartan tus archivos. El PDF unido se crea en tu dispositivo y se descarga directamente en él.",
      ],
    },
    {
      heading: "Qué se guarda en tu dispositivo",
      body: [
        "Si —y solo si— eliges un idioma o un tema de color, la aplicación lo recuerda usando el almacenamiento local de tu navegador:",
      ],
      list: [
        "`pj-locale`: el idioma elegido",
        "`pj-theme`: claro u oscuro",
      ],
    },
    {
      heading: "Cookies y preferencias",
      body: [
        "No usamos cookies. Los dos valores anteriores permanecen en tu dispositivo, nunca se nos envían y existen solo para que la aplicación se vea como pediste la próxima vez. Mientras no elijas, la aplicación simplemente sigue el idioma de tu navegador y el tema de tu sistema sin guardar nada. Puedes borrar los valores guardados en cualquier momento eliminando los datos de este sitio en la configuración de tu navegador.",
      ],
    },
    {
      heading: "Alojamiento y datos técnicos",
      body: [
        "El sitio se entrega mediante Microsoft Azure Static Web Apps. Como cualquier proveedor de alojamiento, Microsoft puede procesar datos técnicos de las solicitudes —como tu dirección IP, el tipo de navegador, la hora y la página solicitada— para servir el sitio, mantenerlo seguro y resolver problemas. No añadimos analítica ni seguimiento propios y no usamos estos datos para identificarte. El tratamiento de datos por parte de Microsoft se describe en la declaración de privacidad de Microsoft.",
      ],
    },
    {
      heading: "Terceros",
      body: [
        "No hay ninguno. Las fuentes se incluyen en el propio sitio en lugar de cargarse desde un proveedor externo, y no hay anuncios, widgets incrustados ni botones de redes sociales.",
      ],
    },
    {
      heading: "Tus derechos",
      body: [
        "Como la aplicación no recopila datos personales, normalmente no hay nada que podamos consultar, rectificar o eliminar. Si estás en la UE o el EEE, tienes igualmente los derechos del RGPD: acceso, rectificación, supresión, limitación, oposición y el derecho a presentar una reclamación ante tu autoridad de protección de datos. No dudes en contactarnos con cualquier pregunta.",
      ],
    },
    {
      heading: "Cambios en esta política",
      body: [
        "Si alguna vez cambiamos la forma en que la aplicación trata los datos —por ejemplo, añadiendo una función que necesite un servidor—, actualizaremos esta página antes de que el cambio entre en vigor y renovaremos la fecha de arriba.",
      ],
    },
  ],
  contact: {
    heading: "Contacto",
    body: "Esta aplicación la gestiona BaronDev. Las preguntas sobre privacidad pueden enviarse a través de",
    linkText: "GitHub",
  },
};

export const POLICIES: Record<Locale, Policy> = { en, pl, de, fr, es };
