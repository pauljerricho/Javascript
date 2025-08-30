// 싱글턴 패턴: 인스턴스가 하나만 존재
const Singleton = (()=>{
  let instance;
  class S { constructor(){ this.id = Math.random().toString(36).slice(2); } }
  return { getInstance(){ return instance || (instance = new S()); } };
})();
const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log('singleton same?', a === b);
