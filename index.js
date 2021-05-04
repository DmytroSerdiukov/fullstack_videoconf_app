import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './routes/user'
import mongo from 'mongoose'

const app = express()

// const HTTP = http.Server(app) 

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())
app.use('/', userRoutes)

const startServer = async() => {
  const db = await mongo.connect('mongodb+srv://Dmytro:1234@cluster0.pix6q.mongodb.net/videoconfapp?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => console.log('connected'))

  await app.listen(5000, () => {
    console.log('server started on 5000 port')
  })
}

startServer()

process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
  process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
  });
