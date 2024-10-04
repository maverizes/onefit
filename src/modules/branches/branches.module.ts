import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BranchController } from './branches.controller';
import { BranchService } from './branches.service';
import { Branch } from './model/branch.model';

@Module({
  imports: [SequelizeModule.forFeature([Branch])],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchesModule {}
