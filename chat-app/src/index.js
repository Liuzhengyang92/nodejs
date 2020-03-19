const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0

// server (emit) -> client (received) - countUpdated
// client (emit) -> server (received) - increment

io.on('connection', (socket) => {
  console.log('New WebSocket connection!')

  // socket.emit('countUpdated', count)

  // socket.on('increment', () => {
  //   count++
  //   //socket is for a single connection
  //   // socket.emit('countUpdated', count)
  //   //io can send the latest value to all connections to the socket
  //   io.emit('countUpdated', count)
  // })

  socket.emit('message', 'Welcome!')

  socket.on('sendMessage', (message) => {
    io.emit('message', message)
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})