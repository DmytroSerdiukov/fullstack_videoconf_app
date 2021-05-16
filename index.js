import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './routes/user'
import mongo from 'mongoose'
import io from 'socket.io'
import httpServer from 'http'

const app = express()
const server = httpServer.createServer(app)
const socket = io(server)
// const HTTP = http.Server(app) 

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())
app.use('/', userRoutes)

const startServer = async() => {
  await mongo.connect('mongodb+srv://Dmytro:1234@cluster0.pix6q.mongodb.net/videoconfapp?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
    })
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
