import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Type } from 'App/Models'

export default class TypesController {
  public async index({ }: HttpContextContract) {
    const data = await Type.query().preload('actions')
    return data;
  }
}
