import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (img) =>
      `<a class="gallery__item" href="${img.original}">       
        <img 
          class="gallery__image" 
          src=${img.preview}          
          alt="${img.description}"
          >
      </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

console.log(galleryItems);

let lightbox = new SimpleLightbox(".gallery a", { 
  captionsData: "alt",
  captionDelay: 250,
});
