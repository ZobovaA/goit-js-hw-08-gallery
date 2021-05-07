import galleryItems from "./gallery-items.js";

const elementsUl = document.querySelector('.js-gallery');
const addGalleryElements = galleryItems
    .map(({ preview, original, description }, index) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index=${index}
      alt="${description}"
    />
  </a>
</li>`;
})
.join(' ');

elementsUl.insertAdjacentHTML('afterbegin', addGalleryElements);
   