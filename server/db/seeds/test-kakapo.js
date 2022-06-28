exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('kakapo').del()
  await knex('kakapo').insert([
    { id: 1, name: 'Attenborough', hatchYear: 2016 },
    { id: 2, name: 'Kumi', hatchYear: 2005 },
    { id: 3, name: 'Adelaide', hatchYear: 2016 },
    { id: 4, name: 'Kuia', hatchYear: 1991 },
    { id: 5, name: 'Sirocco', hatchYear: 1997 },
  ])
}
