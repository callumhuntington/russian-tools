// Draws a topic's notes (data/notes.js): explainer paragraphs, pattern tables, example lines, lists and traps.
// Russian inside English text is picked out and set in Onest with stress marks.
// {…} marks an ending, shown in red.
function mixed(s) {
  if (s.includes('{')) return s.split(/\{([^}]*)\}/).map((x, i) => i % 2 ? `<span class="end-r">${mixedRun(x)}</span>` : mixedRun(x)).join('');
  return mixedRun(s);
}
function mixedRun(s) {
  const re = /[А-Яа-яЁё][А-Яа-яЁё`\-]*(?:[ ,]+[А-Яа-яЁё][А-Яа-яЁё`\-]*)*/g;
  let out = '', last = 0, m;
  while ((m = re.exec(s))) { out += esc(s.slice(last, m.index)) + `<span class="ru">${stress(m[0])}</span>`; last = m.index + m[0].length; }
  return out + esc(s.slice(last));
}
function noteBlock(b) {
  const [kind, a, c] = b;
  if (kind === 'p') return `<p class="np">${mixed(a)}</p>`;
  if (kind === 'steps') return `<ol class="nl">${a.map(x => `<li>${mixed(x)}</li>`).join('')}</ol>`;
  if (kind === 'list') return `<ul class="nl">${a.map(x => `<li>${mixed(x)}</li>`).join('')}</ul>`;
  if (kind === 'ex') return `<div class="nex">${a.map(([ru, en]) => `<div class="r"><span class="ru">${stress(ru)}</span><span class="en">${mixed(en)}</span></div>`).join('')}</div>`;
  if (kind === 'table') {
    const lab = a[0] === '' && a.length > 2 ? ' lab' : '', wide = a.length >= 5 ? ' wide' : a.length === 4 ? ' four' : '';
    const head = a.some(h => h) ? `<tr>${a.map(h => `<th>${mixed(h)}</th>`).join('')}</tr>` : '';
    return `<div class="ntw"><table class="nt${lab}${wide}">${head}${c.map(r => r.length === 1 && a.length > 1
      ? `<tr class="grp"><td colspan="${a.length}">${mixed(r[0])}</td></tr>`
      : `<tr>${r.map(x => `<td>${mixed(x)}</td>`).join('')}</tr>`).join('')}</table></div>`;
  }
  return '';
}
function renderNotes(id) {
  const n = NOTES[id];
  if (!n) return '<p class="foot">No notes for this topic yet.</p>';
  return `<div class="ntitle"><span class="ru">${esc(n.title)}</span><span class="en">${esc(n.intro)}</span></div>` +
    n.sections.map((s, i) => `<section class="box notes${s.title === 'Ловушки' ? ' traps' : ''}">
      ${sectionHead(i + 1, plain(s.title), s.ru, s.en)}${s.blocks.map(noteBlock).join('')}</section>`).join('');
}
// A full-screen panel with the notes, for use in the middle of an exercise.
function openNotes(id) {
  const n = NOTES[id];
  if (!n) return;
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = `<div class="wrap"><header class="top"><span class="left">Заметки</span><h1 class="disp">${esc(n.title.split('?').pop().trim() || n.title)}</h1>
    <button class="right closeov" type="button">${icon('cross')}Закрыть</button></header>${renderNotes(id)}
    <div class="btns centre"><button class="btn closeov" type="button">${icon('back')}Back to the question</button></div></div>`;
  document.body.appendChild(ov);
  document.body.classList.add('noscroll');
  const close = () => { ov.remove(); document.body.classList.remove('noscroll'); };
  ov.querySelectorAll('.closeov').forEach(b => b.onclick = close);
}
