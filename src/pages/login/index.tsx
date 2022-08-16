// import { ButtonSubmit } from '../../components/ButtonSubscription';
import styles from './styles.module.scss';
import Image from 'next/image';
import { FormEvent, useContext, useState } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    // await signIn(data);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.loginContainer}>
        <p>Welcome</p>
        <div>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Usuário'
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Senha'
          />
        </div>
        <a>Esqueceu a senha?</a>
        <button type='submit'>Entrar</button>
      </form>
      <div className={styles.bannerContainer}>
        <Image src='/image2.png' className={styles.imageContainer} height='650rem' width='350rem' />
      </div>
    </div>
  );
}
