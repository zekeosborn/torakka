-- CreateEnum
CREATE TYPE "Status" AS ENUM ('success', 'relapse');

-- CreateTable
CREATE TABLE "DayLog" (
    "id" SERIAL NOT NULL,
    "userId" VARCHAR(255) NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "DayLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DayLog" ADD CONSTRAINT "DayLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
