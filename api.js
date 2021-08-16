const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/blockchain', (req, res) => {

})

app.post('/transaction', (req, res) => {

})

app.get('/mine', (req, res) => {

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))