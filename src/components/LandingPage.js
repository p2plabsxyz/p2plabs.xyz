import React from "react";
import Globe from "./Globe";
import { COMMUNITY } from "../links";
import PeerskyBird from "../images/peersky-bird.png";
import PeerskyMobile from "../images/peersky-mobile.png";
import PeerChat from "../images/peerchat.svg";
import P2PMD from "../images/p2pmd.svg";
import PeerTunes from "../images/peertunes.svg";
import HyperdhtMdns from "../images/hyperdht-mdns.svg";
import P2P from "../images/p2p-projects.png";

const MINT = "bg-[#98f9ea]";

// An app's logo on a mint tile, the way the PeerSky apps show them.
function Tile({ src }) {
  return (
    <div
      className={`flex h-24 w-24 items-center justify-center rounded-[24%] ${MINT} shadow-md ring-[1.5px] ring-inset ring-[#0d0d0d] transition duration-300 group-hover:scale-105`}
    >
      <img src={src} alt="" className="h-16 w-16" />
    </div>
  );
}

const PROJECTS = [
  {
    name: "PeerSky Desktop",
    text: "A local-first, peer-to-peer web browser for a surveillance-free internet, on Mac, Windows and Linux.",
    href: "https://peersky.p2plabs.xyz/#downloads",
    cta: "Download for desktop",
    art: (
      <div
        className={`flex h-28 w-28 items-center justify-center rounded-full ${MINT} shadow-md ring-2 ring-[#0d0d0d] transition duration-300 group-hover:scale-105`}
      >
        <img src={PeerskyBird} alt="" className="h-20 w-20 object-contain" />
      </div>
    ),
  },
  {
    name: "PeerSky Mobile",
    text: "PeerSky on your phone: browse, chat, share files and write notes straight between devices, even offline.",
    href: "https://peersky.p2plabs.xyz/mobile/",
    cta: "Get the mobile app",
    art: (
      <img
        src={PeerskyMobile}
        alt=""
        className="mt-10 w-28 drop-shadow-xl transition duration-300 group-hover:-translate-y-1"
      />
    ),
  },
  {
    name: "PeerChat",
    text: "A peer-to-peer chat that lives on your devices, not on a server.",
    href: "https://github.com/p2plabsxyz/peerchat",
    cta: "View on GitHub",
    art: <Tile src={PeerChat} />,
  },
  {
    name: "P2PMD",
    text: "A real-time peer-to-peer Markdown editor for notes and writing together.",
    href: "https://github.com/p2plabsxyz/p2pmd",
    cta: "View on GitHub",
    art: <Tile src={P2PMD} />,
  },
  {
    name: "PeerTunes",
    text: "A peer-to-peer player for the music on your own devices.",
    href: "https://github.com/p2plabsxyz/peertunes",
    cta: "View on GitHub",
    art: <Tile src={PeerTunes} />,
  },
  {
    name: "hyperdht-mdns",
    text: "Private peer discovery on your local network for Hyperswarm: its own HyperDHT, found over mDNS.",
    href: "https://github.com/p2plabsxyz/hyperdht-mdns",
    cta: "View on GitHub",
    art: <Tile src={HyperdhtMdns} />,
  },
];

function Arrow() {
  return (
    <svg
      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

const CARD =
  "group flex overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";

function ProjectCard({ name, text, href, cta, art }) {
  return (
    <a className={`${CARD} flex-col`} href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-[#effcf8] to-[#e6f3ff]">
        {art}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 leading-relaxed text-gray-600">{text}</p>
        <span className="mt-auto inline-flex items-center pt-5 font-medium text-sky-600 group-hover:text-sky-700">
          {cta}
          <Arrow />
        </span>
      </div>
    </a>
  );
}

function LandingPage() {
  return (
    <main className="text-left">
      {/* Who we are, beside a globe of peers */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:py-24">
        <div>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-gray-900 sm:text-5xl">
            <code>Powering the Decentralized Web</code>
          </h1>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              At P2P Labs, we're building curated infrastructure tools for the decentralized web, based on p2p
              protocols.
            </p>
            <p>
              One of the most significant benefits of decentralization is the transformation towards seamless data
              accessibility from anywhere, primarily driven by the advancements in peer-to-peer technologies and
              decentralized storage solutions.
            </p>
            <p className="font-semibold text-gray-900">
              Our vision is to ensure that <del>users</del> peers can access information as extensively as possible
              from anywhere in the world.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="w-full text-gray-600">Join our community on</span>
            {COMMUNITY.map((place) => (
              <a
                key={place.name}
                href={place.href}
                title={place.note}
                className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-800 transition hover:border-gray-900 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                {place.name}
              </a>
            ))}
          </div>
        </div>
        <Globe className="mx-auto max-w-sm md:max-w-md" />
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-gray-200" aria-labelledby="projects-title">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 id="projects-title" className="text-3xl font-medium text-gray-900">
              Projects
            </h2>
            <p className="max-w-md leading-relaxed text-gray-600">
              Our software is open-sourced. So you can read it, fork it, and improve it!
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
          {/* Everything else we make, one card across the whole row */}
          <a
            className={`${CARD} mt-6 flex-col sm:flex-row`}
            href="https://github.com/orgs/p2plabsxyz/repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center bg-white p-6 sm:w-72 sm:border-r sm:border-gray-200">
              <img src={P2P} alt="" className="h-32 w-auto object-contain" />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <h3 className="text-lg font-semibold text-gray-900">P2P Software</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                Explore the rest of our p2p open-source tools on GitHub, from Hyperdrive to PeerPad and AI Chat.
              </p>
              <span className="mt-5 inline-flex items-center font-medium text-sky-600 group-hover:text-sky-700">
                Repositories
                <Arrow />
              </span>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
