// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      //connectionString: 'Server=localhost\\SQLEXPRESS;Database=be-the-hero;User Id=dev;Password=123;Integrated Security=True;'
      host : 'localhost',
      user : 'dev',
      password : '123123',
      database : 'be-the-hero',
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
