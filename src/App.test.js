import { readFileSync } from "fs";
import path from "path";
import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { makeGlobe } from "./components/Globe";
import { routesIn } from "../scripts/static-routes";

function renderAt(pathname) {
  window.history.pushState({}, "", pathname);
  return render(<App />);
}

test("the vision is about peers, with users struck through", () => {
  renderAt("/");
  expect(screen.getByText(/Our vision is to ensure that/)).toHaveTextContent(
    "ensure that users peers can access information"
  );
  expect(screen.getByText("users", { selector: "del" })).toBeInTheDocument();
});

test("PeerChat, Matrix and Discord are at the top and in the footer", () => {
  renderAt("/");
  const places = {
    PeerChat: "https://peersky.p2plabs.xyz/peerchat/",
    Matrix: "https://matrix.to/#/#p2plabs.xyz:matrix.org",
    Discord: "https://discord.gg/WGczhUJnBZ",
  };
  const main = screen.getByRole("main");
  const footer = screen.getByRole("contentinfo");
  for (const [name, href] of Object.entries(places)) {
    expect(within(main).getByRole("link", { name })).toHaveAttribute("href", href);
    expect(within(footer).getByRole("link", { name: new RegExp(`^${name}`) })).toHaveAttribute("href", href);
  }
});

test("every project has a card with its link", () => {
  renderAt("/");
  const projects = screen.getByRole("region", { name: "Projects" });
  const cards = {
    "PeerSky Desktop": "https://peersky.p2plabs.xyz/#downloads",
    "PeerSky Mobile": "https://peersky.p2plabs.xyz/mobile/",
    PeerChat: "https://github.com/p2plabsxyz/peerchat",
    P2PMD: "https://github.com/p2plabsxyz/p2pmd",
    PeerTunes: "https://github.com/p2plabsxyz/peertunes",
    "hyperdht-mdns": "https://github.com/p2plabsxyz/hyperdht-mdns",
    "P2P Software": "https://github.com/orgs/p2plabsxyz/repositories",
  };
  for (const [name, href] of Object.entries(cards)) {
    expect(within(projects).getByRole("heading", { level: 3, name })).toBeInTheDocument();
    expect(within(projects).getByRole("link", { name: new RegExp(`^${name} `) })).toHaveAttribute("href", href);
  }
});

test("the footer spells the email out, links no mail or support, and ends its years at this one", () => {
  renderAt("/");
  const footer = screen.getByRole("contentinfo");
  expect(within(footer).getByText("contact [at] p2plabs [dot] xyz")).toBeInTheDocument();
  for (const link of screen.getAllByRole("link")) expect(link).not.toHaveAttribute("href", expect.stringMatching(/^mailto:/));
  expect(within(footer).queryByText("Support")).not.toBeInTheDocument();
  expect(footer).toHaveTextContent(`© 2022-${new Date().getFullYear()} p2plabs.xyz`);
  expect(within(footer).getByRole("link", { name: "Careers" })).toHaveAttribute("href", "/careers/");
});

test("the careers page says there are no open positions", () => {
  renderAt("/careers/");
  expect(screen.getByRole("heading", { level: 1, name: "Careers" })).toBeInTheDocument();
  expect(screen.getByText("There are no open positions at the moment.")).toBeInTheDocument();
});

test("the careers page gets its own file in the build, so a link to it opens", () => {
  const app = readFileSync(path.join(__dirname, "App.js"), "utf8");
  expect(routesIn(app)).toEqual(["careers"]);
});

test("the page loads no trackers: no script from another site, no Firebase or Google Analytics", () => {
  const page = readFileSync(path.join(__dirname, "..", "public", "index.html"), "utf8");
  expect(page).not.toMatch(/<script[^>]+src=["']?(https?:)?\/\//i);
  expect(page).not.toMatch(/firebase|gtag|googletagmanager|google-analytics/i);
  const { dependencies = {}, devDependencies = {} } = JSON.parse(
    readFileSync(path.join(__dirname, "..", "package.json"), "utf8")
  );
  expect(Object.keys({ ...dependencies, ...devDependencies }).filter((name) => /firebase|analytics/i.test(name))).toEqual([]);
});

test("the globe is one mesh: every peer is linked, and a signal can reach any of them", () => {
  const { peers, links, neighbours } = makeGlobe();
  expect(peers.length).toBeGreaterThan(50);
  for (const [x, y, z] of peers) expect(Math.hypot(x, y, z)).toBeCloseTo(1, 6);
  expect(neighbours.every((list) => list.length >= 3)).toBe(true);
  expect(new Set(links.map(([a, b]) => `${a}-${b}`)).size).toBe(links.length);

  const reached = new Set([0]);
  const queue = [0];
  while (queue.length) {
    for (const next of neighbours[queue.shift()]) {
      if (reached.has(next)) continue;
      reached.add(next);
      queue.push(next);
    }
  }
  expect(reached.size).toBe(peers.length);
});
