const ws = new WebSocket('ws://wsc.2123.io/');
ws.binaryType = 'arraybuffer';
ws.onopen = () => {
  ws.send(JSON.stringify({
    "name": "SuperHero",
    "command": "challenge accepted"
  }));
}
ws.onmessage = function(e) {
  if(e.data instanceof ArrayBuffer) {
    console.log(e.data);
  } else {
    console.log(e.data);
  }
}

