const express = require('express');
const { Server } = require('socket.io');
const cors = require('cors')

const app = express();

app.use(cors())

const expressServer = app.listen(3000, () => {
    console.log(`server started`)
})

const io = new Server(expressServer, {
    cors: {
        origin: '*'
    }
})
 

io.on('connection', (socket) => {
  console.log('socket connected')

  socket.on('chat', msg=>{
    socket.broadcast.emit('chat',formatMessage(msg.name,msg.message))
    console.log(msg)
  })
});


function formatMessage(name, message) {
  return {
      name:name,
      message:message,
      time: new Intl.DateTimeFormat('default', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
      }).format(new Date())
  }
}