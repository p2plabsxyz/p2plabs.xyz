import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Footer() {
  return (
    <footer
      className="text-gray-600 body-font"
      style={{ backgroundColor: "#FFFCF9" }}
    >
      <div className="container px-5 sm:px-10 md:px-20 lg:px-32 xl:px-38 py-6 sm:py-12 md:py-16 lg:py-20 xl:py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Left Section: Distributed Press Snippet */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 sm:px-8">
            <div className="flex flex-col items-center lg:items-start mt-6 md:mt-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Powered by
              </h2>
              <a
                href="//distributed.press"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2"
              >
                <img
                  alt="Distributed Press"
                  src="//distributed.press/img/logos/logo-distributedpress-grey.png"
                  className="w-[123px] h-auto"
                />
              </a>
              <nav className="list-none text-center lg:text-left">
                <li>
                  <a
                    href="//reader.distributed.press"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Follow on ActivityPub
                  </a>
                </li>
                <li>
                  <a
                    href="//docs.distributed.press"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Learn More
                  </a>
                </li>
                <li>
                  <a
                    href="ipns://p2plabs.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    ipns://
                  </a>
                </li>
                <li>
                  <a
                    href="hyper://p2plabs.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    hyper://
                  </a>
                </li>
              </nav>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 sm:px-8">
            <nav className="list-none mb-10 mt-6 md:mt-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Contact
              </h2>
              <li>
                <a
                  href="mailto:contact@p2plabs.xyz"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@p2plabs.xyz
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/p2plabsxyz/support"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support
                </a>
              </li>
            </nav>
          </div>

          {/* Internet Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 sm:px-8">
            <nav className="list-none mb-10">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Internet
              </h2>
              <li>
                <a
                  href="https://github.com/p2plabsxyz"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/p2plabsxyz/"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/p2plabs_xyz"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </nav>
          </div>

          {/* Latest Updates Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-1 sm:px-1">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Latest Updates & News
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-48 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Join our Matrix community{" "}
                  <a
                    href="https://matrix.to/#/#p2plabs.xyz:matrix.org"
                    className="text-gray-600 hover:text-green-500 underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @p2plabs.xyz:matrix.org
                  </a> or connect with us on {" "}
                  <a
                    href="https://discord.gg/WGczhUJnBZ"
                    className="text-gray-600 hover:text-purple-500 underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord.
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ backgroundColor: "#23201F" }}>
        <div className="container px-5 sm:px-10 md:px-20 lg:px-32 xl:px-38 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/">
            <span className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 p-1 rounded-full"
              />
              <span className="ml-2 text-xl">
                <code>P2P Labs</code>
              </span>
            </span>
          </Link>
          <p className="text-sm text-gray-200 sm:ml-6 sm:mt-0 mt-4">
            © 2022-2025 p2plabs.xyz, all rights reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
