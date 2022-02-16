import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ActionType } from 'App/Models'

export default class TypesController {
  public async index({ }: HttpContextContract) {
    const data = await ActionType.query()
    return data;
  }
}
