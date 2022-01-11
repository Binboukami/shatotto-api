import Route from '@ioc:Adonis/Core/Route'

Route.resource('/types', 'Types/Main.ts').only(['index']);