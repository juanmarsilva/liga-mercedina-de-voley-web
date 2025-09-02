import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib";
import { news, users, matches, players, setResults, teams, league_levels } from "@/utils";

const resetAutoIncrement = async () => {
  // Array de los nombres de tus tablas que usan IDs autoincrementales
  const tables = ['User', 'News', 'Team', 'LeagueLevels', 'Player', 'Match', 'SetResult'];

  // Reinicia las secuencias para cada tabla
  for (const table of tables) {
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "${table}_id_seq" RESTART WITH 1;`);
  }
};

export const GET = async (request: NextRequest) => {
    try {
        await prisma.user.deleteMany();
        await prisma.news.deleteMany();
        await prisma.player.deleteMany();
        await prisma.team.deleteMany();
        await prisma.setResult.deleteMany();
        await prisma.match.deleteMany();
        await prisma.leagueLevels.deleteMany();

        await resetAutoIncrement();

        await prisma.leagueLevels.createMany({ data: league_levels })
        await prisma.user.createMany({ data: users });
        await prisma.news.createMany({ data: news });
        await prisma.team.createMany({ data: teams });
        await prisma.player.createMany({ data: players });
        await prisma.match.createMany({ data: matches });
        await prisma.setResult.createMany({ data: setResults });

        return NextResponse.json({ message: 'Seed ejecutada con exito!'}, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Hubo un problema al ejecutar el SEED'}, { status: 500 });
    }
}