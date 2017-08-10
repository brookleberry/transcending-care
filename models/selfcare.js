const mongoose = require('mongoose')

const SelfcareSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String
})

module.exports = mongoose.model('SelfcareSchema', SelfcareSchema)
