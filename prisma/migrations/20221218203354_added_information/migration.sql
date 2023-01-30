-- CreateTable
CREATE TABLE "Information" (
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
    "aboutSocialMediaImg3" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Information_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
