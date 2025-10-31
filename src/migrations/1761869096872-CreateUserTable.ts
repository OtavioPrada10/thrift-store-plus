import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1761869096872 implements MigrationInterface {
    name = 'CreateUserTable1761869096872'
    

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS app_domain`);
        await queryRunner.query(`CREATE TYPE "app_domain"."users_role_enum" AS ENUM('admin', 'seller', 'customer', 'supplier')`);
        await queryRunner.query(`CREATE TABLE "app_domain"."users" ("id" SERIAL NOT NULL, "email" character varying(100) NOT NULL, "name" character varying(100) NOT NULL, "role" "app_domain"."users_role_enum" NOT NULL DEFAULT 'customer', "password" character varying(100) NOT NULL, "add_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_time" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "app_domain"."users"`);
        await queryRunner.query(`DROP TYPE "app_domain"."users_role_enum"`);
    }

}
