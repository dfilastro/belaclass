import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';
import styled from '@emotion/styled';

import { useInfo } from '../../../hooks/useInformation';
import { useState } from 'react';

// const { information } = useInfo();

// if (!information) {
// mainColor = 'var(--lilac-800)';
// } else {
// mainColor = information.color1;
// }

// const colorEx = 'var(--lilac-800)';

export function Menu() {
  const { information } = useInfo();
  const mainColor = information.primaryColor;

  const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    gap: 2rem;
    font-size: 1rem;
    background-color: ${mainColor};
    color: var(--white);

    p {
      margin: 1rem;
      text-align: center;
      text-transform: uppercase;
      transition: all 0.2s;
      letter-spacing: 0.2rem;

      &:hover {
        color: var(--lilac-200);

        cursor: pointer;
      }

      &.active {
        color: var(--white);
        font-weight: 800;
      }
    }
  `;

  return (
    <MenuContainer>
      <ActiveLink activeClassName={styles.active} href={'/'}>
        <p>Inicio</p>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/about'}>
        <p>Sobre</p>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/courses'}>
        <p>Cursos</p>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/contact'}>
        <p>Contato</p>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/admin'}>
        <p>Admin</p>
      </ActiveLink>
    </MenuContainer>
  );
}
