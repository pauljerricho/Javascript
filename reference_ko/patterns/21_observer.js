// 옵저버 (EventEmitter 간이 구현)
class Emitter {
  constructor(){ this.map=new Map(); }
  on(evt, fn){ (this.map.get(evt) || this.map.set(evt,[]).get(evt)).push(fn); }
  emit(evt, ...args){ (this.map.get(evt)||[]).forEach(fn=>fn(...args)); }
}
const e = new Emitter();
e.on('data', x=>console.log('data',x));
e.emit('data', 123);
