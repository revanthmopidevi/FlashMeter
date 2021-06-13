const express = require('express')
const https = require('https')
// words object
const words = require('../assets/words.json')

const router = express.Router()

router.get('/words', (req, res) => {
    const phrase = []
    for (let i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * words.words.length)
        phrase.push(words.words[num])
    }
    res.send(phrase)
})

router.get('/numbers', (req, res) => {
    const response = {
        "number": Math.floor(Math.random() * 10000)
    }
    res.send(response)
})

module.exports = router