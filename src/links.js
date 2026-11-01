// Where to find us, shared by the top of the home page and the footer.
export const COMMUNITY = [
  {
    name: "PeerChat",
    // The page that takes you into P2P Republic, our room in PeerChat.
    href: "https://peersky.p2plabs.xyz/peerchat/",
    note: "P2P Republic",
  },
  {
    name: "Matrix",
    href: "https://matrix.to/#/#p2plabs.xyz:matrix.org",
    note: "@p2plabs.xyz:matrix.org",
  },
  {
    name: "Discord",
    href: "https://discord.gg/WGczhUJnBZ",
  },
];

// Spelled out and never a mailto: link, as on the PeerSky site, so a bot
// reading the page finds no address to collect.
export const SPELLED_EMAIL = "contact [at] p2plabs [dot] xyz";
