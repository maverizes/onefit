import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PartnersController } from './partners_one-fit.controller';
import { PartnersService } from './partners_one-fit.service';
import { Partner } from './models/partners_one-fit.model';

@Module({
  imports: [SequelizeModule.forFeature([Partner])],
  controllers: [PartnersController],
  providers: [PartnersService]
})
export class PartnersModule {}
