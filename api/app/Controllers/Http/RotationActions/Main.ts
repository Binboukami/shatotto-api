import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Rotation, RotationAction } from 'App/Models'

export default class RotationActionsController {

  public async store({ request, params }: HttpContextContract) {
    const data = request.body()
    const rotation = await Rotation.findByOrFail('id', params.id)

    await data.forEach(async (obj) => {
      RotationAction.create({ ...obj, 'rotationId': params.id })
    });

    await rotation.refresh();

    return rotation;
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['actionId']);
    const rotationActions = await RotationAction.query().where('rotationId', params.id)

    const rotationAction = rotationActions[params.indexOf]

    rotationAction.merge(data)

    await rotationAction.save();

    return rotationAction;
  }

  public async destroy({ params }: HttpContextContract) {
    const rotationActions = await RotationAction.query().where('rotationId', params.id)
    const rotationAction = rotationActions[params.indexOf]

    rotationAction.delete()

    return rotationActions
  }
}
