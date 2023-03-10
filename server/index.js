const express = require('express')
const colors = require('colors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

//Database connect
connectDB()

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'devlopment',
  })
)

app.listen(port, console.log(`server is running on port ${port}`))
