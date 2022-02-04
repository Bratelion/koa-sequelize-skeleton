import dotenv from 'dotenv';

dotenv.config();

import { app } from './app';
import { sequelize } from './sequelize';

const PORT = process.env.PORT;

(async () => {
  try {
    await sequelize.authenticate().then(() => console.info('Connected to database'));
    app.listen(PORT, () => console.info(`App started on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
})();
