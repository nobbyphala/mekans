import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Note } from './entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    // url: process.env.DATABASE_URL,
    // If you prefer explicit config:
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: false,     // never true in prod; use migrations
    logging: false,
    entities: [Note],
    migrations: ['src/migrations/*.ts'],
    // subscribers: []
});
