import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actions extends BaseSchema {
  protected tableName = 'actions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('key').notNullable().unique()
      table.string('name').notNullable().unique()
      table.string('level')
      table.integer('type_id').unsigned().notNullable().references('id').inTable('types')
      table.integer('element_id').unsigned().notNullable().references('id').inTable('elements')
      table.integer('aspect_id').unsigned().notNullable().references('id').inTable('aspects')

      table.float('cast', 3, 2)
      table.float('recast', 3, 2)
      table.integer('potency')
      table.integer('mp_cost')
      table.boolean('aoe')
      table.boolean('dot')
      table.integer('dot_potency')
      table.integer('dot_duration')
      table.integer('duration')
      table.integer('cooldown')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
