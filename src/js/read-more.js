const showMore = document.querySelector('.about-csp__button')
aboutCsp = document.querySelector('.about-csp__text')

showMore.addEventListener('click', () => {
  aboutCsp.classList.toggle('about-csp__text--all')
})
