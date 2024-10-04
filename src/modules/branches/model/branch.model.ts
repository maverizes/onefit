import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'branches', timestamps: false })
export class Branch extends Model<Branch> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  partner_id: number;
}
