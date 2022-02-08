import dotenv from 'dotenv';
import { User } from '../models/User';
import fs from 'fs';

dotenv.config();

import { parse } from 'pg-connection-string';
import { Sequelize } from 'sequelize-typescript';
import { UserToCity } from '../models/UserToCity';
import { City } from '../models/City';

const { user, password, database, host } = parse(process.env.DATABASE_URL);

const dbConncetion = () => {
  const db = new Sequelize({
    database,
    dialect: 'postgres',
    username: user,
    password,
    host,
    models: [__dirname + '../models'],
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: fs.readFileSync(`${__dirname}/../global-bundle.pem`),
      },
    },
  });

  db.addModels([User, City, UserToCity]);
  return db;
};

export const sequelize = dbConncetion();
