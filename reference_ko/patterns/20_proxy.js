// 프록시 (가상/보호/로깅)
const target = { save(v){ return 'saved:'+v; } };
const proxy = new Proxy(target, {
  get(t,k){ console.log('get',k); return t[k]; }
});
console.log(proxy.save('x'));
