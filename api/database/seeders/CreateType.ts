import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ActionType } from 'App/Models'
export default class CreateTypeSeeder extends BaseSeeder {
  public async run() {
    await ActionType.createMany([
      {
        'key': 'Ability'
      },
      {
        'key': 'Spell'
      }
    ])
  }
}
