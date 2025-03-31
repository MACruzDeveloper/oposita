import '../scss/main.scss'

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)


// toggle menu mobile
const menu = document.querySelector('.header_nav');
const btnMenu = document.querySelector('.btn_nav');

btnMenu.addEventListener('click', (e) => {
  e.preventDefault()

  if (window.getComputedStyle(menu).display === 'none') {
    menu.classList.add('header_nav--open')
  } else  {
    menu.classList.remove('header_nav--open')
  }
})


// Add animation to skills cards
window.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.skills_item--card')

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
      else {
        entry.target.classList.remove('visible')
      }
    })
  })

  if (!isMobile){
    cards.forEach(el => {
      observer.observe(el)
    })
  }
})
