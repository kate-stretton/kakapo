const path = require('path')
const express = require('express')

const kakapo = require('./routes/kakapo')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/kakapo', kakapo)

module.exports = server
