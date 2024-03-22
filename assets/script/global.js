const headerBtn = document.querySelector('.header-btn')
const navMenu = document.querySelector('nav ul')
const loginBtn = document.querySelector('.login-btn')
let token = window.localStorage.getItem('tokenId')

let appear = false

window.addEventListener('load', function () {
  if (window.innerWidth > 758) {
    document.getElementsByTagName('main')[0].style.marginTop =
      document.getElementsByTagName('header')[0].offsetHeight + 'px'
  }
})

// Gestion menu mobile
headerBtn.addEventListener('click', function () {
  if (appear === false) {
    navMenu.classList.remove('disappear')
    navMenu.classList.add('appear')
    appear = true
  } else {
    navMenu.classList.remove('appear')
    navMenu.classList.add('disappear')
    appear = false
  }
})

// deconnexion
  loginBtn.addEventListener('click', function () {
    window.localStorage.removeItem('tokenId')
    window.location.href = '../../pages/login.html'
    loginBtn.innerHTML = 'Login'
  })

if (token) {
  loginBtn.innerHTML = 'Logout'
}