// 미디에이터
class Mediator {
  constructor(){ this.subs=[]; }
  reg(fn){ this.subs.push(fn); }
  send(msg){ this.subs.forEach(f=>f(msg)); }
}
const m = new Mediator(); m.reg(console.log); m.send('ping');
