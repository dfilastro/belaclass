import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Menu() {
  return (
    <div className={styles.menuContainer}>
      <ActiveLink activeClassName={styles.active} href={'/'}>
        <p>Inicio</p>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/about'}>
        <p>Sobre</p>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/access'}>
        <p>Cursos</p>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/contact'}>
        <p>Contato</p>
      </ActiveLink>
    </div>
  );
}
