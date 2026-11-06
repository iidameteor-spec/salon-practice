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
