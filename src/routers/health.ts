import Router from '@koa/router';
import { Context } from 'koa';
import { healthCheck } from '../controllers/health';

const healthRouter = new Router();

healthRouter.get('/health', (ctx: Context) => healthCheck(ctx));

export { healthRouter };
