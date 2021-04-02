import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class User1617281313211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    default: "1"
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "role",
                    type: "boolean",
                    default: "false"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable("users");
    }

}
