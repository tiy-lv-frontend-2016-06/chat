var socketio = require('socket.io');

module.exports = function (server) {
  var io = new socketio(server);

  io.on('connection', function(socket){
    console.log('connected');

    socket.on('message', function(message){
      socket.broadcast.emit('message', message);
    });

    socket.on('disconnect', function() {
      console.log('disconnect');
      io.sockets.emit('disconnect', {'foo':'bar'});
    })
  })
}