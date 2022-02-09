import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actions extends BaseSchema {
  protected tableName = 'actions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('key', 16).notNullable().unique()
      table.string('name', 64).notNullable().unique()
      table.string('level', 4).defaultTo(1)
      table.string('icon').defaultTo('')
      table.string('url', 128).defaultTo('/action')
      table.string('description', 512).defaultTo('')
      table.integer('action_type_id').unsigned().notNullable().references('id').inTable('action_types')
      table.integer('action_element_id').unsigned().notNullable().references('id').inTable('action_elements')
      table.integer('action_target_id').unsigned().references('id').inTable('action_targets').defaultTo(1)
      table.integer('action_aspect_id').unsigned().notNullable().references('id').inTable('action_aspects')

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
