window.addEventListener('load', (event) => {
  let galeryModal = document.getElementById('galery-modal')
  let galeryModalImg = document.getElementById('galery-modal-img')
  let close = document.getElementById('close')
  let prev = document.getElementById('prev')
  let next = document.getElementById('next')
  let topics = document.getElementsByClassName('topic')

  function loadeImg(pSrc) {
    galeryModalImg.src = pSrc
  }

  function openModal(pElement) {
    galeryModal.style.display = 'block'
    loadeImg(pElement.children[0].children[0].src)
  }

  function closeModal() {
    galeryModal.style.display = 'none'
  }

  function direction(pWay) {
    console.log(pWay)
  }

  function addEvent() {
    // events for topic
    for (let i = 0; i < topics.length; i++) {
      // console.log(topics[i]);
      topics[i].addEventListener('click', function (pEvent) {
        pEvent.preventDefault()
        openModal(topics[i])
      })
    }
    // events for modal
    close.addEventListener('click', function (pEvent) {
      pEvent.preventDefault()
      closeModal()
    })
    prev.addEventListener('click', function (pEvent) {
      pEvent.preventDefault()
      direction(false)
    })
    next.addEventListener('click', function (pEvent) {
      pEvent.preventDefault()
      direction(true)
    })
  }
  addEvent()
})
