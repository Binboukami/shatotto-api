import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actions extends BaseSchema {
  protected tableName = 'actions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('key', 16).notNullable().unique()
      table.string('name', 64).notNullable().unique()
      table.string('level', 4).defaultTo(1)
      table.integer('type_id').unsigned().notNullable().references('id').inTable('types')
      table.integer('element_id').unsigned().notNullable().references('id').inTable('elements')
      table.integer('target_id').unsigned().references('id').inTable('targets').defaultTo(1)
      table.integer('aspect_id').unsigned().notNullable().references('id').inTable('aspects')

      table.float('cast', 3, 2)
      table.float('recast', 3, 2)
      table.integer('potency')
      table.integer('mp_cost')
      table.boolean('aoe').defaultTo(false)
      table.float('aoe_scale', 3, 2)
      table.boolean('dot').defaultTo(false)
      table.integer('dot_potency').defaultTo(0)
      table.integer('dot_duration').defaultTo(0)
      table.integer('effect_duration').defaultTo(0)
      table.integer('cooldown').defaultTo(0)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
