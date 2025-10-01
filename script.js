(() => {
  const toggleButton = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggleButton || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.hidden = false;
    toggleButton.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClickOutside, { capture: true });
  };

  const closeMenu = () => {
    mobileMenu.hidden = true;
    toggleButton.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('click', onClickOutside, { capture: true });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') closeMenu();
  };

  const onClickOutside = (e) => {
    const isInsideMenu = mobileMenu.contains(e.target);
    const isToggle = toggleButton.contains(e.target);
    if (!isInsideMenu && !isToggle) closeMenu();
  };

  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });
})();


