import app from './app';

const port = process.env.SERVER_PORT;

if (!port) {
  throw new Error('The environment variable SERVER_PORT cannot be empty.');
}

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
