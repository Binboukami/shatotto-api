import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Action } from 'App/Models'

export default class ActionsController {
  public async index({ }: HttpContextContract) {
    const data = await Action.query()
    const serializedData = await data.map((data) => data.serialize({
      fields: {
        pick: ['id', 'key', 'name', 'description'],
      }
    }))
    
    return serializedData;
  }


    return serializedData;
  }
}
