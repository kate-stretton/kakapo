const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getKakapo(db = connection) {
  return db('kakapo').select()
}

module.exports = { getKakapo }
