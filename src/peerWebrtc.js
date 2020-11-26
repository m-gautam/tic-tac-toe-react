import Peer from "peerjs";

export const peer = new Peer("tic-tac-toe-peer-id");
console.log(peer);

const conn = peer.connect("tic-tac-toe-peer-id");

peer.on("connection", function (dataConnection) {
  console.log(dataConnection);
});
