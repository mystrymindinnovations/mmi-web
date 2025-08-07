

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* You can move favicon or OG font links here if needed */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
