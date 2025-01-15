import axios from "axios";
import { useState } from "react";
import { TraceURLType } from "./../src/types";
import ValidURL from "./../src/utils/urllib";
import Header from "./../src/components/header";
import Footer from "./../src/components/footer";

export default function Home() {
  const [urlInput, setURLInput] = useState("");
  const [tracesURL, setTracesURL] = useState<TraceURLType[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function formHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!urlInput) {
      setIsError(true);
      return;
    }

    if (!ValidURL(urlInput)) {
      setIsError(true);
      return;
    }

    // reset value
    setTracesURL([]);
    setLoading(true);
    const urlAPI = `/api/check-url?url=${urlInput}`;
    const result = await axios.get(urlAPI);
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
      setLoading(false);
      setIsError(false);
    }
  }

  const copyText = async (txt: string) => {
    var textArea = document.createElement("textarea");

    // Assign the text to be copied to the textarea
    textArea.value = txt;

    // Make the textarea element not visible
    // textArea.style.display = "none";

    // Append the textarea to the body
    document.body.appendChild(textArea);

    // Highlight and copy the text
    textArea.select();
    document.execCommand("copy");

    // Remove the textarea from the body
    document.body.removeChild(textArea);
  };

  return (
    <div className="md:py-5 md:my-5 dark:bg-gray-800 content">
      <Header />
      <div className="container mx-auto">
        {isError && (
          <div
            id="alert-4"
            className="flex p-4 mt-10 mb-4 text-yellow-800 bg-yellow-50 rounded-lg dark:text-yellow-300 dark:bg-gray-800"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium">
              Please, enter correct a URL!
            </div>
            <button
              type="button"
              className="inline-flex p-1.5 -my-1.5 -mx-1.5 ml-auto w-8 h-8 text-yellow-500 bg-yellow-50 rounded-lg dark:text-yellow-300 dark:bg-gray-800 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-400 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-4"
              aria-label="Close"
              onClick={() => setIsError(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )}
        <div className="flex justify-center px-6 my-24 md:my-28">
          <div className="flex w-full lg:w-11/12 xl:w-3/4">
            <div className="hidden w-full h-auto bg-gray-400 bg-cover rounded-l-lg lg:block lg:w-1/2 side-images"></div>
            <div className="p-5 w-full bg-white rounded-lg lg:w-1/2 lg:rounded-l-none dark:bg-gray-800">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl dark:text-white">
                  Check URL
                </h3>
                <p className="mb-4 text-sm text-gray-700 dark:text-white">
                  We help you to trace the suspicious URL until you can see the
                  real URL.
                </p>
              </div>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded dark:bg-gray-800 plausible-event-name=Validate+URL"
                onSubmit={formHandler}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    URL
                  </label>
                  <input
                    className="py-2 px-3 w-full text-sm leading-tight text-gray-700 rounded border shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="url"
                    type="text"
                    value={urlInput}
                    placeholder="https://s.id/1xSb8"
                    onChange={(e) => setURLInput(e.target.value)}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="py-2 px-4 w-full font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline mr-3 w-4 h-4 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        Loading...
                      </>
                    ) : (
                      "Check URL"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex px-5 mx-5">
          <ol className="relative border-gray-200 dark:border-gray-700">
            {tracesURL.map((tu, key) => {
              return (
                <li
                  className={
                    tracesURL.length - 1 === key
                      ? "pb-10 pl-6 max-w-xs md:max-w-full"
                      : "pb-10 pl-6 max-w-xs md:max-w-full border-l"
                  }
                  key={key}
                >
                  <div
                    className={
                      tracesURL.length - 1 === key
                        ? "rounded-lg p-4 bg-gray-600"
                        : ""
                    }
                  >
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
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
                      {tracesURL.length - 1 == key ? "Original URL" : tu.name}
                      <span className="py-0.5 px-2.5 mr-2 ml-3 text-sm font-semibold text-blue-800 bg-blue-100 rounded dark:text-blue-200 dark:bg-blue-900">
                        | {tu.valid}
                      </span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      status {tu.status}
                    </time>
                    <p className="mb-4 text-sm font-normal text-gray-500 break-words dark:text-gray-400">
                      {tu.url}
                      <button
                        className="inline-block py-0.5 px-2.5 text-sm font-medium text-blue-800 rounded dark:text-blue-300"
                        onClick={() => copyText(tu.url)}
                      >
                        <svg
                          className="w-6 h-6 text-gray-500"
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
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
