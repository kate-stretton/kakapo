exports.up = function (knex) {
  return knex.schema.createTable('kakapo', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('hatchYear')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('kakapo')
}
