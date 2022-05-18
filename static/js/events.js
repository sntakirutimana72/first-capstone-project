function toggleBodyOverflow() {
  $class($select('body'), 'no-overflow');
}

function toggleMobileMenu() {
  toggleBodyOverflow();
  alterHamburgerButton(this);
  $class($select('.nav-wrap'), 'nav-slide');
}

function alterHamburgerButton($this) {
  $class($this.children[0], 'bar-trigger'),
  $class($this.children[1], 'bar-trigger'),
  $class($this.children[2], 'bar-trigger');
}

$select('.hamburger-box')
  .addEventListener('click', toggleMobileMenu);
$selectAll('.nav-menu a').forEach(
  (node) => {}
);
