import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new QueryHandleException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class QueryHandleException extends Exception {
    public async handle(error: this, ctx: HttpContextContract) {
        if (error.status == 414) {
            return ctx.response.status(error.status).json({
                httpStatusCode: error.status,
                error: `${error.code}`,
                message: `${error.name}: ${error.message}`
            })
        }
    }
}
