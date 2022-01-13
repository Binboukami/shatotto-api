import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Action } from 'App/Models'

export default class ActionsController {
  public async index({ }: HttpContextContract) {
    const data = await Action.query().preload('type').preload('target').preload('element').preload('aspect')
    const serializedData = await data.map((data) => data.serialize({
      fields: { omit: ['type_id', 'element_id', 'target_id'] }
    }))

    return serializedData;
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.only(['name', 'typeId']);
    const action = await Action.create(data)

    await action.load('type')
    return action;
  }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
