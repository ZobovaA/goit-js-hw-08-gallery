import galleryItems from './gallery-items.js'
console.log(galleryItems)
const listEl = document.querySelector('.js-gallery');

function createEl(items){
const addImg = galleryItems.map(({ preview, original, description }, index) => {
    return `
    <li class="gallery__item">
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
</li>
`;


})
console.log(addImg[0])
.join(' ');
}

// listEl.insertAdjacentHTML('beforeend', addImg);



