document.addEventListener('click', (event) => {
  const {target} = event
  if (!target.classList.contains('repair-section__button')) return
  if(target.closest('.repair-section')) {
    const parentSection = target.closest('.repair-section');
    const list = parentSection.querySelector('.repair-section__list');
    list.classList.toggle('repair-section__list--all');
    target.classList.toggle('active')
    updateButtonText(target)
  }
})
function updateButtonText(button) {
  const showText = "Показать все";
  const hideText = "Скрыть";
  button.textContent = button.textContent === showText ? hideText : showText;
}
