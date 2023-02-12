import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        {typeof window !== "undefined" &&
          window.location.hostname === "checkurl.muhfaris.com" && (
            <>
              <script
                async
                defer
                data-domain="checkurl.muhfaris.com"
                src="/js/script.js"
              ></script>

              <script
                defer
                data-domain="checkurl.muhfaris.com"
                data-api="/api/event"
                src="/js/script.js"
              ></script>
            </>
          )}
        <meta
          name="description"
          content="trace url tool of the suspicious URL or Shortlink URL until you can see the real URL."
        />
        <meta property="og:title" content="Trace URL Tool - Muh Faris" />
        <meta
          property="og:description"
          content="trace url tool of the suspicious URL or Shortlink URL until you can see the real URL."
        />
        <meta property="og:url" content="https://checkurl.muhfaris.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="h-screen dark:bg-gray-800">
        <Main />
        <NextScript />
        <script
          id="inline-script"
          dangerouslySetInnerHTML={{
            __html: `
              let links = document.querySelectorAll("a[data-analytics]");
              for (var i = 0; i < links.length; i++) {
                links[i].addEventListener("click", handleLinkEvent);
                links[i].addEventListener("auxclick", handleLinkEvent);
              }

              function handleLinkEvent(event) {
                var link = event.target;
                var middle = event.type == "auxclick" && event.which == 2;
                var click = event.type == "click";
                while (
                  link &&
                  (typeof link.tagName == "undefined" ||
                    link.tagName.toLowerCase() != "a" ||
                    !link.href)
                ) {
                  link = link.parentNode;
                }
                if (middle || click) {
                  let attributes = link.getAttribute("data-analytics").split(/,(.+)/);
                  console.log(attributes)
                  let events = [
                    JSON.parse(attributes[0]),
                    JSON.parse(attributes[1] || "{}"),
                  ];

                  if(plausible != "undefined" && plausible){
                    plausible(...events);
                  }
                }
                if (!link.target) {
                  if (!(event.ctrlKey || event.metaKey || event.shiftKey) && click) {
                    setTimeout(function () {
                      location.href = link.href;
                    }, 150);
                    event.preventDefault();
                  }
                }
              }`,
          }}
        ></script>
      </body>
    </Html>
  );
}
