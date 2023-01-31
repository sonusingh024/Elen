const humberger = document.querySelector('.humberger')
const sidebar = document.querySelector('.sidebar')
const width = document.querySelector('.w-75')

humberger.addEventListener('click', () => {
  sidebar.classList.toggle('ml-0')
  width.classList.toggle('ml-270')
})

document.getElementById('menu-toggle').addEventListener('click', function () {
  document.body.classList.toggle('nav-open')
})
