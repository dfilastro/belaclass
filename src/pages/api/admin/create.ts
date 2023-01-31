import { prisma } from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { generateHash } from 'utils/password';

type UserData = {
  //   id: string;
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   simulations: [];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
  } = req.body as any;

  try {
    await prisma.information.create({
      data: {
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
    });

    res.status(200).json({ message: 'Created user' });
  } catch (err) {
    console.log('Failure');
  }
}
