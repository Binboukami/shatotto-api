import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Target from 'App/Models/Target'

export default class CreateTargetSeeder extends BaseSeeder {
  public async run() {
    await Target.createMany([
      {
        'key': 'Single',
        'value': 1,
      },
      {
        'key': 'Multiple',
        'value': 1
      }
    ])
  }
}
