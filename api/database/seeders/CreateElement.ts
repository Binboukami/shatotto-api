import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ActionElement } from 'App/Models'

export default class CreateElementSeeder extends BaseSeeder {
  public async run() {
    await ActionElement.createMany([
      {
        "key": "Ice"
      },
      {
        "key": "Fire"
      },
      {
        "key": "Lightning"
      },
      {
        "key": "Magic"
      }
    ])
  }
}
