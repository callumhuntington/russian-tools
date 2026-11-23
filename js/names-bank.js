// Builds the names question bank from data/names.js. Used by names.html and the home screen.
const NAMES_NS = 'names_scores_v1';

function malePatronymic(name) {
  const special = { 'Илья': 'Ильич', 'Кузьма': 'Кузьмич', 'Лука': 'Лукич', 'Никита': 'Никитич', 'Фома': 'Фомич' };
  if (special[name]) return special[name];
  return patStem(name) + 'ич';
}
function femalePatronymic(name) {
  const special = { 'Илья': 'Ильинична', 'Кузьма': 'Кузьминична', 'Лука': 'Лукинична', 'Никита': 'Никитична', 'Фома': 'Фоминична' };
  if (special[name]) return special[name];
  return patStem(name) + 'на';
}
function patStem(name) {
  if (name === 'Павел') return 'Павлов';          // the е drops
  if (name === 'Пётр') return 'Петров';           // ё becomes е (stress moves)
  if (name === 'Михаил') return 'Михайлов';       // л keeps, й is added
  if (name === 'Дмитрий') return 'Дмитриев';      // и keeps: Дмитриевич
  if (name.endsWith('ий')) return name.slice(0, -2) + 'ьев';
  if (name.endsWith('й') || name.endsWith('ь')) return name.slice(0, -1) + 'ев';
  if (name.endsWith('а') || name.endsWith('я')) return name.slice(0, -1) + 'ов';
  return name + 'ов';
}

function buildNameQuestions() {
  const Q = [];
  const fathers = [...new Set([...MALE_NAMES.map(n => n.official), 'Илья', 'Лука', 'Никита'])];
  FEMALE_NAMES.forEach(n => {
    Q.push({ key: `f_off_fam_${n.official}`, type: 'Official → Familiar', title: 'Как зовут друзья?', q: n.official,
      context: 'female name — what is the familiar form?', a: n.familiar, fact: n.fact });
    Q.push({ key: `f_fam_off_${n.familiar}_${n.official}`, type: 'Familiar → Official', title: 'Полное имя', q: n.familiar,
      context: 'female familiar name — what is the official form?', a: n.official, fact: n.fact });
  });
  MALE_NAMES.forEach(n => {
    Q.push({ key: `m_off_fam_${n.official}`, type: 'Official → Familiar', title: 'Как зовут друзья?', q: n.official,
      context: 'male name — what is the familiar form?', a: n.familiar, fact: n.fact });
    Q.push({ key: `m_fam_off_${n.familiar}_${n.official}`, type: 'Familiar → Official', title: 'Полное имя', q: n.familiar,
      context: 'male familiar name — what is the official form?', a: n.official, fact: n.fact });
  });
  fathers.forEach(name => {
    const f = PAT_FACTS[name] || {};
    const m = malePatronymic(name), w = femalePatronymic(name);
    Q.push({ key: `pat_m_${name}`, title: 'Отчество', q: name, context: "father's name — form the son's patronymic", a: m, fact: f.m });
    Q.push({ key: `pat_f_${name}`, title: 'Отчество', q: name, context: "father's name — form the daughter's patronymic", a: w, fact: f.f });
    Q.push({ key: `pat_decode_m_${name}`, title: 'Как зовут отца?', q: m, context: "patronymic — what is the father's name?", a: name, fact: f.decode });
    Q.push({ key: `pat_cross_mf_${name}`, title: 'Сын → дочь', q: m, context: "son's patronymic — what is the daughter's?", a: w, fact: f.mf });
    Q.push({ key: `pat_cross_fm_${name}`, title: 'Дочь → сын', q: w, context: "daughter's patronymic — what is the son's?", a: m, fact: f.fm });
  });
  FAMOUS.forEach(f => Q.push({ key: f.key, title: f.type === 'Literary figure' ? 'Герои книг' : 'Известные люди',
    q: f.q, context: f.context, a: f.a, fact: f.fact }));
  return Q;
}
