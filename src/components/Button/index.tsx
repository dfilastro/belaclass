import styles from './styles.module.scss';

interface Props {
  description: string;
  route: string;
}

export function Button({ description, route }: Props) {
  return (
    <a className={styles.button} href={route}>
      {description}
    </a>
  );
}
