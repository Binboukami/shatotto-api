import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Action } from 'App/Models'

export default class CreateActionSeeder extends BaseSeeder {
  public async run() {
    await Action.createMany([
      {
        'name': 'Blizzard I',
        'level': '1',
        'typeId': 2,
        'mpCost': 400
      },
      {
        'name': 'Fire I',
        'level': '2',
        'typeId': 2,
        'mpCost': 800
      },
      {
        'name': 'Thunder I',
        'level': '6',
        'typeId': 2,
        'mpCost': 200
      },
    ])
  }
}