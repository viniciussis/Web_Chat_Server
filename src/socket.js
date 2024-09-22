import io from "./server.js"

io.on('connection', (socket) => {
  console.log('Web Socket Connected!')

  socket.on('typing_document', (text) => {
    socket.broadcast.emit('sharing_document_data', text)
  })
})
