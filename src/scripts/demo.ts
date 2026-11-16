// Replays a scripted demo (WhatsApp chat, AI call) by toggling the `.play` class.
// Demos inside the hero carousel are driven by the carousel; standalone ones loop while visible.
export function playDemo(el: Element) {
  el.classList.remove('play');
  void (el as HTMLElement).offsetWidth; // restart CSS animations
  el.classList.add('play');
}

export function initStandaloneDemos() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-demo]').forEach((el) => {
    if (el.closest('[data-carousel]') || el.dataset.demoInit) return;
    el.dataset.demoInit = '1';
    let timer: number | undefined;
    new IntersectionObserver(([e]) => {
      clearInterval(timer);
      if (!e.isIntersecting) return;
      playDemo(el);
      timer = window.setInterval(() => playDemo(el), Number(el.dataset.demo) || 12000);
    }, { threshold: 0.35 }).observe(el);
  });
}
