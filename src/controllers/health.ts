import { Context } from 'koa';

export const healthCheck = (ctx: Context) => {
  ctx.body = { condition: 'stable' };
};
