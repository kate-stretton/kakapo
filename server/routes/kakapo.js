//back end route to get kakapo from database

const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getKakapo()
    .then((kakapo) => {
      res.json(kakapo)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const { name, hatchYear } = req.body
  db.addKakapo({ name, hatchYear })
    .then((id) => {
      res.json(id)
      return null
    })
    .catch(() => {
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  //console.log(id)
  db.deleteKakapo(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id/', (req, res) => {
  return db
    .updateKakapo(req.params.id, req.body) // call this and it makes a promise.
    .then(() => {
      return db.getAKakapo(req.params.id)
    })
    .then((kakapo) => {
      res.json(kakapo)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
