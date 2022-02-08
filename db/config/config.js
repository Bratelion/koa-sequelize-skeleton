import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { parse } from 'pg-connection-string';

dotenv.config();

const { user, password, host, database } = parse(process.env.DATABASE_URL);

export const development = {
  username: user,
  password,
  host,
  database,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
      ca: readFileSync(`${__dirname}/../../global-bundle.pem`),
    },
  },
};
export const production = {
  username: user,
  password,
  host,
  database,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      ca: readFileSync(`global-bundle.pem`),
    },
  },
  ssl: true,
};
