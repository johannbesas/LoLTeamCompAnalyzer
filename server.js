const express = require('express')
const hbs = require('express-handlebars')

const playerRoutes = require('./playerRoutes')

const { getPlayersData } = require('./utils')

const server = express()
module.exports = server


server.use(express.static('public'))
//server.use('/public', express.static(__dirname + '/public'))
//server.use('/data', express.static(__dirname + '/data/'))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use('/player', playerRoutes)

server.get('/', (req, res) => {

    res.render('home')
})
