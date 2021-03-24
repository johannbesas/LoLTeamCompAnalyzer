const express = require('express')

const { getPlayersData } = require('./utils')

const router = express.Router()

module.exports = router

router.get('/:name', (req, res) => {
    getPlayersData((err, playersData) => {
        if (err) {
            res.status(500).send(err.message)
            return
        }

        // const viewData =
        // {
        //     players: playersData.players,
        //     player: playersData.players.find(element => element.name === req.params.name)
        // }

        res.render('player', playersData)
        //res.render('player')
    })
})