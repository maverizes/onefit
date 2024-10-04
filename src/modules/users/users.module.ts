import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { User } from './model/user.model';
import { Package } from '../packages/model/package.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Package])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
