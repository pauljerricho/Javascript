// Date & Intl
const d = new Date('2025-08-30T09:00:00+09:00');
const fmt = new Intl.DateTimeFormat('ko-KR', { dateStyle:'full', timeStyle:'short' });
console.log(fmt.format(d));
