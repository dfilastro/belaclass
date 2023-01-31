/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `userId` on the `Information` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Information" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mainImg1" TEXT NOT NULL,
    "mainDesc1" TEXT NOT NULL,
    "maingImg2" TEXT NOT NULL,
    "mainDesc2" TEXT NOT NULL,
    "aboutTittle" TEXT NOT NULL,
    "aboutDesc" TEXT NOT NULL,
    "aboutImg1" TEXT NOT NULL,
    "aboutNameImg1" TEXT NOT NULL,
    "aboutSocialMediaImg1" TEXT NOT NULL,
    "aboutImg2" TEXT NOT NULL,
    "aboutNameImg2" TEXT NOT NULL,
    "aboutSocialMediaImg2" TEXT NOT NULL,
    "aboutImg3" TEXT NOT NULL,
    "aboutNameImg3" TEXT NOT NULL,
    "aboutSocialMediaImg3" TEXT NOT NULL
);
INSERT INTO "new_Information" ("aboutDesc", "aboutImg1", "aboutImg2", "aboutImg3", "aboutNameImg1", "aboutNameImg2", "aboutNameImg3", "aboutSocialMediaImg1", "aboutSocialMediaImg2", "aboutSocialMediaImg3", "aboutTittle", "id", "mainDesc1", "mainDesc2", "mainImg1", "maingImg2") SELECT "aboutDesc", "aboutImg1", "aboutImg2", "aboutImg3", "aboutNameImg1", "aboutNameImg2", "aboutNameImg3", "aboutSocialMediaImg1", "aboutSocialMediaImg2", "aboutSocialMediaImg3", "aboutTittle", "id", "mainDesc1", "mainDesc2", "mainImg1", "maingImg2" FROM "Information";
DROP TABLE "Information";
ALTER TABLE "new_Information" RENAME TO "Information";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
