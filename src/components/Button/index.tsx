import styled from '@emotion/styled';
import { useInfo } from '../../../hooks/useInformation';

interface Props {
  description: string;
  route?: string;
  type: string;
}

export function Button({ description, route, type }: Props) {
  const { information } = useInfo();

  const ButtonContainer = styled.a`
    padding: 0.5rem 4rem;
    border-radius: 1.5rem;
    border: none;
    background-color: ${information.primaryColor};
    color: var(--white);
    font-weight: 600;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      background-color: ${information.secondaryColor};
    }
  `;

  return (
    <ButtonContainer href={route} type={type}>
      {description}
    </ButtonContainer>
  );
}
