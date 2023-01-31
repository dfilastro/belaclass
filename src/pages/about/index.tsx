import { useInfo } from 'hooks/useInformation';

import styled from '@emotion/styled';
import Head from 'next/head';

export default function About() {
  const { information } = useInfo();

  const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  `;

  const AboutTitle = styled.h1`
    font-weight: 600;
    font-size: 2rem;
  `;

  const AboutDescription = styled.p`
    margin: 2rem 0;
    text-align: center;
    width: 60vw;
  `;

  const ProfessionalsContainer = styled.div`
    padding: 0 5rem;
    display: flex;
    justify-content: center;
    gap: 5rem;
  `;

  const ProfessionalsCard1 = styled.div`
    background-image: url(${information.aboutImg1});
    background-size: contain;
    background-position: center;
    width: 30rem;
    height: 30rem;
    padding: 1rem;
  `;

  const ProfessionalsCard2 = styled.div`
    background-image: url(${information.aboutImg2});
    background-size: contain;
    background-position: center;
    width: 30rem;
    height: 30rem;
    padding: 1rem;
  `;

  const ProfessionalsCard3 = styled.div`
    background-image: url(${information.aboutImg3});
    background-size: contain;
    background-position: center;
    width: 30rem;
    height: 30rem;
    padding: 1rem;
  `;

  const ProfessionalsCardDescription = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;

  const ProfessionalsDescription = styled.div`
    height: 20%;
    background-color: white;
    padding: 0.2rem 1rem;
  `;

  const Img = styled.img`
    width: 30rem;
    height: 30rem;
  `;

  return (
    <div>
      <Head>
        <title>BelaClass | Sobre Nós</title>
      </Head>
      <AboutContainer>
        <AboutTitle>{information.aboutTitle}</AboutTitle>
        <AboutDescription>{information.aboutDesc}</AboutDescription>
      </AboutContainer>
      <ProfessionalsContainer>
        <ProfessionalsCard1>
          <ProfessionalsCardDescription>
            <ProfessionalsDescription>
              <h1>{information.aboutProf1}</h1>
              <p>{information.aboutMed1}</p>
            </ProfessionalsDescription>
          </ProfessionalsCardDescription>
        </ProfessionalsCard1>

        <ProfessionalsCard2>
          <ProfessionalsCardDescription>
            <ProfessionalsDescription>
              <h1>{information.aboutProf2}</h1>
              <p>{information.aboutMed2}</p>
            </ProfessionalsDescription>
          </ProfessionalsCardDescription>
        </ProfessionalsCard2>

        <ProfessionalsCard3>
          <ProfessionalsCardDescription>
            <ProfessionalsDescription>
              <h1>{information.aboutProf3}</h1>
              <p>{information.aboutMed3}</p>
            </ProfessionalsDescription>
          </ProfessionalsCardDescription>
        </ProfessionalsCard3>
      </ProfessionalsContainer>
    </div>
  );
}
