import axios from "axios";
import { useState } from "react";
import { TraceURLType } from "./../src/types";
import Link from "next/link";
import Image from 'next/image'

export default function Home() {
  const [urlInput, setURLInput] = useState("");
  const [tracesURL, setTracesURL] = useState<TraceURLType[]>([]);
  async function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // reset value
    setTracesURL([]);

    if (!urlInput) {
      alert("url is required");
      return;
    }

    const url = `/api/check-url?url=${urlInput}`;
    const result = await axios.get(url);
    if (result && result?.data) {
      const respTracesURL = result.data.data.map((m: any): TraceURLType => {
        return {
          url: m.url,
          status: m.status,
          name: m.name,
          valid: m.valid,
        };
      });

      setTracesURL((prev) => [...prev, ...respTracesURL]);
    }
  }

  return (
    <div className="content py-3 my-3 md:py-5 md:my-5">
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
            <a
              href="mailto:dev@muhfaris.com"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        <div className="flex justify-center  px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg side-images"></div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">Check URL</h3>
                <p className="mb-4 text-sm text-gray-700">
                  We help you to trace the suspicious URL until you can see the
                  real URL.
                </p>
              </div>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={formHandler}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    URL
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="url"
                    type="text"
                    value={urlInput}
                    placeholder="https://s.id/1xSb8"
                    onChange={(e) => setURLInput(e.target.value)}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Check URL
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="px-5">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {tracesURL.map((tu, key) => {
              return (
                <li className="mb-10 ml-6" key={key}>
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 text-blue-800 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {tu.name}
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                      | {tu.valid}
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    status {tu.status}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {tu.url}
                    <button
                      className="inline-block font-medium text-sm text-blue-800 dark:text-blue-300 px-2.5 py-0.5 rounded"
                      onClick={() => navigator.clipboard.writeText(tu.url)}
                    >
                      <svg
                        className="h-6 w-6 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <rect x="8" y="4" width="12" height="12" rx="2" />{" "}
                        <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
                      </svg>{" "}
                    </button>
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
