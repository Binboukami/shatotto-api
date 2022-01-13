import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Action } from 'App/Models'

export default class CreateActionSeeder extends BaseSeeder {
  public async run() {
    await Action.createMany([
      {
        'key': 'B1',
        'name': 'Blizzard I',
        'level': '1',
        'typeId': 2,
        'elementId': 1,
        'aspectId': 4,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 180,
        'mpCost': 400,
        'aoe': false,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'cooldown': 0
      },
    ])
  }
}