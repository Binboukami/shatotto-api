import Route from '@ioc:Adonis/Core/Route'
import './actions'
import './types'

Route.get('/', async () => {
  return { hello: 'world' }
})
