// 책임 연쇄
class Handler {
  setNext(n){ this.next=n; return n; }
  handle(req){ return this.next? this.next.handle(req) : 'unhandled'; }
}
class Even extends Handler { handle(req){ return req%2===0 ? 'even' : super.handle(req); } }
class Positive extends Handler { handle(req){ return req>0 ? 'pos' : super.handle(req); } }
const h = new Even(); h.setNext(new Positive());
console.log(h.handle(3));
