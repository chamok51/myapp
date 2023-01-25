const mongoose = require('mongoose')

const ClinetSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
})

module.exports = mongoose.model('Client', ClinetSchema)
