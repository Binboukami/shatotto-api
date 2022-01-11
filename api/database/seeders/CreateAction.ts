import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Action } from 'App/Models'

export default class CreateActionSeeder extends BaseSeeder {
  public async run() {
    await Action.createMany([
      {
        'name': 'Blizzard I',
        'level': '1',
        'typeId': 2,
        'castTime': 2.5,
        'recastTime': 2.5,
        'potency': 180,
        'potencyOverTime': 0,
        'mpCost': 400
      },
      {
        'name': 'Fire I',
        'level': '2',
        'typeId': 2,
        'castTime': 2.5,
        'recastTime': 2.5,
        'potency': 180,
        'potencyOverTime': 0,
        'mpCost': 800
      },
      {
        'name': 'Thunder I',
        'level': '6',
        'typeId': 2,
        'castTime': 2.5,
        'recastTime': 2.5,
        'potency': 30,
        'potencyOverTime': 35,
        'mpCost': 200
      },
      {
        'name': 'Blizzard II',
        'level': '12',
        'typeId': 2,
        'castTime': 3,
        'recastTime': 2.5,
        'potency': 100,
        'potencyOverTime': 0,
        'mpCost': 800
      },
      {
        'name': 'Fire II',
        'level': '18',
        'typeId': 2,
        'castTime': 3,
        'recastTime': 2.5,
        'potency': 100,
        'potencyOverTime': 0,
        'mpCost': 1500
      },
      {
        'name': 'Thunder II',
        'level': '26',
        'typeId': 2,
        'castTime': 2.5,
        'recastTime': 2.5,
        'potency': 50,
        'potencyOverTime': 15,
        'mpCost': 400
      },
      {
        'name': 'Blizzard III',
        'level': '35',
        'typeId': 2,
        'castTime': 3.5,
        'recastTime': 2.5,
        'potency': 240,
        'potencyOverTime': 0,
        'mpCost': 800
      },
      {
        'name': 'Fire III',
        'level': '35',
        'typeId': 2,
        'castTime': 3.5,
        'recastTime': 2.5,
        'potency': 240,
        'potencyOverTime': 0,
        'mpCost': 2000
      },
      {
        'name': 'Freeze',
        'level': '40',
        'typeId': 2,
        'castTime': 3.5,
        'recastTime': 2.5,
        'potency': 0,
        'potencyOverTime': 0,
        'mpCost': 0
      },
      {
        'name': 'Thunder III',
        'level': '45',
        'typeId': 2,
        'castTime': 2.5,
        'recastTime': 2.5,
        'potency': 50,
        'potencyOverTime': 35,
        'mpCost': 400
      },
      {
        'name': 'Flare',
        'level': '50',
        'typeId': 2,
        'castTime': 4,
        'recastTime': 2.5,
        'potency': 220,
        'potencyOverTime': 0,
        'mpCost': 10000
      },
      {
        'name': 'Blizzard IV',
        'level': '58',
        'typeId': 2,
        'castTime': 2.5,
        'recastTime': 2.5,
        'potency': 300,
        'potencyOverTime': 0,
        'mpCost': 800
      },
      {
        'name': 'Fire IV',
        'level': '60',
        'typeId': 2,
        'castTime': 2.8,
        'recastTime': 2.5,
        'potency': 300,
        'potencyOverTime': 0,
        'mpCost': 800
      },
    ])
  }
}