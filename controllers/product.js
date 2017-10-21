const _ = require('lodash')
const Product = require('../models/product.js')

module.exports = app => {
  // Create
  app.post('/api/products', (req, res) => {
    const newProduct = new Product(req.body)
    newProduct
      .save()
      .then(result => {
        res.json({ info: 'product created successfully.' })
      })
      .catch(err => console.error(err))
  })

  // Read
  app.get('/api/products', (req, res) => {
    Product.find()
      .then(products => {
        res.json(products)
      })
      .catch(err => console.error(err))
  })

  // Update
  app.put('/api/products/:id', (req, res) => {
    Product.update({ _id: req.params.id }, req.body)
      .then(product => {
        res.json({ info: 'product updated successfully' })
      })
      .catch(err => console.error(err))
  })

  // Delete
  app.delete('/api/products/:id', (req, res) => {
    Product.remove({ _id: req.params.id })
      .then(() => {
        res.json({ info: 'product removed successfully' })
      })
      .catch(err => console.error(err))
  })
}