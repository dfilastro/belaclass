import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';

import { getSession, useSession } from 'next-auth/react';
import { prisma } from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

type Courses = {
  title: string;
  excerpt: string;
  image: any;
};

interface CoursesProps {
  courses: Courses; //[];
}

export default function Courses({ courses }: CoursesProps) {
  return (
    <>
      <Head>
        <title>Cursos</title>
      </Head>

      <section className={styles.coursesContainer}>
        <div className={styles.coursesList}>
          <Link href='/'>
            <a>
              <img src='./automaquiagem.jpg' alt='' />
              <div>
                <strong>Automaquiagem</strong>
                <p>lorem ipsum dolor sit amet, consectetur adip</p>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <img src='./limpeza-de-pele.png' alt='' />
              <div>
                <strong>Limpeza de Pele</strong>
                <p>lorem ipsum dolor sit amet, consectetur adip</p>
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <img src='./cabelereiro.jpg' alt='' />
              <div>
                <strong>Cortes de Cabelo</strong>
                <p>lorem ipsum dolor sit amet, consectetur adip</p>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context: { req: NextApiRequest; res: NextApiResponse }) {
  const session = await getSession(context);

  if (!session) return { props: {} };

  const email = session.user?.email as string;

  const userData = await prisma.user.findFirst({
    where: { email },
  });

  const userId = userData?.id;

  const informationData = await prisma.information.findMany({
    where: { userId },
  });

  return {
    props: { information: JSON.parse(JSON.stringify(informationData)), user: userData },
  };
}
