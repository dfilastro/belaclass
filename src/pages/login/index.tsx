// import { ButtonSubmit } from '../../components/ButtonSubscription';
import styles from './styles.module.scss';
import Image from 'next/image';
import { FormEvent, useContext, useState } from 'react';
import { Button } from '../../components/ButtonOne';
// import { AuthContext } from '../../contexts/AuthContext';

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Login() {
  const [userFields, setUserFields] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleFieldChange = (e: { target: { id: string; value: string } }) => {
    setUserFields((old) => ({ ...old, [e.target.id]: e.target.value }));

    // for (const key in userMessage) {
    //   userMessage[key] = '';
    // }

    // setPageState(userMessage);
  };

  async function create(user: UserData) {
    try {
      const { status } = await fetch('http://localhost:3000/api/user/create', {
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      // if (status !== 200) {
      //   // userMessage.error = 'User already registered';
      //   // setPageState(userMessage);
      //   return;
      // }

      // userMessage.success = 'Registered Successfully';
      // setPageState(userMessage);

      setUserFields({ firstName: '', lastName: '', email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
  }

  //   const { signIn } = useContext(AuthContext);

  async function handleSubmit(user: UserData) {
    try {
      // if (!user.firstName) {
      //   userMessage.error = 'First name must be provided';
      //   setPageState(userMessage);
      //   return;
      // }

      // if (!user.lastName) {
      //   userMessage.error = 'Last name must be provided';
      //   setPageState(userMessage);
      //   return;
      // }

      // if (!validateEmail(user.email)) {
      //   userMessage.error = 'Invalid e-mail';
      //   setPageState(userMessage);
      //   return;
      // }

      // if (!user.password) {
      //   userMessage.error = 'You must provide a password';
      //   setPageState(userMessage);
      //   return;
      // }

      // if (user.password.length < 5) {
      //   userMessage.error = 'You must provide a password with, at least, 5 characters';
      //   setPageState(userMessage);
      //   return;
      // }

      create(user);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(userFields);
        }}
        className={styles.loginContainer}
      >
        <p>Welcome</p>
        <div>
          <input
            id='firstName'
            type='text'
            onChange={handleFieldChange}
            value={userFields.firstName}
            placeholder='Nome'
          />
        </div>
        <div>
          <input
            id='lastName'
            type='text'
            value={userFields.lastName}
            onChange={handleFieldChange}
            placeholder='Sobrenome'
          />
        </div>
        <div>
          <input
            id='email'
            type='email'
            value={userFields.email}
            onChange={handleFieldChange}
            placeholder='Usuário'
          />
        </div>
        <div>
          <input
            id='password'
            type='password'
            value={userFields.password}
            onChange={handleFieldChange}
            placeholder='Senha'
          />
        </div>
        {/* <a>Esqueceu a senha?</a> */}

        <button className={styles.button} type='submit'>
          Criar Usuário
        </button>
      </form>

      <div className={styles.bannerContainer}>
        <Image src='/image2.png' className={styles.imageContainer} height='650rem' width='350rem' />
      </div>
    </div>
  );
}
