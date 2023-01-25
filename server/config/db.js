const mongoose = require('mongoose')

const connectDB = async () => {
  mongoose.set('strictQuery', false)
  const conn = await mongoose.connect(process.env.MONGO_URL)
  console.log(
    `MongoDb connected: ${conn.connection.host}`.rainbow.underline.italic.bold
  )
}

module.exports = connectDB
