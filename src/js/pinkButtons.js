const overlay = document.querySelector('.overlay')

const openOverlayMessage = () => {
  const overlayMessage = document.querySelector('.overlay__message')
  if (overlayMessage.classList.contains('overlay__message--hidden')) {
    overlayMessage.classList.toggle('overlay__message--hidden')
    overlay.classList.toggle('overlay--hidden')
  }
}
const openOverlayCall = () => {
  const overlayCall = document.querySelector('.overlay__call')
  if (overlayCall.classList.contains('overlay__call--hidden')) {
    overlayCall.classList.remove('overlay__call--hidden')
    overlay.classList.remove('overlay--hidden')
  }
}
const openMenu = () => {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu--active')
}
const closeOverlay = () => {
  const overlayCall = document.querySelector('.overlay__call')
  const overlayMessage = document.querySelector('.overlay__message')
  const menu = document.querySelector('.menu')
  menu.classList.remove('menu--active')
  overlayMessage.classList.add('overlay__message--hidden')
  overlayCall.classList.add('overlay__call--hidden')
  overlay.classList.add('overlay--hidden')
}
document.addEventListener('click', (event) => {
  const { target } = event
  if (target.classList.contains('menu--active')){
    closeOverlay()
  }

  if (target.closest('.button--message')) openOverlayMessage()
  if (target.closest('.button--phone')) openOverlayCall()
  if (target.closest('.button--burger')) openMenu()
  if (target.classList.contains('button--close')) closeOverlay()
})
