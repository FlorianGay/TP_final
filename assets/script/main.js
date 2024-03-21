let token = window.localStorage.getItem('tokenId')
console.log(token)
/* Slider */

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

let i = 0

function bannerSlide(index) {
  document.querySelector(
    '.banner-img'
  ).src = `../../assets/image/slideshow/${slides[index].image}`
  document.querySelector('.banner-img').setAttribute('alt', slides[index].alt)
}

function slideAuto() {
  i = (i + 1) % slides.length
  bannerSlide(i)
}

setInterval(slideAuto, 5000)
