let token = window.localStorage.getItem('tokenId')
const loginBtn = document.querySelector('.login-btn')
const headerBtn = document.querySelector('.header-btn')
const navMenu = document.querySelector('nav ul')
const sectionPresentation = document.getElementById('presentation-title')
const btnCloseModal = document.querySelector('.close-modal')
const sectionModal = document.querySelector('.modal-contain')
const modalContent = document.querySelector('.bloc-modal')
const modifForm = document.querySelector('.modal-form')
const addFileContainer = document.querySelector('.add-file')
const filePreviewContainer = document.querySelector('.file-preview')
const filePreview = document.querySelector('.preview')
const btnModif = document.querySelector('.btn-modif')
const addFileInput = document.getElementById('picture')
let appear = false

function genererAdminElement() {
  loginBtn.innerHTML = 'Logout'

  // création bouton de modification
  const presentationEdition = document.createElement('button')
  presentationEdition.className = 'btn-modif'
  presentationEdition.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Modifier`
  sectionPresentation.appendChild(presentationEdition)
  presentationEdition.addEventListener('click', openModale)

  // deconnexion
  loginBtn.addEventListener('click', function () {
    window.localStorage.removeItem('tokenId')
    window.location.href = '../../pages/login.html'
  })
}

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


// Modale
const openModale = function () {
  sectionModal.style.display = null
  modalContent.style.display = 'flex'
  modalContent.style.background = 'rgba(0,0,0, 0.3)'
  modal = sectionModal
}

const closeModale = function () {
  if (modal === null) return
  modalContent.style.display = 'none'
  modalContent.style.background = 'rgba(0, 0, 0)'
  cleanForm()
  modal = null
  
}

btnCloseModal.addEventListener('click', closeModale)

function cleanForm() {
  modifForm.reset()
  addFileContainer.style.display = null
  filePreviewContainer.style.display = null
  filePreview.setAttribute('src', '')
}

// Preview image ajouter
addFileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        addFileContainer.style.display = 'none';
        filePreviewContainer.style.display = 'block';
        reader.addEventListener('load', function () {
            filePreview.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
    } else {
        addFileContainer.style.display = null;
        filePreviewContainer.style.display = null;
        filePreview.setAttribute('src', '');
    }
});

if (token) {
  genererAdminElement()
}


window.addEventListener("load", function(){
  if(window.innerWidth > 758){
    document.getElementsByTagName("main")[0].style.marginTop = document.getElementsByTagName("header")[0].offsetHeight+"px";
  }
});

