import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'partners_of_onefit', timestamps: false })
export class Partner extends Model {
  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;
}
