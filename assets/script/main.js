let token = window.localStorage.getItem('tokenId')
console.log(token)

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

const loginBtn = document.querySelector('.login-btn')

if (token) {
  genererAdminElement()
}

function genererAdminElement() {
  loginBtn.innerHTML = 'Logout'

  // deconnexion
  loginBtn.addEventListener('click', function() {
    window.localStorage.removeItem('tokenId');
    window.location.href='../../pages/login.html'
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
