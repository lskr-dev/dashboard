CREATE DATABASE lskr_db;

\connect lskr_db;

CREATE TABLE "usuarios" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(14) NOT NULL,
    "is_contacted" BOOLEAN DEFAULT TRUE,
    "is_converted" BOOLEAN DEFAULT FALSE,
    "https_expired_date" DATE DEFAULT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);
