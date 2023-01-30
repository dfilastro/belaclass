import { prisma } from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

type OutputData = {
  mainImg1: string;
  mainDesc1: string;
  maingImg2: string;
  mainDesc2: string;
  aboutTittle: string;
  aboutDesc: string;
  aboutImg1: string;
  aboutNameImg1: string;
  aboutSocialMediaImg1: string;
  aboutImg2: string;
  aboutNameImg2: string;
  aboutSocialMediaImg2: string;
  aboutImg3: string;
  aboutNameImg3: string;
  aboutSocialMediaImg3: string;
};

export default async function handler(req: NextApiRequest, _res: NextApiResponse) {
  const userId = req.query.id as string;
  const {
    mainImg1,
    mainDesc1,
    maingImg2,
    mainDesc2,
    aboutTittle,
    aboutDesc,
    aboutImg1,
    aboutNameImg1,
    aboutSocialMediaImg1,
    aboutImg2,
    aboutNameImg2,
    aboutSocialMediaImg2,
    aboutImg3,
    aboutNameImg3,
    aboutSocialMediaImg3,
  } = req.body as OutputData;

  if (req.method === 'PUT') {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        information: {
          create: {
            mainImg1,
            mainDesc1,
            maingImg2,
            mainDesc2,
            aboutTittle,
            aboutDesc,
            aboutImg1,
            aboutNameImg1,
            aboutSocialMediaImg1,
            aboutImg2,
            aboutNameImg2,
            aboutSocialMediaImg2,
            aboutImg3,
            aboutNameImg3,
            aboutSocialMediaImg3,
          },
        },
      },
    });
  }
}
