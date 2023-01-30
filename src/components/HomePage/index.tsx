import { NextApiRequest, NextApiResponse } from 'next';
import { Button } from '../Button';
import { useInfo } from '../../../hooks/useInformation';

import styled from '@emotion/styled';
import styles from './styles.module.scss';

export default function HomePage() {
  const { information } = useInfo();

  const FirstContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 5rem 10rem;
    gap: 6rem;
  `;

  const SecondContainer = styled.div`
    background-color: ${information.secondaryColor};
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 5rem 10rem;
    gap: 6rem;
  `;

  const ImageContainer = styled.div`
    height: inherit;
    img {
      height: 45vh;
      width: 25vw;
      border-radius: 10%;
    }
  `;

  const ContentContainer = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-weight: 400;
    // font-size: 1.5rem;
    letter-spacing: 0.15rem;
  `;

  console.log(information);

  return (
    <>
      <FirstContainer>
        <ImageContainer>
          {/* <img src='/makeup.jpg' alt='' /> */}
          <img src={information.homeImg1} alt='' />
        </ImageContainer>
        <ContentContainer>
          <p>{information.homeDesc1}</p>
        </ContentContainer>
      </FirstContainer>

      <SecondContainer>
        <ContentContainer>
          <p>{information.homeDesc2}</p>
        </ContentContainer>
        <ImageContainer>
          <img src={information.homeImg2} alt='' />
        </ImageContainer>
      </SecondContainer>
      <div className={styles.downsideButton}>
        <Button description={'Acesse Nossos Cursos'} route={'/courses'} type='button'></Button>
      </div>
    </>
  );
}
