const WebSocket = require("ws");

let wss;

module.exports = {
  init: (httpServer) => {
    wss = new WebSocket.Server({ server: httpServer });
    return wss;
  },
  getIO: () => {
    if (!wss) {
      throw new Error("Socket not initialized!");
    }
    return wss;
  },
};
