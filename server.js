const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://admin:admin@ds227045.mlab.com:27045/hacktivcash', {
  useMongoClient: true
})

app.use(bodyParser.json())
const products = require('./controllers/product')(app)

app.get('', (req, res) => {
  res.send('OK')
})

app.listen(3000, () => {
  console.log(`Server Listening... Magic happen at http://localhost:3000/`)
})