import { Button } from '../Button';
import { useInfo } from '../../../hooks/useInformation';

import styled from '@emotion/styled';

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
      object-fit: cover;
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
    letter-spacing: 0.15rem;
  `;

  const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2rem 0;
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
      <ButtonDiv>
        <Button description={'Acesse Nossos Cursos'} route={'/courses'} type='button'></Button>
      </ButtonDiv>
    </>
  );
}
