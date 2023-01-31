import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '../components/HomePage';

const Home: NextPage = ({ information }: any) => {
  return (
    <>
      <Head>
        <title>BelaClass | Home</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;

// export async function getServerSideProps(context: { req: NextApiRequest; res: NextApiResponse }) {
//   const session = await getSession(context);

//   if (!session) return { props: {} };

//   const email = session.user?.email as string;

//   const userData = await prisma.user.findFirst({
//     where: { email },
//   });

//   const userId = userData?.id;

//   const informationData = await prisma.information.findMany({
//     where: { userId },
//   });

//   return {
//     props: { information: JSON.parse(JSON.stringify(informationData)), user: userData },
//   };
// }
