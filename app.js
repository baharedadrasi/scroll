// show links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// show date
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

// fixed navbar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const navHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navHeight) {
    navbar.classList.add('nav-fixed');
  } else {
    navbar.classList.remove('nav-fixed');
  }
  if (window.scrollY > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// scroll
const Links = document.querySelectorAll('.scroll-link');

Links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const navHeight = navbar.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    const id = e.currentTarget.getAttribute('href').slice(1);

    const element = document.getElementById(id);
    let position = element.offsetTop - navHeight;

    if (!navbar.classList.contains('nav-fixed')) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + linksHeight;
    }
    scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
