import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '@public/styles/tailwind.css'
import tailwindConfig from 'tailwind.config.js'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to test-a!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
