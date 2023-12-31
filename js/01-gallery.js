import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem(item) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.setAttribute('data-source', item.original);
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

function openLightbox(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const source = event.target.dataset.source;
    const description = event.target.alt;
    const instance = basicLightbox.create(
      `<img src="${source}" alt="${description}">`
    );
    instance.show();
  }
}

galleryContainer.addEventListener('click', openLightbox);

const galleryItemsMarkup = galleryItems.map(createGalleryItem);
galleryContainer.append(...galleryItemsMarkup);


console.log(galleryItems);