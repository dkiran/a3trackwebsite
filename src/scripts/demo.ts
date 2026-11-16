// Replays a scripted demo (WhatsApp chat, AI call).
// Two mechanisms, both restarted by playDemo():
//  - CSS: the `.play` class restarts delay-based CSS animations.
//  - Timeline: elements with data-at="ms" get the `.on` class at that time (and lose it at data-off="ms").
// Demos inside the hero carousel are driven by the carousel; standalone ones loop while visible.
const timers = new WeakMap<Element, number[]>();
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function playDemo(el: Element) {
  (timers.get(el) ?? []).forEach(clearTimeout);
  const steps = [...el.querySelectorAll<HTMLElement>('[data-at]')];
  if (reduced()) {
    // No motion: show the finished conversation.
    steps.forEach((s) => s.classList.toggle('on', !s.dataset.off));
    el.classList.add('play');
    return;
  }
  steps.forEach((s) => s.classList.remove('on'));
  el.classList.remove('play');
  void (el as HTMLElement).offsetWidth; // restart CSS animations
  el.classList.add('play');
  const ids: number[] = [];
  steps.forEach((s) => {
    ids.push(window.setTimeout(() => s.classList.add('on'), Number(s.dataset.at)));
    if (s.dataset.off) ids.push(window.setTimeout(() => s.classList.remove('on'), Number(s.dataset.off)));
  });
  timers.set(el, ids);
}

export function initStandaloneDemos() {
  document.querySelectorAll<HTMLElement>('[data-demo]').forEach((el) => {
    if (el.closest('[data-carousel]') || el.dataset.demoInit) return;
    el.dataset.demoInit = '1';
    if (reduced()) return playDemo(el);
    let timer: number | undefined;
    new IntersectionObserver(([e]) => {
      clearInterval(timer);
      if (!e.isIntersecting) return;
      playDemo(el);
      timer = window.setInterval(() => playDemo(el), Number(el.dataset.demo) || 12000);
    }, { threshold: 0.35 }).observe(el);
  });
}
