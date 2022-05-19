import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${img.original}">
          <img 
            class="gallery__image" 
            src=${img.preview}
            data-source="${img.original}" 
            alt="${img.description}"
            >
        </a>
      </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

console.log(galleryItems);

const viewBigImg = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  let bigImgSrc = e.target.dataset.source;
  basicLightbox
    .create(
      `
      <img width="1280" height="854" src=${bigImgSrc}>
    `
    )
    .show();
};

gallery.addEventListener("click", viewBigImg);
