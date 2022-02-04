require('dotenv').config();
const parse = require('pg-connection-string').parse;

const { user, password, host, database } = parse(process.env.DATABASE_URL);

module.exports = {
  development: {
    username: user,
    password,
    host,
    database,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: true,
      },
    },
  },
  production: {
    username: user,
    password,
    host,
    database,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false,
      },
    },
  },
};
