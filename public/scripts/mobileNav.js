var menuActive = true;

function toggleMenu() {
  hmenu = $('.hamburger');
  hlinks = $('.h-links');

  if (menuActive) {
    hmenu.removeClass('active');
    hlinks.addClass('active');
  } else {
    hmenu.addClass('active');
  }
  menuActive != menuActive;
}

function closeMenu() {
    hmenu = $('.hamburger');
    hlinks = $('.h-links');

    hmenu.addClass('active');
    hlinks.removeClass('active');
}