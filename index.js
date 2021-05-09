import galleryItems from './gallery-items.js'

const listEl = document.querySelector('.js-gallery')
const lboxEl = document.querySelector('.js-lightbox')
const lightboxImgEl = document.querySelector('.lightbox__image')
const btnCloseEl = document.querySelector('.lightbox__button')

const addGalleryElement = galleryItems
  .map(({ preview, original, description }, index) => {
    return  `<li class="gallery__item">
   
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        data-index=${index}
        alt="${description}"
      />
   
  </li>`;
  })
  .join(' ')

listEl.insertAdjacentHTML('beforeend', addGalleryElement)
listEl.addEventListener('click', clicker)
function clicker(event) {
  if (event.target.src) {
    lboxEl.classList.add('is-open')
    console.log(event.target.src)
    lightboxImgEl.src = event.target.src
  }
}

function closePopup() {
  lboxEl.classList.remove('is-open')
  lightboxImgEl.src = ''
}
btnCloseEl.addEventListener('click', closePopup)
