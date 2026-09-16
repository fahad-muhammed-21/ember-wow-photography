document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });
  }

  // solidify transparent (on-dark) header after scrolling past hero
  if (header && header.classList.contains('on-dark')) {
    var threshold = 90;
    window.addEventListener('scroll', function () {
      if (window.scrollY > threshold) {
        header.classList.add('is-solid');
        header.classList.remove('on-dark');
      } else {
        header.classList.remove('is-solid');
        header.classList.add('on-dark');
      }
    });
  }

  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
});
