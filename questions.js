// ============================================================
//  QUIZ DUELL — FRAGENKATALOG
// ============================================================
//  Struktur pro Frage:
//    { frage: "Text?", antwort: "Lösung", bild: "url" (optional) }
//  - Wenn "bild" gesetzt ist und "frage" leer/kurz: Bild im Fokus.
//  - "frage" kann auch zusammen mit "bild" genutzt werden (z.B. "Welche Flagge?")
//
//  Jede Kategorie hat einen großen POOL pro Schwierigkeit (100..500).
//  Das Spiel zieht pro Runde zufällig je 1 Frage pro Stufe und merkt sich
//  gespielte Fragen, damit NIE Wiederholungen kommen (über localStorage).
//
//  Schwierigkeit: 1=leicht(100) ... 5=sehr schwer(500)
//  KEINE Schweiz-Fragen. Fokus Europa + Welt. Bewusst schwer.
// ============================================================

const FLAG = (code) => `https://flagcdn.com/w320/${code}.png`;
const LOGO = (domain) => `https://logo.clearbit.com/${domain}`;

// Jede Kategorie: { name, icon, levels: { 1:[...], 2:[...], 3:[...], 4:[...], 5:[...] } }
// Jede Stufe enthält MEHRERE Fragen (Pool). Das Spiel zieht zufällig.

const CATEGORIES = [

  // ========================================================
  // 1) FLAGGEN  (nur Bild + Standardfrage)
  // ========================================================
  {
    name: "FLAGGEN",
    icon: "🏴",
    levels: {
      1: [
        { frage: "Welche Flagge ist das?", antwort: "Italien",      bild: FLAG("it") },
        { frage: "Welche Flagge ist das?", antwort: "Frankreich",   bild: FLAG("fr") },
        { frage: "Welche Flagge ist das?", antwort: "Deutschland",  bild: FLAG("de") },
        { frage: "Welche Flagge ist das?", antwort: "Spanien",      bild: FLAG("es") },
        { frage: "Welche Flagge ist das?", antwort: "Japan",        bild: FLAG("jp") },
        { frage: "Welche Flagge ist das?", antwort: "Brasilien",    bild: FLAG("br") },
        { frage: "Welche Flagge ist das?", antwort: "Kanada",       bild: FLAG("ca") },
        { frage: "Welche Flagge ist das?", antwort: "Niederlande",  bild: FLAG("nl") },
      ],
      2: [
        { frage: "Welche Flagge ist das?", antwort: "Schottland",   bild: FLAG("gb-sct") },
        { frage: "Welche Flagge ist das?", antwort: "Schweden",     bild: FLAG("se") },
        { frage: "Welche Flagge ist das?", antwort: "Portugal",     bild: FLAG("pt") },
        { frage: "Welche Flagge ist das?", antwort: "Griechenland", bild: FLAG("gr") },
        { frage: "Welche Flagge ist das?", antwort: "Südkorea",     bild: FLAG("kr") },
        { frage: "Welche Flagge ist das?", antwort: "Argentinien",  bild: FLAG("ar") },
        { frage: "Welche Flagge ist das?", antwort: "Norwegen",     bild: FLAG("no") },
        { frage: "Welche Flagge ist das?", antwort: "Polen",        bild: FLAG("pl") },
      ],
      3: [
        { frage: "Welche Flagge ist das?", antwort: "Wales",        bild: FLAG("gb-wls") },
        { frage: "Welche Flagge ist das?", antwort: "Südafrika",    bild: FLAG("za") },
        { frage: "Welche Flagge ist das?", antwort: "Vietnam",      bild: FLAG("vn") },
        { frage: "Welche Flagge ist das?", antwort: "Kroatien",     bild: FLAG("hr") },
        { frage: "Welche Flagge ist das?", antwort: "Chile",        bild: FLAG("cl") },
        { frage: "Welche Flagge ist das?", antwort: "Tschechien",   bild: FLAG("cz") },
        { frage: "Welche Flagge ist das?", antwort: "Marokko",      bild: FLAG("ma") },
        { frage: "Welche Flagge ist das?", antwort: "Philippinen",  bild: FLAG("ph") },
      ],
      4: [
        { frage: "Welche Flagge ist das?", antwort: "Sri Lanka",    bild: FLAG("lk") },
        { frage: "Welche Flagge ist das?", antwort: "Slowenien",    bild: FLAG("si") },
        { frage: "Welche Flagge ist das?", antwort: "Uruguay",      bild: FLAG("uy") },
        { frage: "Welche Flagge ist das?", antwort: "Kasachstan",   bild: FLAG("kz") },
        { frage: "Welche Flagge ist das?", antwort: "Albanien",     bild: FLAG("al") },
        { frage: "Welche Flagge ist das?", antwort: "Nepal",        bild: FLAG("np") },
        { frage: "Welche Flagge ist das?", antwort: "Katar",        bild: FLAG("qa") },
        { frage: "Welche Flagge ist das?", antwort: "Litauen",      bild: FLAG("lt") },
      ],
      5: [
        { frage: "Welche Flagge ist das?", antwort: "Bhutan",       bild: FLAG("bt") },
        { frage: "Welche Flagge ist das?", antwort: "Kirgisistan",  bild: FLAG("kg") },
        { frage: "Welche Flagge ist das?", antwort: "Eritrea",      bild: FLAG("er") },
        { frage: "Welche Flagge ist das?", antwort: "Turkmenistan", bild: FLAG("tm") },
        { frage: "Welche Flagge ist das?", antwort: "Brunei",       bild: FLAG("bn") },
        { frage: "Welche Flagge ist das?", antwort: "Moldau",       bild: FLAG("md") },
        { frage: "Welche Flagge ist das?", antwort: "Mosambik",     bild: FLAG("mz") },
        { frage: "Welche Flagge ist das?", antwort: "Belize",       bild: FLAG("bz") },
      ],
    },
  },

  // ========================================================
  // 2) HAUPTSTÄDTE
  // ========================================================
  {
    name: "HAUPTSTÄDTE",
    icon: "🏛️",
    levels: {
      1: [
        { frage: "Wie heißt die Hauptstadt von Spanien?", antwort: "Madrid" },
        { frage: "Wie heißt die Hauptstadt von Italien?", antwort: "Rom" },
        { frage: "Wie heißt die Hauptstadt von Japan?", antwort: "Tokio" },
        { frage: "Wie heißt die Hauptstadt von Russland?", antwort: "Moskau" },
        { frage: "Wie heißt die Hauptstadt von Ägypten?", antwort: "Kairo" },
        { frage: "Wie heißt die Hauptstadt von Griechenland?", antwort: "Athen" },
      ],
      2: [
        { frage: "Wie heißt die Hauptstadt von Portugal?", antwort: "Lissabon" },
        { frage: "Wie heißt die Hauptstadt von Schweden?", antwort: "Stockholm" },
        { frage: "Wie heißt die Hauptstadt von Kanada?", antwort: "Ottawa" },
        { frage: "Wie heißt die Hauptstadt von Australien?", antwort: "Canberra" },
        { frage: "Wie heißt die Hauptstadt von Marokko?", antwort: "Rabat" },
        { frage: "Wie heißt die Hauptstadt von Argentinien?", antwort: "Buenos Aires" },
      ],
      3: [
        { frage: "Wie heißt die Hauptstadt von Kroatien?", antwort: "Zagreb" },
        { frage: "Wie heißt die Hauptstadt von Vietnam?", antwort: "Hanoi" },
        { frage: "Wie heißt die Hauptstadt von Neuseeland?", antwort: "Wellington" },
        { frage: "Wie heißt die Hauptstadt der Türkei?", antwort: "Ankara" },
        { frage: "Wie heißt die Hauptstadt von Nigeria?", antwort: "Abuja" },
        { frage: "Wie heißt die Hauptstadt von Indien?", antwort: "Neu-Delhi" },
      ],
      4: [
        { frage: "Wie heißt die Hauptstadt von Kasachstan?", antwort: "Astana" },
        { frage: "Wie heißt die Hauptstadt von Slowenien?", antwort: "Ljubljana" },
        { frage: "Wie heißt die Hauptstadt von Sri Lanka?", antwort: "Sri Jayawardenepura Kotte" },
        { frage: "Wie heißt die Hauptstadt von Myanmar?", antwort: "Naypyidaw" },
        { frage: "Wie heißt die Hauptstadt von Ecuador?", antwort: "Quito" },
        { frage: "Wie heißt die Hauptstadt von Aserbaidschan?", antwort: "Baku" },
      ],
      5: [
        { frage: "Wie heißt die Hauptstadt von Bhutan?", antwort: "Thimphu" },
        { frage: "Wie heißt die Hauptstadt von Kirgisistan?", antwort: "Bischkek" },
        { frage: "Wie heißt die Hauptstadt von Burkina Faso?", antwort: "Ouagadougou" },
        { frage: "Wie heißt die Hauptstadt von Eritrea?", antwort: "Asmara" },
        { frage: "Wie heißt die Hauptstadt von Suriname?", antwort: "Paramaribo" },
        { frage: "Wie heißt die Hauptstadt von Vanuatu?", antwort: "Port Vila" },
      ],
    },
  },

  // ========================================================
  // 3) ABKÜRZUNGEN
  // ========================================================
  {
    name: "ABKÜRZUNGEN",
    icon: "🔤",
    levels: {
      1: [
        { frage: "Wofür steht die Abkürzung 'USB'?", antwort: "Universal Serial Bus" },
        { frage: "Wofür steht die Abkürzung 'PDF'?", antwort: "Portable Document Format" },
        { frage: "Wofür steht die Abkürzung 'WWW'?", antwort: "World Wide Web" },
        { frage: "Wofür steht die Abkürzung 'PC'?", antwort: "Personal Computer" },
        { frage: "Wofür steht die Abkürzung 'GPS'?", antwort: "Global Positioning System" },
      ],
      2: [
        { frage: "Wofür steht die Abkürzung 'NASA'?", antwort: "National Aeronautics and Space Administration" },
        { frage: "Wofür steht die Abkürzung 'HTML'?", antwort: "HyperText Markup Language" },
        { frage: "Wofür steht die Abkürzung 'RAM'?", antwort: "Random Access Memory" },
        { frage: "Wofür steht die Abkürzung 'DNA'?", antwort: "Deoxyribonucleic Acid (Desoxyribonukleinsäure)" },
        { frage: "Wofür steht die Abkürzung 'FBI'?", antwort: "Federal Bureau of Investigation" },
      ],
      3: [
        { frage: "Wofür steht die Abkürzung 'LASER'?", antwort: "Light Amplification by Stimulated Emission of Radiation" },
        { frage: "Wofür steht die Abkürzung 'PIN'?", antwort: "Personal Identification Number" },
        { frage: "Wofür steht die Abkürzung 'HTTP'?", antwort: "HyperText Transfer Protocol" },
        { frage: "Wofür steht die Abkürzung 'CPU'?", antwort: "Central Processing Unit" },
        { frage: "Wofür steht die Abkürzung 'UNESCO'?", antwort: "United Nations Educational, Scientific and Cultural Organization" },
      ],
      4: [
        { frage: "Wofür steht die Abkürzung 'SCUBA'?", antwort: "Self-Contained Underwater Breathing Apparatus" },
        { frage: "Wofür steht die Abkürzung 'RADAR'?", antwort: "Radio Detection and Ranging" },
        { frage: "Wofür steht die Abkürzung 'SIM' (SIM-Karte)?", antwort: "Subscriber Identity Module" },
        { frage: "Wofür steht die Abkürzung 'BIOS'?", antwort: "Basic Input Output System" },
        { frage: "Wofür steht die Abkürzung 'NATO'?", antwort: "North Atlantic Treaty Organization" },
      ],
      5: [
        { frage: "Wofür steht die Abkürzung 'MIDI'?", antwort: "Musical Instrument Digital Interface" },
        { frage: "Wofür steht die Abkürzung 'JPEG'?", antwort: "Joint Photographic Experts Group" },
        { frage: "Wofür steht die Abkürzung 'OPEC'?", antwort: "Organization of the Petroleum Exporting Countries" },
        { frage: "Wofür steht die Abkürzung 'GIF'?", antwort: "Graphics Interchange Format" },
        { frage: "Wofür steht die Abkürzung 'TASER'?", antwort: "Thomas A. Swift's Electric Rifle" },
      ],
    },
  },

  // ========================================================
  // 4) WISSENSCHAFT
  // ========================================================
  {
    name: "WISSENSCHAFT",
    icon: "🔬",
    levels: {
      1: [
        { frage: "Welches Gas atmen Menschen zum Überleben ein?", antwort: "Sauerstoff" },
        { frage: "Wie viele Planeten hat unser Sonnensystem?", antwort: "8" },
        { frage: "Welches ist das chemische Symbol für Wasser?", antwort: "H₂O" },
        { frage: "Welches Organ pumpt das Blut durch den Körper?", antwort: "Das Herz" },
        { frage: "Welcher Planet ist der Sonne am nächsten?", antwort: "Merkur" },
      ],
      2: [
        { frage: "Wie heißt das chemische Element mit dem Symbol 'Fe'?", antwort: "Eisen" },
        { frage: "Welche Kraft hält uns auf dem Boden?", antwort: "Die Schwerkraft (Gravitation)" },
        { frage: "Wie viele Knochen hat ein erwachsener Mensch?", antwort: "206" },
        { frage: "Welches Tier hat das größte Gehirn?", antwort: "Der Pottwal" },
        { frage: "Welches ist das härteste natürliche Material?", antwort: "Diamant" },
      ],
      3: [
        { frage: "Wie heißt das Element mit der Ordnungszahl 79?", antwort: "Gold (Au)" },
        { frage: "Welcher Wissenschaftler formulierte die Relativitätstheorie?", antwort: "Albert Einstein" },
        { frage: "Wie nennt man die Umwandlung von Wasser in Dampf?", antwort: "Verdampfung / Verdunstung" },
        { frage: "Welches ist das häufigste Element im Universum?", antwort: "Wasserstoff" },
        { frage: "Wie viele Herzkammern hat ein menschliches Herz?", antwort: "4 (2 Vorhöfe, 2 Kammern)" },
      ],
      4: [
        { frage: "Wie heißt das Teilchen mit positiver Ladung im Atomkern?", antwort: "Das Proton" },
        { frage: "Welches Element hat das chemische Symbol 'W'?", antwort: "Wolfram" },
        { frage: "Wie nennt man die Lehre von den Pilzen?", antwort: "Mykologie" },
        { frage: "Wie schnell ist Licht (ungefähr, in km/s)?", antwort: "Ca. 300.000 km/s" },
        { frage: "Wer entdeckte das Penicillin?", antwort: "Alexander Fleming" },
      ],
      5: [
        { frage: "Wie heißt das schwerste natürlich vorkommende Element?", antwort: "Uran" },
        { frage: "Wie nennt man den Punkt, an dem ein Stern zum Schwarzen Loch kollabiert (Grenze)?", antwort: "Ereignishorizont" },
        { frage: "Welche Einheit misst die elektrische Kapazität?", antwort: "Farad" },
        { frage: "Wie heißt das Protein, das Sauerstoff im Blut transportiert?", antwort: "Hämoglobin" },
        { frage: "Wie nennt man den Effekt, dass sich die Frequenz bei Bewegung ändert?", antwort: "Doppler-Effekt" },
      ],
    },
  },

  // ========================================================
  // 5) GESCHICHTE
  // ========================================================
  {
    name: "GESCHICHTE",
    icon: "📜",
    levels: {
      1: [
        { frage: "In welchem Jahr endete der Zweite Weltkrieg?", antwort: "1945" },
        { frage: "Welches Bauwerk in Ägypten gehört zu den Weltwundern?", antwort: "Die Pyramiden von Gizeh" },
        { frage: "Wer war der erste Mensch auf dem Mond?", antwort: "Neil Armstrong" },
        { frage: "Welche Mauer fiel 1989?", antwort: "Die Berliner Mauer" },
        { frage: "Welches Reich baute das Kolosseum?", antwort: "Das Römische Reich" },
      ],
      2: [
        { frage: "Wer war der erste Kaiser von Rom?", antwort: "Augustus" },
        { frage: "In welchem Jahr begann der Erste Weltkrieg?", antwort: "1914" },
        { frage: "Welcher Entdecker erreichte 1492 Amerika?", antwort: "Christoph Kolumbus" },
        { frage: "Wie hieß der ägyptische Sonnengott?", antwort: "Ra" },
        { frage: "Welche Königin regierte England über 60 Jahre im 19. Jahrhundert?", antwort: "Königin Victoria" },
      ],
      3: [
        { frage: "Welcher Vertrag beendete offiziell den Ersten Weltkrieg?", antwort: "Der Vertrag von Versailles" },
        { frage: "Wie hieß die erste Dynastie, die China vereinte?", antwort: "Die Qin-Dynastie" },
        { frage: "In welchem Jahr wurde die Französische Revolution ausgelöst?", antwort: "1789" },
        { frage: "Wer war der Anführer der Mongolen im 13. Jahrhundert?", antwort: "Dschingis Khan" },
        { frage: "Wie hieß das Schiff, mit dem die Pilgerväter nach Amerika kamen?", antwort: "Die Mayflower" },
      ],
      4: [
        { frage: "Wie hieß der Friedensschluss von 1648, der den Dreißigjährigen Krieg beendete?", antwort: "Der Westfälische Friede" },
        { frage: "Welcher Pharao ließ Abu Simbel errichten?", antwort: "Ramses II." },
        { frage: "In welchem Jahr wurde Konstantinopel von den Osmanen erobert?", antwort: "1453" },
        { frage: "Wie hieß die Seuche, die im 14. Jh. Europa verwüstete?", antwort: "Der Schwarze Tod (Pest)" },
        { frage: "Welche Zivilisation baute Machu Picchu?", antwort: "Die Inka" },
      ],
      5: [
        { frage: "Wie hieß der babylonische König, der einen der ältesten Gesetzeskodizes schuf?", antwort: "Hammurabi" },
        { frage: "In welchem Jahr fand die Schlacht von Hastings statt?", antwort: "1066" },
        { frage: "Wie hieß das antike Reich, das Hannibal gegen Rom anführte?", antwort: "Karthago" },
        { frage: "Welcher Vertrag teilte die Neue Welt zwischen Spanien und Portugal?", antwort: "Der Vertrag von Tordesillas" },
        { frage: "Wie hieß der letzte Pharao des alten Ägypten?", antwort: "Kleopatra VII." },
      ],
    },
  },

  // ========================================================
  // 6) FÜLLE DIE LÜCKE (Sprichwörter & Redewendungen)
  // ========================================================
  {
    name: "FÜLLE DIE LÜCKE",
    icon: "✏️",
    levels: {
      1: [
        { frage: "Der frühe Vogel fängt den ___.", antwort: "Wurm" },
        { frage: "Lügen haben kurze ___.", antwort: "Beine" },
        { frage: "Wer A sagt, muss auch ___ sagen.", antwort: "B" },
        { frage: "Aller guten Dinge sind ___.", antwort: "drei" },
        { frage: "Übung macht den ___.", antwort: "Meister" },
      ],
      2: [
        { frage: "Morgenstund hat Gold im ___.", antwort: "Mund" },
        { frage: "Reden ist Silber, Schweigen ist ___.", antwort: "Gold" },
        { frage: "Was du heute kannst besorgen, das verschiebe nicht auf ___.", antwort: "morgen" },
        { frage: "Ende gut, alles ___.", antwort: "gut" },
        { frage: "Kleider machen ___.", antwort: "Leute" },
      ],
      3: [
        { frage: "Wer im Glashaus sitzt, soll nicht mit ___ werfen.", antwort: "Steinen" },
        { frage: "Der Apfel fällt nicht weit vom ___.", antwort: "Stamm" },
        { frage: "Einem geschenkten Gaul schaut man nicht ins ___.", antwort: "Maul" },
        { frage: "Hochmut kommt vor dem ___.", antwort: "Fall" },
        { frage: "Wer den Pfennig nicht ehrt, ist des ___ nicht wert.", antwort: "Talers" },
      ],
      4: [
        { frage: "Viele Köche verderben den ___.", antwort: "Brei" },
        { frage: "Stille Wasser sind ___.", antwort: "tief" },
        { frage: "Der Krug geht so lange zum Brunnen, bis er ___.", antwort: "bricht" },
        { frage: "Was Hänschen nicht lernt, lernt ___ nimmermehr.", antwort: "Hans" },
        { frage: "Unkraut vergeht ___.", antwort: "nicht" },
      ],
      5: [
        { frage: "Wes Brot ich ess, des Lied ich ___.", antwort: "sing" },
        { frage: "Müßiggang ist aller Laster ___.", antwort: "Anfang" },
        { frage: "Wer anderen eine Grube gräbt, fällt selbst ___.", antwort: "hinein" },
        { frage: "Es ist nicht alles Gold, was ___.", antwort: "glänzt" },
        { frage: "Pünktlichkeit ist die Höflichkeit der ___.", antwort: "Könige" },
      ],
    },
  },

  // ========================================================
  // 7) AB INS KINO (Filme)
  // ========================================================
  {
    name: "AB INS KINO",
    icon: "🎬",
    levels: {
      1: [
        { frage: "In welchem Film sagt eine Figur: 'Ich bin dein Vater'?", antwort: "Star Wars (Das Imperium schlägt zurück)" },
        { frage: "Welcher Film handelt von einem Clownfisch namens Nemo?", antwort: "Findet Nemo" },
        { frage: "In welchem Film sinkt ein berühmtes Schiff 1912?", antwort: "Titanic" },
        { frage: "Wie heißt der Zauberlehrling mit der Blitznarbe?", antwort: "Harry Potter" },
        { frage: "Welcher grüne Oger lebt in einem Sumpf?", antwort: "Shrek" },
      ],
      2: [
        { frage: "Wie heißt der Regisseur von 'Pulp Fiction'?", antwort: "Quentin Tarantino" },
        { frage: "In welchem Film träumt man in Träumen (mit DiCaprio)?", antwort: "Inception" },
        { frage: "Welcher Film zeigt einen Boxer namens Rocky?", antwort: "Rocky" },
        { frage: "Wie heißt der Löwenkönig im gleichnamigen Disney-Film?", antwort: "Simba" },
        { frage: "Welcher Film spielt im Hotel 'Overlook'?", antwort: "Shining" },
      ],
      3: [
        { frage: "Wer spielte den Joker in 'The Dark Knight' (2008)?", antwort: "Heath Ledger" },
        { frage: "Welcher Regisseur drehte 'Jurassic Park'?", antwort: "Steven Spielberg" },
        { frage: "In welchem Film lautet die Antwort '42'?", antwort: "Per Anhalter durch die Galaxis" },
        { frage: "Wie heißt das fiktive Metall in 'Black Panther'?", antwort: "Vibranium" },
        { frage: "Welcher Film gewann 2020 als erster nicht-englischsprachiger den Oscar als bester Film?", antwort: "Parasite" },
      ],
      4: [
        { frage: "Wer komponierte die Musik zu 'Der Pate'?", antwort: "Nino Rota" },
        { frage: "Wie heißt der Regisseur von 'Blade Runner' (1982)?", antwort: "Ridley Scott" },
        { frage: "In welchem Film gibt es ein Hotel namens 'Grand Budapest'?", antwort: "Grand Budapest Hotel" },
        { frage: "Welcher Schauspieler spielte in 'There Will Be Blood' die Hauptrolle?", antwort: "Daniel Day-Lewis" },
        { frage: "Wie heißt Kubricks Science-Fiction-Film von 1968?", antwort: "2001: Odyssee im Weltraum" },
      ],
      5: [
        { frage: "Welcher japanische Regisseur drehte 'Die sieben Samurai'?", antwort: "Akira Kurosawa" },
        { frage: "Wie heißt der erste abendfüllende Animationsfilm der Geschichte (1937)?", antwort: "Schneewittchen und die sieben Zwerge" },
        { frage: "Welcher Film von 1927 gilt als Meilenstein des deutschen Stummfilms (Stadt der Zukunft)?", antwort: "Metropolis" },
        { frage: "Wer führte Regie bei 'Mulholland Drive'?", antwort: "David Lynch" },
        { frage: "Welcher Film gewann 1942 den Oscar und spielt in einer Bar in Marokko?", antwort: "Casablanca" },
      ],
    },
  },

  // ========================================================
  // 8) MARKEN-LOGOS (nur Bild)
  // ========================================================
  {
    name: "LOGOS",
    icon: "®️",
    levels: {
      1: [
        { frage: "Welche Marke ist das?", antwort: "Apple",      bild: LOGO("apple.com") },
        { frage: "Welche Marke ist das?", antwort: "Nike",       bild: LOGO("nike.com") },
        { frage: "Welche Marke ist das?", antwort: "McDonald's", bild: LOGO("mcdonalds.com") },
        { frage: "Welche Marke ist das?", antwort: "Coca-Cola",  bild: LOGO("coca-cola.com") },
        { frage: "Welche Marke ist das?", antwort: "Adidas",     bild: LOGO("adidas.com") },
      ],
      2: [
        { frage: "Welche Marke ist das?", antwort: "Spotify",    bild: LOGO("spotify.com") },
        { frage: "Welche Marke ist das?", antwort: "Netflix",    bild: LOGO("netflix.com") },
        { frage: "Welche Marke ist das?", antwort: "Amazon",     bild: LOGO("amazon.com") },
        { frage: "Welche Marke ist das?", antwort: "BMW",        bild: LOGO("bmw.com") },
        { frage: "Welche Marke ist das?", antwort: "Pepsi",      bild: LOGO("pepsi.com") },
      ],
      3: [
        { frage: "Welche Marke ist das?", antwort: "Lacoste",    bild: LOGO("lacoste.com") },
        { frage: "Welche Marke ist das?", antwort: "Puma",       bild: LOGO("puma.com") },
        { frage: "Welche Marke ist das?", antwort: "Red Bull",   bild: LOGO("redbull.com") },
        { frage: "Welche Marke ist das?", antwort: "Lego",       bild: LOGO("lego.com") },
        { frage: "Welche Marke ist das?", antwort: "Ferrari",    bild: LOGO("ferrari.com") },
      ],
      4: [
        { frage: "Welche Marke ist das?", antwort: "Razer",      bild: LOGO("razer.com") },
        { frage: "Welche Marke ist das?", antwort: "Logitech",   bild: LOGO("logitech.com") },
        { frage: "Welche Marke ist das?", antwort: "Patagonia",  bild: LOGO("patagonia.com") },
        { frage: "Welche Marke ist das?", antwort: "Stripe",     bild: LOGO("stripe.com") },
        { frage: "Welche Marke ist das?", antwort: "Twitch",     bild: LOGO("twitch.tv") },
      ],
      5: [
        { frage: "Welche Marke ist das?", antwort: "Notion",     bild: LOGO("notion.so") },
        { frage: "Welche Marke ist das?", antwort: "Figma",      bild: LOGO("figma.com") },
        { frage: "Welche Marke ist das?", antwort: "Vercel",     bild: LOGO("vercel.com") },
        { frage: "Welche Marke ist das?", antwort: "Supabase",   bild: LOGO("supabase.com") },
        { frage: "Welche Marke ist das?", antwort: "Cloudflare", bild: LOGO("cloudflare.com") },
      ],
    },
  },

  // ========================================================
  // 9) GAMING
  // ========================================================
  {
    name: "GAMING",
    icon: "🎮",
    levels: {
      1: [
        { frage: "In welchem Spiel baust du aus Blöcken und bekämpfst Creeper?", antwort: "Minecraft" },
        { frage: "Wie heißt der italienische Klempner von Nintendo?", antwort: "Mario" },
        { frage: "In welchem Battle-Royale-Spiel baut man Wände aus Holz?", antwort: "Fortnite" },
        { frage: "Welcher gelbe Charakter frisst Punkte in einem Labyrinth?", antwort: "Pac-Man" },
        { frage: "Wie heißt der blaue Igel von Sega?", antwort: "Sonic" },
      ],
      2: [
        { frage: "Wie viele Champions gibt es ungefähr in League of Legends (2024, gerundet auf 10)?", antwort: "Ca. 170" },
        { frage: "In welchem Spiel pflanzt man, um Zombies abzuwehren?", antwort: "Plants vs. Zombies" },
        { frage: "Wie heißt die Hauptwährung in 'Animal Crossing'?", antwort: "Sternis (Bells)" },
        { frage: "In welchem Spiel gibt es die Rolle des 'Impostor'?", antwort: "Among Us" },
        { frage: "Wie heißt das Studio hinter 'The Witcher 3'?", antwort: "CD Projekt Red" },
      ],
      3: [
        { frage: "Wie heißt die Map, die in 'Counter-Strike' am bekanntesten ist (Bomben-Map mit 'Dust')?", antwort: "Dust II" },
        { frage: "In League of Legends: Wie heißt der Drache, der dauerhaft Stats gibt (4. gefangen)?", antwort: "Elder-Drache (bzw. Seelen-Buff)" },
        { frage: "Welcher Charakter ist das Maskottchen von 'Half-Life'?", antwort: "Gordon Freeman" },
        { frage: "Wie heißt die fiktive Stadt in 'Grand Theft Auto V'?", antwort: "Los Santos" },
        { frage: "In welchem Spiel sammelt man 'Vaults' und Loot in einer Wüstenwelt (Cel-Shading)?", antwort: "Borderlands" },
      ],
      4: [
        { frage: "Wie heißt der Entwickler von 'Dark Souls' und 'Elden Ring'?", antwort: "FromSoftware" },
        { frage: "Welcher Komponist schrieb die Musik zu 'The Legend of Zelda'?", antwort: "Koji Kondo" },
        { frage: "Wie hieß das allererste kommerzielle Videospiel (1971, Arcade)?", antwort: "Computer Space" },
        { frage: "In Minecraft: Wie viele Augen des Enders braucht man, um das Portal zu aktivieren?", antwort: "12" },
        { frage: "Wie heißt die Engine hinter 'Fortnite' und vielen AAA-Spielen?", antwort: "Unreal Engine" },
      ],
      5: [
        { frage: "Wie hieß das erste Pokémon im offiziellen Pokédex (Nummer 001)?", antwort: "Bisasam (Bulbasaur)" },
        { frage: "Welches Spiel von 1980 gilt als Ursprung des Begriffs 'Roguelike'?", antwort: "Rogue" },
        { frage: "Wie heißt der schwerste Boss-Gegner-Typ in 'Dark Souls', benannt nach einem Ritter (NK)?", antwort: "Black Knight / Namenloser König (Nameless King)" },
        { frage: "In welchem Jahr erschien das originale 'Doom'?", antwort: "1993" },
        { frage: "Wie heißt der Gründer von Valve und Steam?", antwort: "Gabe Newell" },
      ],
    },
  },

  // ========================================================
  // 10) MUSIK
  // ========================================================
  {
    name: "MUSIK",
    icon: "🎵",
    levels: {
      1: [
        { frage: "Welche Band sang 'Bohemian Rhapsody'?", antwort: "Queen" },
        { frage: "Wie heißt die Sängerin von 'Shape of You'? (Sänger)", antwort: "Ed Sheeran" },
        { frage: "Welcher 'King of Pop' sang 'Thriller'?", antwort: "Michael Jackson" },
        { frage: "Welche Band schrieb 'Let It Be'?", antwort: "The Beatles" },
        { frage: "Wer sang 'Bad Guy' (2019)?", antwort: "Billie Eilish" },
      ],
      2: [
        { frage: "Aus welchem Land kommt die Band ABBA?", antwort: "Schweden" },
        { frage: "Welcher Rapper veröffentlichte 'The Marshall Mathers LP'?", antwort: "Eminem" },
        { frage: "Wie heißt das meistverkaufte Album aller Zeiten (Michael Jackson)?", antwort: "Thriller" },
        { frage: "Welche Sängerin ist für die 'Eras Tour' bekannt?", antwort: "Taylor Swift" },
        { frage: "Welche Band sang 'Smells Like Teen Spirit'?", antwort: "Nirvana" },
      ],
      3: [
        { frage: "Wie viele Saiten hat eine Standard-Gitarre?", antwort: "6" },
        { frage: "Welcher Komponist wurde taub und schrieb trotzdem weiter?", antwort: "Ludwig van Beethoven" },
        { frage: "Wie heißt das Soloalbum von Pink Floyd mit dem Prisma-Cover?", antwort: "The Dark Side of the Moon" },
        { frage: "Welcher DJ produzierte 'Levels'?", antwort: "Avicii" },
        { frage: "Aus welcher Stadt stammt der 'Motown'-Sound?", antwort: "Detroit" },
      ],
      4: [
        { frage: "Wie heißt das Tempo-Maß in der Musik (Schläge pro Minute)?", antwort: "BPM (Beats per Minute)" },
        { frage: "Welcher Jazz-Trompeter wird 'Satchmo' genannt?", antwort: "Louis Armstrong" },
        { frage: "Wie nennt man eine Komposition für 5 Instrumente?", antwort: "Ein Quintett" },
        { frage: "Welcher Komponist schrieb 'Die vier Jahreszeiten'?", antwort: "Antonio Vivaldi" },
        { frage: "Wie heißt das Intervall von acht Tönen?", antwort: "Eine Oktave" },
      ],
      5: [
        { frage: "Wie heißt die Tonart ohne Vorzeichen (Dur)?", antwort: "C-Dur" },
        { frage: "Welcher Komponist schrieb die unvollendete Sinfonie?", antwort: "Franz Schubert" },
        { frage: "Wie nennt man den Wechsel von einer Tonart in eine andere?", antwort: "Modulation" },
        { frage: "Welches Album von 1966 der Beach Boys gilt als revolutionär?", antwort: "Pet Sounds" },
        { frage: "Wie heißt das tiefste Mitglied der Streichinstrumente im Orchester?", antwort: "Der Kontrabass" },
      ],
    },
  },

  // ========================================================
  // 11) GEOGRAFIE
  // ========================================================
  {
    name: "GEOGRAFIE",
    icon: "🌍",
    levels: {
      1: [
        { frage: "Welcher ist der längste Fluss der Welt?", antwort: "Der Nil (bzw. Amazonas, je nach Messung)" },
        { frage: "Auf welchem Kontinent liegt Ägypten?", antwort: "Afrika" },
        { frage: "Welcher Ozean ist der größte?", antwort: "Der Pazifik" },
        { frage: "Welches ist das größte Land der Welt (Fläche)?", antwort: "Russland" },
        { frage: "Welcher Berg ist der höchste der Welt?", antwort: "Mount Everest" },
      ],
      2: [
        { frage: "Welche Wüste ist die größte (heiße) der Welt?", antwort: "Die Sahara" },
        { frage: "Durch welche Stadt fließt die Themse?", antwort: "London" },
        { frage: "Welches Land hat die meisten Einwohner?", antwort: "Indien (bzw. China)" },
        { frage: "Welcher See ist der tiefste der Welt?", antwort: "Der Baikalsee" },
        { frage: "Welches Land hat die Form eines Stiefels?", antwort: "Italien" },
      ],
      3: [
        { frage: "Welche Meerenge trennt Europa von Afrika?", antwort: "Die Straße von Gibraltar" },
        { frage: "Welcher ist der höchste Berg Afrikas?", antwort: "Der Kilimandscharo" },
        { frage: "Wie heißt die Hauptstadt-Region, durch die der Äquator in Südamerika verläuft?", antwort: "Ecuador" },
        { frage: "Welches Land hat die längste Küstenlinie der Welt?", antwort: "Kanada" },
        { frage: "Welcher Fluss fließt durch Paris?", antwort: "Die Seine" },
      ],
      4: [
        { frage: "Welches Binnenmeer liegt zwischen Europa und Asien (größter See der Welt)?", antwort: "Das Kaspische Meer" },
        { frage: "Welches Land hat die meisten Zeitzonen?", antwort: "Frankreich (durch Überseegebiete)" },
        { frage: "Wie heißt die tiefste Stelle der Ozeane?", antwort: "Der Marianengraben (Challengertief)" },
        { frage: "Welcher Wasserfall ist der höchste der Welt?", antwort: "Der Salto Ángel (Venezuela)" },
        { frage: "Welches Land grenzt an die meisten anderen Länder?", antwort: "China (14 Nachbarn)" },
      ],
      5: [
        { frage: "Welches ist das einzige Land, das sowohl am Atlantik als auch am Indischen Ozean und am Mittelmeer liegt?", antwort: "Es gibt keines am Mittelmeer + Indik direkt – Trick: Antwort 'Ägypten' (Mittelmeer + Rotes Meer)" },
        { frage: "Wie heißt die größte Insel der Welt?", antwort: "Grönland" },
        { frage: "Welches Land liegt vollständig innerhalb eines anderen Landes (es gibt 3)?", antwort: "Vatikan, San Marino oder Lesotho" },
        { frage: "Welcher ist der salzigste See der Welt?", antwort: "Der Don-Juan-See (Antarktis)" },
        { frage: "Wie heißt die Hauptstadt der Mongolei?", antwort: "Ulaanbaatar" },
      ],
    },
  },

  // ========================================================
  // 12) ESSEN & TRINKEN
  // ========================================================
  {
    name: "ESSEN & TRINKEN",
    icon: "🍕",
    levels: {
      1: [
        { frage: "Aus welchem Land stammt die Pizza?", antwort: "Italien" },
        { frage: "Welches Getränk wird aus Bohnen gebrüht und macht wach?", antwort: "Kaffee" },
        { frage: "Welche Frucht ist gelb und gebogen?", antwort: "Die Banane" },
        { frage: "Aus welchem Tier kommt normale Milch?", antwort: "Aus der Kuh" },
        { frage: "Welches Gemüse macht beim Schneiden weinen?", antwort: "Die Zwiebel" },
      ],
      2: [
        { frage: "Aus welchem Land stammt Sushi?", antwort: "Japan" },
        { frage: "Welche Nuss steckt in Marzipan?", antwort: "Die Mandel" },
        { frage: "Wie heißt der scharfe grüne japanische Meerrettich?", antwort: "Wasabi" },
        { frage: "Aus welcher Pflanze wird Schokolade gewonnen?", antwort: "Aus der Kakaobohne" },
        { frage: "Welches Land ist berühmt für Croissants?", antwort: "Frankreich" },
      ],
      3: [
        { frage: "Wie heißt der teuerste Gewürz der Welt (Blütenfäden)?", antwort: "Safran" },
        { frage: "Aus welcher Region kommt der echte Champagner?", antwort: "Champagne (Frankreich)" },
        { frage: "Welche Pilzart ist eine teure Delikatesse, die mit Schweinen gesucht wird?", antwort: "Der Trüffel" },
        { frage: "Wie heißt die japanische Kunst, Fisch roh zu servieren?", antwort: "Sashimi" },
        { frage: "Welches Tier liefert Foie Gras?", antwort: "Gans oder Ente" },
      ],
      4: [
        { frage: "Welche Käsesorte wird traditionell aus Büffelmilch gemacht (Mozzarella-Variante)?", antwort: "Mozzarella di Bufala" },
        { frage: "Wie heißt das mexikanische Mais-Fladenbrot?", antwort: "Tortilla" },
        { frage: "Aus welcher Frucht wird Tequila gewonnen?", antwort: "Aus der Agave" },
        { frage: "Wie heißt die Technik, Lebensmittel langsam bei niedriger Temperatur im Wasserbad zu garen?", antwort: "Sous-vide" },
        { frage: "Welches koreanische fermentierte Gericht aus Kohl ist weltbekannt?", antwort: "Kimchi" },
      ],
      5: [
        { frage: "Wie heißt der teuerste Kaffee der Welt, der von einer Schleichkatze 'verarbeitet' wird?", antwort: "Kopi Luwak" },
        { frage: "Welcher Fisch ist in Japan tödlich giftig, wenn falsch zubereitet?", antwort: "Fugu (Kugelfisch)" },
        { frage: "Wie heißt die Grundsoße der französischen Küche aus Mehl und Butter?", antwort: "Roux (bzw. Mehlschwitze)" },
        { frage: "Welches Gewürz gibt Curry seine gelbe Farbe?", antwort: "Kurkuma (Turmeric)" },
        { frage: "Wie nennt man die fünf Grundgeschmacksrichtungen inkl. der herzhaften?", antwort: "Süß, sauer, salzig, bitter, umami" },
      ],
    },
  },

];

// Export für Browser
if (typeof window !== 'undefined') {
  window.CATEGORIES = CATEGORIES;
}
