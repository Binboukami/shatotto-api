import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Type } from 'App/Models'
export default class CreateTypeSeeder extends BaseSeeder {
  public async run() {
    await Type.createMany([
      {
        'key': 'ability'
      },
      {
        'key': 'spell'
      }
    ])
  }
}
