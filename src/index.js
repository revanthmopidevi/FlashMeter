const express = require('express')
const path = require('path')
// routers
const genRouter = require('./routers/generators')
const flashRouter = require('./routers/flash')

const app = express()
const port = 3000 || process.env.PORT

app.use(express.json())
app.use('/app', genRouter)
app.use(flashRouter)

app.get('/*', (req, res) => {
    res.status(404).send()
})


app.listen(port, () => {
    console.log(`server running on port ${port}.`)
})