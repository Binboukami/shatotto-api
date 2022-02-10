import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Rotation } from 'App/Models'

export default class CreateRotationSeeder extends BaseSeeder {
  public async run() {
    await Rotation.createMany([
      {
        'key': 'Rotation name',
        'level': '32',
        'rotationTypeId': 2,
        'description': 'Rotation description',
        'dps': 9999,
        'pps': 3333,
        'private': false
      },
    ])
  }
}
