const KNEX = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
    /* connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'node_projeto_login'
    } */
  });

module.exports = KNEX