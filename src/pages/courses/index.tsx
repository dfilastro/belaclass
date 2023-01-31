import Head from 'next/head';
import styles from './styles.module.scss';
import Youtube from 'react-youtube';
import { useInfo } from '../../../hooks/useInformation';
import styled from '@emotion/styled';

import youtubeParser from 'utils/youtubeParser';

type Courses = {
  title: string;
  excerpt: string;
  image: any;
};

interface CoursesProps {
  courses: Courses; //[];
}

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding: 0 2rem;
`;

const VideoContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1``;

export default function Courses({ courses }: CoursesProps) {
  const { information } = useInfo();

  return (
    <>
      <Head>
        <title>BelaClass | Cursos</title>
      </Head>

      <section className={styles.coursesContainer}>
        <Container>
          <VideoContainer>
            <Youtube videoId={youtubeParser(information?.coursesUrl1) as any} />
            <div>
              <Title>{information.coursesTitle1}</Title>
              <p>{information.coursesSubtitle1}</p>
            </div>
          </VideoContainer>

          <VideoContainer>
            <Youtube videoId={youtubeParser(information?.coursesUrl2) as any} />
            <div>
              <Title>{information.coursesTitle2}</Title>
              <p>{information.coursesSubtitle2}</p>
            </div>
          </VideoContainer>
        </Container>
      </section>
    </>
  );
}
