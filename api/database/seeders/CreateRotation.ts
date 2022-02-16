import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Rotation } from 'App/Models'

export default class CreateRotationSeeder extends BaseSeeder {
  public async run() {
    await Rotation.createMany([
      {
        'key': 'Seeder Rotation',
        'level': '32',
        'rotationTypeId': 2,
        'description': 'A seeder rotation for testing and demo purposes',
        'dps': 9999,
        'pps': 3333,
        'private': false
      },
    ])
  }
}
