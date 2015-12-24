import Server from 'socket.io';

export default function startServet() {
  const io = new Server().attach(8090);
}
