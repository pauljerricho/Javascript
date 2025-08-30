// 데코레이터(객체 래핑)
class Service { op(){ return 'core'; } }
class LogDec extends Service { constructor(s){ super(); this.s=s; } op(){ return 'log(' + this.s.op() + ')'; } }
console.log(new LogDec(new Service()).op());
