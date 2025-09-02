/*
  Warnings:

  - Changed the type of `setNumber` on the `SetResult` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."Set" AS ENUM ('FIRST_SET', 'SECOND_SET', 'THIRD_SET');

-- AlterTable
ALTER TABLE "public"."SetResult" DROP COLUMN "setNumber",
ADD COLUMN     "setNumber" "public"."Set" NOT NULL;
