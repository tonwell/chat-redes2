"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var httpServer = _http["default"].Server(app);

var io = (0, _socket["default"])(httpServer);
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});
httpServer.listen(port, function () {
  console.log("Chat Redes 2 is running at *:  ".concat(port));
});