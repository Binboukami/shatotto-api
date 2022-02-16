import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { RotationType } from 'App/Models'

export default class CreateRotationTypeSeeder extends BaseSeeder {
  public async run() {
    await RotationType.createMany([
      {
        'key': 'Opener'
      },
      {
        'key': 'Rotation'
      },
    ])
  }
}
