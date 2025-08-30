// 의존성 주입 (간단한 컨테이너)
class Container {
  constructor(){ this.map = new Map(); }
  reg(key, factory){ this.map.set(key, factory); }
  get(key){ return this.map.get(key)(this); }
}
const c = new Container();
c.reg('repo', () => ({ find: id => ({ id }) }));
c.reg('svc', c => ({ read: id => c.get('repo').find(id) }));
console.log(c.get('svc').read(1));
