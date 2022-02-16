import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RotationTypes extends BaseSchema {
  protected tableName = 'rotation_types'

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
