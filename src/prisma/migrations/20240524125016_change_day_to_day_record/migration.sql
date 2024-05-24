/*
  Warnings:

  - You are about to drop the `Day` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Day" DROP CONSTRAINT "Day_userId_fkey";

-- DropTable
DROP TABLE "Day";

-- CreateTable
CREATE TABLE "DayRecord" (
    "id" SERIAL NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "userId" VARCHAR(255) NOT NULL,

    CONSTRAINT "DayRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DayRecord" ADD CONSTRAINT "DayRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
