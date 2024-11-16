import { PrismaClient, User as PrismaUser } from '@prisma/client';

const prisma = new PrismaClient();

interface User {
  username: string;
  email: string;
  password: string;
  role?: string;
}

const findUserByEmail = async (email: string): Promise<PrismaUser | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

const createUser = async (user: User): Promise<PrismaUser> => {
  return prisma.user.create({
    data: user,
  });
};

export default { findUserByEmail, createUser };
