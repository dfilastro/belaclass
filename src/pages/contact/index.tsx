import Head from 'next/head';
import styles from './styles.module.scss';

import { ContactForm } from '../../components/ContactForm';
// import GoogleMaps from '../../components/LocationMap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Head>
        <title>BelaClass | Contato</title>
      </Head>
      <div className={styles.headerBackground}></div>

      {/* <GoogleMaps latitude={-28.59891} longitude={-49.32805} /> */}

      <section className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.adress}>
            <h4>Redes Sociais</h4>

            <div className={styles.socialMediaSection}>
              <a href='https://www.instagram.com/#' target='_blank' rel='noreferrer'>
                <FaInstagram size='2rem' color='var(--lilac-800)' />
              </a>
              <a href='https://www.facebook.com/#' target='_blank' rel='noreferrer'>
                <FaFacebook size='2rem' color='var(--lilac-800)' />
              </a>
              <a href='https://wa.me/5548#' target='_blank' rel='noreferrer'>
                <FaWhatsapp size='2rem' color='var(--lilac-800)' />
              </a>
            </div>
          </div>
          <div className={styles.form}>
            <h4>Fale Conosco</h4>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
