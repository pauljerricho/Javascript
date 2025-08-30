// 구구단 PLUS – 모듈형 구현 (입력 검증/포맷/복사/CSV)
const $ = (sel) => document.querySelector(sel);

function validate(dan, from, to){
  const errs = [];
  if (!Number.isInteger(dan) || dan < 2 || dan > 19) errs.push('단은 2~19 사이의 정수를 입력하세요.');
  if (!Number.isInteger(from) || !Number.isInteger(to)) errs.push('범위는 정수를 입력하세요.');
  if (from > to) errs.push('시작 값은 끝 값보다 클 수 없습니다.');
  return errs;
}

function makeRows(dan, from, to, order='asc'){
  const rows = [];
  const lo = Math.max(0, from);
  const hi = Math.min(99, to);
  if (order === 'desc'){
    for (let i=hi; i>=lo; i--) rows.push([dan, i, dan*i]);
  } else {
    for (let i=lo; i<=hi; i++) rows.push([dan, i, dan*i]);
  }
  return rows;
}

function renderTable(rows){
  const table = document.createElement('table');
  table.innerHTML = `
    <caption>총 ${rows.length}개 항목</caption>
    <thead><tr><th>식</th><th>값</th></tr></thead>
    <tbody></tbody>
  `;
  const tb = table.querySelector('tbody');
  for (const [d, i, v] of rows){
    const tr = document.createElement('tr');
    const expr = `${d} × ${i}`.padStart(6, ' ');
    tr.innerHTML = `<td style="text-align:left">${expr}</td><td>${v.toLocaleString('ko-KR')}</td>`;
    tb.appendChild(tr);
  }
  return table;
}

function renderGrid(rows){
  const sec = document.createElement('section');
  sec.className = 'grid';
  for (const [d, i, v] of rows){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div style="font-weight:700">${d} × ${i}</div><div style="font-size:20px">${v.toLocaleString('ko-KR')}</div>`;
    sec.appendChild(card);
  }
  return sec;
}

function renderText(rows){
  const pre = document.createElement('pre');
  pre.textContent = rows.map(([d,i,v]) => `${d} x ${i} = ${v}`).join('\n');
  return pre;
}

function toCSV(rows){
  const header = 'dan,multiplier,value';
  const body = rows.map(([d,i,v]) => `${d},${i},${v}`).join('\n');
  return header + '\n' + body;
}

function copyToClipboard(text){
  return navigator.clipboard?.writeText(text);
}

function download(filename, content, mime='text/plain'){
  const blob = new Blob([content], { type: mime });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function showMsg(msg, ok=false){
  const el = $('#msg');
  el.textContent = msg;
  el.className = ok ? 'ok' : 'error';
  setTimeout(()=>{ el.textContent=''; el.className='hint'; }, 2000);
}

function main(){
  $('#run').addEventListener('click', () => {
    const dan = parseInt($('#dan').value, 10);
    const from = parseInt($('#from').value, 10);
    const to = parseInt($('#to').value, 10);
    const order = $('#order').value;
    const fmt = $('#fmt').value;

    const errs = validate(dan, from, to);
    if (errs.length){
      showMsg(errs[0], false);
      return;
    }
    const rows = makeRows(dan, from, to, order);
    const out = $('#out');
    out.innerHTML = '';

    let node;
    if (fmt === 'table') node = renderTable(rows);
    else if (fmt === 'grid') node = renderGrid(rows);
    else node = renderText(rows);

    out.appendChild(node);
    showMsg('생성 완료', true);

    // Copy / CSV hooks
    $('#copy').onclick = async () => {
      const text = rows.map(([d,i,v]) => `${d} x ${i} = ${v}`).join('\n');
      try{
        await copyToClipboard(text);
        showMsg('복사 완료', true);
      }catch(e){
        showMsg('복사 실패: 권한을 허용하세요.', false);
      }
    };
    $('#csv').onclick = () => {
      download(`gugudan-${dan}.csv`, toCSV(rows), 'text/csv;charset=utf-8');
    };
  });
}

document.addEventListener('DOMContentLoaded', main);
