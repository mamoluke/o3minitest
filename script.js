// DOM読み込み完了後の処理
document.addEventListener("DOMContentLoaded", function() {
  // 言語切替のデモ処理
  const langLinks = document.querySelectorAll('.language a');
  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.textContent;
      alert(lang + " language selected. (デモ)");
      // 実際の言語切替処理を実装する場合はここに記述
    });
  });

  // ヒーローテキストのフェードイン（スクロール時などの演出が必要ならIntersectionObserver等で実装）
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    // ページ読み込み後、アニメーションをトリガー
    el.style.opacity = 1;
  });
});
