// 서킷 브레이커 (초간단)
function CircuitBreaker(action, failureThreshold=3, timeout=1000){
  let fail=0, openUntil=0;
  return async (...args)=>{
    const now=Date.now();
    if(now < openUntil) throw new Error('OPEN');
    try{ const r = await action(...args); fail=0; return r; }
    catch(e){ if(++fail >= failureThreshold){ openUntil = now+timeout; } throw e; }
  };
}
const unstable = async()=>{ if(Math.random()<0.7) throw 'boom'; return 'OK'; };
const safe = CircuitBreaker(unstable, 2, 500);
(async()=>{ for(let i=0;i<5;i++){ try{ console.log(await safe()); } catch(e){ console.log('ERR', e.message||e); } } })();
