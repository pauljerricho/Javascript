// Number / BigInt 주요 포인트
console.log(0.1 + 0.2);             // 0.30000000000000004 (부동소수 오차)
console.log(Math.round(1.005 * 100) / 100);
console.log(1n + 2n);               // 3n (BigInt는 BigInt끼리 연산)
// 혼합 연산은 불가: 1n + 1 => TypeError
