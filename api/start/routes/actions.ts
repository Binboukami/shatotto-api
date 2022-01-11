import Route from '@ioc:Adonis/Core/Route'

Route.resource('/actions', 'Actions/Main.ts').apiOnly();