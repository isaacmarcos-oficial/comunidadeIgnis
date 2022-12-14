import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Gentium+Book+Basic:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@400;500&display=swap" rel="stylesheet"
          />

          <link rel="shortcut icon" href="/Ignis2.svg" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}