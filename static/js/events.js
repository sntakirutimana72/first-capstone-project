function toggleBodyOverflow() {
  $class($select('body'), 'no-overflow');
}

function alterHamburgerButton($this) {
  $class($this.children[0], 'bar-trigger');
  $class($this.children[1], 'bar-trigger');
  $class($this.children[2], 'bar-trigger');
}

function toggleMobileMenu($this) {
  $class($select('.nav-wrap'), 'nav-slide');
  alterHamburgerButton($this);
  toggleBodyOverflow();
}

const hamburger = $select('.hamburger-box');
hamburger.addEventListener('click', () => toggleMobileMenu(hamburger));

$selectAll('.nav-wrap a').forEach(
  (node) => {
    node.onclick = () => toggleMobileMenu(hamburger);
  },
);
