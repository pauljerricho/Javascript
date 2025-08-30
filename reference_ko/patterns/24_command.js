// 커맨드
class Command{ constructor(exec, undo){ this.exec=exec; this.undo=undo; } }
class Invoker{
  constructor(){ this.history=[]; }
  run(c){ c.exec(); this.history.push(c); }
  rollback(){ while(this.history.length) this.history.pop().undo(); }
}
const inv = new Invoker();
inv.run(new Command(()=>console.log('ON'), ()=>console.log('UNDO ON')));
inv.rollback();
