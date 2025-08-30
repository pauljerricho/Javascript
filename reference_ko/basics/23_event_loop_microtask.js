// 이벤트 루프: macrotask vs microtask
setTimeout(()=>console.log('timeout (macro)'), 0);
Promise.resolve().then(()=>console.log('then (micro)'));
queueMicrotask(()=>console.log('queueMicrotask (micro)'));
