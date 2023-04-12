/*
  Warnings:

  - You are about to drop the column `classId` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_classId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "classId";

-- CreateTable
CREATE TABLE "_ClassesToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassesToStudent_AB_unique" ON "_ClassesToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassesToStudent_B_index" ON "_ClassesToStudent"("B");

-- AddForeignKey
ALTER TABLE "_ClassesToStudent" ADD CONSTRAINT "_ClassesToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassesToStudent" ADD CONSTRAINT "_ClassesToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
