let token = window.localStorage.getItem('tokenId')
const loginBtn = document.querySelector('.login-btn')
const headerBtn = document.querySelector('.header-btn')
const navMenu = document.querySelector('nav ul')
let appear = false
const slides = [
  {
    image: 'slide_1.jpg',
    alt: 'Photo de barque dans un lac magnifique',
  },
  {
    image: 'slide_2.jpg',
    alt: "Photo d'un pont en bois",
  },
  {
    image: 'slide_3.jpg',
    alt: 'Photo de champ de fleur devant une montagne enneigé',
  },
]

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

/* Slider */
function bannerSlide(index) {
  document.querySelector(
    '.banner-img'
  ).src = `../../assets/image/slideshow/${slides[index].image}`
  document.querySelector('.banner-img').setAttribute('alt', slides[index].alt)
}

function slideAuto() {
  let i = 0
  i = (i + 1) % slides.length
  bannerSlide(i)
}

setInterval(slideAuto, 5000)

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
