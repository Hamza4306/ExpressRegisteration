function getNestedValue(obj, path) {
  return path
    .split('.')
    .reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedValue(translations, key);
    if (val !== null) el.textContent = val;
  });
}

async function loadLang(lang) {
  try {
    const res = await fetch(`/static/locales/${lang}.json`);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    applyTranslations(data);
  } catch (err) {
    console.error('Failed to load translations:', err);
  }
}

function selectLang(lang) {
  localStorage.setItem('lang', lang);
  const base = window.location.href.split('?')[0];
  window.location.href = `${base}?lang=${lang}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const urlLang = new URLSearchParams(location.search).get('lang');
  const stored = localStorage.getItem('lang');
  
  let lang;
  if (urlLang) {
    lang = urlLang;
  } else if (stored) {
    lang = stored;
  } else {
    const nav = (navigator.language || navigator.userLanguage || 'de').toLowerCase();
    const base = nav.split(/[-_]/)[0];  
    lang = ['de','en','ro','it'].includes(base) ? base : 'de';
  }

  localStorage.setItem('lang', lang);

  const flagMap = { de:'de', en:'gb', ro:'ro', it:'it' };
  const textMap = { de: 'Deutsch', en: 'English', ro: 'Română', it: 'Italiano' };
  const img = document.getElementById('current-flag');
  const txt = document.getElementById('current-lang');
  if (img && flagMap[lang]) {
    img.src = `https://flagcdn.com/w20/${flagMap[lang]}.png`;
    img.alt = lang;
  }
  
  if(txt && textMap[lang]) {
	  txt.textContent = textMap[lang];
  }
  
  const img1 = document.getElementById('current-flag1');
  const txt1 = document.getElementById('current-lang1');
  if (img1 && flagMap[lang]) {
    img1.src = `https://flagcdn.com/w20/${flagMap[lang]}.png`;
    img1.alt = lang;
  }
  
  if(txt1 && textMap[lang]) {
	  txt1.textContent = textMap[lang];
  }

  loadLang(lang);
  
  const MODAL_KEY = 'langModalShown';
  if (!localStorage.getItem(MODAL_KEY)) {
    const langModalEl = document.getElementById('languageModal');
    if (langModalEl) {
      const modalFlag = document.getElementById('modal-current-flag');
      const modalTxt  = document.getElementById('modal-current-lang');
      if (modalFlag) {
        modalFlag.src = `https://flagcdn.com/w20/${flagMap[lang]}.png`;
        modalFlag.alt = textMap[lang];
      }
      if (modalTxt) {
        modalTxt.textContent = textMap[lang];
      }

      const bsModal = new bootstrap.Modal(langModalEl);
      bsModal.show();
      localStorage.setItem(MODAL_KEY, 'true');
    }
  }
});
