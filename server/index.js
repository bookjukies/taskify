require("dotenv").config();
const app = require('express')()
const express = require("express")
const server = require('http').Server(app)
const mongoose = require('mongoose')
const cors = require('cors')
const { log } = require("console")
const connectDB = require('./config/connectMongo')

const io = require('socket.io')(server, {
    cors: {
        origin: ["http://192.168.43.159:3000", "http://localhost:3000", "http://192.168.0.110:3000s"],
        methods: ["GET", "POST"]
    }
})


const Message = require("./model/Message")
const credentials = require('./middleware/credentials');
const verifyJwT = require("./middleware/verifyJWT")
const HandleNewUser = require("./controllers/registerController")
const loginHandle = require("./controllers/authController")

connectDB()



mongoose.connection.once('open', ()=>{
  //starting the server
  app.use(credentials);
  app.use(cors())
  app.use(express.json())


server.listen(3001, ()=> log("The server is running"));
// WARNING: app.listen(80) will NOT work here!

// DO STUFF WITH EXPRESS SERVER
app.get('/',(req, res) =>{
  res.send("<h1>Hello world</h1>")
})
app.get('/test', verifyJwT ,async  (req, res)=>{
    res.send("<h1> it works </h1>")
})

app.post('/register', HandleNewUser)
app.post('/login', loginHandle)

io.on('connection', (socket) => {
  let room_number = null

  socket.on('join_room', (data)=>{
    room_number = data
    socket.join(data)
  })

  socket.on('send_message',(data)=>{
    log(data)
    socket.to(room_number).emit('recieve_message', data)
  })
})
  
})

