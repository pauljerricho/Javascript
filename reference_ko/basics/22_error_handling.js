// 에러 처리: try/catch/finally + 사용자 정의 에러
class MyError extends Error {}
try {
  throw new MyError('문제 발생');
} catch(e) {
  console.log('잡음:', e.message);
} finally {
  // 정리 로직
}
