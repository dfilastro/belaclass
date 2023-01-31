// import { useUser } from '@auth0/nextjs-auth0';
import { Button } from '../ButtonOne';
import styles from './styles.module.scss';

import { useInfo } from '../../../hooks/useInformation';

export function Header() {
  const { information } = useInfo();

  return (
    <header className={styles.container}>
      <p className={styles.logoContainer}>{information.title}</p>
      <nav className={styles.nav}></nav>
    </header>
  );
}
