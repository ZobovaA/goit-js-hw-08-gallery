import galleryItems from './gallery-items.js'

const listEl = document.querySelector('.js-gallery')
const lboxEl = document.querySelector('.js-lightbox')
const lightboxOverlayEl = document.querySelector('.lightbox__overlay')
const lightboxImageEl = document.querySelector('.lightbox__image')
const buttonCloseEl = document.querySelector('.lightbox__button')

const addGalleryElement = galleryItems
  .map(({ preview, original, description }, index) => {
    return `<li class="gallery__item">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index=${index}
      alt="${description}"
    />
 </li>`
  })
  .join(' ')
//1
listEl.insertAdjacentHTML('beforeend', addGalleryElement)
//2
listEl.addEventListener('click', clicker)
function clicker(event) {
  if(event.target.src){
    lboxEl.classList.add('is-open')
    console.log(event.target.src)
    lightboxImageEl.src = event.target.src
  }

}

function closePopup() {
  lboxEl.classList.remove('is-open') 
  lightboxImageEl.src = ''
}
buttonCloseEl.addEventListener('click', closePopup)