-- CreateEnum
CREATE TYPE "public"."NewsStatus" AS ENUM ('ACTIVE', 'DESACTIVE');

-- CreateTable
CREATE TABLE "public"."News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "public"."NewsStatus" NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
