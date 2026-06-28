// ============================================================
//  QUIZ DUELL — FRAGENKATALOG (EINFACHE VERSION)
// ============================================================
//  Gleiche Kategorien wie das Original, aber deutlich leichtere
//  Fragen — gedacht für eine Gruppe, die es entspannter mag.
//  KEINE Schweiz-Fragen. FLAGGEN + LOGOS mit Bildern wie gehabt.
//
//  Einbinden: diese Datei als questions.js verwenden (umbenennen)
//  ODER im HTML statt der schweren Version laden:
//     <script src="questions-einfach.js"></script>
//  Logos weiterhin über logos.js (CATEGORIES.push am Ende dort).
// ============================================================

const FLAG = (code) => `https://flagcdn.com/w320/${code}.png`;

const CATEGORIES = [

  // ========================================================
  // 1) FLAGGEN  (nur die bekanntesten)
  // ========================================================
  {
    name: "FLAGGEN",
    icon: "🏴",
    levels: {
      1: [
        { frage: "Welche Flagge ist das?", antwort: "Deutschland",  bild: FLAG("de") },
        { frage: "Welche Flagge ist das?", antwort: "Frankreich",   bild: FLAG("fr") },
        { frage: "Welche Flagge ist das?", antwort: "Italien",      bild: FLAG("it") },
        { frage: "Welche Flagge ist das?", antwort: "Spanien",      bild: FLAG("es") },
        { frage: "Welche Flagge ist das?", antwort: "USA",          bild: FLAG("us") },
        { frage: "Welche Flagge ist das?", antwort: "Japan",        bild: FLAG("jp") },
      ],
      2: [
        { frage: "Welche Flagge ist das?", antwort: "Brasilien",    bild: FLAG("br") },
        { frage: "Welche Flagge ist das?", antwort: "Kanada",       bild: FLAG("ca") },
        { frage: "Welche Flagge ist das?", antwort: "Niederlande",  bild: FLAG("nl") },
        { frage: "Welche Flagge ist das?", antwort: "Schweden",     bild: FLAG("se") },
        { frage: "Welche Flagge ist das?", antwort: "China",        bild: FLAG("cn") },
        { frage: "Welche Flagge ist das?", antwort: "Australien",   bild: FLAG("au") },
      ],
      3: [
        { frage: "Welche Flagge ist das?", antwort: "Norwegen",     bild: FLAG("no") },
        { frage: "Welche Flagge ist das?", antwort: "Polen",        bild: FLAG("pl") },
        { frage: "Welche Flagge ist das?", antwort: "Griechenland", bild: FLAG("gr") },
        { frage: "Welche Flagge ist das?", antwort: "Portugal",     bild: FLAG("pt") },
        { frage: "Welche Flagge ist das?", antwort: "Mexiko",       bild: FLAG("mx") },
        { frage: "Welche Flagge ist das?", antwort: "Türkei",       bild: FLAG("tr") },
      ],
      4: [
        { frage: "Welche Flagge ist das?", antwort: "Argentinien",  bild: FLAG("ar") },
        { frage: "Welche Flagge ist das?", antwort: "Südkorea",     bild: FLAG("kr") },
        { frage: "Welche Flagge ist das?", antwort: "Indien",       bild: FLAG("in") },
        { frage: "Welche Flagge ist das?", antwort: "Irland",       bild: FLAG("ie") },
        { frage: "Welche Flagge ist das?", antwort: "Dänemark",     bild: FLAG("dk") },
        { frage: "Welche Flagge ist das?", antwort: "Belgien",      bild: FLAG("be") },
      ],
      5: [
        { frage: "Welche Flagge ist das?", antwort: "Finnland",     bild: FLAG("fi") },
        { frage: "Welche Flagge ist das?", antwort: "Österreich",   bild: FLAG("at") },
        { frage: "Welche Flagge ist das?", antwort: "Russland",     bild: FLAG("ru") },
        { frage: "Welche Flagge ist das?", antwort: "Südafrika",    bild: FLAG("za") },
        { frage: "Welche Flagge ist das?", antwort: "Ägypten",      bild: FLAG("eg") },
        { frage: "Welche Flagge ist das?", antwort: "Thailand",     bild: FLAG("th") },
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
        { frage: "Hauptstadt von Frankreich?", antwort: "Paris" },
        { frage: "Hauptstadt von Italien?", antwort: "Rom" },
        { frage: "Hauptstadt von Deutschland?", antwort: "Berlin" },
        { frage: "Hauptstadt von England?", antwort: "London" },
        { frage: "Hauptstadt von Spanien?", antwort: "Madrid" },
      ],
      2: [
        { frage: "Hauptstadt von Japan?", antwort: "Tokio" },
        { frage: "Hauptstadt von Russland?", antwort: "Moskau" },
        { frage: "Hauptstadt von den USA?", antwort: "Washington D.C." },
        { frage: "Hauptstadt von Griechenland?", antwort: "Athen" },
        { frage: "Hauptstadt von Ägypten?", antwort: "Kairo" },
      ],
      3: [
        { frage: "Hauptstadt von Portugal?", antwort: "Lissabon" },
        { frage: "Hauptstadt von Schweden?", antwort: "Stockholm" },
        { frage: "Hauptstadt von Österreich?", antwort: "Wien" },
        { frage: "Hauptstadt von Norwegen?", antwort: "Oslo" },
        { frage: "Hauptstadt von Polen?", antwort: "Warschau" },
      ],
      4: [
        { frage: "Hauptstadt von Kanada?", antwort: "Ottawa" },
        { frage: "Hauptstadt von Australien?", antwort: "Canberra" },
        { frage: "Hauptstadt von Brasilien?", antwort: "Brasília" },
        { frage: "Hauptstadt von Irland?", antwort: "Dublin" },
        { frage: "Hauptstadt der Türkei?", antwort: "Ankara" },
      ],
      5: [
        { frage: "Hauptstadt von Finnland?", antwort: "Helsinki" },
        { frage: "Hauptstadt von Dänemark?", antwort: "Kopenhagen" },
        { frage: "Hauptstadt von Argentinien?", antwort: "Buenos Aires" },
        { frage: "Hauptstadt von Indien?", antwort: "Neu-Delhi" },
        { frage: "Hauptstadt von Thailand?", antwort: "Bangkok" },
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
        { frage: "Wofür steht 'PC'?", antwort: "Personal Computer" },
        { frage: "Wofür steht 'WWW'?", antwort: "World Wide Web" },
        { frage: "Wofür steht 'USB'?", antwort: "Universal Serial Bus" },
        { frage: "Wofür steht 'DVD'?", antwort: "Digital Versatile" },
        { frage: "Wofür steht 'SMS'?", antwort: "Short Message Service" },
      ],
      2: [
        { frage: "Wofür steht 'GPS'?", antwort: "Global Positioning System" },
        { frage: "Wofür steht 'PDF'?", antwort: "Portable Document Format" },
        { frage: "Wofür steht 'FBI'?", antwort: "Federal Bureau of Investigation" },
        { frage: "Wofür steht 'NASA' (grob)?", antwort: "US-Raumfahrtbehörde" },
        { frage: "Wofür steht 'WLAN' (grob)?", antwort: "Wireless LAN (drahtloses Netzwerk)" },
      ],
      3: [
        { frage: "Wofür steht 'HTML'?", antwort: "HyperText Markup Language" },
        { frage: "Wofür steht 'RAM'?", antwort: "Random Access Memory" },
        { frage: "Wofür steht 'CPU'?", antwort: "Central Processing Unit" },
        { frage: "Wofür steht 'PIN'?", antwort: "Personal Identification Number" },
        { frage: "Wofür steht 'EU'?", antwort: "Europäische Union" },
      ],
      4: [
        { frage: "Wofür steht 'NATO'?", antwort: "Nordatlantisches Verteidigungsbündnis" },
        { frage: "Wofür steht 'UNO/UN'?", antwort: "Vereinte Nationen" },
        { frage: "Wofür steht 'WWW'-Adressanfang 'HTTP' (grob)?", antwort: "HyperText Transfer Protocol" },
        { frage: "Wofür steht 'LED'?", antwort: "Licht emittierende Diode" },
        { frage: "Wofür steht 'WC'?", antwort: "Water Closet" },
      ],
      5: [
        { frage: "Wofür steht 'JPG/JPEG'?", antwort: "Bildformat (Joint Photographic Experts Group)" },
        { frage: "Wofür steht 'GIF'?", antwort: "Graphics Interchange Format" },
        { frage: "Wofür steht 'ABS' beim Auto?", antwort: "Antiblockiersystem" },
        { frage: "Wofür steht 'DJ'?", antwort: "Disc Jockey" },
        { frage: "Wofür steht 'FAQ'?", antwort: "Häufig gestellte Fragen" },
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
        { frage: "Welches Gas atmen wir zum Leben ein?", antwort: "Sauerstoff" },
        { frage: "Welcher Planet ist unsere Heimat?", antwort: "Die Erde" },
        { frage: "Welche Farbe hat der Himmel bei klarem Wetter?", antwort: "Blau" },
        { frage: "Was friert bei 0 Grad?", antwort: "Wasser (zu Eis)" },
        { frage: "Welches Organ schlägt in deiner Brust?", antwort: "Das Herz" },
      ],
      2: [
        { frage: "Welcher Planet ist der Sonne am nächsten?", antwort: "Merkur" },
        { frage: "Wie viele Planeten hat das Sonnensystem?", antwort: "8" },
        { frage: "Was ist die chemische Formel von Wasser?", antwort: "H₂O" },
        { frage: "Welches Tier ist das größte der Welt?", antwort: "Der Blauwal" },
        { frage: "Was zieht uns zum Boden?", antwort: "Die Schwerkraft" },
      ],
      3: [
        { frage: "Welcher Planet heißt 'Roter Planet'?", antwort: "Mars" },
        { frage: "Welches Metall ist flüssig bei Zimmertemperatur?", antwort: "Quecksilber" },
        { frage: "Wie heißt das härteste natürliche Material?", antwort: "Diamant" },
        { frage: "Welches Gas brauchen Pflanzen?", antwort: "Kohlendioxid (CO₂)" },
        { frage: "Wie viele Beine hat eine Spinne?", antwort: "8" },
      ],
      4: [
        { frage: "Welcher Wissenschaftler ist für E=mc² bekannt?", antwort: "Albert Einstein" },
        { frage: "Welches Element hat das Symbol 'O'?", antwort: "Sauerstoff" },
        { frage: "Welches Element hat das Symbol 'Fe'?", antwort: "Eisen" },
        { frage: "Was misst man in Grad Celsius?", antwort: "Die Temperatur" },
        { frage: "Wie heißt die Kraft, die einen Magneten anzieht?", antwort: "Magnetismus" },
      ],
      5: [
        { frage: "Welches Element hat das Symbol 'Au'?", antwort: "Gold" },
        { frage: "Welcher Planet ist der größte?", antwort: "Jupiter" },
        { frage: "Welches Tier kann seine Farbe wechseln?", antwort: "Das Chamäleon" },
        { frage: "Wie schnell ist Licht ungefähr?", antwort: "Ca. 300.000 km/s" },
        { frage: "Welches Organ filtert das Blut?", antwort: "Die Niere" },
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
        { frage: "In welchem Jahr endete der 2. Weltkrieg?", antwort: "1945" },
        { frage: "Wer war der erste Mensch auf dem Mond?", antwort: "Neil Armstrong" },
        { frage: "Welche Mauer fiel 1989?", antwort: "Die Berliner Mauer" },
        { frage: "Welche Bauwerke stehen in Ägypten?", antwort: "Die Pyramiden" },
        { frage: "Welches Reich baute das Kolosseum?", antwort: "Das Römische Reich" },
      ],
      2: [
        { frage: "Wer entdeckte 1492 Amerika?", antwort: "Christoph Kolumbus" },
        { frage: "In welchem Jahr begann der 1. Weltkrieg?", antwort: "1914" },
        { frage: "Welches Schiff sank 1912?", antwort: "Die Titanic" },
        { frage: "Wer war ein berühmter ägyptischer Königstitel?", antwort: "Der Pharao" },
        { frage: "Welche Königin regierte England sehr lange?", antwort: "Elisabeth II." },
      ],
      3: [
        { frage: "In welchem Land stand die Berliner Mauer?", antwort: "Deutschland" },
        { frage: "Wer war ein berühmter französischer Kaiser?", antwort: "Napoleon" },
        { frage: "Welcher Forscher segelte mit der 'Santa Maria'?", antwort: "Christoph Kolumbus" },
        { frage: "Wie hieß der berühmte ägyptische Kindkönig?", antwort: "Tutanchamun" },
        { frage: "Welche Stadt war das Zentrum des Römischen Reiches?", antwort: "Rom" },
      ],
      4: [
        { frage: "In welchem Jahr begann die Französische Revolution?", antwort: "1789" },
        { frage: "Wer führte die Mongolen an?", antwort: "Dschingis Khan" },
        { frage: "Welches Volk baute Machu Picchu?", antwort: "Die Inka" },
        { frage: "Wie hieß die Seuche im Mittelalter?", antwort: "Die Pest" },
        { frage: "Welcher US-Präsident schaffte die Sklaverei ab?", antwort: "Abraham Lincoln" },
      ],
      5: [
        { frage: "In welchem Land lag das antike Sparta?", antwort: "Griechenland" },
        { frage: "Wie hieß der erste Kaiser von Rom?", antwort: "Augustus" },
        { frage: "Welche berühmte ägyptische Königin lebte zuletzt?", antwort: "Kleopatra" },
        { frage: "Welcher Erfinder gilt als Vater des Buchdrucks?", antwort: "Johannes Gutenberg" },
        { frage: "Wie hieß das Schiff der Pilgerväter nach Amerika?", antwort: "Die Mayflower" },
      ],
    },
  },

  // ========================================================
  // 6) FÜLLE DIE LÜCKE (Sprichwörter)
  // ========================================================
  {
    name: "FÜLLE DIE LÜCKE",
    icon: "✏️",
    levels: {
      1: [
        { frage: "Der frühe Vogel fängt den ___.", antwort: "Wurm" },
        { frage: "Übung macht den ___.", antwort: "Meister" },
        { frage: "Lügen haben kurze ___.", antwort: "Beine" },
        { frage: "Aller guten Dinge sind ___.", antwort: "drei" },
        { frage: "Ende gut, alles ___.", antwort: "gut" },
      ],
      2: [
        { frage: "Wer A sagt, muss auch ___ sagen.", antwort: "B" },
        { frage: "Reden ist Silber, Schweigen ist ___.", antwort: "Gold" },
        { frage: "Kleider machen ___.", antwort: "Leute" },
        { frage: "Morgenstund hat Gold im ___.", antwort: "Mund" },
        { frage: "Hunde, die bellen, ___ nicht.", antwort: "beißen" },
      ],
      3: [
        { frage: "Der Apfel fällt nicht weit vom ___.", antwort: "Stamm" },
        { frage: "Viele Köche verderben den ___.", antwort: "Brei" },
        { frage: "Stille Wasser sind ___.", antwort: "tief" },
        { frage: "Was du heute kannst besorgen, das verschiebe nicht auf ___.", antwort: "morgen" },
        { frage: "Wer im Glashaus sitzt, soll nicht mit ___ werfen.", antwort: "Steinen" },
      ],
      4: [
        { frage: "Einem geschenkten Gaul schaut man nicht ins ___.", antwort: "Maul" },
        { frage: "Hochmut kommt vor dem ___.", antwort: "Fall" },
        { frage: "Es ist nicht alles Gold, was ___.", antwort: "glänzt" },
        { frage: "Wer anderen eine Grube gräbt, fällt selbst ___.", antwort: "hinein" },
        { frage: "Übermut tut selten ___.", antwort: "gut" },
      ],
      5: [
        { frage: "Was Hänschen nicht lernt, lernt ___ nimmermehr.", antwort: "Hans" },
        { frage: "Der Krug geht so lange zum Brunnen, bis er ___.", antwort: "bricht" },
        { frage: "Unkraut vergeht ___.", antwort: "nicht" },
        { frage: "Probieren geht über ___.", antwort: "Studieren" },
        { frage: "Wie man in den Wald hineinruft, so ___ es heraus.", antwort: "schallt" },
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
        { frage: "In welchem Disney-Film geht es um einen Clownfisch ?", antwort: "Findet Nemo" },
        { frage: "Welcher grüne Oger lebt in einem Sumpf?", antwort: "Shrek" },
        { frage: "Wie heißt der Zauberer mit der Blitznarbe?", antwort: "Harry Potter" },
        { frage: "In welchem Film sinkt ein berühmtes Schiff?", antwort: "Titanic" },
        { frage: "Welcher Film hat einen Löwenkönig namens Simba?", antwort: "Der König der Löwen" },
      ],
      2: [
        { frage: "In welchem Film sagt man 'Ich bin dein Vater'?", antwort: "Star Wars" },
        { frage: "Welcher Spielzeug-Cowboy heißt Woody?", antwort: "Toy Story" },
        { frage: "In welchem Film fährt man mit einem DeLorean durch die Zeit?", antwort: "Zurück in die Zukunft" },
        { frage: "Welcher Film handelt von einer Eiskönigin namens Elsa?", antwort: "Die Eiskönigin (Frozen)" },
        { frage: "Wie heißt der Boxer-Film mit Sylvester Stallone?", antwort: "Rocky" },
      ],
      3: [
        { frage: "In welchem Film gibt es Dinosaurier in einem Park?", antwort: "Jurassic Park" },
        { frage: "Welcher Superheld ist Tony Stark?", antwort: "Iron Man" },
        { frage: "In welchem Film sucht man einen Ring im 'Auenland'?", antwort: "Der Herr der Ringe" },
        { frage: "Welcher Film hat einen Roboter namens WALL-E?", antwort: "WALL-E" },
        { frage: "Wie heißt der Film mit dem Affen Tarzan?", antwort: "Tarzan" },
      ],
      4: [
        { frage: "Welcher Regisseur drehte 'Jurassic Park'?", antwort: "Steven Spielberg" },
        { frage: "In welchem Film träumt man in Träumen (mit DiCaprio)?", antwort: "Inception" },
        { frage: "Welcher Schauspieler spielt Jack Sparrow?", antwort: "Johnny Depp" },
        { frage: "In welchem Film gibt es einen Clown namens 'Es'?", antwort: "Es (It)" },
        { frage: "Wie heißt der gelbe Bär, der Honig liebt?", antwort: "Winnie Puuh" },
      ],
      5: [
        { frage: "Wer spielte den Joker in 'The Dark Knight'?", antwort: "Heath Ledger" },
        { frage: "Welcher Film spielt fast nur auf einem sinkenden Schiff (1997)?", antwort: "Titanic" },
        { frage: "In welchem Film kämpft Neo gegen Maschinen?", antwort: "Matrix" },
        { frage: "Welcher Animationsfilm zeigt Gefühle im Kopf eines Mädchens?", antwort: "Alles steht Kopf (Inside Out)" },
        { frage: "Wie heißt der Hai-Film von Steven Spielberg (1975)?", antwort: "Der weiße Hai (Jaws)" },
      ],
    },
  },

  // ========================================================
  // 8) MARKEN-LOGOS  (kommen aus logos.js / logos-Ordner)
  // ========================================================
  {
    name: "LOGOS",
    icon: "🏷️",
    levels: {
      1: [
        { frage: "Welche Marke?", bild: "logos/apple.png",     antwort: "Apple" },
        { frage: "Welche Marke?", bild: "logos/youtube.png",   antwort: "YouTube" },
        { frage: "Welche Marke?", bild: "logos/instagram.png", antwort: "Instagram" },
        { frage: "Welche Marke?", bild: "logos/whatsapp.png",  antwort: "WhatsApp" },
        { frage: "Welche Marke?", bild: "logos/netflix.png",   antwort: "Netflix" },
        { frage: "Welche Marke?", bild: "logos/nike.png",      antwort: "Nike" },
      ],
      2: [
        { frage: "Welche Marke?", bild: "logos/spotify.png",   antwort: "Spotify" },
        { frage: "Welche Marke?", bild: "logos/tiktok.png",    antwort: "TikTok" },
        { frage: "Welche Marke?", bild: "logos/samsung.png",   antwort: "Samsung" },
        { frage: "Welche Marke?", bild: "logos/discord.png",   antwort: "Discord" },
        { frage: "Welche Marke?", bild: "logos/twitch.png",    antwort: "Twitch" },
        { frage: "Welche Marke?", bild: "logos/paypal.png",    antwort: "PayPal" },
      ],
      3: [
        { frage: "Welche Marke?", bild: "logos/steam.png",     antwort: "Steam" },
        { frage: "Welche Marke?", bild: "logos/reddit.png",    antwort: "Reddit" },
        { frage: "Welche Marke?", bild: "logos/pinterest.png", antwort: "Pinterest" },
        { frage: "Welche Marke?", bild: "logos/airbnb.png",    antwort: "Airbnb" },
        { frage: "Welche Marke?", bild: "logos/nvidia.png",    antwort: "Nvidia" },
        { frage: "Welche Marke?", bild: "logos/ubisoft.png",   antwort: "Ubisoft" },
      ],
      4: [
        { frage: "Welche Marke?", bild: "logos/epicgames.png", antwort: "Epic Games" },
        { frage: "Welche Marke?", bild: "logos/figma.png",     antwort: "Figma" },
        { frage: "Welche Marke?", bild: "logos/notion.png",    antwort: "Notion" },
        { frage: "Welche Marke?", bild: "logos/gitlab.png",    antwort: "GitLab" },
        { frage: "Welche Marke?", bild: "logos/riotgames.png", antwort: "Riot Games" },
        { frage: "Welche Marke?", bild: "logos/cloudflare.png",antwort: "Cloudflare" },
      ],
      5: [
        { frage: "Welche Marke?", bild: "logos/rockstargames.png", antwort: "Rockstar Games" },
        { frage: "Welche Marke?", bild: "logos/vercel.png",        antwort: "Vercel" },
        { frage: "Welche Marke?", bild: "logos/supabase.png",      antwort: "Supabase" },
        { frage: "Welche Marke?", bild: "logos/jetbrains.png",     antwort: "JetBrains" },
        { frage: "Welche Marke?", bild: "logos/obsstudio.png",     antwort: "OBS Studio" },
        { frage: "Welche Marke?", bild: "logos/raspberrypi.png",   antwort: "Raspberry Pi" },
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
        { frage: "In welchem Spiel baut man aus Blöcken?", antwort: "Minecraft" },
        { frage: "Wie heißt der italienische Klempner von Nintendo?", antwort: "Mario" },
        { frage: "Welcher blaue Igel ist von Sega?", antwort: "Sonic" },
        { frage: "In welchem Spiel baut man Wände und kämpft im Battle Royale?", antwort: "Fortnite" },
        { frage: "Welcher gelbe Charakter frisst Punkte im Labyrinth?", antwort: "Pac-Man" },
      ],
      2: [
        { frage: "In welchem Spiel gibt es den 'Impostor'?", antwort: "Among Us" },
        { frage: "Wie heißt Marios Bruder?", antwort: "Luigi" },
        { frage: "In welchem Spiel fängt man kleine Monster in Bällen?", antwort: "Pokémon" },
        { frage: "Welches Spiel hat bunte Vögel, die man abschießt?", antwort: "Angry Birds" },
        { frage: "In welchem Spiel pflanzt man gegen Zombies?", antwort: "Plants vs. Zombies" },
      ],
      3: [
        { frage: "Wie heißt die Prinzessin, die Mario rettet?", antwort: "Peach" },
        { frage: "In welchem Spiel fährt man Karts mit Nintendo-Figuren?", antwort: "Mario Kart" },
        { frage: "Welche Firma macht die PlayStation?", antwort: "Sony" },
        { frage: "Welche Firma macht die Xbox?", antwort: "Microsoft" },
        { frage: "In welchem Spiel baut man Inseln mit Tieren auf?", antwort: "Animal Crossing" },
      ],
      4: [
        { frage: "Wie heißt das grüne Monster, das in Minecraft explodiert?", antwort: "Creeper" },
        { frage: "In welchem Spiel ist 'Steve' die Hauptfigur?", antwort: "Minecraft" },
        { frage: "Welche Konsole ist tragbar und von Nintendo (2017)?", antwort: "Nintendo Switch" },
        { frage: "Wie heißt das Online-Game mit dem Buchstaben 'R' und vielen Mini-Spielen?", antwort: "Roblox" },
        { frage: "In welchem Shooter legt man eine Bombe als Terrorist/Anti-Terror?", antwort: "Counter-Strike" },
      ],
      5: [
        { frage: "Welche Plattform von Valve verkauft PC-Spiele?", antwort: "Steam" },
        { frage: "Wie heißt das Spiel mit Helden in einer 5-gegen-5-Schlacht (Riot)?", antwort: "League of Legends" },
        { frage: "In welchem Spiel reist 'Link' durch Hyrule?", antwort: "The Legend of Zelda" },
        { frage: "Welche Spielreihe handelt von Autodiebstahl in 'Los Santos'?", antwort: "GTA (Grand Theft Auto)" },
        { frage: "Wie heißt das erste Pokémon im Pokédex (Nr. 1)?", antwort: "Bisasam" },
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
        { frage: "Welcher 'King of Pop' sang 'Thriller'?", antwort: "Michael Jackson" },
        { frage: "Welche Band schrieb 'Let It Be'?", antwort: "The Beatles" },
        { frage: "Wie heißt der Sänger von 'Shape of You'?", antwort: "Ed Sheeran" },
        { frage: "Welche Sängerin ist für die 'Eras Tour' bekannt?", antwort: "Taylor Swift" },
      ],
      2: [
        { frage: "Aus welchem Land kommt ABBA?", antwort: "Schweden" },
        { frage: "Welche Sängerin sang 'Bad Guy'?", antwort: "Billie Eilish" },
        { frage: "Welcher Rapper heißt mit echtem Vornamen Marshall?", antwort: "Eminem" },
        { frage: "Welche Band sang 'Smells Like Teen Spirit'?", antwort: "Nirvana" },
        { frage: "Wie viele Saiten hat eine normale Gitarre?", antwort: "6" },
      ],
      3: [
        { frage: "Welcher Komponist wurde taub?", antwort: "Beethoven" },
        { frage: "Welches Instrument hat schwarze und weiße Tasten?", antwort: "Das Klavier" },
        { frage: "Welche Sängerin sang 'Hello' und 'Someone Like You'?", antwort: "Adele" },
        { frage: "Welcher DJ produzierte 'Levels'?", antwort: "Avicii" },
        { frage: "Welches Instrument bläst man und hat Klappen aus Metall?", antwort: "Die Trompete / das Saxophon" },
      ],
      4: [
        { frage: "Welche Band ist für 'Hotel California' bekannt?", antwort: "Eagles" },
        { frage: "Welcher Sänger ist für 'Purple Rain' bekannt?", antwort: "Prince" },
        { frage: "Welches Instrument spielt man mit einem Bogen?", antwort: "Die Geige (Violine)" },
        { frage: "Welche Band sang 'Wonderwall'?", antwort: "Oasis" },
        { frage: "Wie nennt man das Tempo-Maß in der Musik (Abkürzung)?", antwort: "BPM" },
      ],
      5: [
        { frage: "Welcher Komponist schrieb 'Die vier Jahreszeiten'?", antwort: "Vivaldi" },
        { frage: "Welche Tonart hat keine Vorzeichen (Dur)?", antwort: "C-Dur" },
        { frage: "Welche Band sang 'Stairway to Heaven'?", antwort: "Led Zeppelin" },
        { frage: "Wie nennt man acht Töne in der Musik?", antwort: "Eine Oktave" },
        { frage: "Welcher Sänger war Frontmann von Queen?", antwort: "Freddie Mercury" },
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
        { frage: "Welcher Ozean ist der größte?", antwort: "Der Pazifik" },
        { frage: "Welcher Berg ist der höchste der Welt?", antwort: "Mount Everest" },
        { frage: "Auf welchem Kontinent liegt Ägypten?", antwort: "Afrika" },
        { frage: "Welches Land hat die Form eines Stiefels?", antwort: "Italien" },
        { frage: "Welcher Fluss fließt durch Ägypten (sehr lang)?", antwort: "Der Nil" },
      ],
      2: [
        { frage: "Welches ist das größte Land der Welt?", antwort: "Russland" },
        { frage: "Welche Wüste ist die größte heiße Wüste?", antwort: "Die Sahara" },
        { frage: "Durch welche Stadt fließt die Themse?", antwort: "London" },
        { frage: "Welcher Turm steht in Paris?", antwort: "Der Eiffelturm" },
        { frage: "Auf welchem Kontinent liegt Brasilien?", antwort: "Südamerika" },
      ],
      3: [
        { frage: "Welcher Fluss fließt durch Paris?", antwort: "Die Seine" },
        { frage: "Wie viele Kontinente gibt es?", antwort: "7" },
        { frage: "Welches Land hat die meisten Einwohner?", antwort: "Indien (bzw. China)" },
        { frage: "Welcher Berg in Italien ist ein Vulkan (Neapel)?", antwort: "Der Vesuv" },
        { frage: "In welchem Land steht die Freiheitsstatue?", antwort: "USA" },
      ],
      4: [
        { frage: "Welches ist die größte Insel der Welt?", antwort: "Grönland" },
        { frage: "Welcher ist der höchste Berg Afrikas?", antwort: "Der Kilimandscharo" },
        { frage: "Welches Land grenzt im Süden an die USA?", antwort: "Mexiko" },
        { frage: "Welcher See trennt nicht – welcher Kanal trennt UK und Frankreich?", antwort: "Der Ärmelkanal" },
        { frage: "In welchem Land steht der Schiefe Turm von Pisa?", antwort: "Italien" },
      ],
      5: [
        { frage: "Welcher Berg ist der höchste der Alpen?", antwort: "Der Mont Blanc" },
        { frage: "Welches Land hat die meisten Zeitzonen (Überseegebiete)?", antwort: "Frankreich" },
        { frage: "Welcher Fluss ist der längste in Südamerika?", antwort: "Der Amazonas" },
        { frage: "Welche Stadt ist die Hauptstadt von Australien?", antwort: "Canberra" },
        { frage: "In welchem Ozean liegt Hawaii?", antwort: "Im Pazifik" },
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
        { frage: "Aus welchem Land kommt die Pizza?", antwort: "Italien" },
        { frage: "Welche Frucht ist gelb und krumm?", antwort: "Die Banane" },
        { frage: "Welches Getränk macht morgens wach (aus Bohnen)?", antwort: "Kaffee" },
        { frage: "Aus welchem Tier kommt normale Milch?", antwort: "Aus der Kuh" },
        { frage: "Welches Gemüse macht beim Schneiden weinen?", antwort: "Die Zwiebel" },
      ],
      2: [
        { frage: "Aus welchem Land kommt Sushi?", antwort: "Japan" },
        { frage: "Welche rote Frucht wächst an Sträuchern und ist süß?", antwort: "Die Erdbeere" },
        { frage: "Aus welcher Bohne wird Schokolade gemacht?", antwort: "Aus der Kakaobohne" },
        { frage: "Welches Land ist für Croissants bekannt?", antwort: "Frankreich" },
        { frage: "Welches Brot ist typisch deutsch und dunkel?", antwort: "Vollkorn-/Schwarzbrot" },
      ],
      3: [
        { frage: "Aus welchem Land kommen Tacos?", antwort: "Mexiko" },
        { frage: "Welche Nudel-Sorte ist lang und dünn?", antwort: "Spaghetti" },
        { frage: "Welches Tier liefert den meisten Käse-Rohstoff?", antwort: "Die Kuh" },
        { frage: "Aus welchem Getreide wird Brot meistens gemacht?", antwort: "Weizen" },
        { frage: "Welches scharfe grüne Etwas isst man zu Sushi?", antwort: "Wasabi" },
      ],
      4: [
        { frage: "Aus welchem Land kommt der Hamburger ursprünglich (Name)?", antwort: "Deutschland (Hamburg) / USA" },
        { frage: "Welche italienische Vorspeise ist Brot mit Tomaten?", antwort: "Bruschetta" },
        { frage: "Welches teure gelbe Gewürz färbt Reis?", antwort: "Safran" },
        { frage: "Aus welchem Land kommt Paella?", antwort: "Spanien" },
        { frage: "Welche Frucht wird zu Wein verarbeitet?", antwort: "Die Traube" },
      ],
      5: [
        { frage: "Aus welcher Pflanze wird Tequila gemacht?", antwort: "Aus der Agave" },
        { frage: "Welches koreanische fermentierte Gericht ist bekannt?", antwort: "Kimchi" },
        { frage: "Welche fünf Geschmacksrichtungen gibt es (eine herzhafte heißt...)?", antwort: "Umami" },
        { frage: "Aus welchem Land kommt der Parmesan-Käse?", antwort: "Italien" },
        { frage: "Welche Frucht ist innen grün und außen stachelig-braun?", antwort: "Die Kiwi" },
      ],
    },
  },

  // ========================================================
  // 13) SPORT
  // ========================================================
  {
    name: "SPORT",
    icon: "⚽",
    levels: {
      1: [
        { frage: "Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?", antwort: "11" },
        { frage: "In welcher Sportart gibt es einen 'Slam Dunk'?", antwort: "Basketball" },
        { frage: "Womit spielt man Tennis (Schläger + ...)?", antwort: "Mit einem Ball" },
        { frage: "Wie viele Ringe hat das Olympia-Symbol?", antwort: "5" },
        { frage: "In welcher Sportart schwimmt man?", antwort: "Schwimmen" },
      ],
      2: [
        { frage: "Welches Land gewann die Fußball-WM 2014?", antwort: "Deutschland" },
        { frage: "Wie heißt der schnellste Mann der Welt (100m)?", antwort: "Usain Bolt" },
        { frage: "In welcher Sportart ist Michael Jordan eine Legende?", antwort: "Basketball" },
        { frage: "Welcher Sport wird in Wimbledon gespielt?", antwort: "Tennis" },
        { frage: "Wie viele Tore stehen auf einem Fußballfeld?", antwort: "2" },
      ],
      3: [
        { frage: "Welches Land hat die meisten Fußball-WM-Titel?", antwort: "Brasilien" },
        { frage: "Wie oft sind Olympische Sommerspiele (alle ... Jahre)?", antwort: "Alle 4 Jahre" },
        { frage: "Welcher Fußballer wird 'CR7' genannt?", antwort: "Cristiano Ronaldo" },
        { frage: "In welcher Sportart gibt es einen 'Strike'?", antwort: "Bowling" },
        { frage: "Wie lang ist ein Marathon ungefähr?", antwort: "Ca. 42 km" },
      ],
      4: [
        { frage: "Welcher argentinische Fußballstar wird 'Messi' genannt?", antwort: "Lionel Messi" },
        { frage: "Wie viele Punkte ist ein Touchdown wert?", antwort: "6" },
        { frage: "In welchem Land wurde Fußball erfunden?", antwort: "England" },
        { frage: "Welcher Boxer nannte sich 'The Greatest'?", antwort: "Muhammad Ali" },
        { frage: "Wie viele Felder hat ein Schachbrett?", antwort: "64" },
      ],
      5: [
        { frage: "Welches Land gewann die erste Fußball-WM (1930)?", antwort: "Uruguay" },
        { frage: "In welcher Stadt waren die Olympischen Spiele 2016?", antwort: "Rio de Janeiro" },
        { frage: "Welcher Rennsport hat die 'Formel 1'?", antwort: "Autorennen" },
        { frage: "Wie heißt das wichtigste Radrennen Frankreichs?", antwort: "Tour de France" },
        { frage: "Wie viele Spieler hat ein Volleyball-Team auf dem Feld?", antwort: "6" },
      ],
    },
  },

  // ========================================================
  // 14) TIERE
  // ========================================================
  {
    name: "TIERE",
    icon: "🦁",
    levels: {
      1: [
        { frage: "Welches ist das größte Landtier?", antwort: "Der Elefant" },
        { frage: "Welches Tier wird 'König der Tiere' genannt?", antwort: "Der Löwe" },
        { frage: "Welches Tier hat einen sehr langen Hals?", antwort: "Die Giraffe" },
        { frage: "Wie nennt man ein Baby-Hund?", antwort: "Welpe" },
        { frage: "Welches Tier sagt 'Miau'?", antwort: "Die Katze" },
      ],
      2: [
        { frage: "Welches ist das schnellste Landtier?", antwort: "Der Gepard" },
        { frage: "Welches Säugetier kann fliegen?", antwort: "Die Fledermaus" },
        { frage: "Welches ist das größte Tier der Welt?", antwort: "Der Blauwal" },
        { frage: "Wie viele Beine hat eine Spinne?", antwort: "8" },
        { frage: "Welches Tier trägt sein Haus auf dem Rücken?", antwort: "Die Schnecke (oder Schildkröte)" },
      ],
      3: [
        { frage: "Welches Tier kann seine Farbe wechseln?", antwort: "Das Chamäleon" },
        { frage: "Welcher Vogel kann nicht fliegen, aber schnell laufen?", antwort: "Der Strauß" },
        { frage: "Welches Tier ist bekannt für sein gutes Gedächtnis (Sprichwort)?", antwort: "Der Elefant" },
        { frage: "Welches Tier lebt im Wasser und hat 8 Arme?", antwort: "Der Oktopus / Tintenfisch" },
        { frage: "Welches schwarz-weiße Tier frisst Bambus?", antwort: "Der Panda" },
      ],
      4: [
        { frage: "Welches Tier hat schwarz-weiße Streifen?", antwort: "Das Zebra" },
        { frage: "Welches Tier ist das einzige Säugetier, das Eier legt (eins davon)?", antwort: "Das Schnabeltier" },
        { frage: "Wie viele Herzen hat ein Oktopus?", antwort: "3" },
        { frage: "Welcher Vogel kann rückwärts fliegen?", antwort: "Der Kolibri" },
        { frage: "Welches Tier schläft im Stehen?", antwort: "Das Pferd" },
      ],
      5: [
        { frage: "Wie nennt man eine Gruppe von Löwen?", antwort: "Ein Rudel" },
        { frage: "Welches Tier hat den höchsten Blutdruck?", antwort: "Die Giraffe" },
        { frage: "Welches Insekt macht Honig?", antwort: "Die Biene" },
        { frage: "Welches Tier wird auch 'Wüstenschiff' genannt?", antwort: "Das Kamel" },
        { frage: "Wie heißt das größte Reptil der Welt?", antwort: "Das Salzwasserkrokodil" },
      ],
    },
  },

  // ========================================================
  // 15) SERIEN
  // ========================================================
  {
    name: "SERIEN",
    icon: "📺",
    levels: {
      1: [
        { frage: "Wie heißt die gelbe Zeichentrickfamilie?", antwort: "Die Simpsons" },
        { frage: "In welcher Serie gibt es den 'Eisernen Thron'?", antwort: "Game of Thrones" },
        { frage: "In welcher Serie geht es um Zombies (AMC)?", antwort: "The Walking Dead" },
        { frage: "Wie heißt die Kaffeebar in 'Friends'?", antwort: "Central Perk" },
        { frage: "In welcher Serie sind Kinder in 'Hawkins' (Monster, Netflix)?", antwort: "Stranger Things" },
      ],
      2: [
        { frage: "In welcher Serie kocht Walter White Drogen?", antwort: "Breaking Bad" },
        { frage: "Wie heißt die koreanische Serie mit tödlichen Kinderspielen?", antwort: "Squid Game" },
        { frage: "In welcher Serie arbeiten alle bei 'Dunder Mifflin'?", antwort: "The Office" },
        { frage: "Welche Zeichentrickfamilie hat einen Vater namens Peter Griffin?", antwort: "Family Guy" },
        { frage: "Wie heißt das Mädchen mit Kräften in Stranger Things?", antwort: "Eleven (Elf)" },
      ],
      3: [
        { frage: "In welcher Serie reiten Drachen über 'Westeros'?", antwort: "Game of Thrones" },
        { frage: "Welche Serie spielt in einem Krankenhaus (Grey)?", antwort: "Grey's Anatomy" },
        { frage: "Wie heißt der gelbe Schwamm aus Bikini Bottom?", antwort: "SpongeBob" },
        { frage: "In welcher Serie löst ein Chemielehrer zum 'Heisenberg'?", antwort: "Breaking Bad" },
        { frage: "Welche Netflix-Serie zeigt eine Gangsterfamilie in Birmingham?", antwort: "Peaky Blinders" },
      ],
      4: [
        { frage: "Wie heißt die Drachenmutter in Game of Thrones?", antwort: "Daenerys" },
        { frage: "In welcher Serie geht es um Anwalt 'Saul' (Spin-off)?", antwort: "Better Call Saul" },
        { frage: "Welche Trickserie hat Rick und Morty als Titel?", antwort: "Rick and Morty" },
        { frage: "Welche britische Serie zeigt das Königshaus (Netflix)?", antwort: "The Crown" },
        { frage: "Wie heißt der Sheriff in 'The Walking Dead'?", antwort: "Rick" },
      ],
      5: [
        { frage: "Welche Anime-Serie handelt von einem Todesnotizbuch?", antwort: "Death Note" },
        { frage: "Wie heißt die Mafia-Serie über eine Familie in New Jersey?", antwort: "Die Sopranos" },
        { frage: "Welche Serie zeigt Werbeleute der 60er in New York?", antwort: "Mad Men" },
        { frage: "Wie heißt die Zeichentrickserie mit dem U-Boot-Ananas-Haus?", antwort: "SpongeBob Schwammkopf" },
        { frage: "In welcher Serie kämpfen Menschen gegen riesige Titanen?", antwort: "Attack on Titan" },
      ],
    },
  },

  // ========================================================
  // 16) KÖRPER
  // ========================================================
  {
    name: "KÖRPER",
    icon: "🫀",
    levels: {
      1: [
        { frage: "Welches Organ pumpt das Blut?", antwort: "Das Herz" },
        { frage: "Womit atmen wir (Organ)?", antwort: "Mit der Lunge" },
        { frage: "Wie viele Finger hat ein Mensch (beide Hände)?", antwort: "10" },
        { frage: "Welche Farbe hat Blut?", antwort: "Rot" },
        { frage: "Womit sehen wir?", antwort: "Mit den Augen" },
      ],
      2: [
        { frage: "Welches ist das größte Organ (außen)?", antwort: "Die Haut" },
        { frage: "Wie viele Zähne hat ein Erwachsener (mit Weisheitszähnen)?", antwort: "32" },
        { frage: "Womit schmecken wir?", antwort: "Mit der Zunge" },
        { frage: "Wie viele Lungenflügel hat der Mensch?", antwort: "2" },
        { frage: "Welcher Teil des Auges ist farbig?", antwort: "Die Iris" },
      ],
      3: [
        { frage: "Welches Organ steuert den Körper (im Kopf)?", antwort: "Das Gehirn" },
        { frage: "Wie viele Kammern hat das Herz?", antwort: "4" },
        { frage: "Welches Organ filtert das Blut?", antwort: "Die Niere" },
        { frage: "Wie heißt der größte Knochen im Bein?", antwort: "Der Oberschenkelknochen" },
        { frage: "Welche Flüssigkeit produziert der Mund zum Verdauen?", antwort: "Speichel" },
      ],
      4: [
        { frage: "Welches Organ produziert Galle?", antwort: "Die Leber" },
        { frage: "Wie viele Knochen hat ein Erwachsener ungefähr?", antwort: "Ca. 206" },
        { frage: "Wie heißt der kleinste Knochen (im Ohr)?", antwort: "Der Steigbügel" },
        { frage: "Welches Organ hilft beim Verdauen direkt nach dem Mund?", antwort: "Der Magen" },
        { frage: "Welche Zellen transportieren Sauerstoff im Blut?", antwort: "Die roten Blutkörperchen" },
      ],
      5: [
        { frage: "Wie viel Liter Blut hat ein Erwachsener ungefähr?", antwort: "Ca. 5 Liter" },
        { frage: "Welches Organ kann sich selbst wieder aufbauen?", antwort: "Die Leber" },
        { frage: "Wie viele Rippenpaare hat der Mensch normalerweise?", antwort: "12" },
        { frage: "Welcher Muskel ist sehr stark und im Kiefer?", antwort: "Der Kaumuskel" },
        { frage: "Wie nennt man den Teil des Auges, durch den Licht eintritt?", antwort: "Die Pupille" },
      ],
    },
  },

  // ========================================================
  // 17) WELTRAUM
  // ========================================================
  {
    name: "WELTRAUM",
    icon: "🚀",
    levels: {
      1: [
        { frage: "Wie heißt unser Heimatstern?", antwort: "Die Sonne" },
        { frage: "Welcher Planet ist der 'Rote Planet'?", antwort: "Mars" },
        { frage: "Wie heißt der Trabant der Erde am Nachthimmel?", antwort: "Der Mond" },
        { frage: "Welcher Planet ist der größte?", antwort: "Jupiter" },
        { frage: "Auf welchem Planeten leben wir?", antwort: "Auf der Erde" },
      ],
      2: [
        { frage: "Welcher Planet hat die schönsten Ringe?", antwort: "Saturn" },
        { frage: "Wie heißt unsere Galaxie?", antwort: "Die Milchstraße" },
        { frage: "Wie viele Planeten hat das Sonnensystem?", antwort: "8" },
        { frage: "Welche US-Behörde fliegt ins All?", antwort: "Die NASA" },
        { frage: "Welcher Planet ist der Sonne am nächsten?", antwort: "Merkur" },
      ],
      3: [
        { frage: "Wer war der erste Mensch auf dem Mond?", antwort: "Neil Armstrong" },
        { frage: "Wie nennt man Sternschnuppen, die auf die Erde fallen?", antwort: "Meteoriten" },
        { frage: "Welcher Planet ist der heißeste?", antwort: "Venus" },
        { frage: "Wie heißt ein Gerät, mit dem man Sterne beobachtet?", antwort: "Das Teleskop" },
        { frage: "Wie lange braucht die Erde für eine Sonnenumrundung?", antwort: "1 Jahr" },
      ],
      4: [
        { frage: "Wie heißt ein riesiges Loch im All, das alles verschluckt?", antwort: "Ein Schwarzes Loch" },
        { frage: "Wie nennt man Menschen, die ins All fliegen?", antwort: "Astronauten" },
        { frage: "Wie heißt der nächste Stern zur Erde (außer Sonne)?", antwort: "Proxima Centauri" },
        { frage: "Welcher Planet liegt 'auf der Seite'?", antwort: "Uranus" },
        { frage: "Wie heißt die Theorie über die Entstehung des Universums?", antwort: "Der Urknall" },
      ],
      5: [
        { frage: "Wie heißt das berühmte Teleskop im All (1990)?", antwort: "Hubble" },
        { frage: "Wie lange braucht Licht von der Sonne zur Erde?", antwort: "Ca. 8 Minuten" },
        { frage: "Wer war der erste Mensch im Weltall?", antwort: "Juri Gagarin" },
        { frage: "Wie nennt man einen explodierenden Stern?", antwort: "Eine Supernova" },
        { frage: "Welcher Planet hat den größten Vulkan (Olympus Mons)?", antwort: "Mars" },
      ],
    },
  },

  // ========================================================
  // 18) KUNST & BÜCHER
  // ========================================================
  {
    name: "KUNST & BÜCHER",
    icon: "🎨",
    levels: {
      1: [
        { frage: "Wer malte die 'Mona Lisa'?", antwort: "Leonardo da Vinci" },
        { frage: "Wer schrieb die Harry-Potter-Bücher?", antwort: "J.K. Rowling" },
        { frage: "Welcher Maler schnitt sich ein Ohr ab?", antwort: "Vincent van Gogh" },
        { frage: "In welchem Museum hängt die Mona Lisa?", antwort: "Im Louvre" },
        { frage: "Welche Farben mischt man für Grün?", antwort: "Blau und Gelb" },
      ],
      2: [
        { frage: "Wer schrieb 'Romeo und Julia'?", antwort: "Shakespeare" },
        { frage: "Welcher Künstler malte 'Die Sternennacht'?", antwort: "Vincent van Gogh" },
        { frage: "Wer schrieb 'Der kleine Prinz'?", antwort: "Antoine de Saint-Exupéry" },
        { frage: "Welche drei Grundfarben gibt es?", antwort: "Rot, Gelb, Blau" },
        { frage: "Wer schrieb die Geschichten von Pippi Langstrumpf?", antwort: "Astrid Lindgren" },
      ],
      3: [
        { frage: "Welcher Künstler ist für schmelzende Uhren bekannt?", antwort: "Salvador Dalí" },
        { frage: "Wer malte das Deckengemälde der Sixtinischen Kapelle?", antwort: "Michelangelo" },
        { frage: "Wer schrieb 'Faust'?", antwort: "Goethe" },
        { frage: "Welcher norwegische Maler malte 'Der Schrei'?", antwort: "Edvard Munch" },
        { frage: "Wie heißt der Detektiv von Arthur Conan Doyle?", antwort: "Sherlock Holmes" },
      ],
      4: [
        { frage: "Welcher Künstler malte Suppendosen?", antwort: "Andy Warhol" },
        { frage: "Wer schrieb '1984'?", antwort: "George Orwell" },
        { frage: "Welcher spanische Maler schuf 'Guernica'?", antwort: "Pablo Picasso" },
        { frage: "Wer schuf die Skulptur 'Der Denker'?", antwort: "Auguste Rodin" },
        { frage: "Wer schrieb 'Die Verwandlung' (Käfer)?", antwort: "Franz Kafka" },
      ],
      5: [
        { frage: "Welcher Maler schuf 'Das Mädchen mit dem Perlenohrring'?", antwort: "Vermeer" },
        { frage: "Welche Kunstrichtung gründete Picasso mit?", antwort: "Der Kubismus" },
        { frage: "Wer schrieb 'Krieg und Frieden'?", antwort: "Leo Tolstoi" },
        { frage: "Welche Epoche kam nach der Renaissance?", antwort: "Der Barock" },
        { frage: "Wer schrieb 'Der Herr der Ringe'?", antwort: "J.R.R. Tolkien" },
      ],
    },
  },

  // ========================================================
  // 19) ERFINDUNGEN
  // ========================================================
  {
    name: "ERFINDUNGEN",
    icon: "💡",
    levels: {
      1: [
        { frage: "Welche Firma machte das erste iPhone?", antwort: "Apple" },
        { frage: "Wer gilt als Erfinder der Glühbirne?", antwort: "Thomas Edison" },
        { frage: "Womit telefonieren wir heute meist (Gerät)?", antwort: "Mit dem Handy/Smartphone" },
        { frage: "Welche Erfindung zeigt Filme zu Hause (Gerät)?", antwort: "Der Fernseher" },
        { frage: "Womit fährt man, ohne zu treten (zwei Räder, Motor)?", antwort: "Das Motorrad" },
      ],
      2: [
        { frage: "Wer erfand das Telefon (gilt als Erfinder)?", antwort: "Alexander Graham Bell" },
        { frage: "Welche Brüder bauten das erste Motorflugzeug?", antwort: "Die Gebrüder Wright" },
        { frage: "Wer erfand den Buchdruck in Europa?", antwort: "Johannes Gutenberg" },
        { frage: "Welche Firma gründete Bill Gates?", antwort: "Microsoft" },
        { frage: "Womit kühlt man Essen zu Hause?", antwort: "Mit dem Kühlschrank" },
      ],
      3: [
        { frage: "Wer baute eines der ersten Autos (deutsche Marke)?", antwort: "Carl Benz" },
        { frage: "Wer entwickelte das World Wide Web?", antwort: "Tim Berners-Lee" },
        { frage: "Wer erfand das Dynamit?", antwort: "Alfred Nobel" },
        { frage: "Welche Firma macht den Suchmaschinen-Marktführer?", antwort: "Google" },
        { frage: "Womit wäscht man heute Kleidung (Gerät)?", antwort: "Mit der Waschmaschine" },
      ],
      4: [
        { frage: "Welcher Erfinder gilt als Pionier des Stroms (Wechselstrom)?", antwort: "Nikola Tesla" },
        { frage: "Wer erfand den Blitzableiter?", antwort: "Benjamin Franklin" },
        { frage: "Welche Firma stellt die meisten Computer-Prozessoren her (Marke)?", antwort: "Intel" },
        { frage: "Wer baute die erste Dampfmaschine bekannt?", antwort: "James Watt" },
        { frage: "Womit fotografiert man (Gerät)?", antwort: "Mit der Kamera" },
      ],
      5: [
        { frage: "Wer gilt als erste Programmiererin?", antwort: "Ada Lovelace" },
        { frage: "Wer entwickelte das Periodensystem?", antwort: "Mendelejew" },
        { frage: "Wer baute den ersten programmierbaren Computer (Z3)?", antwort: "Konrad Zuse" },
        { frage: "Wer entdeckte das Penicillin?", antwort: "Alexander Fleming" },
        { frage: "Wer erfand den Reißverschluss-Vorläufer?", antwort: "Whitcomb Judson" },
      ],
    },
  },

  // ========================================================
  // 20) MYTHOLOGIE
  // ========================================================
  {
    name: "MYTHOLOGIE",
    icon: "⚡",
    levels: {
      1: [
        { frage: "Wer ist der griechische Göttervater?", antwort: "Zeus" },
        { frage: "Wie heißt der nordische Donnergott?", antwort: "Thor" },
        { frage: "Welches Fabelwesen speit Feuer?", antwort: "Der Drache" },
        { frage: "Welches Wesen ist halb Mensch, halb Pferd?", antwort: "Der Zentaur" },
        { frage: "Welches Pferd hat ein Horn?", antwort: "Das Einhorn" },
      ],
      2: [
        { frage: "Wie heißt der griechische Meeresgott?", antwort: "Poseidon" },
        { frage: "Wie heißt Thors Hammer?", antwort: "Mjölnir" },
        { frage: "Welches Wesen versteinert mit dem Blick (Schlangenhaare)?", antwort: "Die Medusa" },
        { frage: "Wie heißt der nordische Allvater?", antwort: "Odin" },
        { frage: "Welches Wesen ist halb Mensch, halb Fisch?", antwort: "Die Meerjungfrau" },
      ],
      3: [
        { frage: "Wie heißt die griechische Göttin der Liebe?", antwort: "Aphrodite" },
        { frage: "Wie heißt der dreiköpfige Höllenhund?", antwort: "Zerberus" },
        { frage: "Welcher Held vollbrachte 12 Aufgaben?", antwort: "Herkules" },
        { frage: "Wie heißt der römische Kriegsgott?", antwort: "Mars" },
        { frage: "Welches geflügelte Pferd ist aus der Mythologie bekannt?", antwort: "Pegasus" },
      ],
      4: [
        { frage: "Wie heißt der nordische Trickster-Gott?", antwort: "Loki" },
        { frage: "Wie heißt die griechische Göttin der Weisheit?", antwort: "Athene" },
        { frage: "Welcher Titan trägt den Himmel?", antwort: "Atlas" },
        { frage: "Wie heißt der ägyptische Gott mit Schakalkopf?", antwort: "Anubis" },
        { frage: "Welcher Held tötete die Medusa?", antwort: "Perseus" },
      ],
      5: [
        { frage: "Wie heißt die Endschlacht der nordischen Götter?", antwort: "Ragnarök" },
        { frage: "Wie heißt der ägyptische Sonnengott?", antwort: "Ra" },
        { frage: "Wie heißt der griechische Gott der Unterwelt?", antwort: "Hades" },
        { frage: "Wie heißt der Weltenbaum der Wikinger?", antwort: "Yggdrasil" },
        { frage: "Wie heißt der griechische Bote der Götter (Flügelschuhe)?", antwort: "Hermes" },
      ],
    },
  },

  // ========================================================
  // 21) AUTOS
  // ========================================================
  {
    name: "AUTOS",
    icon: "🏎️",
    levels: {
      1: [
        { frage: "Welche Marke hat ein Pferd im Logo (rot, italienisch)?", antwort: "Ferrari" },
        { frage: "Welche Marke hat vier Ringe im Logo?", antwort: "Audi" },
        { frage: "Welche Marke baut den 'Käfer'?", antwort: "Volkswagen" },
        { frage: "Welche Marke hat einen Stern im Logo?", antwort: "Mercedes-Benz" },
        { frage: "Aus welchem Land kommt Toyota?", antwort: "Japan" },
      ],
      2: [
        { frage: "Welche Marke baut Elektroautos namens Model 3 und Y?", antwort: "Tesla" },
        { frage: "Wofür stehen die Buchstaben 'BMW' (Land)?", antwort: "Deutschland (Bayern)" },
        { frage: "Aus welchem Land kommt Lamborghini?", antwort: "Italien" },
        { frage: "Welche Marke baut den 911 (Sportwagen)?", antwort: "Porsche" },
        { frage: "Aus welchem Land kommt Volvo?", antwort: "Schweden" },
      ],
      3: [
        { frage: "Welches Auto fährt James Bond oft?", antwort: "Aston Martin" },
        { frage: "Welche Marke hat einen Stier im Logo (italienisch)?", antwort: "Lamborghini" },
        { frage: "Aus welchem Land kommt Renault?", antwort: "Frankreich" },
        { frage: "Welche Farbe haben Ferraris klassisch?", antwort: "Rot" },
        { frage: "Wie nennt man ein Auto ohne Dach?", antwort: "Cabrio" },
      ],
      4: [
        { frage: "Welcher Konzern besitzt Audi und Porsche?", antwort: "Volkswagen" },
        { frage: "Wie heißt das Auto aus 'Zurück in die Zukunft'?", antwort: "DeLorean" },
        { frage: "Aus welchem Land kommt Ford?", antwort: "USA" },
        { frage: "Wie nennt man den Teil, der das Auto stoppt?", antwort: "Die Bremse" },
        { frage: "Wie viele Räder hat ein normales Auto?", antwort: "4" },
      ],
      5: [
        { frage: "Wie heißt der Gründer von Ferrari?", antwort: "Enzo Ferrari" },
        { frage: "Welche Marke baut sehr schnelle Autos namens Veyron/Chiron?", antwort: "Bugatti" },
        { frage: "Aus welchem Land kommt Hyundai?", antwort: "Südkorea" },
        { frage: "Welcher Treibstoff ist umweltfreundlicher als Benzin (Strom...)?", antwort: "Elektrizität / Strom" },
        { frage: "Wie heißt der Gründer von Lamborghini?", antwort: "Ferruccio Lamborghini" },
      ],
    },
  },

  // ========================================================
  // 22) ANIME
  // ========================================================
  {
    name: "ANIME",
    icon: "🍥",
    levels: {
      1: [
        { frage: "Wie heißt das gelbe Elektro-Pokémon?", antwort: "Pikachu" },
        { frage: "Wie heißt der Ninja mit dem Fuchs in sich?", antwort: "Naruto" },
        { frage: "In welchem Anime sammelt man 7 magische Kugeln?", antwort: "Dragon Ball" },
        { frage: "In welchem Anime will der Held Piratenkönig werden?", antwort: "One Piece" },
        { frage: "Welche kleinen Monster fängt man in Bällen?", antwort: "Pokémon" },
      ],
      2: [
        { frage: "Wie heißt der Held in One Piece (Strohhut)?", antwort: "Ruffy (Luffy)" },
        { frage: "Welches Studio machte 'Mein Nachbar Totoro'?", antwort: "Studio Ghibli" },
        { frage: "Welche stärkste Form hat Goku (gelbe Haare)?", antwort: "Super-Saiyajin" },
        { frage: "In welchem Anime kämpft man gegen riesige Titanen?", antwort: "Attack on Titan" },
        { frage: "Welche Farbe haben Pikachus Wangen?", antwort: "Rot" },
      ],
      3: [
        { frage: "In welchem Anime nutzt man ein 'Death Note'?", antwort: "Death Note" },
        { frage: "Wie heißt Gokus Sohn in Dragon Ball Z?", antwort: "Son Gohan" },
        { frage: "Welcher Dämonenjäger-Anime hat 'Tanjiro' als Held?", antwort: "Demon Slayer" },
        { frage: "Wie heißt das erste Pokémon im Pokédex?", antwort: "Bisasam" },
        { frage: "In welchem Land werden Anime gemacht?", antwort: "Japan" },
      ],
      4: [
        { frage: "Wie heißt der Todesgott in Death Note?", antwort: "Ryuk" },
        { frage: "Wie heißt die Verwandlung mit den Stands (JoJo)?", antwort: "JoJo's Bizarre Adventure" },
        { frage: "Welcher Regisseur machte 'Chihiros Reise ins Zauberland'?", antwort: "Hayao Miyazaki" },
        { frage: "Wie heißt der Hauptcharakter in Demon Slayer?", antwort: "Tanjiro" },
        { frage: "Welche Pokémon-Entwicklung hat Pikachu (Donnerstein)?", antwort: "Raichu" },
      ],
      5: [
        { frage: "Wie heißt der Schöpfer von One Piece?", antwort: "Eiichiro Oda" },
        { frage: "In welchem Anime geht es um Alchemie (Brüder)?", antwort: "Fullmetal Alchemist" },
        { frage: "Wie heißt der geheimnisvolle Gegenspieler 'L' in Death Note (Beruf)?", antwort: "Detektiv" },
        { frage: "Wie heißt der Cyborg-Anime von 1995 (Geist...)?", antwort: "Ghost in the Shell" },
        { frage: "Wie nennt man japanische Comics?", antwort: "Manga" },
      ],
    },
  },

  // ========================================================
  // 23) WER BIN ICH? (Berühmte Personen)
  // ========================================================
  {
    name: "WER BIN ICH?",
    icon: "👤",
    levels: {
      1: [
        { frage: "Ich gründete Apple und trug schwarze Rollkragen. Wer bin ich?", antwort: "Steve Jobs" },
        { frage: "Ich war der erste Mensch auf dem Mond. Wer bin ich?", antwort: "Neil Armstrong" },
        { frage: "Ich entwickelte E=mc² und habe wildes Haar. Wer bin ich?", antwort: "Albert Einstein" },
        { frage: "Ich war ein Maler ohne ein Ohr. Wer bin ich?", antwort: "Vincent van Gogh" },
        { frage: "Ich gründete Microsoft. Wer bin ich?", antwort: "Bill Gates" },
      ],
      2: [
        { frage: "Ich entdeckte die Schwerkraft durch einen Apfel. Wer bin ich?", antwort: "Isaac Newton" },
        { frage: "Ich führte Indien gewaltfrei in die Freiheit. Wer bin ich?", antwort: "Mahatma Gandhi" },
        { frage: "Ich gründete Tesla und SpaceX. Wer bin ich?", antwort: "Elon Musk" },
        { frage: "Ich hatte den Traum 'I have a dream'. Wer bin ich?", antwort: "Martin Luther King" },
        { frage: "Ich malte die Mona Lisa. Wer bin ich?", antwort: "Leonardo da Vinci" },
      ],
      3: [
        { frage: "Ich war Südafrikas erster schwarzer Präsident. Wer bin ich?", antwort: "Nelson Mandela" },
        { frage: "Ich komponierte trotz Taubheit. Wer bin ich?", antwort: "Beethoven" },
        { frage: "Ich war Forscherin mit zwei Nobelpreisen. Wer bin ich?", antwort: "Marie Curie" },
        { frage: "Ich entdeckte das Penicillin. Wer bin ich?", antwort: "Alexander Fleming" },
        { frage: "Ich war ein berühmter Boxer namens 'The Greatest'. Wer bin ich?", antwort: "Muhammad Ali" },
      ],
      4: [
        { frage: "Ich begründete die Traumdeutung/Psychoanalyse. Wer bin ich?", antwort: "Sigmund Freud" },
        { frage: "Ich war eine mexikanische Malerin mit markanten Augenbrauen. Wer bin ich?", antwort: "Frida Kahlo" },
        { frage: "Ich war die letzte berühmte Königin Ägyptens. Wer bin ich?", antwort: "Kleopatra" },
        { frage: "Ich erfand viele Dinge und gelte als Strompionier. Wer bin ich?", antwort: "Nikola Tesla" },
        { frage: "Ich entwarf die Relativitätstheorie. Wer bin ich?", antwort: "Albert Einstein" },
      ],
      5: [
        { frage: "Ich eroberte als Makedone ein riesiges Reich. Wer bin ich?", antwort: "Alexander der Große" },
        { frage: "Ich gelte als erste Programmiererin der Welt. Wer bin ich?", antwort: "Ada Lovelace" },
        { frage: "Ich war ein Universalgenie der Renaissance (Maler + Erfinder). Wer bin ich?", antwort: "Leonardo da Vinci" },
        { frage: "Ich knackte den Enigma-Code im Krieg. Wer bin ich?", antwort: "Alan Turing" },
        { frage: "Ich war ein französischer Kaiser, klein gewachsen. Wer bin ich?", antwort: "Napoleon" },
      ],
    },
  },

];

// Export für Browser
if (typeof window !== 'undefined') {
  window.CATEGORIES = CATEGORIES;
}
