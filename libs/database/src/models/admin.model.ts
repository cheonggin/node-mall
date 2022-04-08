import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript'
import { Role } from './role.model'

@Table({
  tableName: 'admin',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Admin extends Model<Admin> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @AllowNull(false)
  @Unique
  @Column
  name: string

  @Column
  password: string

  @ForeignKey(() => Role)
  @Column
  role_id: number

  @BelongsTo(() => Role)
  role: Role
}
