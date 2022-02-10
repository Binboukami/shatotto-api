import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { Rotation } from '.'

export default class RotationType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string

  @hasMany(() => Rotation)
  public rotations: HasMany<typeof Rotation>
}
