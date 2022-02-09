import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ActionTarget } from 'App/Models'

export default class CreateTargetSeeder extends BaseSeeder {
  public async run() {
    await ActionTarget.createMany([
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
