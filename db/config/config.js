require('dotenv').config(); // eslint-disable-line @typescript-eslint/no-var-requires
const parse = require('pg-connection-string').parse; // eslint-disable-line @typescript-eslint/no-var-requires
const readFileSync = require('fs').readFileSync; // eslint-disable-line @typescript-eslint/no-var-requires

const { user, password, host, database } = parse(process.env.DATABASE_URL);

module.exports = {
  development: {
    username: user,
    password,
    host,
    database,
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
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
  },
};
