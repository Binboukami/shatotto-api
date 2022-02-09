import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { Action } from '.'

export default class ActionTarget extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string

  @column()
  public value: number

  @hasMany(() => Action)
  public actions: HasMany<typeof Action>
}
