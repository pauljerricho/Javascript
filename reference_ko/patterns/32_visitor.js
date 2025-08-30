// 비지터
const Visitor = {
  Number(x){ return x*2; },
  String(x){ return x.toUpperCase(); }
};
const visit = (v, obj) => (v[obj?.constructor?.name]||((o)=>o))(obj);
console.log(visit(Visitor, 10), visit(Visitor, 'ab'));
