import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")
function CreateMarkup(array){
     return array.map(({ description , original , preview }) => 
     `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`
     ).join("")

}
gallery.insertAdjacentHTML("beforeend" , CreateMarkup(galleryItems))


gallery.addEventListener('click', handleClick);
function handleClick(event){
    event.preventDefault()
    if(event.target === event.currentTarget){
        return ;
    }
    const ourImage = event.target.closest(".gallery__link")
    const imageLink = ourImage.href
    
    



const instance = basicLightbox.create(`
 <img src="${imageLink}" width="800" height="600">`)

instance.show()

document.addEventListener('keydown', onEscape)
function onEscape(event){
    if(basicLightbox.visible() && event.code === "Escape"){
        instance.close()
    }
    document.removeEventListener('keydown' , onEscape)
 };

}

