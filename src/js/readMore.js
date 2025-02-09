const readMore = document.querySelector('.about-csp__button')
aboutCsp = document.querySelector('.about-csp__text')


readMore.addEventListener('click', () => {
  aboutCsp.classList.toggle('about-csp__text--all')
  readMore.classList.toggle('active')
  readMore.textContent = readMore.textContent === "Читать далее" ? "Скрыть" : "Читать далее";
})

