let token = window.localStorage.getItem('tokenId')
const loginBtn = document.querySelector('.login-btn')
const headerBtn = document.querySelector('.header-btn')
const navMenu = document.querySelector('nav ul')
let appear = false


if (token) {
  genererAdminElement()
}

function genererAdminElement() {
  loginBtn.innerHTML = 'Logout'

  // deconnexion
  loginBtn.addEventListener('click', function () {
    window.localStorage.removeItem('tokenId')
    window.location.href = '../../pages/login.html'
  })
}


// Gestion menu mobile
function menuAppear() {
  
}

headerBtn.addEventListener('click', function() {
    
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
