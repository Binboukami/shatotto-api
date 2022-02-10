import { DateTime } from 'luxon'
import { BaseModel, beforeFetch, beforeFind, BelongsTo, belongsTo, hasMany, HasMany, column, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { ActionType, ActionTarget, ActionElement, ActionAspect, RotationAction } from '.'

export default class Action extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string

  @column()
  public name: string

  @column()
  public level: string

  @column()
  public icon: string

  @column()
  public url: string

  @column()
  public description: string

  @column()
  public actionTypeId: number

  @belongsTo(() => ActionType)
  public type: BelongsTo<typeof ActionType>

  @column()
  public actionElementId: number

  @belongsTo(() => ActionElement)
  public element: BelongsTo<typeof ActionElement>

  @column()
  public actionTargetId: number

  @belongsTo(() => ActionTarget)
  public target: BelongsTo<typeof ActionTarget>

  @column()
  public actionAspectId: number

  @belongsTo(() => ActionAspect)
  public aspect: BelongsTo<typeof ActionAspect>

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
  public aoeScale: number

  @column()
  public dot: boolean

  @column()
  public dotPotency: number

  @column()
  public dotDuration: number

  @column()
  public effectDuration: number

  @column()
  public cooldown: number

  @hasMany(() => RotationAction)
  public rotationActions: HasMany<typeof RotationAction>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @beforeFetch()
  @beforeFind()
  public static fetchRelations(query: ModelQueryBuilderContract<typeof Action>) {
    query.preload('type').preload('target').preload('element').preload('aspect')
  }
}