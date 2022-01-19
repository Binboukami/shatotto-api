# shatotto API

A **BLM Resources API** for the _critically acclaimed MMORPG Final Fantasy XIV, which has a free trial that include the entirety of "A Realm Reborn" AND the award-winning "Heavensward" expansion up to level 60 with no restrictions on playtime._

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

# run migrations and seeding
$ node ace migration:run
$ node ace db:seed

# serve with hot reload at localhost:3333
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
## Documentation
### Database
### API
## Resources

**(Discord) Fürst#4041's [BLM 6.X Rotation Planner](https://docs.google.com/spreadsheets/d/1qbOY5WSfgzoCyHyzTJMJCl_7q6yfm3TErjs-8GyrAZ0/edit)**

**Unknown - [Animation Lock Testing Sheet](https://docs.google.com/spreadsheets/d/1a_losYixVC6clbw4ZUR5EqKt6t14gpUKlKxJNQF-UG0/edit#gid=0)**

## Todo

### Database
- [ ] List all BLM actions  - abilities and spells -, skills (like 'Sprint') and Traits as of Endwalker 6.X
- [ ] List potions and relevant stats buff items

### API
- [ ] GET: routes - expose the database to developers
- [ ] Add 'Constants' entity for math stuff
- [ ] Implement a Rotation planner with Proc(?), CD and MP validations
- [ ] Implement MP tick validation (based on server tick/ping calculations)
