import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User } from '../../database/models/User';
import * as dotenv from 'dotenv';
dotenv.config();

export class AdminUser1617282217708 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const repository = getRepository(User);
        const user = new User();
        user.id = 1;
        user.name = process.env.ADMIN_NAME!;
        user.password = process.env.ADMIN_PASSWORD!;
        user.email = process.env.ADMIN_EMAIL!;
        user.role = true;
        await repository.save(user);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
