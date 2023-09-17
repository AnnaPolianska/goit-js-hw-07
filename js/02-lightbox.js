import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")
function CreateMarkup(array){
     return array.map(({ description , original , preview }) => 
     `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
  </li>`
     ).join("")
}

gallery.addEventListener('click' , (event) => event.preventDefault())

gallery.insertAdjacentHTML("beforeend" , CreateMarkup(galleryItems))
const lightbox = new SimpleLightbox('.gallery  a', { captionsData : "alt" , captionDelay : 250 });


