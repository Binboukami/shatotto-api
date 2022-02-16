import { BaseModel, column, belongsTo, BelongsTo, beforeFetch, beforeFind, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { Action, ActionAspect, Rotation } from '.'

export default class RotationAction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public actionId: number

  @belongsTo(() => Action)
  public action: BelongsTo<typeof Action>

  @column()
  public rotationId: number

  @belongsTo(() => Rotation)
  public rotation: BelongsTo<typeof Rotation>

  @column()
  public currentTime: number

  @column()
  public gaugeTimer: number

  @column()
  public gaugeHeartStack: number

  @column()
  public gaugePolyglotstack: number

  @column()
  public gaugeParadoxStack: number

  @column()
  public currentAspectId: number

  @belongsTo(() => ActionAspect, {
    foreignKey: 'currentAspectId'
  })
  public currentAspect: BelongsTo<typeof ActionAspect>

  @column()
  public isWeaveable: boolean

  @column()
  public isProc: boolean

  @beforeFetch()
  @beforeFind()
  public static fetchRelations(query: ModelQueryBuilderContract<typeof RotationAction>) {
    query.preload('action').preload('currentAspect')
  }
}