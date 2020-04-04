# todo-frontend
> NuxtJS Frontend for basic todo application

## Tech Overview
This project is built with [NuxtJS](https://nuxtjs.org/) and uses [Vuetify](https://vuetifyjs.com/) ui library. All api requests are handled via [Axios](https://github.com/axios/axios).
This is a PWA meaning ready to be installed in most places where Chrome browser is supported(Windows, linux etc). Advanced PWA features like Offline Editing and Syncing is not implemented yet.

## Setup
1. Deploy [Backend](https://github.com/nazmulpcc/todo-backend)
2. Copy the `.env.example` file to `.env`
3. Update the `API_BASE` value with the backend url.

## Build and Run
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
