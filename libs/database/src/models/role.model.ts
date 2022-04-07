import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript'

@Table({
  tableName: 'role',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @AllowNull(false)
  @Unique
  @Column
  name: string

  @Column
  desc: string

  @Column({ type: DataType.JSON })
  checkedKeys: number[]

  @Column({ type: DataType.JSON })
  halfCheckedKeys: number[]
}
