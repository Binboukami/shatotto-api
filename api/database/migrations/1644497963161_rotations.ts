import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Rotations extends BaseSchema {
  protected tableName = 'rotations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('key', 16).notNullable().unique()
      table.string('url', 128).defaultTo('/rotations')
      table.string('level', 4).defaultTo(1)
      table.integer('rotation_type_id').unsigned().references('id').inTable('rotation_types')
      table.string('description', 512).defaultTo('')
      table.float('duration', 4, 2)
      table.integer('dps').defaultTo(0)
      table.integer('pps').defaultTo(0)
      table.boolean('private').defaultTo(false)


      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
