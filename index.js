import express from 'express'
import http from 'http'
import cors from 'cors'

import userRoutes from './routes/user'

const app = express()
// const HTTP = http.Server(app) 


app.use(cors())
app.use('/', userRoutes)

const startServer = async() => {
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
