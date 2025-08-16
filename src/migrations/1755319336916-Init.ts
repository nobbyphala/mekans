import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1755319336916 implements MigrationInterface {
    name = 'Init1755319336916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(255) NOT NULL, "text" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_af6206538ea96c4e77e9f400c3d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "notes"`);
    }

}
