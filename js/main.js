// ===== スマホ用メニューの開け閉め =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

function setMenuOpen(open) {
  nav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));   // 読み上げソフトにも開閉を伝える
  menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(!nav.classList.contains('is-open'));
});

// Escキーでも閉じられるようにする
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenuOpen(false);
});

// ===== スクロール表示 =====
// スクロールして要素が画面に入ったら「is-visible」を付けて、CSSのアニメーションを動かす
// IntersectionObserver：要素が画面に入ったことを知らせてくれるブラウザ標準の機能
const targets = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);   // 一度表示したら監視をやめる（何度も動かさない）
    }
  });
}, { threshold: 0.2 });                    // 要素の20%が見えたら発動

targets.forEach((el) => observer.observe(el));
