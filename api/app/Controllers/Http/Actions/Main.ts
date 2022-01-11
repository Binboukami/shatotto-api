import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Action } from 'App/Models'

export default class ActionsController {
  public async index({ }: HttpContextContract) {
    const data = await Action.query().preload('type')
    return data;
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
