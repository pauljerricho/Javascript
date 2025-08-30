// 널 오브젝트
const NullLogger = { log(){ /* 아무 것도 안함 */ } };
function doWork(logger = NullLogger){ logger.log('start'); return 'done'; }
console.log(doWork());
