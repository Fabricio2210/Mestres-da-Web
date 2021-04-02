import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Product1617281248031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table(
            {
              name: 'products',
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
                  isNullable: false
                },
                {
                  name: 'qty',
                  type: 'decimal',
                  isNullable: false
                },
                {
                  name: 'price',
                  type: 'decimal',
                  isNullable: false
                },
                {
                  name: 'size',
                  type: 'varchar',
                  isNullable: false
                },
                {
                  name: 'sku_id',
                  type: 'int',
                  isNullable: true
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
          ))
    
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products')
      }

}
