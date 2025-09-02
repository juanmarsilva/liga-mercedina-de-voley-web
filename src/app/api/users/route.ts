import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/lib';

export const GET = async (request: NextRequest) => {
  try {
    const users = await prisma.user.findMany({ omit: { password: true } });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener los usuarios' },
      { status: 500 }
    );
  }
}