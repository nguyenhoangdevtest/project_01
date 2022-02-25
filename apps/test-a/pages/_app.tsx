import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '@public/styles/app.scss';
import '@public/styles/tailwind.css';
import 'antd/dist/antd.css';
import 'antd/lib/style/index.css';
import 'antd/lib/layout/style/index.css';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/menu/style/index.css';
import 'antd/lib/message/style/index.css';
import 'antd/lib/form/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/tabs/style/index.css';
import 'antd/lib/avatar/style/index.css';
import 'antd/lib/dropdown/style/index.css';
import 'antd/lib/modal/style/index.css';
import 'antd/lib/select/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import 'antd/lib/carousel/style/index.css';
import 'antd/lib/pagination/style/index.css';
import 'antd/lib/tooltip/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/date-picker/style/index.css';
import 'antd/lib/upload/style/index.css';
import 'simplebar/dist/simplebar.min.css';
import tailwindConfig from 'tailwind.config.js';

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
