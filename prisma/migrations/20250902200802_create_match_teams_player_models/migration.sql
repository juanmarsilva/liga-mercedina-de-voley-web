-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('FEMENINO', 'MASCULINO');

-- CreateEnum
CREATE TYPE "public"."MatchStatus" AS ENUM ('PENDING', 'FINISHED', 'DELETED');

-- CreateTable
CREATE TABLE "public"."Team" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "levelId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LeagueLevels" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "LeagueLevels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Player" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" "public"."Gender" NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Match" (
    "id" SERIAL NOT NULL,
    "matchDate" TIMESTAMP(3) NOT NULL,
    "matchHour" TIMESTAMP(3) NOT NULL,
    "estado" "public"."MatchStatus" NOT NULL,
    "teamAId" INTEGER NOT NULL,
    "firstSetTeamA" INTEGER,
    "secondSetTeamA" INTEGER,
    "thirdSetTeamA" INTEGER,
    "teamBId" INTEGER NOT NULL,
    "firstSetTeamB" INTEGER,
    "secondSetTeamB" INTEGER,
    "thirdSetTeamB" INTEGER,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeagueLevels_description_key" ON "public"."LeagueLevels"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Player_dni_key" ON "public"."Player"("dni");

-- AddForeignKey
ALTER TABLE "public"."Team" ADD CONSTRAINT "Team_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "public"."LeagueLevels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_teamAId_fkey" FOREIGN KEY ("teamAId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Match" ADD CONSTRAINT "Match_teamBId_fkey" FOREIGN KEY ("teamBId") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
