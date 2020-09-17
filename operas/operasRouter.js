const router = require('express').Router()

const Operas = require('./operasModel')

router.get('/', (req, res) => {
    Operas.get(req.query)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error while retrieving the userbase." })
    })
});

router.post('/', (req, res) => {
    const changes = req.body
    Operas.insert(changes)
    .then(value => {
        res.status(201).json(value)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

module.exports = router;