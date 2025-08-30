// 재시도 + 지수 백오프
const wait = ms => new Promise(r=>setTimeout(r,ms));
async function retry(fn, max=3){
  let attempt=0;
  while(true){
    try{ return await fn(); }
    catch(e){ if(++attempt>max) throw e; await wait(2**attempt*100); }
  }
}
let n=0;
retry(async()=>{ if(++n<3) throw 'fail'; return 'ok'; }).then(console.log);
