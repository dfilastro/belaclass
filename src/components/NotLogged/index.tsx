import { Button } from '../Button';
import styles from './styles.module.scss';

export default function NotLogged() {
  return (
    <div className={styles.container}>
      <div>Você não está logado, clique no botão abaixo para entrar</div>
      <Button description={'Entrar'} route={'/login'} />
    </div>
  );
}
