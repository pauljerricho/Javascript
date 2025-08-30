// 저장소(Repository) – 데이터 접근 추상화
class MemoryRepo {
  constructor(){ this.map=new Map(); }
  save(e){ this.map.set(e.id,e); return e; }
  find(id){ return this.map.get(id)||null; }
  all(){ return [...this.map.values()]; }
}
const repo = new MemoryRepo();
repo.save({id:1,name:'A'}); console.log(repo.find(1), repo.all().length);
