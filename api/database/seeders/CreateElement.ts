import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Element from 'App/Models/Element'

export default class CreateElementSeeder extends BaseSeeder {
  public async run() {
    await Element.createMany([
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
