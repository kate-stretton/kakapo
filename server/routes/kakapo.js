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
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
