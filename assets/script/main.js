let token = window.localStorage.getItem('tokenId')
const loginBtn = document.querySelector('.login-btn')
const headerBtn = document.querySelector('.header-btn')
const navMenu = document.querySelector('nav ul')
const sectionPresentation = document.getElementById('presentation-title')
let appear = false


if (token) {
  genererAdminElement()
}

function genererAdminElement() {
  loginBtn.innerHTML = 'Logout'

  // création bouton de modification
    const presentationEdition = document.createElement('button')
    presentationEdition.className ='btn-modif'
    presentationEdition.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifier`
    sectionPresentation.appendChild(presentationEdition)

  // deconnexion
  loginBtn.addEventListener('click', function () {
    window.localStorage.removeItem('tokenId')
    window.location.href = '../../pages/login.html'
  })
}


// Gestion menu mobile
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


window.addEventListener("load", function(){
  if(window.innerWidth > 758){
    document.getElementsByTagName("main")[0].style.marginTop = document.getElementsByTagName("header")[0].offsetHeight+"px";
  }
});