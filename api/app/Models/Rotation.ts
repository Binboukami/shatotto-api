import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany, beforeFetch, beforeFind, ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { RotationType, RotationAction } from '.'

export default class Rotation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public key: string

  @column()
  public url: string

  @column()
  public level: string

  @column()
  public rotationTypeId: number

  @belongsTo(() => RotationType)
  public type: BelongsTo<typeof RotationType>

  @column()
  public description: string

  @column()
  public duration: number

  @column()
  public dps: number

  @column()
  public pps: number

  @column()
  public private: boolean

  @hasMany(() => RotationAction)
  public rotationActions: HasMany<typeof RotationAction>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeFetch()
  @beforeFind()
  public static fetchRelations(query: ModelQueryBuilderContract<typeof Rotation>) {
    query.preload('type').preload('rotationActions')
  }
}
