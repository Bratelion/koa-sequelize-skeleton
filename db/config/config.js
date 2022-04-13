// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { parse } from 'pg-connection-string';
import { readFileSync } from 'fs';

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
