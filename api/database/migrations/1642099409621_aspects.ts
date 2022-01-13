import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Aspects extends BaseSchema {
  protected tableName = 'aspects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('key').notNullable()
      table.string('name').notNullable()
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
