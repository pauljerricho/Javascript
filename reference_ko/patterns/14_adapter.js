// 어댑터
class Old { request(){ return 'old'; } }
class New { do(){ return 'new'; } }
class Adapter {
  constructor(adaptee){ this.adaptee = adaptee; }
  request(){ return this.adaptee.do(); }
}
console.log(new Adapter(new New()).request());
