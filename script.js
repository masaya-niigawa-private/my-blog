// モバイルメニュー開閉
const toggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
const links = document.getElementById('siteNav');

if (toggle && nav && links) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // メニュー項目クリックで閉じる
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 読了率バー
const bar = document.getElementById('readingBar');
const updateBar = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = `${progress}%`;
};
window.addEventListener('scroll', updateBar);
window.addEventListener('resize', updateBar);
updateBar();

// スクロール出現（IntersectionObserver）
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
