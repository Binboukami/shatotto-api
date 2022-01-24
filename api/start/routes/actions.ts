import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'Actions/Main.ts.index')
    Route.get('/:id', 'Actions/Main.ts.byId')
}).prefix('/actions')