const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu +';
    nav.dataset.open = 'false';
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close −' : 'Menu +';
    nav.dataset.open = String(open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(); toggle.focus();
    }
  });
}
document.querySelectorAll('.copy-email').forEach(button => {
  button.addEventListener('click', async () => {
    const status = button.closest('.contact-email').querySelector('[role="status"]');
    try {
      await navigator.clipboard.writeText('eva.plajer@campus.lmu.de');
      button.textContent = 'Copied';
      status.textContent = 'Email address copied to clipboard.';
    } catch {
      status.textContent = 'Please copy the email address above, or select it to open your email app.';
    }
  });
});
document.querySelector('.print-button')?.addEventListener('click', () => window.print());
