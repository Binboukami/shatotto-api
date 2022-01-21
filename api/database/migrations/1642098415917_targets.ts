import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Targets extends BaseSchema {
  protected tableName = 'targets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('key', 64)
      table.integer('value')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
