-- CreateTable
CREATE TABLE "Coffee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "flavours" JSONB,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);
