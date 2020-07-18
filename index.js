//This file could also be called server.js

const app = require('./src/app');

const APP_PORT = 3000 || process.env.PORT;

app.listen(APP_PORT, () => {
  console.log(`Now serving your Express app at http://localhost:${APP_PORT}`); // eslint-disable-line
});
