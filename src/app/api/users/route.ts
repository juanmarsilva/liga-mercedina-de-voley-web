import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Función para manejar peticiones GET
export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener los usuarios' },
      { status: 500 }
    );
  }
}