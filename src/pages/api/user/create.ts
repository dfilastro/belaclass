import { prisma } from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { generateHash } from 'utils/password';

type UserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  information: [];
  activeSignature: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const password = generateHash(req.body.password) as string;
  const { id, firstName, lastName, email, activeSignature } = req.body as UserData;

  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await prisma.user.create({
      data: {
        id,
        firstName,
        lastName,
        email,
        password,
        activeSignature,
      },
    });

    res.status(200).json({ message: 'Created user' });
  } catch (err) {
    console.log('Failure');
  }
}
