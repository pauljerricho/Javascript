// 제너레이터: 이터레이터를 쉽게 작성
function* gen(){
  yield 1; yield 2; yield 3;
}
for (const v of gen()) console.log(v);
