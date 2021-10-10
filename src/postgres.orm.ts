import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
require('dotenv').config();

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(<string>process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: ['dist/**/*.entity.js'],
    migrationsTableName: "migrations",
    migrations: ["dist/db/migrations/*.js"],
    cli: {
      migrationsDir: "src/db/migrations"
    },
    synchronize: false
  }

  export default config;
