import '../styles/globals.css'; // Import global styles
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Apple Watch Studio</title>
        <meta name="description" content="Customize your Apple Watch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
