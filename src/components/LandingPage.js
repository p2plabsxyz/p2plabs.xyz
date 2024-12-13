import React from "react";
import Hero from "../images/hero.png";
import Peersky from "../images/peersky-browser.png";
import DScan from "../images/dscan.png";
import Dhost from "../images/dhost.png";
import NFT from "../images/1clicknft.png";

function LandingPage() {

  return (
    <div style={{ backgroundColor: "#FFFCF9" }}>
      {/* header */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:px-10 md:px-20 lg:px-32 xl:px-38 py-16 sm:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <br className="hidden lg:inline-block" />
              <code>Powering the Decentralized Web</code>
            </h1>
            <p className="mb-8 leading-relaxed">
              At P2P Labs, we're building curated infrastructure tools for the
              decentralized web, based on p2p protocols.
              <br />
              One of the most significant benefits of decentralization is the
              transformation towards seamless data accessibility from anywhere,
              primarily driven by the advancements in peer-to-peer technologies
              and decentralized storage solutions.{" "}
              <b>
                Our vision is to ensure that users can access information as
                extensively as possible from anywhere in the world.
              </b>
            </p>
            <div className="block justify-center">
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-48 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    for="footer-field"
                    className="leading-7 text-md text-gray-600"
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="decentralized network"
              src={Hero}
            />
          </div>
        </div>
      </section>
      {/* Projects */}
      <section
        className="text-gray-600 body-font"
        style={{ textAlign: "left" }}
      >
        <div className="container px-5 sm:px-10 md:px-20 lg:px-32 xl:px-38 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden"></div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Projects
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-28 pl-0">
                Use our services from the following links. Our software is
                open-sourced. So you can read it, fork it, and improve it!
              </p>
            </div>
          </div>
          {/* dscan */}
          <div className="flex flex-wrap -m-4">
            {/* Peersky */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Peersky}
                  alt="Peersky Browser"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Infrastructure
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Peersky Browser
                  </h1>
                  <p className="leading-relaxed mb-5">
                    A Minimal Local-First P2P Web Browser: Access, Communicate, and Publish Offline
                  </p>
                  <div className="mt-auto">
                    <a
                      className="text-sky-500 hover:text-sky-600 inline-flex items-center"
                      href="https://peersky.p2plabs.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download for desktop
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DScan */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={DScan}
                  alt="DScan"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Publishing
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DScan
                  </h1>
                  <p className="leading-relaxed mb-5">
                    A decentralized storage and file-sharing tool that uploads content to
                    IPFS and generates decentralized QR codes.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="text-sky-500 hover:text-sky-600 inline-flex items-center"
                      href="https://chrome.google.com/webstore/detail/dscan-decentralized-qr-co/idpfgkgogjjgklefnkjdpghkifbjenap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chrome Web Store
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DHost */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Dhost}
                  alt="Dhost"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Dev tool
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    DHost
                  </h1>
                  <p className="leading-relaxed mb-5">
                    DHost is a vscode extension that publishes static websites to IPFS.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="text-sky-500 hover:text-sky-600 inline-flex items-center"
                      href="https://marketplace.visualstudio.com/items?itemName=DHost.dhost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VSCode Marketplace
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 1ClickNFT */}
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={NFT}
                  alt="1clickNFT"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Dev tool
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    1clickNFT
                  </h1>
                  <p className="leading-relaxed mb-5">
                    1clickNFT allows you to instantly upload NFT data to IPFS right from VS
                    Code by using nft.storage.
                  </p>
                  <div className="mt-auto">
                    <a
                      className="text-sky-500 hover:text-sky-600 inline-flex items-center"
                      href="https://marketplace.visualstudio.com/items?itemName=1clickNFT.1clicknft"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VSCode Marketplace
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
