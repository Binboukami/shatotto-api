import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actions extends BaseSchema {
  protected tableName = 'actions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.string('level')
      table.integer('type_id').unsigned().notNullable().references('id').inTable('types')

      table.float('cast_time', 3, 2)
      table.float('recast_time', 3, 2)
      table.integer('potency')
      table.integer('potency_over_time')
      table.integer('mp_cost')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
