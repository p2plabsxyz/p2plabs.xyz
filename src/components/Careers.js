import React, { useEffect } from "react";

function Careers() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Careers · P2P Labs";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-6 py-24 text-left sm:px-8 md:py-32">
      <h1 className="text-4xl font-medium leading-tight tracking-tight text-gray-900 sm:text-5xl">
        <code>Careers</code>
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600">There are no open positions at the moment.</p>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
        You can still help: our software is open source on{" "}
        <a
          href="https://github.com/p2plabsxyz"
          className="text-gray-900 underline hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </main>
  );
}

export default Careers;
