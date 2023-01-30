import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { InfoContextProvider } from '../../hooks/useInformation';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <InfoContextProvider>
      <Header />
      <Menu />
      <Component {...pageProps} />
    </InfoContextProvider>
  );
}

export default MyApp;
