/* eslint-disable no-console */
import { createConnection } from 'typeorm';

import app from './app';

const port = process.env.SERVER_PORT;

if (!port) {
  throw new Error('The environment variable SERVER_PORT cannot be empty.');
}

createConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch(console.log);
