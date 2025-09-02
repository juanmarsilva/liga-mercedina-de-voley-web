/*
  Warnings:

  - You are about to drop the column `estado` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `firstSetTeamA` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `firstSetTeamB` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `secondSetTeamA` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `secondSetTeamB` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `thirdSetTeamA` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `thirdSetTeamB` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `Team` table. All the data in the column will be lost.
  - Added the required column `status` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Match" DROP COLUMN "estado",
DROP COLUMN "firstSetTeamA",
DROP COLUMN "firstSetTeamB",
DROP COLUMN "secondSetTeamA",
DROP COLUMN "secondSetTeamB",
DROP COLUMN "thirdSetTeamA",
DROP COLUMN "thirdSetTeamB",
ADD COLUMN     "status" "public"."MatchStatus" NOT NULL;

-- AlterTable
ALTER TABLE "public"."Team" DROP COLUMN "descripcion",
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."SetResult" (
    "id" SERIAL NOT NULL,
    "matchId" INTEGER NOT NULL,
    "setNumber" INTEGER NOT NULL,
    "scoreTeamA" INTEGER NOT NULL,
    "scoreTeamB" INTEGER NOT NULL,

    CONSTRAINT "SetResult_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."SetResult" ADD CONSTRAINT "SetResult_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "public"."Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
