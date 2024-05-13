require('dotenv').config()
require('express-async-errors')

const express = require ('express')
const app = express()

const appRouter = require('./routes/main')

const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', appRouter)
app.use(notFound)
app.use(errorHandler)
app.get('/', (req, res)=>{
   res.status(200).send("welsome to home Page Babe ")
   console.log("user hit the sewrver ");
   res.end()
})

app.get('/about', (req, res)=>{
  res.status(200).send("about Page ")
  console.log("user hit the sewrver ");
  res.end()
})

app.get('/contact', (req, res)=>{
  res.status(200).send("Contact  ")
  console.log("user hit the sewrver ");
  res.end()
})
app.all('*', (req , res )=>{
  res.status(404).send('<h1>404 ...page not found </h1>')
})


app.listen(7000, ()=>{
  console.log("this server is lisening on port 7000");
})


