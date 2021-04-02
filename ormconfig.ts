import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.HOST!,
  port: Number(process.env.PORT_DB),
  username: process.env.USER_NAME!,
  password: process.env.PASSWORD_DB!,
  database: process.env.DATA_BASE!,
  entities: [
    "src/database/models/*.ts",
  ],
  "migrations": ["./src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations/",
  }
};
 
export = config;