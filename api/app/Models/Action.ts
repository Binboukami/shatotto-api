import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Type } from '.'

export default class Action extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public level: string

  @column()
  public typeId: number

  @belongsTo(() => Type)
  public type: BelongsTo<typeof Type>

  @column()
  public castTime: number

  @column()
  public recastTime: number

  @column()
  public potency: number

  @column()
  public potencyOverTime: number

  @column()
  public mpCost: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}