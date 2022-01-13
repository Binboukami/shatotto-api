import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { Action } from '.'

export default class Element extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string

  @hasMany(() => Action)
  public actions: HasMany<typeof Action>
}
