import Link from "next/link";
import Image from "next/image";

export default function Header(){
  return (
    <>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              className="logo mr-3 h-6 sm:h-9"
              alt="check url logo"
              width={34}
              height={34}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Check URL
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              href="/status-domains"
              className="hidden md:block text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              data-analytics='"Contact Us"'
            >
              Status Domains
            </Link>
            <a
              href="mailto:dev@muhfaris.com?subject=Hi%2C%20I%20am%20from%20checkurl.muhfaris.com"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              data-analytics='"Contact Us"'
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <section className="hidden block fixed bottom-0 inset-x-0 z-50 shadow-lg text-gray-800 bg-gray-700 dark:bg-dark backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 dark:text-gray-400 sm:block">
        <div id="tabs" className="flex justify-between">
          <Link
            href="/"
            className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="tab block text-xs">Home</span>
          </Link>
          <Link
            href="/status-domains"
            className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
          >
            <svg
              className="h-6 w-6 inline-block mb-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span className="tab block text-xs">Status Domains</span>
          </Link>
          <Link
            href="mailto:dev@muhfaris.com?subject=Hi%2C%20I%20am%20from%20checkurl.muhfaris.com"
            className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
          >
            <svg
              className="h-6 w-6 inline-block mb-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="tab block text-xs">Contact Us</span>
          </Link>
        </div>
      </section>
    </>
  );
};
