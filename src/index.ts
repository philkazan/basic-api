import { Controller } from './controller';
import * as Koa from 'koa';
const app = new Koa();

// logger
app.use(async (ctx, next) => {
    await next();
    console.log('logger');
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  });
  
  // x-response-time
  app.use(async (ctx, next) => {
    console.log('response time');
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  
  // response
  app.use(async ctx => {
    console.log('response')
    const requestedText: string = ctx.request.query.txt
    ctx.body = new Controller().getText(requestedText);
  });
  
  app.listen(3000);