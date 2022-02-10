import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RotationActions extends BaseSchema {
  protected tableName = 'rotation_actions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('action_id').unsigned().references('id').inTable('actions')
      table.integer('rotation_id').unsigned().references('id').inTable('rotations')

      table.float('current_time', 3, 3)
      table.integer('gauge_timer', 2).defaultTo(0)
      table.integer('gauge_heart_stack', 1).defaultTo(0)
      table.integer('gauge_polyglot_stack', 1).defaultTo(0)
      table.integer('gauge_paradox_stack', 1).defaultTo(0)
      table.integer('current_aspect_id').unsigned().references('id').inTable('action_aspects')
      table.boolean('is_weaveable').defaultTo('false')
      table.boolean('is_proc').defaultTo('false')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
