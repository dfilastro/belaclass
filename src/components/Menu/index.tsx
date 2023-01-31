import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';
import styled from '@emotion/styled';

import { useInfo } from '../../../hooks/useInformation';

export function Menu() {
  const { information } = useInfo();

  const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    gap: 2rem;
    font-size: 1rem;
    background-color: ${information.primaryColor};
    color: var(--white);
  `;

  const Item = styled.p`
    margin: 1rem;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.2s;
    letter-spacing: 0.2rem;

    &:hover {
      color: ${information.secondaryColor};

      cursor: pointer;
    }

    &.active {
      color: var(--white);
      font-weight: 800;
    }
  `;

  return (
    <MenuContainer>
      <ActiveLink activeClassName={styles.active} href={'/'}>
        <Item>Inicio</Item>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/about'}>
        <Item>Sobre</Item>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/courses'}>
        <Item>Cursos</Item>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/contact'}>
        <Item>Contato</Item>
      </ActiveLink>

      <ActiveLink activeClassName={styles.active} href={'/admin'}>
        <Item>Admin</Item>
      </ActiveLink>
    </MenuContainer>
  );
}
