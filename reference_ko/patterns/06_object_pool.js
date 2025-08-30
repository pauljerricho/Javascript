// 오브젝트 풀
class Pool {
  constructor(factory, size=2){ this.free=[]; this.busy=new Set(); for(let i=0;i<size;i++) this.free.push(factory()); }
  acquire(){ const it = this.free.pop() || null; if(it) this.busy.add(it); return it; }
  release(it){ if(this.busy.delete(it)) this.free.push(it); }
}
const pool = new Pool(()=>({conn:Math.random()}), 1);
const c1 = pool.acquire(); console.log('acq1', c1);
pool.release(c1); const c2 = pool.acquire(); console.log('acq2', c2);
