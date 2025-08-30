// async/await: 프로미스 문법 설탕
async function getValue(){
  return 7;
}
(async () => {
  const v = await getValue();
  console.log('await:', v);
})();
