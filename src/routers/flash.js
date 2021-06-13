const express = require('express')
const path = require('path')

const router = new express.Router()

router.use('/', express.static(path.join(__dirname, '..', 'static')));

router.get('/words', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'static', 'html', 'words.html'))
})

router.get('/numbers', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'static', 'html', 'numbers.html'))
})

module.exports = router