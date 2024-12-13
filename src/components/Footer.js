import React from "react";
import { Link } from "react-router-dom";
// import firebase from "firebase/compat/app";
// import db from "../firebase";
import Logo from "../images/logo.png";

function Footer() {
  // Newsletter
  // const [input, setInput] = useState("");
  // const [subscribe, setSubscribe] = useState("");

  // function inputHandler(e) {
  //   setInput(e.target.value);
  // }

  // async function submitHandler(e) {
  //   e.preventDefault();
  //   if (input) {
  //     await db.collection("emails").add({
  //       email: input,
  //       time: firebase.firestore.FieldValue.serverTimestamp(),
  //     });
  //     setSubscribe("Subscribed successfully!");
  //     setTimeout(() => {
  //       setSubscribe("");
  //     }, 3690);
  //   }
  // }

  return (
    <footer
      className="text-gray-600 body-font"
      style={{ backgroundColor: "#FFFCF9" }}
    >
      <div className="container px-5 sm:px-10 md:px-20 lg:px-32 xl:px-38 py-6 sm:py-12 md:py-16 lg:py-20 xl:py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-2"></div>
          <div className="w-full px-4 sm:px-8 md:w-1/2 lg:w-1/4">
            <nav className="list-none mb-10 mt-6 md:mt-0">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Contact
              </h2>
              <li>
                <a
                  href="mailto:contact@p2plabs.xyz"
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@p2plabs.xyz
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/p2plabsxyz/support"
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 sm:px-8 md:w-1/2 lg:w-1/4">
            <nav className="list-none mb-10">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Internet
              </h2>
              <li>
                <a
                  href="https://github.com/p2plabsxyz"
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/p2plabsxyz/"
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/p2plabs_xyz"
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-1 sm:px-1 md:w-1/2 lg:w-1/4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              LATEST UPDATES & NEWS
            </h2>
            {/* <form onSubmit={submitHandler}> */}
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-48 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  for="footer-field"
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
                  </a>
                </label>
                {/* <input
                    type="email"
                    onChange={inputHandler}
                    value={input}
                    id="footer-field"
                    placeholder="email address"
                    name="footer-field"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  /> */}
              </div>
              {/* <button
                type="submit"
                className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cyan-400 border-0 py-2 px-4 focus:outline-none hover:bg-cyan-500 rounded"
              >
                Subscribe
              </button> */}
            </div>
            {/* </form> */}
            {/* <p className="text-sky-400 text-sm mt-2 md:text-left text-center">
              {subscribe}
            </p> */}
          </div>
        </div>
      </div>
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
