import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

import prisma from '@/lib/prismadb';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, password, email } = body;

    if (!name || !password || !email) {
      return new NextResponse('Email, şifre ve isim gerekli', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (err: any) {
    console.error(err, 'REGISTRATION ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
