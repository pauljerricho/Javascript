// Proxy/Reflect
const target = { x:1 };
const proxy = new Proxy(target, {
  get(t, k, r){
    console.log('get', k);
    return Reflect.get(t,k,r);
  }
});
console.log(proxy.x);
