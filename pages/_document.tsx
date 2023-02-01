import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          data-domain="checkurl.muhfaris.com"
          src="https://plausible.io/js/script.js"
        ></script>
        <meta
          name="description"
          content="trace url tool of the suspicious URL until you can see the real URL."
        />
        <meta property="og:title" content="Trace URL Tool - Muh Faris" />
        <meta
          property="og:description"
          content="trace url tool of the suspicious URL until you can see the real URL."
        />
        <meta property="og:url" content="https://checkurl.muhfaris.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
