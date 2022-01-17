import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Aspect } from 'App/Models'

export default class CreateAspectSeeder extends BaseSeeder {
  public async run() {
    await Aspect.createMany([
      {
        'key': 'N',
        'name': 'Neutral',
        'value': 0,
        'buffDuration': 0,
        'buffScale': 0,
        'oppositeScale': 0,
        'mpGain': 0,
        'oppositeMpCost': 0
      },
      {
        'key': 'AF1',
        'name': 'Astral Fire I',
        'value': 1,
        'buffDuration': 15,
        'buffScale': 1.4,
        'oppositeScale': 0.9,
        'mpGain': 0,
        'oppositeMpCost': 0
      },
      {
        'key': 'AF2',
        'name': 'Astral Fire II',
        'value': 2,
        'buffDuration': 15,
        'buffScale': 1.6,
        'oppositeScale': 0.8,
        'mpGain': 0,
        'oppositeMpCost': 0
      },
      {
        'key': 'AF3',
        'name': 'Astral Fire III',
        'value': 3,
        'buffDuration': 15,
        'buffScale': 1.8,
        'oppositeScale': 0.7,
        'mpGain': 0,
        'oppositeMpCost': 0
      },
      {
        'key': 'UI1',
        'name': 'Umbral Ice I',
        'value': 1,
        'buffDuration': 15,
        'buffScale': 0,
        'oppositeScale': 0.9,
        'mpGain': 3200,
        'oppositeMpCost': 0
      },
      {
        'key': 'UI2',
        'name': 'Umbral Ice II',
        'value': 2,
        'buffDuration': 15,
        'buffScale': 0,
        'oppositeScale': 0.8,
        'mpGain': 4700,
        'oppositeMpCost': 0
      },
      {
        'key': 'UI3',
        'name': 'Umbral Ice III',
        'value': 3,
        'buffDuration': 15,
        'buffScale': 0,
        'oppositeScale': 0.7,
        'mpGain': 6200,
        'oppositeMpCost': 0
      },

    ])
  }
}
