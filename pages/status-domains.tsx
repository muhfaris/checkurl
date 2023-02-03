import { DomainOwnership } from "@/src/utils/domains/type";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/src/components/header";
import Footer from "./../src/components/footer";

const getDomains = async (): Promise<DomainOwnership[] | undefined> => {
  try {
    const response = await axios.get("/api/status-domain");
    return response.data as DomainOwnership[];
  } catch (error) {
    return;
  }
};

export default function DomainStatus() {
  const [loading, setLoading] = useState(true);
  const [domains, setDomains] = useState<DomainOwnership[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getDomains();
        if (response) {
          setDomains(response);
          setLoading(false);
        }
      } catch (error) {
        console.log("error get list domain");
      }
    })();
  }, []);

  return (
    <div className="content md:py-5 md:my-5 dark:bg-gray-800">
      <Header />
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Status of domains
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              A list of all the domains we have researched. We also test these
              domains directly and get them from the official platform.
            </p>
          </div>
          {loading && (
            <div
              role="status"
              className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-8">
            {domains.map((domain, index) => {
              return (
                <div
                  className="flex dark:bg-gray-800 dark:text-white border rounded-lg divide-x"
                  key={index}
                >
                  <div
                    className={
                      "flex items-center text-white p-2 md:p-4 rounded-l-lg " +
                      (domain.is_active ? "bg-green-400" : "bg-gray-400")
                    }
                  >
                    {domain.is_active ? (
                      <svg
                        className="w-6 md:w-8 h-6 md:h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 md:w-8 h-6 md:h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                    )}
                  </div>

                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {domain.domain}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-white">
                      {domain.name} {domain.note && `(${domain.note})`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
