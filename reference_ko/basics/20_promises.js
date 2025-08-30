// 프로미스: 비동기 결과를 나타내는 객체
const p = new Promise(resolve => setTimeout(()=>resolve(42), 100));
p.then(v => console.log('then:', v));
