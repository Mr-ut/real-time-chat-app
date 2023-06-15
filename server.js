require('dotenv').config();
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/login.html');
})

app.post('/', (req,res)=>{
    var username = req.body.username;
    var room = req.body.room;
    console.log(username+room);
    res.sendFile(__dirname + '/index.html');
})




/*Socket.io connection*/

const io = require('socket.io')(server);

io.on('connection', (socket)=>{
    console.log(socket.id);
})


/* Ends */

server.listen(port, ()=>{
    console.log(`You are listning to port ${port}`);
})