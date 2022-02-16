import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QueryHandleException from 'App/Exceptions/QueryHandleException';
import { Rotation } from 'App/Models';

//? Function to convert query params properties from Camel Case to Snake Case
function camelToSnake(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(' ').join('_').toLowerCase();
}

export default class RotationsController {

  public async index({ request }: HttpContextContract) {

    const query = Rotation.query()

    const queryParams = Object.keys(request.qs());
    const queryValue = Object.values(request.qs());

    if (queryParams.length >= 5) {
      throw new QueryHandleException(
        `Exceeded query search parameter limit. Maximum query search limit: '${arguments.length}' parameter.`, 414, 'EXCEEDED_QUERY_PARAMS')
    } else {
      queryParams.forEach((param, p) => {
        query.where(`${camelToSnake(param)}`, queryValue[p])
      });
    }

    const data = await query.exec();

    const serializedData = data.map((data) => data.serialize({
      fields: {
        pick: ['id', 'key', 'name', 'level', 'url', 'dps', 'description']
      },
      relations: {
        'type': {
          fields: {
            pick: ['key']
          }
        },
        'rotationActions': {
          fields: {
            pick: ['action_id', 'gauge_timer', 'gauge_heart_stack', 'gauge_polyglot_stack', 'gauge_paradox_stack', 'current_mp']
          },
          relations: {
            'currentAspect': {
              fields: {
                pick: ['key', 'name']
              }
            },
            'action': {
              fields: {
                pick: ['key', 'name']
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
            }
          },
        }
      }
    }))

    return serializedData;
  }

  public async byId({ params }: HttpContextContract) {
    const data = await Rotation.findByOrFail('id', params.id)

    const serializedData = data.serialize({
      fields: {
        pick: ['id', 'key', 'name', 'level', 'url', 'dps', 'description']
      },
      relations: {
        'type': {
          fields: {
            pick: ['key']
          }
        },
        'rotationActions': {
          fields: {
            pick: ['action_id', 'gauge_timer', 'gauge_heart_stack', 'gauge_polyglot_stack', 'gauge_paradox_stack', 'current_mp']
          },
          relations: {
            'currentAspect': {
              fields: {
                pick: ['key', 'name']
              }
            },
            'action': {
              fields: {
                pick: ['key', 'name']
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
            }
          },
        }
      }
    })

    return serializedData;
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['key', 'description', 'rotationTypeId'])
    const rotation = await Rotation.create(data);

    rotation.merge({ 'url': `/rotations/${rotation.id}` })

    await rotation.save();

    return rotation;
  }

  public async update({ request, params }: HttpContextContract) {
    const rotation = await Rotation.findOrFail(params.id)
    const rotationData = request.only(['key', 'description', 'rotationTypeId'])

    rotation.merge(rotationData)

    await rotation.save();
  }

  public async destroy({ }: HttpContextContract) { }
}