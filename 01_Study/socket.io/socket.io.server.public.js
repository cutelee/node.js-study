// 소켓 서버를 생성 및 실행
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
  // rint 이벤트
  socket.on('connection', function (socket) {
    // public 통신
    io.sockets.emit('smart', data);
  });
});
