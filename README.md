# shatotto API

An open source **BLM Resources API** for the _critically acclaimed MMORPG Final Fantasy XIV, which DOES NOT have a free trial that DOES NOT include the entirety of "A Realm Reborn" AND the award-winning "Heavensward" expansion up to level 60 with no restrictions on playtime._

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

# serve with hot reload at localhost:3333
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
