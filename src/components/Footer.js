import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { COMMUNITY, SPELLED_EMAIL } from "../links";

const HEADING = "mb-4 text-sm font-medium tracking-widest text-gray-900";
const LINK = "text-gray-600 transition hover:text-gray-900";

function Out({ href, children }) {
  return (
    <a href={href} className={LINK} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Footer() {
  // From the visitor's clock, so the range never needs a new release to stay current.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 text-left">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 text-sm sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <h2 className={HEADING}>Powered by</h2>
          <a href="https://distributed.press/" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img
              alt="Distributed Press"
              src="https://distributed.press/img/logos/logo-distributedpress-grey.png"
              className="h-auto w-[123px]"
            />
          </a>
          <ul className="mt-4 space-y-2">
            <li>
              <Out href="https://reader.distributed.press/">Follow on ActivityPub</Out>
            </li>
            <li>
              <Out href="https://docs.distributed.press/">Learn More</Out>
            </li>
            <li>
              <Out href="ipns://p2plabs.xyz">ipns://</Out>
            </li>
            <li>
              <Out href="hyper://p2plabs.xyz">hyper://</Out>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={HEADING}>Contact</h2>
          <ul className="space-y-2">
            <li className="select-all text-gray-600">{SPELLED_EMAIL}</li>
            <li>
              <Link to="/careers/" className={LINK}>
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={HEADING}>Internet</h2>
          <ul className="space-y-2">
            <li>
              <Out href="https://github.com/p2plabsxyz">GitHub</Out>
            </li>
            <li>
              <Out href="https://www.linkedin.com/company/p2plabsxyz/">LinkedIn</Out>
            </li>
            <li>
              <Out href="https://mastodon.social/@peersky">Mastodon</Out>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={HEADING}>Latest Updates &amp; News</h2>
          <p className="mb-2 text-gray-600">Join our community on</p>
          <ul className="space-y-2">
            {COMMUNITY.map((place) => (
              <li key={place.name}>
                <Out href={place.href}>
                  <span className="underline hover:no-underline">{place.name}</span>
                  {place.note && <span className="text-gray-500"> · {place.note}</span>}
                </Out>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#23201F]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:px-8">
          <Link to="/" className="flex items-center text-white">
            <img src={Logo} alt="" className="h-12 w-12 rounded-full p-1" />
            <span className="ml-2 text-xl">
              <code>P2P Labs</code>
            </span>
          </Link>
          <p className="text-sm text-gray-200 sm:ml-2">© 2022-{year} p2plabs.xyz, all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
