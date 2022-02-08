require('dotenv').config();
const parse = require('pg-connection-string').parse;
const readFileSync = require('fs').readFileSync;

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
        require: true,
        rejectUnauthorized: false,
        ca: readFileSync(`${__dirname}/../../global-bundle.pem`),
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
        require: true,
        ca: readFileSync(`global-bundle.pem`),
      },
    },
    ssl: true,
  }
}
