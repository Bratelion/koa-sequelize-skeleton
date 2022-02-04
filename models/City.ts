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
import { User, UserAttributes } from './User';
import { UserToCity } from './UserToCity';

export interface CityAttributes {
  id: number;
  name: string;
  users: UserAttributes[];
  createdAt: Date;
}

@Table({
  tableName: 'city',
  updatedAt: false,
})
export class City extends Model<CityAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @BelongsToMany(() => User, () => UserToCity, 'city_id', 'user_id')
  users: User[];

  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'created_at',
  })
  createdAt: Date;
}
