const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

function setMenuOpen(isOpen) {
  if (!menuToggle || !nav) return;
  nav.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

menuToggle?.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = !nav?.classList.contains('open');
  setMenuOpen(isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('open')) return;
  const target = event.target;
  if (target instanceof Node && !nav.contains(target) && !menuToggle?.contains(target)) {
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    setMenuOpen(false);
    menuToggle?.focus();
  }
});