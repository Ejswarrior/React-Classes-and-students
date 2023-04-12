/*
  Warnings:

  - You are about to drop the column `classId` on the `Student` table. All the data in the column will be lost.
  - Added the required column `students` to the `Classes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_classId_fkey";

-- DropIndex
DROP INDEX "Classes_title_key";

-- AlterTable
ALTER TABLE "Classes" ADD COLUMN     "students" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "classId";
