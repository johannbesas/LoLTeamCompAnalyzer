const fs = require('fs')
const path = require('path')

module.exports = {
    getPlayersData
}


function getPlayersData(callback) {
    const filename = path.join(__dirname, 'data/players.json')

    fs.readFile(filename, 'utf8', (err, contents) => {
        if (err) {
            console.error(err.message)
            return
        }
        try {
            //console.log(contents)
            const parsedData = JSON.parse(contents)
            console.log(parsedData)
            callback(null, parsedData)
        } catch (parseError) {
            console.error(parseError)
            callback(new Error('Unable to parse the data file'))
        }
    })
}