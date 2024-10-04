import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Package } from '../../packages/model/package.model'; 

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User> {
  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string;

  @HasMany(() => Package)
  packages: Package[];
}
