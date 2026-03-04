export class MkjsInstance {
  private userID = 0;
  private sockets: any[] = [];
  private kartInf: any[] = [];
  private relkDat: { k: number; d: ArrayBufferLike }[] = [];

  constructor() {
    setInterval(() => this.update(), 16.667);
  }

  private update() {
    if (this.relkDat.length === 0) return;

    const d = new ArrayBuffer(3 + this.relkDat.length * 0x62);
    const arr = new Uint8Array(d);
    const view = new DataView(d);
    arr[0] = 32;
    view.setUint16(1, this.relkDat.length, true);
    let off = 3;

    for (let i = 0; i < this.relkDat.length; i++) {
      view.setUint16(off, this.relkDat[i].k, true);
      const cpy = new Uint8Array(this.relkDat[i].d);
      arr.set(cpy, off + 2);
      off += 0x62;
    }

    for (const socket of this.sockets) {
      socket.send(d);
    }

    this.relkDat = [];
  }

  private addKart(cli: any) {
    const c = JSON.parse(JSON.stringify(cli.credentials));
    c.active = true;
    cli.kartID = this.kartInf.length;
    this.kartInf.push(c);

    for (const socket of this.sockets) {
      if (socket !== cli) {
        socket.send(JSON.stringify({ t: "+", k: c }));
      }
    }
  }

  addClient(clientSocket: any) {
    console.log("added client");
    this.sockets.push(clientSocket);
    clientSocket.credentials.userID = this.userID++;

    this.addKart(clientSocket);
    this.sendInstanceInfo(clientSocket);
  }

  private sendInstanceInfo(clientSocket: any) {
    clientSocket.send(
      JSON.stringify({
        t: "*",
        k: this.kartInf,
        p: clientSocket.kartID,
        c: `mkds/${Math.floor(Math.random() * 36)}`,
        r: 1,
        m: 1,
      }),
    );
  }

  removeClient(clientSocket: any) {
    const ind = this.sockets.indexOf(clientSocket);
    if (ind !== -1) this.sockets.splice(ind, 1);

    if (clientSocket.kartID != null) {
      const dat = JSON.stringify({ t: "-", k: clientSocket.kartID });
      this.kartInf[clientSocket.kartID].active = false;
      for (const socket of this.sockets) socket.send(dat);
    }

    if (this.sockets.length === 0) this.resetInstance();
  }

  private toArrayBuffer(buffer: Buffer | ArrayBuffer) {
    if (buffer instanceof ArrayBuffer) return buffer;
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  }

  handleMessage(cli: any, data: Buffer | ArrayBuffer, flags: { binary: boolean }) {
    if (this.sockets.indexOf(cli) === -1) {
      cli.send(JSON.stringify({
        t: "!",
        m: "FATAL ERROR: Server does not recognise client! Are you connecting to the wrong instance?",
      }));
      return;
    }

    const d = this.toArrayBuffer(data);

    if (flags.binary) {
      const view = new DataView(d);
      const handler = this.binHandlers[view.getUint8(0)];
      if (handler) handler(cli, view);
      return;
    }

    try {
      const json = Buffer.from(d).toString("utf8");
      const obj = JSON.parse(json);
      const handler = this.wsHandlers[`$${obj.t}`];
      if (handler) handler(cli, obj);
    } catch {
      return;
    }
  }

  private binHandlers: Array<((cli: any, view: DataView) => void) | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    (cli, view) => {
      if (cli.kartID != null) this.relkDat.push({ k: cli.kartID, d: view.buffer.slice(1) });
    },
  ];

  private wsHandlers: Record<string, (cli: any, obj: any) => void> = {};

  resetInstance() {
    console.log("instance reset");
    this.userID = 0;
    this.kartInf = [];
    this.relkDat = [];
    for (const socket of this.sockets) {
      socket.credentials.userID = this.userID++;
      this.sendClientID(socket);
    }
  }

  private sendClientID(socket: any) {
    socket.send(JSON.stringify({ t: "#", i: socket.credentials.userID }));
  }
}
