import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import appConfig from './config/app.config';
import  { dbConfig } from './config/db.config'; 
import { BranchesModule } from './modules/branches';
import { PartnersModule } from './modules/partners_one-fit'; 
import { UsersModule } from './modules/users/users.module';
import { PackagesModule } from './modules/packages/packages.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        try {
          return {
            dialect: 'postgres',
            host: config.get('database.host'),
            port: config.get<number>('database.port'),
            username: config.get('database.user'),
            password: config.get('database.password'),
            database: config.get('database.dbName'),
            synchronize: true,
            // sync: {force: true},
            autoLoadModels: true,
            logging: console.log,
          };
        } catch (error) {
          console.log('Error configuring Sequelize:', error);
        }
      },
    }),
    BranchesModule,
    PartnersModule,
    UsersModule,
    PackagesModule,
  ],
})
export class AppModule {}
