import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_NAME : defaultOptions.database,
    }),
  );
};
