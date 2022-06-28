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

module.exports = router
