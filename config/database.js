module.exports = ({env}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi')
      },
      options: {
        useNullAsDefault: true,
        ssl: env('DATABASE_SSL'),
      },
    },
  },
});
