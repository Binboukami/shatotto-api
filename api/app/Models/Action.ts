import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Type } from '.'
import Element from './Element'

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
  public elementId: number

  @belongsTo(() => Element)
  public element: BelongsTo<typeof Element>

  @column()
  public cast: number

  @column()
  public recast: number

  @column()
  public potency: number

  @column()
  public mpCost: number

  @column()
  public aoe: boolean

  @column()
  public dot: boolean

  @column()
  public dotPotency: number

  @column()
  public dotDuration: number

  @column()
  public cooldown: number



  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}