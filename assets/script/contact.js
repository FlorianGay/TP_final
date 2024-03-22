const contactForm = document.querySelector('.contact-form')
const validationMessage = document.querySelector('.validation-message p')

contactForm.addEventListener('submit', (event) => {
  event.preventDefault()
  validationMessage.style.display = 'flex'
  contactForm.reset()
  setTimeout(() => {
    validationMessage.style.display = 'none'
  }, 3000)
})
