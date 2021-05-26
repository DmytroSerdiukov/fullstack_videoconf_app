import io from 'socket.io'
import cors from 'cors'
import mongo from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import httpServer from 'http'
import videoconfRoutes from './routes/videoconferences'
import userRoutes from './routes/user'

const app = express()
const server = httpServer.createServer(app)
const socket = io(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
})

app.use(bodyParser.urlencoded({ extended: false }))

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(cors())
    app.use('/', userRoutes)
    app.use('/', videoconfRoutes)

const startServer = async() => {
  try {
    await mongo.connect('mongodb+srv://Dmytro:1234@cluster0.pix6q.mongodb.net/videoconfapp?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
      })
    .then( () => console.log('connected'))
    await server.listen(5000, () => {
      console.log('server started on 5000 port')
    })
  } catch (e) {
    console.log(e.message)
  }
}

startServer()

socket.once('connection', sock => {
  console.log('user connected')

  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)  // Join the room
    socket.broadcast.emit('user-connected', userId)
  })
  
  sock.on('disconnect', () => {
    console.log('user connected')
  })
})


process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
  process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
  });
