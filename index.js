const d = document
const $btn = d.getElementById('btn-burguer')
const $menu = d.querySelector('.menu-items')

$btn.addEventListener('click', () => {
  $menu.classList.toggle('isActive')
})
