import Head from 'next/head';
import styled from '@emotion/styled';
import { useInfo } from '../../../hooks/useInformation';

import { ContactForm } from '../../components/ContactForm';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const { information } = useInfo();

  const Container = styled.section`
    height: 60vh;
  `;

  const ContentContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
  `;

  const Adress = styled.div`
    width: 25vw;
  `;

  const Form = styled.div`
    width: 45vw;
  `;

  const Title = styled.div`
    text-transform: uppercase;
    font-size: 1.5625rem;
    line-height: 1.72;
    letter-spacing: 0.06em;

    color: ${information.primaryColor};

    &::before {
      content: '';
      position: relative;
      display: block;
      height: 3px;
      width: 70px;
      margin-bottom: 25px;
    }
  `;

  const SocialMedia = styled.div`
    display: flex;
    margin-top: 4rem;
    gap: 4rem;
  `;

  const Ancher = styled.a`
    width: 1%;
    transition: color 0.3s;

    &:hover {
      color: var(--black);
    }
  `;

  return (
    <>
      <Head>
        <title>BelaClass | Contato</title>
      </Head>
      <Container>
        <ContentContainer>
          <Adress>
            <Title>Redes Sociais</Title>

            <SocialMedia>
              <Ancher href='https://www.instagram.com/#' target='_blank' rel='noreferrer'>
                <FaInstagram size='2rem' color={information.primaryColor} />
              </Ancher>
              <Ancher href='https://www.facebook.com/#' target='_blank' rel='noreferrer'>
                <FaFacebook size='2rem' color={information.primaryColor} />
              </Ancher>
              <Ancher href='https://wa.me/5548#' target='_blank' rel='noreferrer'>
                <FaWhatsapp size='2rem' color={information.primaryColor} />
              </Ancher>
            </SocialMedia>
          </Adress>
          <Form>
            <Title>Fale Conosco</Title>
            <ContactForm />
          </Form>
        </ContentContainer>
      </Container>
    </>
  );
}
