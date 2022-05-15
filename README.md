# shatotto API

A **BLM Resources API** for the _critically acclaimed MMORPG Final Fantasy XIV, which has a free trial that include the entirety of "A Realm Reborn" AND the award-winning "Heavensward" expansion up to level 60 with no restrictions on playtime._

## Archived
After considering the maintenance resources and and availability of more robust tools that serve the same purpose, this repository has been archived.

## Build Setup

```bash
# run database service container
$ docker-compose up -d
# or with hardware profiling
$ docker stack deploy -c docker-compose.yml --service-name


# move into workfolder
$ cd ./api

# install dependencies
$ npm install

# run migrations and seeding in interactive mode
$ node ace migration:run
$ node ace db:seed -i


# serve with hot reload at localhost:3333
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

### Notes:
**Important**: While running seeders in interactive mode is important to note that the **CreateActions** should be the **LAST** one seeded to avoid model relationship errors during the process.

Also remember to update your local **```.env```** in the ```api``` folder

## Documentation
### Database
### [API](https://docs.google.com/document/d/e/2PACX-1vQtvc8HKQoyUYFAH3y-NjzSe-_1axSy3S59sIgdcyFjwUHc9NosD-be9WlxA8LkdHZFhENDvBQTjnVI/pub)
## Resources

**(Discord) Fürst#4041's [BLM 6.X Rotation Planner](https://docs.google.com/spreadsheets/d/1qbOY5WSfgzoCyHyzTJMJCl_7q6yfm3TErjs-8GyrAZ0/edit)**

**Unknown - [Animation Lock Testing Sheet](https://docs.google.com/spreadsheets/d/1a_losYixVC6clbw4ZUR5EqKt6t14gpUKlKxJNQF-UG0/edit#gid=0)**

## Todo

### Database
- [X] List all BLM actions  - abilities and spells - as of Endwalker 6.X
- [ ] List potions and relevant stats buff items

### API
- [ ] Deliver GET: routes for all action related resources
- [ ] Add 'Constants' entity for math stuff
- [ ] Implement a Rotation planner with Proc(?), CD and MP validations
- [ ] Implement MP tick validation (based on server tick/ping calculations)
