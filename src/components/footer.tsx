import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 pt-16 pb-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 hover:text-white">
          © 2023 Check URL —
          <a
            href="https://twitter.com/_muh_faris"
            className="text-gray-600 ml-1 hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
            data-analytics='"Twitter Muh Faris"'
          >
            @_muh_faris
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            className="ml-3 text-gray-500"
            href="https://twitter.com/_muh_faris"
            data-analytics='"Twitter Muh Faris"'
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 hover:text-white"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/muhfaris/"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5 hover:text-white"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
          <Link href="https://www.nihbuatjajan.com/muhfaris" className="ml-3" target="_blank">
            <Image
              src="/nihbuatjajan-cta.png"
              alt="Nih buat jajan"
              width={120}
              height={60}
            />
          </Link>
        </span>
      </div>
    </footer>
  );
}
