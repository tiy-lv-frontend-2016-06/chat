import io from 'socket.io-client';

export function connectSocket() {
  const socket = io();

  socket.on('disconnect', function(data){
    console.log(data.foo);
  });

  
}