// ============================================================
// slideshow.js — TV1: Banner slideshow tự động
// Chạy tự động 5s, có nút prev/next, dot indicator, swipe
// ============================================================
(function () {
  let current = 0;
  let total   = 0;
  let timer   = null;
  const INTERVAL = 5000;

  function init() {
    const slides = document.querySelectorAll('.slide');
    total = slides.length;
    if (total === 0) return;

    // Tạo dots
    const dotsWrap = document.getElementById('slide-dots');
    if (dotsWrap) {
      slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'slide-dot' + (i === 0 ? ' active' : '');
        btn.setAttribute('aria-label', `Slide ${i + 1}`);
        btn.addEventListener('click', () => { goTo(i); restartTimer(); });
        dotsWrap.appendChild(btn);
      });
    }

    // Swipe support (mobile)
    const hero = document.querySelector('.hero-section');
    if (hero) {
      let startX = 0;
      hero.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      hero.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { window.changeSlide(diff > 0 ? 1 : -1); }
      });
    }

    startTimer();
  }

  function goTo(index) {
    const slides = document.querySelectorAll('.slide');
    const dots   = document.querySelectorAll('.slide-dot');
    if (slides.length === 0) return;
    
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');

    current = ((index % total) + total) % total;

    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function restartTimer() { startTimer(); }

  // Expose ra global để HTML dùng onclick
  window.changeSlide = function (dir) {
    goTo(current + dir);
    restartTimer();
  };

  document.addEventListener('DOMContentLoaded', init);
})();
