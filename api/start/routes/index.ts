import Route from '@ioc:Adonis/Core/Route'
import './actions'
import './types'
import './rotations'

Route.get('/', async () => {
  return {
    "name": "Shatotto-API",
    "description": "A BLM Resources API for the critically acclaimed MMORPG Final Fantasy XIV",
    "version": "0.1",
    "environment": "development",
    "gitAuthor": "https://github.com/Binboukami/shatotto-api",
    "ffInfo": "Amalia Llymlaen on Behemoth (Primal)",
    "endpoints": ["/actions", "/rotations", "/types"]
  }
})
