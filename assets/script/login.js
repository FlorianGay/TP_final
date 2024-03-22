const loginForm = document.querySelector('.login-form')

function genererToken() {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 25; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }
  return result
}

async function fetchLogin() {
  const mail = document.querySelector('#mail').value
  const password = document.querySelector('#password').value

  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/FlorianGay/TP_final/main/data/login.json'
    )
    const data = await response.json()
    const user = data[0]
    console.log(user)
    if (user.email === mail && user.password === password) {
      const token = genererToken()
      window.localStorage.setItem('tokenId', token)
      window.location.href = '../../index.html'
    } else {
      const errorMessage = document.querySelector('.error')
      errorMessage.style.display = 'flex'
    }
  } catch (error) {
    console.log(error)
  }
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  await fetchLogin()
})
