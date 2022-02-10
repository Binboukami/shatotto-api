import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { RotationAction } from 'App/Models'

export default class CreateRotationActionSeeder extends BaseSeeder {
  public async run() {
    await RotationAction.createMany([
      {
        'actionId': 1,
        'rotationId': 1,
        'gaugeHeartStack': 3,
        'currentAspectId': 2,
        'isWeaveable': false,
        'isProc': false
      }
    ])
  }
}
