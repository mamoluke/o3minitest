// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
  // ハンバーガーメニューのトグル処理
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // スクロール時にフェードインアニメーションを適用（IntersectionObserver利用）
  const animateElements = document.querySelectorAll('.animate-on-scroll');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach(el => {
    observer.observe(el);
  });
});
