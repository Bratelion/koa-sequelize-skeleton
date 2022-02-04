import { Model, Column, Table, CreatedAt, DataType, ForeignKey, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Optional } from 'sequelize/types';
import { User } from './User';
import { City } from './City';

interface UserToCityAttributes {
  id: number;
  userId: number;
  cityId: number;
  createdAt: Date;
}
type UserToCityCreationAttributes = Optional<UserToCityAttributes, 'id' | 'createdAt'>;

@Table({
  tableName: 'user_to_city',
})
export class UserToCity extends Model<UserToCityAttributes, UserToCityCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId: number;

  @ForeignKey(() => City)
  @Column({
    type: DataType.INTEGER,
    field: 'city_id',
  })
  cityId: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'created_at',
  })
  createdAt: Date;
}
