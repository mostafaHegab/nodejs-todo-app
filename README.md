# Todo app
this is a todo app using nodejs, express and typescript

## requirements
to run this application locally you need to install the following
- nodejs
- mongodb

## how to run
- add `.env` file in the root folder with the following variables
```
NODE_ENV=local
PORT=3000
DB_CONN_URL=mongodb://127.0.0.1:27017/todo
```
- navigate to the root folder in your CMD and run `npm run build` to build the application from `.ts` files to `.js` files \
this will create a `dist` folder contains your compiled files
- navigate to `dist` folder and run `node index.js`
