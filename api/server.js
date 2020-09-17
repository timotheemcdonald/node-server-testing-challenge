const express = require('express')

const operaRouter = require('../operas/operasRouter')
const connection = require('../data/dbConfig.js')

const server = express()

server.use(express.json())
server.use('/api/opera', operaRouter)

server.get('/', (req, res) => {
    res.json({message: 'Bravo!'})
})

module.exports = server;