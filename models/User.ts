import {
  Model,
  Column,
  Table,
  CreatedAt,
  PrimaryKey,
  DataType,
  AutoIncrement,
  BelongsToMany,
} from 'sequelize-typescript';
import { City, CityAttributes } from './City';
import { UserToCity } from './UserToCity';

export interface UserAttributes {
  id: number;
  name: string;
  cities: CityAttributes[];
  createdAt: Date;
}

@Table({
  tableName: 'user',
  updatedAt: false,
})
export class User extends Model<UserAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @BelongsToMany(() => City, () => UserToCity, 'user_id', 'city_id')
  cities: City[];

  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'created_at',
  })
  createdAt: Date;
}
