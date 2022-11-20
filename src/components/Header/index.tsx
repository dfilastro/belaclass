// import { useUser } from '@auth0/nextjs-auth0';
// import { Button } from '../ButtonOne';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <p className={styles.logoContainer}>
        Bela
        <span>class</span>
      </p>
      <nav className={styles.nav}>
        {/* <a href='/login'>
          <Button description='Acessar' route='/login' withBorderNotFilled={true} />
        </a> */}
      </nav>
    </header>
  );
}
