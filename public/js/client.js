const socket = io();
// you will have have to give room and username here;
// var username = document.querySelector('#username1').value;
// var room = document.querySelector('#room1').value;
var username;
var room;
var chats = document.querySelector('.chats');
var users_list = document.querySelector('.users-list');
var users_count = document.querySelector('.users-count');
var msg_send=document.querySelector('#user-send');
var user_msg=document.querySelector('#user-msg');



do{
    username = prompt("Enter your name");
    room = prompt("Enter room name");
}while(!username || !room);



socket.emit('new-user-joined', username);

socket.on('user-connected', (socket_name)=>{
    // console.log(username + " connected");
    userJoinLeft(socket_name,'joined');
});


function userJoinLeft(name, status){
    let div = document.createElement('div');
    div.classList.add('user-join');
    let content = `<p><b>${name}</b> ${status} the chat</p>`;
    div.innerHTML = content;
    chats.appendChild(div);
    chats.scrollTop = chats.scrollHeight;
}

socket.on('user-disconnected', (user)=>{
    userJoinLeft(user, 'Left');
});
// This is for users list
socket.on('user-list', (users)=>{
    users_list.innerHTML = '';
    users_arr=Object.values(users);
    for(var i=0;i<users_arr.length;i++){
        let p=document.createElement('p');
        p.innerText=users_arr[i];
        users_list.appendChild(p);
    //
    }
    users_count.innerText = users_arr.length;
});

msg_send.addEventListener('click', ()=>{
    let data={
        'username': username,
        'message': user_msg.value
    }
    if(user_msg.value != '') {
        appendMessage(data, 'outgoing');
        socket.emit('message', data);
        user_msg.value = '';
    }
})

function appendMessage(data, status){
    let div=document.createElement('div');
    div.classList.add('message', status);
    let content = `
        <h5>${data.username}</h5>
        <p>${data.message}</p>
    `;
    div.innerHTML = content;
    chats.appendChild(div);
    chats.scrollTop = chats.scrollHeight;
}


socket.on('message', (data)=>{
    appendMessage(data, 'incoming');
})  