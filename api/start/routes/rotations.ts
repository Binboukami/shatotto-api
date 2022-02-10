import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'Rotations/Main.index')
    Route.get('/:id', 'Rotations/Main.byId')
    Route.post('/', 'Rotations/Main.store')

    //Rotation Actions
    Route.post('/:id/actions', 'RotationActions/Main.store')
    Route.put('/:id/actions', 'RotationActions/Main.update')

}).prefix('/rotations')