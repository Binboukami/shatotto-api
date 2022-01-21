import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Elements extends BaseSchema {
  protected tableName = 'elements'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('key', 64)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
