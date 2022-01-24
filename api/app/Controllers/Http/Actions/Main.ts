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

  public async byId({ params }: HttpContextContract) {
    const data = await (await Action.findByOrFail('id', params.id))

    await data.load((profilerQuery) => {
      profilerQuery.load('type').load('target').load('element').load('aspect')
    })

    const serializedData = data.serialize({
      fields: {
        omit: ['type_id', 'target_id', 'element_id', 'aspect_id']
      },
      relations: {
        'type': {
          fields: {
            pick: ['key']
          }
        },
        'target': {
          fields: {
            pick: ['key']
          }
        },
        'element': {
          fields: {
            pick: ['key']
          }
        },
        'aspect': {
          fields: {
            pick: ['key', 'name']
          }
        }
      }
    })

    return serializedData;
  }
}
