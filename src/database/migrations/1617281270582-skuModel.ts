import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class skuModel1617281270582 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: 'sku',
          columns: [
            {
              name: "id",
              type: "int",
              isPrimary: true,
              generationStrategy: "increment",
              default: "1"
          },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
          ]
        }
      )
    )
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sku')
  }

}
