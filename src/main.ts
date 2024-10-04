import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function startApp() {
  const app = await NestFactory.create(AppModule);

  const cfg = app.get(ConfigService);

  app.setGlobalPrefix('/api/v1')

  const port = Number(cfg.get('port'))

  await app.listen(port, () => {
    console.log("Server running on port:", port);
  });
}

startApp();
