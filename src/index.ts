import { Controller } from './controller';
import * as Koa from 'koa';
import BadRequestException from './badRequestException';
const app = new Koa();
  
  app.use(async ctx => {
    console.log('response')
    const requestedText: string = ctx.request.query.txt
    try {
      ctx.body = await new Controller().getText(requestedText);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  });
  
  app.listen(3000);

// new Controller().getText(null);