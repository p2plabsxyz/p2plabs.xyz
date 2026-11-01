// GitHub Pages and Distributed Press only serve files, and every page of the
// site is a route in one React app. So each route in src/App.js gets a copy of
// index.html in its own folder after the build: /careers/ then opens from a
// link or a reload, not only from inside the app. Runs as npm's postbuild.

const fs = require("fs");
const path = require("path");

// The paths of the <Route>s in App.js, other than the home page.
function routesIn(source) {
  return [...source.matchAll(/<Route\s[^>]*path="([^"]+)"/g)]
    .map((match) => match[1].replace(/^\/+|\/+$/g, ""))
    .filter(Boolean);
}

function writeRoutes(root) {
  const build = path.join(root, "build");
  const index = fs.readFileSync(path.join(build, "index.html"));
  const routes = routesIn(fs.readFileSync(path.join(root, "src", "App.js"), "utf8"));
  for (const route of routes) {
    fs.mkdirSync(path.join(build, route), { recursive: true });
    fs.writeFileSync(path.join(build, route, "index.html"), index);
  }
  return routes;
}

if (require.main === module) {
  const routes = writeRoutes(path.join(__dirname, ".."));
  console.log(`Pages for ${routes.map((route) => `/${route}/`).join(", ") || "no routes"}`);
}

module.exports = { routesIn, writeRoutes };
