-- CreateTable
CREATE TABLE "public"."LeagueFrequentQuestion" (
    "id" SERIAL NOT NULL,
    "question_title" TEXT NOT NULL,
    "question_response" TEXT NOT NULL,

    CONSTRAINT "LeagueFrequentQuestion_pkey" PRIMARY KEY ("id")
);
