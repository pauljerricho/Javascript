// 지연 초기화
class Lazy {
  get data(){ delete this.data; return this.data = this.load(); }
  load(){ return 'heavy result'; }
}
const l = new Lazy();
console.log(l.data, l.data); // 두 번째는 캐시된 값
