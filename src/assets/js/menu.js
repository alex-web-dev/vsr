const $menu = document.querySelector('.menu');
if ($menu) {
  const $menuToggle = $menu.querySelector('.menu-toggle');
  $menuToggle.addEventListener('click', () => toggle($menu, $menuToggle));

  $menu.addEventListener('click', e => {
    if ($menu === e.target && $menu.classList.contains('menu--active')) {
      close();
    }
  });
}

function toggle($menu, $menuToggle) {
  $menu?.classList.toggle('menu--active');
  $menuToggle.classList.toggle('menu-toggle--active');
  document.body.classList.toggle('body--lock')
}

function close($menu, $menuToggle) {
  $menu?.classList.remove('menu--active');
  $menuToggle.classList.remove('menu-toggle--active');
  document.body.classList.remove('body--lock')
}