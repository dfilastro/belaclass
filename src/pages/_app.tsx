import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
