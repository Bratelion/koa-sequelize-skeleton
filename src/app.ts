import Koa from 'koa';
import koaBodyParser from 'koa-bodyparser';

import { healthRouter } from './routers/health';

const app = new Koa();

app.use(koaBodyParser());

app.use(healthRouter.routes());

export { app };
