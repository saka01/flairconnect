import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
 

  return (
    <>
      <Head>
        <title>Fliar Connect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
