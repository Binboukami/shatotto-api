import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Rotation, RotationAction } from 'App/Models'

export default class RotationActionsController {

  public async store({ request, params }: HttpContextContract) {
    const data = request.body()
    const rotation = await Rotation.findByOrFail('id', params.id)

    await data.forEach(async (obj) => {
      RotationAction.create({ ...obj, 'rotationId': params.id })
    });

    return rotation;
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) { }
}
