import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aspects extends BaseSchema {
  protected tableName = 'action_aspects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('key', 8).notNullable()
      table.string('name', 64).notNullable()
      table.integer('value')
      table.integer('buff_duration')
      table.float('buff_scale', 3, 2)
      table.float('opposite_scale', 3, 2)
      table.integer('mp_gain')
      table.integer('opposite_mp_cost')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
