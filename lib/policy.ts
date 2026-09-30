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
  contact: { heading: string; before: string; after: string; linkText: string };
};

const en: Policy = {
  footerPrivacy: "Privacy policy",
  back: "Back to PDF Joiner",
  title: "Privacy policy",
  updated: (d) => `Last updated ${d}`,
  summaryTitle: "In short",
  summary: [
    "Your PDFs are processed entirely in your browser. They are never uploaded, stored or seen by anyone else.",
    "No accounts, no analytics, no advertising, no third-party trackers — and no cookies of our own.",
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
        "We do not set any cookies ourselves. The two values above stay on your device, are never sent to us, and exist only so the app looks the way you asked next time. Until you choose, the app simply follows your browser's language and your system's theme without saving anything. You can remove the saved values at any time by clearing this site's data in your browser settings. The only cookie you may encounter is a strictly necessary security cookie from Cloudflare, described below.",
      ],
    },
    {
      heading: "Hosting and technical data",
      body: [
        "The site is delivered by Microsoft Azure Static Web Apps. As with any web host, Microsoft may process technical request data — such as your IP address, browser type, time and the page requested — to deliver the site, keep it secure and fix problems. We add no analytics or tracking of our own and do not use this data to identify you. Microsoft's own handling of data is described in the Microsoft privacy statement.",
      ],
    },
    {
      heading: "Domain and network (Cloudflare)",
      body: [
        "Our domain name is registered with Cloudflare, Inc., which acts as registrar. Traffic to this site is routed through Cloudflare's network (DNS and proxy), which sits between your browser and our host to speed up delivery and protect the site from attacks and abuse.",
        "To do this, Cloudflare processes technical request data such as your IP address, browser type and the pages requested, and may set a strictly necessary security cookie (for example for bot protection). We do not use Cloudflare for analytics or advertising, and we cannot use this data to identify you. Cloudflare's handling of data is described in the Cloudflare privacy policy.",
      ],
    },
    {
      heading: "Third parties",
      body: [
        "Apart from the infrastructure providers described above, there are none. Fonts are bundled with the site rather than loaded from a font provider, and there are no advertisements, embedded widgets or social media buttons.",
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
    before: "This app is operated by",
    after: "Questions about privacy can be sent via",
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
    "Bez kont, analityki, reklam i zewnętrznych skryptów śledzących — oraz bez własnych plików cookie.",
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
        "Sami nie ustawiamy żadnych plików cookie. Powyższe dwie wartości pozostają na Twoim urządzeniu, nigdy do nas nie trafiają i służą tylko temu, by aplikacja następnym razem wyglądała tak, jak chcesz. Dopóki nie dokonasz wyboru, aplikacja po prostu korzysta z języka przeglądarki i motywu systemu, niczego nie zapisując. Zapisane wartości możesz w każdej chwili usunąć, czyszcząc dane tej witryny w ustawieniach przeglądarki. Jedyny plik cookie, z którym możesz się spotkać, to niezbędny plik bezpieczeństwa od Cloudflare, opisany poniżej.",
      ],
    },
    {
      heading: "Hosting i dane techniczne",
      body: [
        "Witryna jest udostępniana przez Microsoft Azure Static Web Apps. Jak każdy dostawca hostingu, Microsoft może przetwarzać techniczne dane żądań — takie jak adres IP, typ przeglądarki, czas i żądana strona — aby dostarczać witrynę, dbać o jej bezpieczeństwo i usuwać problemy. Sami nie dodajemy analityki ani śledzenia i nie używamy tych danych do identyfikowania Ciebie. Sposób postępowania Microsoftu z danymi opisuje oświadczenie o ochronie prywatności Microsoft.",
      ],
    },
    {
      heading: "Domena i sieć (Cloudflare)",
      body: [
        "Nasza nazwa domeny jest zarejestrowana w Cloudflare, Inc., które pełni rolę rejestratora. Ruch do tej witryny przechodzi przez sieć Cloudflare (DNS i proxy), która znajduje się między Twoją przeglądarką a naszym hostingiem, aby przyspieszać dostarczanie i chronić witrynę przed atakami i nadużyciami.",
        "W tym celu Cloudflare przetwarza techniczne dane żądań, takie jak adres IP, typ przeglądarki i żądane strony, i może ustawić niezbędny plik cookie bezpieczeństwa (np. do ochrony przed botami). Nie używamy Cloudflare do analityki ani reklam i nie możemy na podstawie tych danych zidentyfikować Ciebie. Sposób postępowania Cloudflare z danymi opisuje polityka prywatności Cloudflare.",
      ],
    },
    {
      heading: "Podmioty trzecie",
      body: [
        "Poza opisanymi wyżej dostawcami infrastruktury — brak. Czcionki są dołączone do witryny, a nie ładowane od zewnętrznego dostawcy, i nie ma tu reklam, osadzonych widżetów ani przycisków mediów społecznościowych.",
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
    before: "Aplikację prowadzi",
    after: "Pytania dotyczące prywatności można kierować przez",
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
    "Keine Konten, keine Analyse, keine Werbung, keine Tracker von Drittanbietern — und keine eigenen Cookies.",
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
        "Wir setzen selbst keine Cookies. Die beiden Werte bleiben auf Ihrem Gerät, werden nie an uns übermittelt und dienen nur dazu, dass die App beim nächsten Mal so aussieht, wie Sie es wünschen. Solange Sie nichts wählen, folgt die App einfach der Sprache Ihres Browsers und dem Design Ihres Systems, ohne etwas zu speichern. Sie können die gespeicherten Werte jederzeit entfernen, indem Sie die Daten dieser Website in den Browser-Einstellungen löschen. Das einzige Cookie, dem Sie begegnen können, ist ein technisch notwendiges Sicherheits-Cookie von Cloudflare (siehe unten).",
      ],
    },
    {
      heading: "Hosting und technische Daten",
      body: [
        "Die Website wird über Microsoft Azure Static Web Apps ausgeliefert. Wie jeder Webhoster kann Microsoft technische Anfragedaten verarbeiten — etwa IP-Adresse, Browsertyp, Zeitpunkt und aufgerufene Seite —, um die Website auszuliefern, abzusichern und Fehler zu beheben. Wir setzen keine eigene Analyse oder Nachverfolgung ein und nutzen diese Daten nicht, um Sie zu identifizieren. Wie Microsoft mit Daten umgeht, beschreibt die Datenschutzerklärung von Microsoft.",
      ],
    },
    {
      heading: "Domain und Netzwerk (Cloudflare)",
      body: [
        "Unser Domainname ist bei Cloudflare, Inc. registriert, das als Registrar fungiert. Der Datenverkehr zu dieser Website läuft über das Netzwerk von Cloudflare (DNS und Proxy), das zwischen Ihrem Browser und unserem Hoster steht, um die Auslieferung zu beschleunigen und die Website vor Angriffen und Missbrauch zu schützen.",
        "Dabei verarbeitet Cloudflare technische Anfragedaten wie IP-Adresse, Browsertyp und aufgerufene Seiten und kann ein technisch notwendiges Sicherheits-Cookie setzen (etwa zum Schutz vor Bots). Wir nutzen Cloudflare weder für Analyse noch für Werbung und können Sie anhand dieser Daten nicht identifizieren. Wie Cloudflare mit Daten umgeht, beschreibt die Datenschutzerklärung von Cloudflare.",
      ],
    },
    {
      heading: "Drittanbieter",
      body: [
        "Abgesehen von den oben beschriebenen Infrastruktur-Anbietern gibt es keine. Schriften sind Teil der Website und werden nicht von einem Schriftanbieter geladen; es gibt keine Werbung, eingebetteten Widgets oder Social-Media-Schaltflächen.",
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
    "Pas de compte, pas d’analyse, pas de publicité, pas de traceurs tiers — et aucun cookie de notre part.",
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
        "Nous ne déposons aucun cookie nous-mêmes. Les deux valeurs ci-dessus restent sur votre appareil, ne nous sont jamais transmises et servent uniquement à ce que l’application ait l’apparence souhaitée la prochaine fois. Tant que vous n’avez rien choisi, l’application suit simplement la langue de votre navigateur et le thème de votre système sans rien enregistrer. Vous pouvez supprimer ces valeurs à tout moment en effaçant les données de ce site dans les paramètres de votre navigateur. Le seul cookie que vous pourriez rencontrer est un cookie de sécurité strictement nécessaire de Cloudflare, décrit ci-dessous.",
      ],
    },
    {
      heading: "Hébergement et données techniques",
      body: [
        "Le site est servi par Microsoft Azure Static Web Apps. Comme tout hébergeur, Microsoft peut traiter des données techniques de requête — telles que votre adresse IP, le type de navigateur, l’heure et la page demandée — pour diffuser le site, le sécuriser et résoudre les problèmes. Nous n’ajoutons ni analyse ni suivi et n’utilisons pas ces données pour vous identifier. Le traitement des données par Microsoft est décrit dans la déclaration de confidentialité de Microsoft.",
      ],
    },
    {
      heading: "Domaine et réseau (Cloudflare)",
      body: [
        "Notre nom de domaine est enregistré auprès de Cloudflare, Inc., qui agit en tant que bureau d’enregistrement. Le trafic vers ce site transite par le réseau de Cloudflare (DNS et proxy), placé entre votre navigateur et notre hébergeur pour accélérer la diffusion et protéger le site contre les attaques et les abus.",
        "Pour cela, Cloudflare traite des données techniques de requête telles que votre adresse IP, le type de navigateur et les pages demandées, et peut déposer un cookie de sécurité strictement nécessaire (par exemple pour la protection contre les robots). Nous n’utilisons pas Cloudflare pour l’analyse ni la publicité et ne pouvons pas vous identifier grâce à ces données. Le traitement des données par Cloudflare est décrit dans la politique de confidentialité de Cloudflare.",
      ],
    },
    {
      heading: "Tiers",
      body: [
        "Hormis les fournisseurs d’infrastructure décrits ci-dessus, il n’y en a aucun. Les polices sont intégrées au site au lieu d’être chargées depuis un fournisseur, et il n’y a ni publicité, ni widget intégré, ni bouton de réseau social.",
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
    before: "Cette application est exploitée par",
    after: "Les questions relatives à la vie privée peuvent être envoyées via",
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
    "Sin cuentas, sin analítica, sin publicidad, sin rastreadores de terceros — y sin cookies propias.",
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
        "No establecemos ninguna cookie por nuestra cuenta. Los dos valores anteriores permanecen en tu dispositivo, nunca se nos envían y existen solo para que la aplicación se vea como pediste la próxima vez. Mientras no elijas, la aplicación simplemente sigue el idioma de tu navegador y el tema de tu sistema sin guardar nada. Puedes borrar los valores guardados en cualquier momento eliminando los datos de este sitio en la configuración de tu navegador. La única cookie que podrías encontrar es una cookie de seguridad estrictamente necesaria de Cloudflare, descrita más abajo.",
      ],
    },
    {
      heading: "Alojamiento y datos técnicos",
      body: [
        "El sitio se entrega mediante Microsoft Azure Static Web Apps. Como cualquier proveedor de alojamiento, Microsoft puede procesar datos técnicos de las solicitudes —como tu dirección IP, el tipo de navegador, la hora y la página solicitada— para servir el sitio, mantenerlo seguro y resolver problemas. No añadimos analítica ni seguimiento propios y no usamos estos datos para identificarte. El tratamiento de datos por parte de Microsoft se describe en la declaración de privacidad de Microsoft.",
      ],
    },
    {
      heading: "Dominio y red (Cloudflare)",
      body: [
        "Nuestro nombre de dominio está registrado en Cloudflare, Inc., que actúa como registrador. El tráfico hacia este sitio pasa por la red de Cloudflare (DNS y proxy), situada entre tu navegador y nuestro alojamiento, para acelerar la entrega y proteger el sitio frente a ataques y abusos.",
        "Para ello, Cloudflare procesa datos técnicos de las solicitudes, como tu dirección IP, el tipo de navegador y las páginas solicitadas, y puede establecer una cookie de seguridad estrictamente necesaria (por ejemplo, para la protección frente a bots). No usamos Cloudflare para analítica ni publicidad y no podemos identificarte con estos datos. El tratamiento de datos por parte de Cloudflare se describe en la política de privacidad de Cloudflare.",
      ],
    },
    {
      heading: "Terceros",
      body: [
        "Aparte de los proveedores de infraestructura descritos arriba, no hay ninguno. Las fuentes se incluyen en el propio sitio en lugar de cargarse desde un proveedor externo, y no hay anuncios, widgets incrustados ni botones de redes sociales.",
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
    before: "Esta aplicación la gestiona",
    after: "Las preguntas sobre privacidad pueden enviarse a través de",
    linkText: "GitHub",
  },
};

export const POLICIES: Record<Locale, Policy> = { en, pl, de, fr, es };
