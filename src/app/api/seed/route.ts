import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib";
import { news, users } from "@/utils";


export const GET = async (request: NextRequest) => {
    try {
        await prisma.user.deleteMany();
        await prisma.news.deleteMany();

        await prisma.user.createMany({ data: users });
        await prisma.news.createMany({ data: news });

        return NextResponse.json({ message: 'Seed ejecutada con exito!'}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Hubo un problema al ejecutar el SEED'}, { status: 500 });
    }
}