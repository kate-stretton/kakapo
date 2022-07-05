const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getKakapo(db = connection) {
  return db('kakapo').select()
}

function getAKakapo(id, db = connection) {
  return db('kakapo').where('id', id).select().first()
}

function addKakapo(kakapo, db = connection) {
  const { name, hatchYear } = kakapo
  return db('kakapo')
    .insert({ name, hatchYear })
    .then((ids) => {
      return getAKakapo(ids[0])
    })
}

function deleteKakapo(id, db = connection) {
  return db('kakapo').where('id', id).delete()
}

function updateKakapo(id, kakapo, db = connection) {
  console.log('db', kakapo)
  return db('kakapo').where({ id }).update(kakapo)
}

module.exports = {
  getKakapo,
  addKakapo,
  getAKakapo,
  deleteKakapo,
  updateKakapo,
}
