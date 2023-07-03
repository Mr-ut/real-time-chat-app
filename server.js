require('dotenv').config();
const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var username;
const app = express();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

// Middleware
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Routes
app.get('/', (req,res)=>{
    // res.sendFile(__dirname + '/login.html');
    res.sendFile(__dirname + '/index.html');
})


// app.post('/', (req,res)=>{
//      username = req.body.username;
//     // room = req.body.room;
//     // console.log(username);
//     io.emit('username', username);
//     res.sendFile(__dirname + '/index.html');
// })


// console.log(username);

/*Socket.io connection*/

const io = require('socket.io')(server);
var users={};


io.on('connection', (socket)=>{
    // console.log(socket.id);
    socket.on('new-user-joined', (username)=>{
        users[socket.id] = username;
        // socket.broadcast.emit('user-joined', username);
        // console.log("Hello");
        // console.log(users);
        // console.log("Hii");
        socket.broadcast.emit('user-connected', username);
        io.emit('user-list', users);
    })

    socket.on("disconnect", ()=>{
        // socket.broadcast.emit('user-left', users[socket.id]);
        socket.broadcast.emit('user-disconnected', user=users[socket.id]);
        delete users[socket.id];
        io.emit('user-list', users);
    })

    socket.on('message', (data)=>{
        // console.log(data);
        socket.broadcast.emit('message', {'username': data.username, 'message': data.message});
        // appendMessage(data, 'incoming');
    })
})


/* Ends */

server.listen(port, ()=>{
    console.log(`You are listning to port ${port}`);
})
// module.exports = { username };