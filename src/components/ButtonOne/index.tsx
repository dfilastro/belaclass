import styles from './styles.module.scss';
// import { useSession, signIn } from 'next-auth/react';

interface ButtonProps {
  description: string;
  route: string;
  withBorderNotFilled: boolean;
}

export function Button({ description, route, withBorderNotFilled }: ButtonProps) {
  //   const { data: session } = useSession();

  //   return !session ? (
  return (
    <button
      className={`${styles.descContainer} ${withBorderNotFilled && styles.withBorderNotFilled}`}
      //   onClick={() => signIn('github')}
    >
      {description}
    </button>
  );
  //   : (
  //     <div>Olá Diego</div>
  //   );
}
