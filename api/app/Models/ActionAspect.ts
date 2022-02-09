import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { Action } from '.'

export default class ActionAspect extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string

  @column()
  public name: string

  @column()
  public value: number

  @column()
  public buffDuration: number

  @column()
  public buffScale: number

  @column()
  public oppositeScale: number

  @column()
  public mpGain: number

  @column()
  public oppositeMpCost: number

  @hasMany(() => Action)
  public actions: HasMany<typeof Action>
}
