 // ========================================================
  // 8) MARKEN-LOGOS (nur Bild)
  // ========================================================
 // =========================================================
//  LOGO-KATEGORIE – 40 Logos, keine Doppelten
//  -------------------------------------------------------
//  So einbinden:
//  1. Lade die Logos von https://simpleicons.org herunter
//     (Suchfeld -> Marke -> "Download SVG").
//  2. Lege sie im Repo unter  logos/  ab, Dateiname = bild-Pfad unten.
//     Simple-Icons-Dateien heissen "markenname.svg" (klein, ohne Leerzeichen).
//  3. Binde diese Datei nach questions.js ein:
//        <script src="questions.js"></script>
//        <script src="logos.js"></script>
//     Das CATEGORIES.push(...) am Ende haengt die Kategorie automatisch an.
//
//  Schwierigkeit ist ueber die 5 Level verteilt:
//    Level 1 = sehr leicht / weltbekannt
//    Level 5 = schwer / nischig
//  Logos sind einfarbig (SVG), erkennbar rein an der Form - anspruchsvoll.
// =========================================================

const LOGO_CATEGORY = {
  name: "LOGOS",
  icon: "\u{1F3F7}\uFE0F",
  levels: {
    // ---------- LEVEL 1 : sehr leicht ----------
    1: [
      { frage: "Welche Marke?", bild: "logos/apple.png",      antwort: "Apple" },
      { frage: "Welche Marke?", bild: "logos/nike.png",       antwort: "Nike" },
      { frage: "Welche Marke?", bild: "logos/youtube.png",    antwort: "YouTube" },
      { frage: "Welche Marke?", bild: "logos/spotify.png",    antwort: "Spotify" },
      { frage: "Welche Marke?", bild: "logos/instagram.png",  antwort: "Instagram" },
      { frage: "Welche Marke?", bild: "logos/whatsapp.png",   antwort: "WhatsApp" },
      { frage: "Welche Marke?", bild: "logos/netflix.png",    antwort: "Netflix" },
      { frage: "Welche Marke?", bild: "logos/tiktok.png",     antwort: "TikTok" }
    ],
    // ---------- LEVEL 2 : leicht ----------
    2: [
      { frage: "Welche Marke?", bild: "logos/samsung.png",    antwort: "Samsung" },
      { frage: "Welche Marke?", bild: "logos/nvidia.png",     antwort: "Nvidia" },
      { frage: "Welche Marke?", bild: "logos/discord.png",    antwort: "Discord" },
      { frage: "Welche Marke?", bild: "logos/reddit.png",     antwort: "Reddit" },
      { frage: "Welche Marke?", bild: "logos/twitch.png",     antwort: "Twitch" },
      { frage: "Welche Marke?", bild: "logos/steam.png",      antwort: "Steam" },
      { frage: "Welche Marke?", bild: "logos/airbnb.png",     antwort: "Airbnb" },
      { frage: "Welche Marke?", bild: "logos/paypal.png",     antwort: "PayPal" },
      { frage: "Welche Marke?", bild: "logos/pinterest.png",  antwort: "Pinterest" }
    ],
    // ---------- LEVEL 3 : mittel ----------
    3: [
      { frage: "Welche Marke?", bild: "logos/ubisoft.png",      antwort: "Ubisoft" },
      { frage: "Welche Marke?", bild: "logos/epicgames.png",    antwort: "Epic Games" },
      { frage: "Welche Marke?", bild: "logos/riotgames.png",    antwort: "Riot Games" },
      { frage: "Welche Marke?", bild: "logos/rockstargames.png",antwort: "Rockstar Games" },
      { frage: "Welche Marke?", bild: "logos/figma.png",        antwort: "Figma" },
      { frage: "Welche Marke?", bild: "logos/notion.png",       antwort: "Notion" },
      { frage: "Welche Marke?", bild: "logos/cloudflare.png",   antwort: "Cloudflare" },
      { frage: "Welche Marke?", bild: "logos/gitlab.png",       antwort: "GitLab" }
    ],
    // ---------- LEVEL 4 : schwer ----------
    4: [
      { frage: "Welche Marke?", bild: "logos/supabase.png",    antwort: "Supabase" },
      { frage: "Welche Marke?", bild: "logos/vercel.png",      antwort: "Vercel" },
      { frage: "Welche Marke?", bild: "logos/unrealengine.png",antwort: "Unreal Engine" },
      { frage: "Welche Marke?", bild: "logos/godotengine.png", antwort: "Godot" },
      { frage: "Welche Marke?", bild: "logos/jetbrains.png",   antwort: "JetBrains" },
      { frage: "Welche Marke?", bild: "logos/curseforge.png",  antwort: "CurseForge" },
      { frage: "Welche Marke?", bild: "logos/proton.png",  antwort: "Proton" },
      { frage: "Welche Marke?", bild: "logos/wireguard.png",   antwort: "WireGuard" }
    ],
    // ---------- LEVEL 5 : sehr schwer / nischig ----------
    5: [
      { frage: "Welche Marke?", bild: "logos/qbittorrent.png", antwort: "qBittorrent" },
      { frage: "Welche Marke?", bild: "logos/obsstudio.png",   antwort: "OBS Studio" },
      { frage: "Welche Marke?", bild: "logos/hetzner.png",     antwort: "Hetzner" },
      { frage: "Welche Marke?", bild: "logos/fastapi.png",     antwort: "FastAPI" },
      { frage: "Welche Marke?", bild: "logos/svelte.png",      antwort: "Svelte" },
      { frage: "Welche Marke?", bild: "logos/neovim.png",      antwort: "Neovim" },
      { frage: "Welche Marke?", bild: "logos/raspberrypi.png", antwort: "Raspberry Pi" }
    ]
  }
};

// In CATEGORIES einfuegen, falls dieses Skript separat geladen wird:
if (typeof CATEGORIES !== "undefined" && Array.isArray(CATEGORIES)) {
  CATEGORIES.push(LOGO_CATEGORY);
}
