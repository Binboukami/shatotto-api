import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QueryHandleException from 'App/Exceptions/QueryHandleException';
import { Action } from 'App/Models'


//? Function to convert query params properties from Camel Case to Snake Case
function camelToSnake(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(' ').join('_').toLowerCase();
}

export default class ActionsController {
  public async index({ request }: HttpContextContract) {

    const query = Action.query()

    const queryParams = Object.keys(request.qs());
    const queryValue = Object.values(request.qs());

    if (queryParams.length >= 5) {
      throw new QueryHandleException(
        `Exceeded query search parameter limit. Maximum query search limit: '${arguments.length}' parameter.`,  414, 'EXCEEDED_QUERY_PARAMS')
    } else {
      queryParams.forEach((param, p) => {
        query.where(`${camelToSnake(param)}`, queryValue[p])
      });
    }

    const data = await query.exec();

    const serializedData = data.map((data) => data.serialize({
      fields: {
        pick: ['id', 'key', 'name', 'url', 'description'],
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
    }))

    return serializedData;
  }

  public async byId({ params }: HttpContextContract) {
    const data = await Action.findByOrFail('id', params.id)

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
