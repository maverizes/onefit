import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../users/model/user.model';  

@Table({ tableName: 'packages', timestamps: false })
export class Package extends Model<Package> {
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
  type: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  partner_id: number;

  @BelongsTo(() => User)
  user: User;
}
