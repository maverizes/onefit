import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PackageService } from './packages.service';
import { Package } from './model/package.model';
import { PackageController } from './packages.controller';

@Module({
  imports: [SequelizeModule.forFeature([Package])],
  providers: [PackageService],
  controllers: [PackageController],
  exports: [PackageService], 
})
export class PackagesModule {}
