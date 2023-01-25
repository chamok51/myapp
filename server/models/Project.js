const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['not started', 'started', 'completed'],
  },
  clinetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
})

module.exports = mongoose.model('Project', ProjectSchema)
