// 미들웨어(파이프라인) – Express 스타일
const compose = (middlewares) => (ctx) => {
  let idx = -1;
  const dispatch = (i) => {
    if (i <= idx) throw new Error('next() 여러 번 호출');
    idx = i;
    const fn = middlewares[i];
    if (!fn) return Promise.resolve();
    return Promise.resolve(fn(ctx, () => dispatch(i + 1)));
  };
  return dispatch(0);
};
const mw = compose([
  async (ctx, next)=>{ ctx.log=[]; ctx.log.push('a'); await next(); ctx.log.push('z'); },
  async (ctx, next)=>{ ctx.log.push('b'); await next(); },
]);
(async()=>{ const ctx={}; await mw(ctx); console.log(ctx.log.join('>')); })();
