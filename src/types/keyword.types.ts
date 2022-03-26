import { Model, Optional } from 'sequelize'

export interface KeywordAttributes {
  id: number
  keyword: string
}

export interface KeywordCreationAttributes
  extends Optional<KeywordAttributes, 'id'> {}

export interface KeywordInstance
  extends Model<KeywordAttributes, KeywordCreationAttributes>,
    KeywordAttributes {}
