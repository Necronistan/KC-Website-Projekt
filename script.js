const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const cupLinks = document.querySelectorAll('.cup-nav a');

cupLinks.forEach((link) => link.addEventListener('click', () => {
  cupLinks.forEach((item) => item.classList.remove('active'));
  link.classList.add('active');
}));

document.querySelectorAll('.group-switcher').forEach((switcher) => {
  const buttons = switcher.querySelectorAll('[data-group-panel]');
  const panels = document.querySelectorAll('.group-panel');

  buttons.forEach((button) => button.addEventListener('click', () => {
    const targetId = button.dataset.groupPanel;

    buttons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });
  }));
});
