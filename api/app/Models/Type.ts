import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { Action } from '.'

export default class Type extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Action)
  public actions: HasMany<typeof Action>

  @column()
  public name: string
}
